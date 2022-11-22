import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, homePage }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {homePage ? (
              <SidebarLink
                to={"pages"}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={toggle}
              >
                Home
              </SidebarLink>
            ) : (
              <SidebarRoute to={"/"}>Home</SidebarRoute>
            )}
            <SidebarRoute to="/about">ÜBER UNS</SidebarRoute>
            <SidebarRoute to="/photo_blog">FOTO BLOG</SidebarRoute>
            <SidebarRoute to="/contact">KONTAKT</SidebarRoute>
            <SidebarRoute to="/about_countries">Über drei Länder</SidebarRoute>
            <SidebarRoute to="/servicess" >unsere service</SidebarRoute>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
