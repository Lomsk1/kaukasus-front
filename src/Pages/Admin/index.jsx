import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import AuthContext from "../../Hoc/authContext";

function Admin() {
  const navigate = useNavigate();

  const { logoutUser } = useContext(AuthContext);

  const memberGetHandler = () => {
    navigate("/admin/members");
  };

  const tourGetHandler = () => {
    navigate("/admin/tours");
  };
  const photoGetGHandler = () => {
    navigate("/admin/photo_blog");
  };
  const tourDayGHandler = () => {
    navigate("/admin/tour_day");
  };
  const tagHandler = () => {
    navigate("/admin/tag");
  };
  const commentHandler = () => {
    navigate("/admin/comment");
  };
  const highlightHandler = () => {
    navigate("/admin/highlight");
  };
  const agbHandler = () => {
    navigate("/admin/term");
  };
  const countryAboutHandler = () => {
    navigate("/admin/country_about");
  };
  const singleRoomsHandler = () => {
    navigate("/admin/single_room");
  };

  return (
    <Fragment>
      <MainSection>
        <LeftSide>
          <div>
            <ul>
              <li onClick={tourGetHandler}>Tour</li>
              <li onClick={memberGetHandler}>Member</li>
              <li onClick={photoGetGHandler}>photo Blog</li>
              <li onClick={tourDayGHandler}>Tour Day</li>
              <li onClick={tagHandler}>Tags</li>
              <li onClick={commentHandler}>Comment</li>
              <li onClick={highlightHandler}>Highlights</li>
              <li onClick={agbHandler}>AGB</li>
              <li onClick={countryAboutHandler}>About Country </li>
              <li onClick={singleRoomsHandler}>Single Rooms </li>
            </ul>
          </div>
          <div>
            <ul>
              <Button onClick={logoutUser}>Log Out</Button>
            </ul>
          </div>
        </LeftSide>
      </MainSection>
    </Fragment>
  );
}

export default Admin;

const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      outline: none;
      text-decoration: none;
      width: max-content;
      li {
        list-style: none;
        padding: 0.5em;
        font-size: 1.4rem;
        cursor: pointer;

        text-decoration: none;
        color: #0606a7;
        &:hover {
          color: green;
          transition: 700ms;
        }

        font-weight: 600;
        a {
          text-decoration: none;
          color: #0606a7;
          &:hover {
            color: green;
            transition: 700ms;
          }
        }
      }
    }
    &:first-child {
      border-bottom: 1px dotted black;
      height: 80%;
    }
  }
`;
