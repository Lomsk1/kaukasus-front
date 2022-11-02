import { useFormik } from "formik";
import { Fragment } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

import Button from "../../Components/Button/Button";
import HeaderImg from "../../Components/Header/Header";
import Input from "../../Components/Input/input";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import Footer from "../../Components/Footer";

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
          result => {
            alert("SUCCESS!", result.text);
          },
          error => {
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
      <HeaderImg description={"Contact"} />
      <MainSection>
        <LeftDiv>
          <UpperLeftDiv>
            <h1>Nachricht Senden</h1>
          </UpperLeftDiv>
          <DownLeftDiv>
            <form id='contact-form' onSubmit={formik.handleSubmit}>
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
              <Input
                placeholder={"Betreff"}
                name={"regarding"}
                type={"text"}
                value={formik.values.regarding}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <textarea
                placeholder='z.B. ich bin Vegetarianer(in),ich trinke keinen Alkohol, etc.'
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
            <div className='head'>Tel: +995 577 61 55 29</div>
            <div className='middle'>Mail: reisezielkaukasus@gmail.com</div>
            <div className='down'>Address: M.Khergiani St.</div>
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
    flex-wrap: wrap;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
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
      @media (max-width: 1366px) {
        width: 40%;
      }
      @media (max-width: 600px) {
        width: 70%;
        margin: 1em;
      }
    }
    textarea {
      width: 600px;
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
      @media (max-width: 1220px) {
        width: 40%;
      }
      @media (max-width: 600px) {
        width: 70%;
        margin: 1em;
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
  }
  address {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "head", "middle", "down";
    div {
      font-size: 1.2rem;
    }
  }
`;
