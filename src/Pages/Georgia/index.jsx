import { useState } from "react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarLeft from "../../Components/SidebarLeft";
import TourBox from "../../Components/TourBoxes";
import { getTourData } from "../Tour/tour-action";
import SidebarRight from "../../Components/SidebarRight";
import { useForm } from "react-hook-form";
import BarBurger from "../../assets/icons/sideBar";
import X from "../../assets/icons/x";
import Footer from "../../Components/Footer";
import HeaderImgStatic from "../../Components/Header/HeaderVol2";
import { webJson } from "../../Hoc/webJsons";

function Georgia() {
  const dispatch = useDispatch();
  const { tourData, isLoading } = useSelector((state) => state.tour);
  const [data, setData] = useState([]);
  const { filterData } = useSelector((state) => state.tour);
  const [filterTour, setFilterTour] = useState([]);
  const [mainOpen, setMainOpen] = useState(true);
  const [guaranteedOpen, setGuaranteedOpen] = useState(false);
  const [some, setSome] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [bgIMG, setBgImg] = useState(null);

  const leftClick = () => {
    setLeftOpen(true);
    setRightOpen(false);
  };

  const rightClick = () => {
    setLeftOpen(false);
    setRightOpen(true);
  };

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      setBgImg(webJson[0].image);
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [webJson]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      dispatch(getTourData());
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [dispatch]);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      if (tourData.length > 0) {
        setData(
          tourData.filter((country) => country.countryName === "Georgia")
        );
      }
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [tourData]);

  const allTourHandler = () => {
    dispatch(getTourData());
    setData(tourData.filter((country) => country.countryName === "Georgia"));
    setMainOpen(true);
    setGuaranteedOpen(false);
    setLeftOpen(false);
    setRightOpen(false);
  };

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      setFilterTour(
        filterData.filter((country) => country.countryName === "Georgia")
      );
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [filterData]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setLeftOpen(false);
    setRightOpen(false);
  };

  const [calendarData, setCalendarData] = useState([]);

  const { reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("startDate", data.start);
    formData.append("endDate", data.end);

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/filters/datefilter/`,
      {
        method: "POST",
        body: formData,
      }
    );
    const datas = await response.json();

    reset();
    setCalendarData(datas);
    setMainOpen(false);
    setGuaranteedOpen(false);
    setLeftOpen(false);
    setRightOpen(false);
  };

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      if (filterTour) {
        setMainOpen(true);
      }
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [filterTour]);

  const [guaranteedTour, setGuaranteedTour] = useState([]);
  const [notGuaranteedTour, setNotGuaranteedTour] = useState([]);

  const guaranteedTours = () => {
    dispatch(getTourData());
    setGuaranteedTour(
      tourData.filter(
        (execution) =>
          execution.execution === "Garantiert" &&
          execution.countryName === "Georgia"
      )
    );
    setGuaranteedOpen(true);
    setMainOpen(false);
    setSome(false);
    setCalendarData([]);
    setLeftOpen(false);
    setRightOpen(false);
  };

  const notGuaranteedTours = () => {
    dispatch(getTourData());
    setNotGuaranteedTour(
      tourData.filter(
        (execution) =>
          execution.execution === "Keine Fixdaten" &&
          execution.countryName === "Georgia"
      )
    );
    setGuaranteedOpen(true);
    setMainOpen(false);
    setSome(true);
    setCalendarData([]);
    setLeftOpen(false);
    setRightOpen(false);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {bgIMG ? (
        <HeaderImgStatic description={"Georgien"} image={bgIMG} />
      ) : (
        <div>Loading...</div>
      )}

      <MainSection>
        <SidebarLeft aboutCountry={""} />

        {/* Burger Div */}

        <BurgerDiv>
          {/* <div onClick={leftClick}>
            <BarBurger />
          </div> */}

          {/* <div 
          // onClick={rightClick}
          > */}
          {/* <BarBurger /> */}
          {/* <SidebarRight
            onSubmit={onSubmit}
            allHandler={allTourHandler}
            guaranteed={guaranteedTours}
            notGuaranteed={notGuaranteedTours}
            minimal
            close={() => {
              setLeftOpen(false);
              setRightOpen(false);
            }}
          /> */}
          {/* </div> */}
        </BurgerDiv>

        {/* Imported Bars */}

        {/* Left */}

        {leftOpen && (
          <Module>
            <div className="x">
              <X
                onClick={() => {
                  setLeftOpen(false);
                  setRightOpen(false);
                }}
              />
              <X
                onClick={() => {
                  setLeftOpen(false);
                  setRightOpen(false);
                }}
              />
            </div>
            <div className="y">
              <SidebarLeft minimal />
            </div>
          </Module>
        )}

        {/* Right */}
        {/* 
        {rightOpen && (
          <Module>
            <div className="x">
              <X
                onClick={() => {
                  setLeftOpen(false);
                  setRightOpen(false);
                }}
              />
              <X
                onClick={() => {
                  setLeftOpen(false);
                  setRightOpen(false);
                }}
              />
            </div>
            <div className="y">
              <SidebarRight
                onSubmit={onSubmit}
                allHandler={allTourHandler}
                guaranteed={guaranteedTours}
                notGuaranteed={notGuaranteedTours}
                minimal
                close={() => {
                  setLeftOpen(false);
                  setRightOpen(false);
                }}
              />
            </div>
          </Module>
        )} */}

        {/* Main Bar */}

        <MainBar>
          {mainOpen ? (
            data && !isLoading ? (
              data.map((tour) => (
                <TourBox
                  isLoading={isLoading}
                  key={tour.id}
                  url={tour.image}
                  price={tour.abstract_price}
                  title={tour.title}
                  id={tour.id}
                  duration={tour.duration}
                />
              ))
            ) : (
              filterTour.map((tour) => (
                <TourBox
                  isLoading={isLoading}
                  key={tour.id}
                  url={tour.image}
                  price={tour.abstract_price}
                  title={tour.title}
                  id={tour.id}
                  duration={tour.duration}
                />
              ))
            )
          ) : calendarData.length > 0 ? (
            calendarData.map((tour) => (
              <TourBox
                isLoading={isLoading}
                key={tour.id}
                url={tour.image}
                price={tour.abstract_price}
                title={tour.title}
                id={tour.id}
                duration={tour.duration}
              />
            ))
          ) : (
            // <p>kein Tour gefunden</p>
            <p></p>
          )}
          {guaranteedOpen && !some && guaranteedTour ? (
            guaranteedTour.map((tour) => (
              <TourBox
                isLoading={isLoading}
                key={tour.id}
                url={tour.image}
                price={tour.abstract_price}
                title={tour.title}
                id={tour.id}
                duration={tour.duration}
              />
            ))
          ) : (
            <div></div>
          )}
          {guaranteedOpen && some && notGuaranteedTour ? (
            notGuaranteedTour.map((tour) => (
              <TourBox
                isLoading={isLoading}
                key={tour.id}
                url={tour.image}
                price={tour.abstract_price}
                title={tour.title}
                id={tour.id}
                duration={tour.duration}
              />
            ))
          ) : (
            <div></div>
          )}
        </MainBar>

        {/* <Hidden> */}
          <SidebarRight
            onSubmit={onSubmit}
            // allHandler={allTourHandler}
            guaranteed={guaranteedTours}
            notGuaranteed={notGuaranteedTours}
          />
        {/* </Hidden> */}
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default Georgia;

// const Hidden = styled.div`
//  width: 20%;
//   height: 100vh;
//   @media (max-width: 800px) {
//     display: none;
//   }
// `;

const MainSection = styled.section`
  width: 100%;
  min-height: 150vh;
  background-color: #cfeaf6;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    height: max-content;
  }
`;

const MainBar = styled.div`
  width: 60%;
  height: min-content;
  display: flex;
  flex-wrap: wrap;
  /* overflow-y: scroll; */
  @media (max-width: 1919px) {
    justify-content: space-evenly;
  }
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 800px) {
    width: 100%;
    min-height: 30rem;
  }
`;
const BurgerDiv = styled.div`
  width: 100%;
  /* height: 5rem; */
  display: flex;
  justify-content: space-between;

  /* background-color: brown; */
  min-height: fit-content;

  /* div {
    margin: 1em;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: 700ms;
    &:hover {
      transform: rotate(90deg);
      transition: 700ms;
    }
    &::after,
    :active {
      transform: rotate(180deg);
      transition: 700ms;
    }
  } */
  @media (min-width: 800px) {
    display: none;
  }
`;

const Module = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1001;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  .x {
    width: 100%;
    height: 10%;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    display: flex;
    justify-content: space-between;
    svg {
      width: 30px;
      height: 30px;
      margin: 1em;
    }
  }
  .y {
    width: 100%;
    height: 90%;
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  }
`;
