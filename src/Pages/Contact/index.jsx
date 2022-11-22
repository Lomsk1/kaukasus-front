import { useFormik } from "formik";
import { Fragment } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/input";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import Footer from "../../Components/Footer";

import HeaderImgStatic from "../../Components/Header/HeaderVol2";
import headerImage from "../../assets/images/Kontakt.jpg";

const contactValidationSchema = yup.object().shape({
  firstName: yup
    .string("First name must be a string.")
    .matches(/^[a-z$A-Z]*$/, "First name must contain only words."),
  lastName: yup
    .string("Last name must be a string.")
    .matches(/^[a-z$A-Z]*$/, "Last name must contain only words."),
  email: yup.string("Email must be a string.").email("Email must be a string."),
  number: yup.string("Phone must be a number"),
  regarding: yup.string("Regarding must be a string."),
  someText: yup.string("Text must be a string"),
});

function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      regarding: "",
      someText: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_umwqlh9",
          "template_umvlr8d",
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
      resetForm();
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
      <HeaderImgStatic description={"KONTAKT"} image={headerImage} />
      <MainSection>
        <LeftDiv>
          <UpperLeftDiv>
            <h1>Nachricht Senden</h1>
          </UpperLeftDiv>
          <DownLeftDiv>
            <form id="contact-form" onSubmit={formik.handleSubmit}>
              <div>
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
              </div>

              <div>
                <Input
                  placeholder={"E-mail"}
                  name={"email"}
                  type={"email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Input
                  placeholder={"Telefonnummer"}
                  name={"number"}
                  type={"number"}
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div>
                <Input
                  className="last"
                  placeholder={"Betreff"}
                  name={"regarding"}
                  type={"text"}
                  value={formik.values.regarding}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <textarea
                placeholder="z.B. ich bin Vegetarianer(in),ich trinke keinen Alkohol, etc."
                name={"someText"}
                value={formik.values.someText}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Button type={"submit"}>Submit</Button>
            </form>
          </DownLeftDiv>
        </LeftDiv>
        <RightDiv>
          <address>
            <div className="head">Tel: +995 599 495 595</div>
            <div className="middle">Mail: reisezielkaukasus@gamil.com</div>
            <div className="down">
              Address: M.Khergianis St.N14, Lentekhi, 2900
            </div>
          </address>
        </RightDiv>
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default Contact;

const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #cfeaf6;
  /* margin-top: 5em; */
    margin-top: 2em;

  @media (max-width: 1366px) {
    flex-direction: column;
    height: max-content;
  }
`;
const LeftDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
const UpperLeftDiv = styled.div`
  width: 100%;
  height: 20%;
  font-size: 2rem;
  text-align: center;
  h1 {
    margin: 0;
    color: #a52a2a;
  }
`;
const DownLeftDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  form {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
    @media (max-width: 1325px) {
      div {
        width: min-content;
      }
    }
    @media (max-width: 670px) {
      div {
        width: 90%;
      }
    }

    input {
      width: 600px;
      height: 4rem;
      margin: 2em;
      border: 2px solid black;
      border-radius: 10px;
      outline: none;
      background-color: #d4d3d3;
      text-align: center;
      resize: none;
      :focus {
        border: 2px solid #00ff00;
      }
      @media (max-width: 670px) {
        width: 100%;
        margin: 0;
        margin-top: 2em;
      }
      /* @media (max-width: 1366px) {
        width: 40%;
      } */
      /* @media (max-width: 600px) {
        width: 70%;
        margin: 1em;
      } */
    }
    /* .last{
      width: 66%;
    } */
    textarea {
      width: 80%;
      min-height: 10rem;
      height: min-content;
      margin: 2em;
      border: 2px solid black;
      border-radius: 10px;
      outline: none;
      background-color: #d4d3d3;
      text-align: center;
      resize: none;
      :focus {
        border: 2px solid #00ff00;
      }

      /* @media (max-width: 1220px) {
        width: 40%;
      }
      @media (max-width: 600px) {
        width: 70%;
        margin: 1em;
      } */
      @media (max-width: 1325px) {
        width: 600px;
      }
      @media (max-width: 670px) {
        width: 90%;
      }
    }
    button {
      margin: 2em;
      margin: 0 auto;
      z-index: 1;
    }
    p {
      justify-self: center;
      align-self: flex-end;
    }
  }
`;
const RightDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  @media (max-width: 1366px) {
    height: 11rem;
    margin-top: 7em;
    text-align: center;
  }
  @media (max-width: 580px) {
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  address {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "head", "middle", "down";
    div {
      font-size: 1.2rem;
    }
    @media (max-width: 580px) {
      width: fit-content;
    }
  }
`;
