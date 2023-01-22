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
import headerImage from "../../assets/images/uber_uns.jpg";

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
      <HeaderImgStatic description={"ÜBER UNS"} image={headerImage} />
      <DescriptionSection>
        <UpperDesc>
          <ImgDiv>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
                alt=""
              />
            </div>
          </ImgDiv>
          <TextDiv>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              alias, tenetur laborum molestiae, explicabo hic non omnis fuga
              quo, tempora reiciendis reprehenderit. Quos labore itaque
              accusantium necessitatibus, ducimus voluptate sunt laboriosam,
              nisi recusandae fugit est asperiores omnis cupiditate consequuntur
              aspernatur tenetur eligendi vero assumenda libero. Voluptatibus in
              mollitia sapiente, natus minus enim, at incidunt voluptates
              asperiores inventore quaerat? Est pariatur amet natus quam ipsa.
              Autem doloribus a, voluptatem reprehenderit distinctio nesciunt
              impedit quia ipsum itaque perspiciatis quas, totam ut odit eaque
              porro pariatur facere, quis tempora blanditiis aliquid? Veniam
              nulla sequi officia quo illum corrupti, rerum cupiditate nobis,
              possimus fugit reiciendis dolorem enim. Accusamus, ipsum error in,
              veritatis, possimus soluta recusandae aliquam magni sunt atque
              doloremque nesciunt debitis delectus vero perspiciatis ducimus
              nemo quibusdam! Quisquam architecto hic, voluptate quod saepe
              doloremque tempore iste quidem laborum voluptatum minima natus
              esse sequi ipsam officia, est labore placeat, animi possimus
              incidunt aut velit.
            </p>
          </TextDiv>
          <TextDiv>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              molestiae maxime laborum dolor delectus eaque assumenda iusto
              deserunt veritatis magni, quasi, ducimus dolorum exercitationem
              explicabo! Vel expedita molestiae velit officia possimus.
              Excepturi minus nemo autem cupiditate velit nesciunt reprehenderit
              hic, illum quia, possimus omnis magnam quod. Dignissimos
              quibusdam, nesciunt rerum, voluptatem blanditiis labore expedita
              eligendi perspiciatis iste asperiores porro deleniti, iure autem
              repellendus velit consequatur mollitia officia facere sit! Minima
              nostrum quasi earum error rerum eos, doloribus perspiciatis iusto
              ipsa accusantium. Dolor nostrum eos vero ea, earum deleniti iure
              blanditiis impedit dicta? Ipsa a labore in hic laudantium
              quibusdam dolorem possimus voluptas natus reprehenderit ab,
              voluptatum eos tempore nemo quod error vitae, laboriosam unde
              culpa quis molestias quos numquam officiis tenetur! Voluptate odit
              neque dolores rerum quasi recusandae, vel illo ullam, placeat
              similique, sunt fugit labore doloremque nemo soluta impedit
              numquam perspiciatis reiciendis cupiditate eaque doloribus
              consectetur. Aspernatur, qui quia quas inventore ex quam in minima
              laborum repellat. Odio fugiat, quidem rerum asperiores ullam
              voluptatum itaque sunt! Officiis, quos nobis.
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
      object-fit: cover;
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
