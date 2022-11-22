import { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

import Button from "../../Components/Button/Button";
import HeaderImg from "../../Components/Header/Header";
import Input from "../../Components/Input/input";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTourById } from "../Tour/tour-action";
import Footer from "../../Components/Footer";

function BookingPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [BookingData, setBookingData] = useState([]);
  const [singleRoomData, setSingleRoomDaa] = useState([]);
  const [agree, setAgree] = useState(false);
  const [tourID, setTourID] = useState(null);
  const [time, setTime] = useState(false);

  const { tourData, isLoading } = useSelector((state) => state.tour);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      dispatch(
        getTourById({
          id: tourID,
        })
      );
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [dispatch, tourID]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/booking/${id}/`)
        .then((response) => response.json())
        .then((data) => setBookingData(data));
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [id]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      setSingleRoomDaa(BookingData.single_room);
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [BookingData]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      setTourID(BookingData.tour);
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [BookingData]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      const timer = setTimeout(() => {
        setTime(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      regarding: "",
      tour: "",
      travelDate: "",
      participants: "",
      singleRooms: "",
      otherInformation: "",
    },

    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_1qicaa5",
          "template_4zt1kej",
          values,
          "N8cGP1mMl7m41xPY4"
        )
        .then(
          (result) => {
            alert("SUCCESS!", result.text);
          },
          (error) => {
            alert("FAILED...", error);
          }
        );
      // resetForm({
      //   values: {
      //     firstName: "",
      //     lastName: "",
      //     phone: "",
      //     email: "",
      //     regarding: "",
      //     participants: "",
      //     singleRooms: "",
      //     otherInformation: "",
      //   },
      // });

      // resetForm();
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <HeaderImg description={"Booking"} /> */}
      <MainSection>
        <LeftSide>
          <TitleDiv>
            <h2>Buchungs Formular</h2>
          </TitleDiv>
          <FormsDiv>
            <form id="" onSubmit={formik.handleSubmit}>
              <FormUpper>
                <Input
                  placeholder={"Vorname"}
                  name={"firstName"}
                  type={"text"}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Input
                  placeholder={"Nachname"}
                  name={"lastName"}
                  type={"text"}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Input
                  placeholder={"Telefonnummer"}
                  name={"phone"}
                  type={"number"}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Input
                  placeholder={"E-mail"}
                  name={"email"}
                  type={"email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormUpper>
              <FormDown>
                <Input
                  placeholder={"Betreff"}
                  name={"regarding"}
                  type={"text"}
                  value={formik.values.regarding}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {tourData.Tour && time ? (
                  <>
                    <label className="lab" htmlFor="tour">
                      tour: {tourData.Tour.title}
                    </label>
                    <Input
                      className={"inp"}
                      name={"tour"}
                      id={"tour"}
                      type={"checkBox"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={tourData.Tour.title}
                    />
                  </>
                ) : (
                  <div>Loading...</div>
                )}

                {BookingData && time ? (
                  <>
                    <label className="lab" htmlFor="travelDate">
                      Reisetermine:{" "}
                      {`${BookingData.startDate} -- ${BookingData.endDate}`}
                    </label>
                    <Input
                      className={"inp"}
                      name={"travelDate"}
                      id={"travelDate"}
                      type={"checkBox"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={`${BookingData.startDate} --- ${BookingData.endDate}`}
                    />
                  </>
                ) : (
                  <div>Loading ...</div>
                )}

                <textarea
                  placeholder="z.B. ich bin Vegetarianer(in),ich trinke keinen Alkohol, etc."
                  name={"otherInformation"}
                  value={formik.values.otherInformation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <label htmlFor="participants">Anzahl Reseiteilnehmer</label>

                <Input
                  value={formik.values.participants}
                  type={"number"}
                  placeholder={"Anzahl Reseiteilnehmer"}
                  name="participants"
                  id="participants"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <Input
                  placeholder={"Anzahl Einzelzimmer"}
                  name={"singleRooms"}
                  type={"number"}
                  value={formik.values.singleRooms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <fieldset>
                  <legend>Important Information:</legend>

                  {singleRoomData && time ? (
                    <>
                      <p>{singleRoomData.description}</p>
                      <p>{singleRoomData.price}</p>
                    </>
                  ) : (
                    <div>Loading...</div>
                  )}

                  <h3>
                    Single rooms are only available to a limited extent, we
                    recommend booking early!
                  </h3>

                  <span>*please fill out these fields.</span>
                </fieldset>

                <div>
                  <Input
                    name={"terms"}
                    type={"checkBox"}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <label htmlFor="terms">
                    <Link to={"/term"}>Agree to Terms and Conditions</Link>
                  </label>
                </div>
                {agree && time ? (
                  <Button type={"submit"}>Submit</Button>
                ) : (
                  <MainButton type={"submit"}>Not Allowed</MainButton>
                )}
              </FormDown>
            </form>
          </FormsDiv>
        </LeftSide>

        <RightSide>
          <TitleDiv>
            <p>Das haben Sie ausgesucht: ↴</p>
          </TitleDiv>

          {BookingData && time ? (
            <FormsDiv key={BookingData.id}>
              {tourData.Tour && time ? (
                <p>
                  Teilnehmeranzahl :{" "}
                  <span>{tourData.Tour.maxParticipants}</span> -{" "}
                  <span>{tourData.Tour.minParticipants}</span>
                </p>
              ) : (
                <div>Loading...</div>
              )}
              <p>
                Termin: <span>{BookingData.startDate}</span> ----
                <span>{BookingData.endDate} </span>
              </p>
              <p>
                Preis: EUR <span>{BookingData.price}</span>
              </p>
            </FormsDiv>
          ) : (
            <div>Loading...</div>
          )}
        </RightSide>
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default BookingPage;

const MainSection = styled.section`
  width: 100%;
  min-height: 130vh;
  max-height: min-content;
  background-color: #cfeaf6;
  display: flex;
  margin-top: 3em;
  @media (max-width: 1185px) {
    flex-direction: column-reverse;
    align-items: center;
    height: 190vh;
  }
  @media (max-height: 980px) {
    height: max-content;
  }
`;
const LeftSide = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1555px) {
    width: 70%;
  }
  @media (max-width: 1185px) {
    width: 100%;
    height: 80%;
  }
`;
const TitleDiv = styled.div`
  width: 90%;
  height: 10%;
  @media (max-width: 1555px) {
    width: 90%;
  }
  h2 {
    margin: 0;
    font-size: 2rem;
    margin-top: 1.5em;
  }
`;
const FormsDiv = styled.div`
  width: 90%;
  min-height: 90%;
  height: max-content;
  span {
    font-style: oblique;
    color: red;
  }
  @media (max-width: 1555px) {
    width: 90%;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    height: max-content;
  }
`;
const FormUpper = styled.div`
  width: 100%;
  height: 25%;
  input,
  select {
    width: 40%;
    height: 4rem;
    margin: 2.5em;
    @media (max-width: 820px) {
      width: 80%;
    }
  }
`;
const FormDown = styled.div`
  width: 100%;
  min-height: 75%;
  height: max-content;
  display: flex;
  flex-direction: column;
  .lab {
    width: max-content;
  }
  .inp {
    width: 25px;
    height: 25px;
    margin: 0;
    align-self: center;
    z-index: 2;
    @media (max-width: 900px) {
      align-self: flex-end;
      margin-right: 8em;
    }
    @media (max-width: 565px) {
      margin-right: 0;
    }
    @media (max-width: 455px) {
      align-self: flex-start;
      margin: 3em auto;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input {
    width: 80%;
    height: 4rem;
    margin: 2.5em;
    &[type="checkBox"] {
      width: 25px;
      height: 25px;
      margin: 0;
    }
    @media (max-width: 1185px) {
      height: 4rem;
    }
  }
  select {
    width: 80%;
    height: 4rem;
    margin: 2.5em;
    @media (max-width: 1185px) {
      height: 4rem;
    }
  }
  label {
    margin-left: 2.5em;
    transform: translateY(1.5em);
    color: brown;
    &:last-child {
      margin: 0;
      transform: translate(1em, 0);
    }
    @media (max-width: 385px){
      font-size: 0.85rem;
    }
  }
  textarea {
    width: 80%;
    height: 10rem;
    margin: 2.5em;
    resize: none;
    outline: none;
  }
  button {
    align-self: center;
    margin-bottom: 2em;
    @media (max-width: 1185px) {
      height: 4rem;
    }
  }
  div {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: black;
    }
  }
  fieldset {
    text-align: justify;
    p {
      font-style: italic;
      color: #414141;
    }
    h3 {
      font-style: italic;
    }
  }
`;
const RightSide = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1555px) {
    width: 30%;
  }
  @media (max-width: 1185px) {
    width: 100%;
    height: 20%;
  }
  p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5em;
  }
`;
const MainButton = styled.button`
  width: 7rem;
  height: 2.5rem;
  background-color: #808080;
  border: 1px solid black;
  border-radius: 10px;
  margin: ${(props) => props.margin};
  cursor: not-allowed;
  pointer-events: none;
`;
