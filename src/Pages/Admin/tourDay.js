import { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AdminTableTour from "../../Components/AdminTableTour";
import AdminTableTourDay from "../../Components/AdminTableTourDay";
import Button from "../../Components/Button/Button";
import { getTourData } from "../Tour/tour-action";
import AuthContext from "../../Hoc/authContext";

function AdminTourDay() {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [eachDay, setEachDay] = useState([]);
  const { tourData, isLoading } = useSelector(state => state.tour);
  const [id, setId] = useState(null);
  const { authTokens, logoutUser } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [tourID, setTourID] = useState(null);

  const navigate = useNavigate();

  const deleteMembers = async id => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/tour_days/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    setReload(!reload);
  };

  const tourShowHandler = async id => {
    setId(id);
    fetch(`${process.env.REACT_APP_BASE_URL}/tour_days/all/${id}`)
      .then(res => res.json())
      .then(data => setEachDay(data))
      .catch(err => console.error(err));
  };

  const bookShowHandler = async id => {
    fetch(`${process.env.REACT_APP_BASE_URL}/booking/all/${id}/`)
      .then(response => response.json())
      .then(data => setBookingData(data));
    setTourID(id);
  };

  const bookAddHandler = id => {
    setBookingOpen(true);
    setTourID(id);
  };
  const refreshHandler = e => {
    dispatch(getTourData());
    setReload(!reload);
  };
  useEffect(() => {
    dispatch(getTourData());
  }, [reload, dispatch]);

  const tourGetHandler = () => {
    navigate("/admin/tours");
  };
  const memberGetHandler = () => {
    navigate("/admin/members");
  };
  const photoGetGHandler = () => {
    navigate("/admin/photo_blog");
  };
  const tourDayHandler = () => {
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
              <li onClick={tourDayHandler}>Tour Day</li>
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
            {tourData && (
              <AdminTableTour
                isLoading={isLoading}
                tour={tourData}
                deleteClick={deleteMembers}
                position={"days"}
                tourShowHandler={tourShowHandler}
                bookAddHandler={bookAddHandler}
                bookShowHandler={bookShowHandler}
              />
            )}
          </RightDiv>
          <RightDivExtra>
            {eachDay && (
              <AdminTableTourDay
                tourDay={eachDay}
                deleteClick={deleteMembers}
                bookingData={bookingData}
                bookingOpen={bookingOpen}
                tourIDs={tourID}
              />
            )}
          </RightDivExtra>
          <Refresher onClick={refreshHandler}>Refresh</Refresher>
        </RightSide>
      </MainSection>
    </Fragment>
  );
}

export default AdminTourDay;

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
  height: 100%;
  margin: 2em;
  transform: translateY(-1em);
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
`;
const RightDivExtra = styled.div`
  width: 90%;
  min-height: 10rem;
  height: max-content;
  margin: 2em;
  transform: translateY(-1em);
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
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
