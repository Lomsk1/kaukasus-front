import styled from "styled-components";
import AnchorIcon from "../../assets/icons/anchor";
import CalendarIcon from "../../assets/icons/calendat";
import MicrophoneIcon from "../../assets/icons/microphone";
import PeopleIcon from "../../assets/icons/people";

function InformationTour({
  timeDuration,
  execution,
  max_participants,
  min_participants,
  language,
}) {
  return (
    <InformationAboutTour>
      <InformationDiv>
        <IconDiv>
          <CalendarIcon />
        </IconDiv>
        <InfoDiv>
          <div>
            <p>Reisedauer</p>
          </div>
          <div>
            <span>{timeDuration} Days</span>
          </div>
        </InfoDiv>
      </InformationDiv>
      <InformationDiv>
        <IconDiv>
          <AnchorIcon />
        </IconDiv>
        <InfoDiv>
          <div>
            <p>Durchführung</p>
          </div>
          <div>
            <span>{execution}</span>
          </div>
        </InfoDiv>
      </InformationDiv>
      <InformationDiv>
        <IconDiv>
          <PeopleIcon />
        </IconDiv>
        <InfoDiv>
          <div>
            <p>Teilnehmeranzahl</p>
          </div>
          <div>
            <span>
              {min_participants}-{max_participants}
            </span>
          </div>
        </InfoDiv>
      </InformationDiv>
      <InformationDiv>
        <IconDiv>
          <MicrophoneIcon />
        </IconDiv>
        <InfoDiv>
          <div>
            <p>Spreche</p>
          </div>
          <div>
            <span>{language}</span>
          </div>
        </InfoDiv>
      </InformationDiv>
    </InformationAboutTour>
  );
}

export default InformationTour;

const InformationAboutTour = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  @media (max-width: 770px) {
    /* flex-direction: column; */
    width: 60%;
    height: 100%;
    flex-direction: column;
  }
`;
const InformationDiv = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  @media (max-width: 770px) {
    width: 100%;
    height: 25%;
  }
`;
const IconDiv = styled.div`
  width: 20%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 445px) {
    width: 30%;
    svg{
      width: 30px;
      height: 30px;
    }
  }
`;
const InfoDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 770px) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 445px) {
    flex-direction: column;
    align-items: center;
    width: 70%;
  }
  div {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: blue;
      width: min-content;
      height: min-content;
    }
    span {
      color: brown;
    }
  }
`;
