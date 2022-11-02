import { Link } from "react-router-dom";
import styled from "styled-components";
import Facebook from "../../assets/icons/facebook";
import Instagram from "../../assets/icons/instagram";

function Footer() {
  return (
    <MainContent>
      <MiddleDiv>
        <div className='up'>
          <div className='quota'>
            <p>Kaukasus Travel</p>
            <p>
              <span>
                Remember that happiness is a way of travel, not a destination.
              </span>
            </p>
          </div>

          <div className='social'>
            <ul className='wrapper'>
              <li className='icon facebook'>
                <Facebook />
                <span className='tooltip'>Facebook</span>
                <span></span>
              </li>

              <li className='icon instagram'>
                <span className='tooltip'>Instagram</span>
                <Instagram />
                <span></span>
              </li>
            </ul>
          </div>

          <div className='tel'>
            <address>
              <p>Tel:</p>
              <p>+995 12 12 12</p>
            </address>
            <Link to={"/term"}>A G B</Link>
          </div>
        </div>
        <div className='down'>
          <p>
            © 2022 Kaukasus-Travel. SeedCats, Georgia, Tbilisi. All Rights
            Reserved
          </p>
        </div>
      </MiddleDiv>
    </MainContent>
  );
}

export default Footer;

const MainContent = styled.section`
  width: 100%;
  height: 20rem;
  background-color: #242329;
  /* background-image: url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700453369.jpg');
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  justify-content: center;
`;

const MiddleDiv = styled.div`
  width: 80%;
  height: 100%;
  @import url("https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap");

  @media (max-width: 650px) {
    width: 95%;
  }

  .up {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;

    .quota {
      width: 35%;
      height: 100%;
      color: #dadada;
      @media (max-width: 1115px) {
        width: 40%;
      }
      p {
        font-family: "Aref Ruqaa Ink", serif;
        font-weight: 700;
        font-size: 3rem;
        margin: 0;
        @media (max-width: 1115px) {
          font-size: 2rem;
          &:nth-child(2) {
            margin-top: 1em;
          }
        }
        @media (max-width: 725px) {
          text-align: center;
        }
        @media (max-width: 530px) {
          font-size: 1.5rem;
        }
      }
      span {
        font-family: "Dancing Script", cursive;
        font-weight: 400;
        font-size: 1.3rem;
        @media (max-width: 530px) {
          font-size: 0.9rem;
        }
      }
    }
    .social {
      width: 30%;
      height: 100%;
      @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Poppins", sans-serif;
      place-items: center;
      /* background: linear-gradient(315deg, #ffffff, #d7e1ec); */

      /* *:focus,
      *:active {
        outline: none !important;
        -webkit-tap-highlight-color: transparent;
      } */
      @media (max-width: 960px) {
        width: 35%;
      }

      .wrapper {
        display: inline-flex;
        list-style: none;
        @media (max-width: 960px) {
          margin-left: -3em;
        }
        @media (max-width: 800px) {
          display: flex;
          flex-direction: column;
        }
      }

      .wrapper .icon {
        position: relative;
        background: #ffffff;
        border-radius: 50%;
        padding: 10px;
        margin: 10px;
        width: 30px;
        height: 30px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .wrapper .tooltip {
        position: absolute;
        top: 0;
        font-size: 14px;
        background: #ffffff;
        color: #ffffff;
        padding: 5px 8px;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .wrapper .tooltip::before {
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background: #ffffff;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .wrapper .icon:hover .tooltip {
        top: -45px;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      .wrapper .facebook:hover,
      .wrapper .facebook:hover .tooltip,
      .wrapper .facebook:hover .tooltip::before {
        background: #1877f2;
        color: #ffffff;
      }

      .wrapper .instagram:hover,
      .wrapper .instagram:hover .tooltip,
      .wrapper .instagram:hover .tooltip::before {
        background: #e4405f;
        color: #ffffff;
      }
    }
    .tel {
      width: 20%;
      height: 100%;
      p {
        color: white;
        font-size: 1.5rem;
        @media (max-width: 1285px) {
          font-size: 1.2rem;
        }
        @media (max-width: 950px) {
          font-size: 1rem;
        }
      }
      a {
        color: white;
        font-size: 1.4rem;
        text-decoration-line: overline;

        &:hover {
          color: #a70606;
          transition: 500ms;
        }
      }
    }
  }
  .down {
    width: 100%;
    height: 20%;
    p {
      margin: 0;
      color: white;
      text-align: center;
    }
  }
`;
