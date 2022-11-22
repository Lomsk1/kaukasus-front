import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import gia from "../../assets/images/gia.jpg";
import AvatarRound from "../../Components/AvatarRound";
import { useDispatch, useSelector } from "react-redux";
import { getMemberData } from "../../members/member-action";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer";
import HeaderImgStatic from "../../Components/Header/HeaderVol2";
import headerImage from '../../assets/images/Über_uns.jpg'

function About() {
  const dispatch = useDispatch();
  const { memberData, isLoading } = useSelector((state) => state.member);

  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      dispatch(getMemberData());
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderImgStatic description={"ÜBER UNS"} image={headerImage}  />
      <DescriptionSection>
        <UpperDesc>
          <ImgDiv>
            <div>
              <img src={gia} alt="Ushba und Elbrus" />
            </div>
          </ImgDiv>
          <TextDiv>
            <h4>Wie ,,Reiseziel Kaukasus" entstand</h4>
            <p>
              Das Reiseunternehmen hat sich zum Ziel gestellt, dass alle Gäste
              eine unvergessliche Zeit mit tollen Erinnerungen im wunderschönen
              Georgien verbringen. Dabei ist es uns besonders wichtig, unser
              Land so zu zeigen, wie es wirklich ist: Atemberaubende
              Landschaften, traditionsreiche Kunst und Kultur, kulinarische
              Werte, die interessante Geschichte sowie die außergewöhnliche
              Herzlichkeit und Gastfreundschaft der Bevölkerung. Durch die
              jahrzehntelange Zugehörigkeit zur Sowjetunion ist in der
              westlichen Welt ein falsches Bild von Georgien entstanden. Das
              wollen wir ändern. Wir haben z.B. unsere eigene Sprache, eigene
              Schriftzeichen und auch unsere Geschichte wurde nie vergessen. Als
              Reiseveranstalter wollen wir unseren Beitrag leisten, unser Land
              Georgien wirtschaftlich voran zu bringen, denn die Landwirtschaft
              und der Tourismus sind die Haupteinnahmequellen in dieser Zeit.
              Mit unseren Erkundungstouren sind wir auf den Spuren unserer
              Vorfahren unterwegs und entdecken viele Bereiche wie Wirtschaft,
              Wissenschaft, Architektur und Kultur wieder neu. Wir sind stolz,
              als kleines Unternehmen, unseren Beitrag zur Entwicklung unseres
              Landes beizutragen und Georgien den deutsch sprechenden Gästen
              vorzustellen. Viele Touristen packt hoffentlich das
              „Georgienfieber“ und sie kommen immer wieder in das vielseitige
              und sehenswerte Land. Dies erfüllt uns mit riesiger Freude und ist
              unser größter Dank.
            </p>
          </TextDiv>
          <TextDiv>
            <h4>Wir über uns / Unsere Mission</h4>
            <p>
              Das Reiseunternehmen hat sich zum Ziel gestellt, dass alle Gäste
              eine unvergessliche Zeit mit tollen Erinnerungen im wunderschönen
              Georgien verbringen. Dabei ist es uns besonders wichtig, unser
              Land so zu zeigen, wie es wirklich ist: Atemberaubende
              Landschaften, traditionsreiche Kunst und Kultur, kulinarische
              Werte, die interessante Geschichte sowie die außergewöhnliche
              Herzlichkeit und Gastfreundschaft der Bevölkerung. Durch die
              jahrzehntelange Zugehörigkeit zur Sowjetunion ist in der
              westlichen Welt ein falsches Bild von Georgien entstanden. Das
              wollen wir ändern. Wir haben z.B. unsere eigene Sprache, eigene
              Schriftzeichen und auch unsere Geschichte wurde nie vergessen. Als
              Reiseveranstalter wollen wir unseren Beitrag leisten, unser Land
              Georgien wirtschaftlich voran zu bringen, denn die Landwirtschaft
              und der Tourismus sind die Haupteinnahmequellen in dieser Zeit.
              Mit unseren Erkundungstouren sind wir auf den Spuren unserer
              Vorfahren unterwegs und entdecken viele Bereiche wie Wirtschaft,
              Wissenschaft, Architektur und Kultur wieder neu. Wir sind stolz,
              als kleines Unternehmen, unseren Beitrag zur Entwicklung unseres
              Landes beizutragen und Georgien den deutsch sprechenden Gästen
              vorzustellen. Viele Touristen packt hoffentlich das
              „Georgienfieber“ und sie kommen immer wieder in das vielseitige
              und sehenswerte Land. Dies erfüllt uns mit riesiger Freude und ist
              unser größter Dank.
            </p>
          </TextDiv>
        </UpperDesc>
      </DescriptionSection>
      <AvatarSection>
        <AvatarBox>
          {!isLoading ? (
            memberData.map((member) => (
              <AvatarRound
                key={member.id}
                name={member.first_name}
                lastName={member.last_name}
                src={member.avatar}
                description={member.description}
              />
            ))
          ) : (
           <div>Loading ... </div>
          )}
        </AvatarBox>
      </AvatarSection>
      <Footer />
    </Fragment>
  );
}

export default About;

const DescriptionSection = styled.section`
  width: 100%;
  height: max-content;
  min-height: 45rem;
  background-color: #cfeaf6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UpperDesc = styled.div`
  width: 85%;
  height: min-content;
  display: flex;
  border-bottom: 5px solid yellowgreen;
  /* margin: auto; */
  @media (max-width: 1750px) {
    justify-content: space-evenly;
    width: 100%;
  }
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
const ImgDiv = styled.div`
  width: 32%;
  display: flex;
  justify-content: center;
  div {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    transform: translateY(2em);
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 1500px) {
    width: 22%;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
`;
const TextDiv = styled.div`
  width: 34%;
  min-width: 500px;
  h4 {
    font-size: 1.5625rem;
    font-weight: 500;
  }
  p {
    font-size: 1.0625rem;
    width: 500px;
    line-height: 1.5;
  }
  @media (max-width: 1310px) {
    min-width: 100px;
    P {
      width: fit-content;
    }
  }
  @media (max-width: 1200px) {
    width: 90%;
    align-self: center;
    margin-top: 3em;
    p {
      width: fit-content;
      text-align: justify;
    }
  }
`;
const AvatarSection = styled.section`
  width: 100%;
  height: max-content;
  min-height: 45rem;
  background-color: #cfeaf6;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-0.2em);
`;
const AvatarBox = styled.div`
  width: 80%;
  height: max-content;
  min-height: 40rem;
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 1310px) {
    margin-top: 4em;
  }
`;
