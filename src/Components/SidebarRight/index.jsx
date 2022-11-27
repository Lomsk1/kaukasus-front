import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getToursWithFilter } from "../../Pages/Tour/tour-action";
import Radio from "../Radio";
import { getTags } from "../Tags/tag-actions";

function SidebarRight({
  onSubmit,
  allHandler,
  guaranteed,
  notGuaranteed,
  minimal,
  close,
}) {
  const [val, setVal] = useState(null);
  const [val1, setVal1] = useState(null);
  const dispatch = useDispatch();
  const { tagData } = useSelector((state) => state.tag);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      if (val) {
        dispatch(
          getToursWithFilter({
            id: val,
          })
        );
      }
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [val, dispatch]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      dispatch(getTags());
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [dispatch]);

  const [general, setGeneral] = useState(false);

  const generalHandler = () => {
    setGeneral(!general);
  };

  const Information = () => {
    if (tagData) {
      return tagData.map((tag) => (
        <Radio
          key={tag.id}
          label={tag.name}
          topSize="1em"
          value={tag.id}
          onChange={(e) => {
            setVal(e.target.value);
            // console.log(e)
          }}
          onClick={close}
        />
      ));
    }
  };

  return (
    <Fragment>
      <SideBars>
        <RightDivTitle>
          <h3>Suchen Sie nach</h3>
        </RightDivTitle>
        <RightDivFirst>
          <h4>Reisesorte</h4>
        </RightDivFirst>
        <button className="sort_button" onClick={generalHandler}>
          zu Reisesorten
        </button>
        <RadioBoxes style={{ display: general && "block" }}>
          {/* <Radio
            label={"All Tours"}
            topSize="1em"
            value={""}
            onChange={allHandler}
          /> */}
          <Radio
            label={"Garantierte Reisen"}
            topSize="1em"
            value={""}
            onChange={guaranteed}
          />
          {/* <Radio
            label={"Keine Fixdaten"}
            topSize="1em"
            value={""}
            onChange={notGuaranteed}
          /> */}
          <Information />
          {/* {tagData ? (
            tagData.map((tag) => (
              <Radio
                key={tag.id}
                label={tag.name}
                topSize="1em"
                value={tag.id}
                onChange={(e) => {
                  setVal(e.target.value);
                  // console.log(e)
                }}
                onClick={close}
              />
            ))
          ) : (
            <div>Loading...</div>
          )} */}
        </RadioBoxes>
        <RightDivFirst size={"2em"}>
          <h4>Zeitraum</h4>
        </RightDivFirst>
        <form
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CalendarDiv>
            <MainDiv>
              <label htmlFor={"Von"}>{"Von"}</label>
              <input
                name={"Von"}
                type={"date"}
                id={"Von"}
                {...register("start", {
                  required: true,
                })}
              />
            </MainDiv>
            <MainDiv>
              <label htmlFor={"Bis"}>{"Bis"}</label>
              <input
                name={"Bis"}
                type={"date"}
                id={"Bis"}
                {...register("end", {
                  required: true,
                })}
              />
            </MainDiv>
          </CalendarDiv>
          <Button
            type="submit"
            onChange={() => {
              console.log("click");
            }}
          >
            Weiter
          </Button>
        </form>
      </SideBars>

      {/* {minimal && (
        <Mini>
          <RightDivFirst>
            <h4>Reisesorte</h4>
          </RightDivFirst>
          <RadioBoxes> */}
      {/* <Radio
              label={"All Tours"}
              topSize="1em"
              value={""}
              onChange={allHandler}
            /> */}
      {/* <Radio
              label={"Guaranteed"}
              topSize="1em"
              value={""}
              onChange={guaranteed}
            />
            <Radio
              label={"Not Guaranteed"}
              topSize="1em"
              value={""}
              onChange={notGuaranteed}
            />
            <Information /> */}
      {/* {tagData ? (
              tagData.map((tag) => (
                <Radio
                  key={tag.id}
                  label={tag.name}
                  topSize="1em"
                  value={tag.id}
                  onChange={(e) => {
                    // setVal(e.target.value);
                    setVal1(e.target.value);
                    console.log(e);
                  }}
                  onClick={close}
                />
              ))
            ) : (
              <div>Loading...</div>
            )} */}
      {/* </RadioBoxes>
          <RightDivFirst size={"2em"}>
            <h4>Zeitraum</h4>
          </RightDivFirst>
          <form
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CalendarDiv>
              <MainDiv>
                <label htmlFor={"Von"}>{"Von"}</label>
                <input
                  name={"Von"}
                  type={"date"}
                  id={"Von"}
                  {...register("start", {
                    required: true,
                  })}
                />
              </MainDiv>
              <MainDiv>
                <label htmlFor={"Bis"}>{"Bis"}</label>
                <input
                  name={"Bis"}
                  type={"date"}
                  id={"Bis"}
                  {...register("end", {
                    required: true,
                  })}
                />
              </MainDiv>
            </CalendarDiv>
            <Button type="submit">Weiter</Button>
          </form>
        </Mini>
      )} */}
    </Fragment>
  );
}

export default SidebarRight;

const SideBars = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: inset 1px 0px 25px 21px rgba(255, 255, 255, 0.78);
  box-shadow: inset 1px 0px 25px 21px rgba(60, 188, 195, 0.1);
  /* z-index: 9999; */

  position: sticky;
  right: 0;
  top: 40px;

  @media (max-width: 1000px) {
    width: 30%;
    /* @media (max-width: 800px) {
      display: none;
    } */
  }
  @media (max-width: 800px) {
    width: 100%;
    /* min-height: 100vh; */
    height: max-content;
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
    padding-bottom: 2em;
    position: static;
    top: 0;
  }
  .sort_button {
    width: 150px;
    height: 40px;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      border-color: red;
      transition: 700ms;
    }
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const RightDivTitle = styled.div`
  width: 80%;
  height: 3rem;
  margin-top: 2em;
  position: sticky;

  h3 {
    font-size: 1.17rem;
    margin: 0;
    color: #031805;
    font-weight: 700;
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-family: "Poppins", sans-serif;
  }
  /* @media (max-width: 800px) {
    width: 50%;
    display: flex;
    justify-content: center;
  } */
  @media (max-width: 800px) {
    display: none;
  }
`;
const RightDivFirst = styled.div`
  width: 80%;
  height: 3rem;
  margin-top: ${(props) => props.size};
  h4 {
    font-size: 1rem;
    margin: 0;
    color: #031805;
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-family: "Poppins", sans-serif;
  }
  /* @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  } */
  @media (max-width: 800px) {
    display: none;
  }
`;
const RadioBoxes = styled.div`
  width: 80%;
  height: min-content;
  display: none;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const CalendarDiv = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    height: 5rem;
  }
`;
const Button = styled.button`
  margin-top: 2em;
  width: 60%;
  height: 3rem;
  font-size: 1.5rem;
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  justify-content: center;
  line-height: 1em;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &:active,
  &:hover {
    outline: 0;
  }

  /* @media (max-width: 1400px) {
  transform: translateY(-2em)
  } */

  @media (max-width: 768px) {
    font-size: 18px;
    /* min-width: 196px; */
    margin: 0 auto;
    width: 100px;
    height: 50px;
  }
`;
const MainDiv = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.marginTop || "0"};
  input {
    margin-left: 3em;
    width: 150px;
    cursor: pointer;
  }
  label {
    margin-left: 1em;
    width: 1rem;
    color: rgb(1, 61, 91);
    font-size: 1rem;
    cursor: pointer;
  }
`;
const Mini = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
