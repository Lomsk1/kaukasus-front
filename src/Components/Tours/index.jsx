import { Fragment, useState } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import HeaderImg from "../../Components/Header/Header";
import TourBox from "../../Components/TourBoxes";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import SidebarLeft from "../SidebarLeft";
import SidebarRight from "../SidebarRight";

function Tours({ data, country, aboutCountry, isLoading }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(data);

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderImg description={country} />
      <MainSection>
        <SidebarLeft aboutCountry={aboutCountry} />

        <MainBar>
          {!isLoading ? (
            data.map(item => (
              <TourBox
                isLoading={isLoading}
                key={item.id}
                url={item.thumbnail}
                price={item.price}
                title={item.title}
                id={item.id}
                duration={item.duration}
              />
            ))
          ) : (
            <Skeleton animation='wave' count={3} height={200} width={200} />
          )}
        </MainBar>

        <SidebarRight />
      </MainSection>
    </Fragment>
  );
}

export default Tours;

const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #cfeaf6;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
// const SideBars = styled.div`
//   width: 20%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   -webkit-box-shadow: inset 1px 0px 25px 21px rgba(255, 255, 255, 0.78);
//   box-shadow: inset 1px 0px 25px 21px rgba(60, 188, 195, 0.1);
//   @media (max-width: 1000px) {
//     width: 30%;
//     @media (max-width: 800px) {
//       display: none;
//     }
//   }
// `;
// const LeftDivUp = styled.div`
//   width: 80%;
//   height: max-content;
//   min-height: 20rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   a {
//     text-decoration: none;
//     font-size: 1.5rem;
//     margin-top: 2em;

//     background-image: linear-gradient(to right, #92A332, #438945 50%, #000000 50%);
//     background-size: 200% 100%;
//     background-position: -100%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     transition: all 0.3s ease-in-out;
//     &:hover {
//       background-position: 0;
//     }
//     &:hover::before {
//       width: 100%;
//     }
//   }
//   @media (max-width: 1460px) {
//     a {
//       font-size: 1.2rem;
//     }
//   }
// `;
// const LeftDivDown = styled.div`
//   width: 80%;
//   height: 20rem;
//   margin-top: 10em;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;

//   div {
//     width: 100%;
//     height: 30%;
//     border-radius: 10px;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     &:first-child {
//       font-size: 1.5rem !important;
//     }

//     a {
//       text-decoration: none;
//       font-weight: 700;
//       color: black;
//     }

//     &:first-child {
//       border: 2px solid #1D1148 ;
//       &:hover {
//         background-color: #1D1148;
//       }
//     }
//     &:nth-child(2) {
//       border: 2px solid #FFCD00;
//       &:hover {
//         background-color: #FFCD00;
//       }
//     }
//     &:last-child {
//       border: 2px solid #FF5041;
//       &:hover {
//         background-color: #FF5041;
//       }
//     }
//     &:hover {
//       transition: 700ms;
//     }
//   }
// `;
const MainBar = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
  @media (max-width: 1919px) {
    justify-content: space-evenly;
  }
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

// const RightDivTitle = styled.div`
//   width: 80%;
//   height: 5rem;
//   margin-top: 2em;
//   h3 {
//     font-size: 2rem;
//     margin: 0;
//     color: #438945;
//     font-weight: 700;
//   }
// `;
// const RightDivFirst = styled.div`
//   width: 80%;
//   height: 3rem;
//   margin-top: ${props => props.size};
//   h4 {
//     font-size: 1.25rem;
//     margin: 0;
//     color: #438945;
//   }
// `;
// const CheckBoxes = styled.div`
//   width: 80%;
//   height: min-content;
// `;

// const CalendarDiv = styled.div`
//   width: 80%;
//   height: min-content;
//   min-height: 5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const InputDays = styled.div`
//   width: 80%;
//   height: min-content;
//   min-height: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   @media (max-width: 1460px) {
//     input {
//       width: 40%;
//     }
//   }
// `;
// const Button = styled.button`
//   margin-top: 2em;
//   width: 60%;
//   height: 3rem;
//   background-color: #438945 ;
//   border: none;
//   border-radius: 15px;
//   font-size: 1.5rem;
//   color: #ffffff;
// `;
// const HiddenDiv = styled.div`
//   width: 100%;
//   height: 10%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media (min-width: 801px) {
//     display: none;
//   }
// `;
