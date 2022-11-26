import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  height: 200px;
  background: url(${(props) => props.image}) 0 0 no-repeat;
  background-size: cover;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  backface-visibility: hidden;
  transition: all 0.45s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: all 0.45s ease;
  }
`;

const Content = styled.div`
  z-index: 200;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: all 0.45s ease;
  transition-delay: 0.04s;
`;

const Description = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: all 0.45s ease;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 8px 8px;
  transition: all 0.45s ease;
`;

const Style = styled.button`
  /* position: relative; */
  width: 320px;
  height: 330px;
  text-align: left;
  background: #ffffff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.45s ease;
  /* @media (max-width: 1135px) {
    transform: translate(-2em, 0);
  } */
  @media (max-width: 768px) {
    transform: translate(0, 0);
  }
  a {
    color: black;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${BottomBar} {
      border-radius: ${8 - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${Screenshot} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${8 - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Card = ({
  hexa,
  title,
  description,
  image,
  country,
  main,
  about,
  id,
  links
}) => {
  // const links = () => {
  //   let lin = "";
  //   if (id === 1) {
  //     lin =
  //       "https://drive.google.com/file/d/1SH7_G9HNC5kWpjulDLGATzf3Lkjha6Fd/view?fbclid=IwAR2PC5eppY5e0fZRCM3ffsJSyWXkmwLbtRXowC-Hd-kBaJ2cdC9o20hiHbQ";
  //   }
  //   if (id === 2) {
  //     return "https://drive.google.com/file/d/1l_x4FISWIIBS1xjfuNf4HxNDStQDKbz3/view?fbclid=IwAR3wYDg_vNLbxKbegFzGksaTJYc0Y80YDk5WiTQAVElQ9ylMouLByhJ_ZU0";
  //   }
  //   if (id === 3) {
  //     return "https://drive.google.com/file/d/1_n4n6VaF5ItfIcuvgI09LvFUgKPKiryB/view?fbclid=IwAR0Dz5Pj3U3_vtcl0s_sEQNuTVzO1YGj5o0PcRAskiTHox8fTk76ddLxHiI";
  //   }

  //   return lin;
  // };

  return (
    <Style>
      {main && (
        <Link to={`/${country}`}>
          <Screenshot image={image} />
          <Content>
            <Description>{description}</Description>
            <Title>{title}</Title>

            <BottomBar background={hexa} />
          </Content>
        </Link>
      )}
      {/* {about && (
      <Link to={`/country_about/${id}`}>
        <Screenshot image={image} />
        <Content>
          <Description>{description}</Description>
          <Title>{title}</Title>

          <BottomBar background={hexa} />
        </Content>
      </Link>
    )} */}
      {about && (
        <a href={links} target="_blank">
          <Screenshot image={image} />
          <Content>
            <Description>{description}</Description>
            <Title>{title}</Title>

            <BottomBar background={hexa} />
          </Content>
        </a>
      )}
    </Style>
  );
};

export default Card;
