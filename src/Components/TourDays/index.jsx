import styled from "styled-components";

function TourDay({ day, city, url, description, distance, time, meals, overnight_stay, title }) {
  return (
    <MainDiv>
      <DayDiv>
        <h1>
        Tag {day}. {city}
        </h1>
      </DayDiv>

      <PhotoTitle>
        {title}
      </PhotoTitle>

      <PhotoDiv>
        <img src={process.env.REACT_APP_BASE_URL + url} alt='img not found' />
      </PhotoDiv>

      <Description>
        <p>{description}</p>
      </Description>

      <Abbreviation>
        <p>
        Fahrt - km: {distance}; Zeit: {time} Stunden
        </p>
        <p>Verpflegung: {meals}</p>
        <p>({overnight_stay})</p>
      </Abbreviation>

      <Hr />
    </MainDiv>
  );
}

export default TourDay;

const MainDiv = styled.div`
  width: 100%;
  min-height: 20rem;
  height: max-content;
`;
const DayDiv = styled.div`
  margin-top: 1.5em;
  width: 100%;
  height: max-content;

  min-height: 4rem;
  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
`;
const PhotoTitle = styled.div`
  width: 100%;
  height: 2rem;
  color: brown;
  @media (max-width: 575px) {
    height: 3rem;
  }
`;
const PhotoDiv = styled.div`
  width: 500px;
  height: 400px;
  @media (max-width: 650px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 390px) {
    width: 250px;
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Description = styled.div`
  width: 80%;
  height: max-content;
  min-height: 5rem;
  text-align: justify;
  p {
    font-size: 1.2rem;
  }
`;

const Abbreviation = styled.div`
  width: 100%;
  min-height: 5rem;
  height: max-content;
  p {
    font-size: 1.4rem;
    margin: 0;
    font-weight: 700;
  }
`;
const Hr = styled.hr`
  width: 100%;
  height: 0.5rem;
  background-color: black;
  margin-top: 3em;
`;