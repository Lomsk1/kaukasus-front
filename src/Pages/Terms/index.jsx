import { useEffect } from "react";
import { Fragment, useState } from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Term() {
  const [isOpen, setIsOpen] = useState(false);
  const [terms, setTerms] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/terms/`)
      .then(response => response.json())
      .then(data => setTerms(data));
  }, []);

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection>
        <h1>Terms and Conditions</h1>
        {terms && terms.length > 0 && <p>{terms[0].body}</p>}
      </MainSection>
      <Footer />
    </Fragment>
  );
}

export default Term;

const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  background-image: url("https://i.pinimg.com/originals/3e/f1/d4/3ef1d460e6bb89eaa7d2fcf283795191.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  text-align: justify;

  h1 {
    width: 80%;
  }

  p {
    width: 80%;
  }
`;
