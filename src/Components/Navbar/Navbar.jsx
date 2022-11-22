import React from "react";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksR,
  LogoItem
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Navbar = ({ toggle, homePage }) => {
  return (
    <>
      <Nav>
        <LogoItem>
          <img src={logo} alt="" />
        </LogoItem>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              {homePage ? (
                <NavLinks
                  to={"pages"}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </NavLinks>
              ) : (
                <NavLinksR to={"/"}>Home</NavLinksR>
              )}
            </NavItem>
            <NavItem>
              <NavLinksR to={"/about"}>ÜBER UNS</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/photo_blog">FOTO BLOG</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/contact">KONTAKT</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/about_countries">Über drei Länder</NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR to="/servicess">unsere service</NavLinksR>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
