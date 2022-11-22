import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Booking from "../../Components/Booking";
import { Link as Links } from "react-scroll";
import { Element } from "react-scroll/modules";

import HeaderImg from "../../Components/Header/Header";
import InformationTour from "../../Components/InformationAboitTour";
import Navbar from "../../Components/Navbar/Navbar";
import SidebarFor from "../../Components/SidebarFor";
import TourDay from "../../Components/TourDays";
import { getTourById } from "../Tour/tour-action";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer";

function EachTour() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { tourData, isLoading } = useSelector((state) => state.tour);
  const [eachDay, setEachDay] = useState([]);
  const [filter, setFilter] = useState([]);
  const [BookingData, setBookingData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [highlightData, setHighlightData] = useState([]);
  const [time, setTime] = useState(false);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      console.log(tourData)
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [tourData]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      dispatch(
        getTourById({
          id: id,
        })
      );
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [dispatch, id]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/services/all/`)
        .then((response) => response.json())
        .then((data) =>
          setServiceData(data.filter((data) => data.tour === parseInt(id)))
        );
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [id]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/booking/all/`)
        .then((response) => response.json())
        .then((data) => setBookingData(data));
    }
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/highlights/all/${id}/`)
        .then((response) => response.json())
        .then((data) => setHighlightData(data));
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [id]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/tour_days/all/${id}/`)
        .then((res) => res.json())
        .then((data) => setEachDay(data))
        .catch((err) => console.error(err));
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [id]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetch(`${process.env.REACT_APP_BASE_URL}/comments/get/tour/${id}`)
        .then((response) => response.json())
        .then((data) => setCommentData(data));
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [id]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      setFilter(BookingData.filter((data) => data.tour === parseInt(id)));
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [BookingData, id]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {!isLoading && tourData && time ? (
        <HeaderImg
          description={tourData.Tour.title}
          img={tourData.Tour.image}
        />
      ) : (
        <div>Loading...</div>
      )}
      <SidebarFor aboutCountry={"Georgia"} />
      <MainSection>
        <TourSection>
          <BothDiv>
            <UpperInformations>
              <Links
                to={"overview"}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Übersicht
              </Links>
              <Links
                to={"itinerary"}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Reiseverlauf
              </Links>
              <Links
                to={"date"}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Preis/Termine/Buchen
              </Links>
              <Links
                to={"services"}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Leistungen
              </Links>
              <Links
                to={"comments"}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Bewertungen
              </Links>
            </UpperInformations>

            <Element name={"overview"} />

            {!isLoading && tourData && time ? (
              <InformationTour
                timeDuration={tourData.Tour.duration}
                execution={tourData.Tour.execution}
                language={tourData.Tour.language}
                min_participants={tourData.Tour.minParticipants}
                max_participants={tourData.Tour.maxParticipants}
              />
            ) : (
              <div>Loading...</div>
            )}
          </BothDiv>

          <Itinerary>
            <h2>Übersicht</h2>
          </Itinerary>

          <InformationAboutCountry>
            {tourData && !isLoading && time && (
              <p>{tourData.Tour.description}</p>
            )}
            <span>Highlight</span>
            <ul>
              {highlightData &&
                time &&
                highlightData.map((highlight) => (
                  <li key={highlight.id}>{highlight.highlight}</li>
                ))}
            </ul>
          </InformationAboutCountry>

          <Element name={"itinerary"} />

          <Itinerary>
            <h2>Reiseverlauf</h2>
          </Itinerary>
          {eachDay &&
            eachDay.map((tours, index) => (
              <TourDay
                key={tours.id}
                day={index + 1}
                title={tours.title}
                description={tours.description}
                url={tours.image}
                city={tours.title}
                time={tours.driveTime}
                distance={tours.drivingKilometers}
                meals={tours.meals}
                overnight_stay={tours.overnight_stay}
              />
            ))}

          <Element name={"date"} />

          <Itinerary>
            <h2>Preis/Termine/Buchen</h2>
          </Itinerary>

          <TableDiv>{filter && time && <Booking data={filter} />}</TableDiv>

          <Element name={"services"} />

          {serviceData.length > 0 && time ? (
            <ServiceInfo>
              <Achivements>
                <h2>Begriffene Leistungen: ↴ </h2>
                <p>{serviceData[0].notedAchievements}</p>
              </Achivements>
              <Achivements>
                <h2>NICHT begriffene Leistungen: ↴</h2>
                <p>{serviceData[0].servicesNotRealized}</p>
              </Achivements>
            </ServiceInfo>
          ) : (
            ""
          )}

          <Element name={"comments"} />

          {commentData ? (
            commentData.map((comment) => (
              <>
                <Itinerary>
                  <h2>Was unsere Gäste über uns sagen</h2>
                </Itinerary>
                <CommentMainSection key={comment.id}>
                  <div className="up">
                    <h3>
                      {comment.first_name} {comment.last_name}
                    </h3>
                  </div>
                  <div className="down">
                    <p>{comment.body}</p>
                  </div>
                </CommentMainSection>
              </>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </TourSection>
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default EachTour;

const MainSection = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: #cfeaf6;
  align-items: center;
`;

const TourSection = styled.section`
  width: 80%;
  height: max-content;
  display: flex;
  flex-direction: column;
  @media (max-width: 530px) {
    width: 90%;
  }
`;

const UpperInformations = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;

  @media (max-width: 770px) {
    flex-direction: column;
    height: 15rem;
    align-items: center;
    width: 40%;
  }
  @media (max-width: 445px) {
    width: 50%;
  }
  a {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: brown;
    cursor: pointer;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
    @media (max-width: 1440px) {
      font-size: 1.2rem;
    }
    @media (max-width: 1100px) {
      width: max-content;
      margin-left: 0.5em;
      font-size: 1.1rem;
    }
    @media (max-width: 445px) {
      font-size: 0.8rem;
    }

    &:hover {
      color: green;
      transition: 700ms;
    }
  }
`;

const BothDiv = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  /* position: sticky;
  top: 50px; */
  @media (max-width: 770px) {
    flex-direction: row;
    height: 15rem;
  }
`;
const InformationAboutCountry = styled.section`
  width: 100%;
  min-height: 10rem;
  height: max-content;
  p {
    font-size: 1.4rem;
    text-align: justify;
    font-weight: 500;
    @media (max-width: 1400px){
      font-size: 1.2rem;
    }
  }
  span {
    font-size: 2rem;
    font-weight: 700;
  }
`;
const Itinerary = styled.section`
  width: 100%;
  min-height: 2rem;
  height: min-content;
  color: #14213d;
  border-bottom: 2px solid #14213d;
  margin-top: 2em;
  h2 {
    margin: 0;
    @media (max-width: 1400px){
      font-size: 1.5rem;
    }
  }
`;
const TableDiv = styled.div`
  width: 100%;
  min-height: 10rem;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ServiceInfo = styled.section`
  width: 100%;
  min-height: 10rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;
const Achivements = styled.div`
  width: 100%;
  height: max-content;
  min-height: 25rem;
  h2 {
    font-size: 2rem;
    margin: 0;
    color: #14213d;
    border-bottom: 2px solid #14213d;
    width: 47%;
    @media (max-width: 1400px){
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    @media (max-width: 1400px){
      font-size: 1rem;
    }
  }
  &:last-child {
    p {
      color: red;
    }
  }
`;
const CommentMainSection = styled.section`
  width: 100%;
  min-height: 20rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  .up {
    width: 100%;
    height: 4rem;
    h3 {
      margin: 0;
      font-weight: 700;
      font-size: 1.79rem;
      @media (max-width: 1400px){
      font-size: 1.32rem;
    }
    }
  }
  .down {
    width: 100%;
    height: max-content;
    p {
      margin: 0;
      font-size: 1.2rem;
      text-align: justify;
      @media (max-width: 1400px){
      font-size: 1rem;
    }
    }
  }
`;
