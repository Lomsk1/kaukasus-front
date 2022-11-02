import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import AuthContext from "../../Hoc/authContext";
import AdminTableAGB from "../../Components/Admin_AGB";

function AdminAGBTerms() {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const [terms, setTerms] = useState([]);

  const { logoutUser } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/terms/`)
      .then(response => response.json())
      .then(data => setTerms(data));
  }, [reload]);

  const refreshHandler = () => {
    setReload(!reload);
  };

  const tourGetHandler = () => {
    navigate("/admin/tours");
  };
  const memberGetHandler = () => {
    navigate("/admin/members");
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
        <RightSide>
          <RightDiv>
            {terms && (
              <AdminTableAGB
                Terms={terms}
                reload={() => {
                  setReload(!reload);
                }}
              />
            )}
          </RightDiv>
          <Refresher onClick={refreshHandler}>Refresh</Refresher>
        </RightSide>
      </MainSection>
    </Fragment>
  );
}

export default AdminAGBTerms;

const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  display: flex;
  position: relative;
  background-color: #cfeaf6;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 20%;
  height: 100%;
  @media (max-width: 750px) {
    width: 100%;
    height: max-content;
  }
  div {
    width: 100%;
    height: 49%;
    display: flex;
    flex-direction: column;
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
    }
  }
`;
const RightSide = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 100%;
    height: max-content;
    align-items: center;
  }
`;

const RightDiv = styled.div`
  width: 90%;
  height: 70%;
  margin: 2em;
  transform: translateY(-1em);
  background-color: #80D4DD;
  display: flex;
  flex-direction: column;
`;
const Refresher = styled.button`
  margin: 2em;
  width: 12rem;
  height: 5rem;
  background-color: grey;
  border: none;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: #0606a7;
    transition: 700ms;
    cursor: pointer;
  }
`;