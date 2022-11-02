import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  height: 200px;
  background: url(${props => props.image}) 0 0 no-repeat;
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
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: all 0.45s ease;
`;

const Description = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: all 0.45s ease;
  transition-delay: 0.04s;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: ${props => props.background && props.background};
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

const Card = ({ hexa, title, description, image, country, main, about, id }) => (
  <Style>
    {main && (
      <Link to={`/${country}`}>
        <Screenshot image={image} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <BottomBar background={hexa} />
        </Content>
      </Link>
    )}
    {about && (
      <Link to={`/country_about/${id}`}>
        <Screenshot image={image} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <BottomBar background={hexa} />
        </Content>
      </Link>
    )}
  </Style>
);

export default Card;
