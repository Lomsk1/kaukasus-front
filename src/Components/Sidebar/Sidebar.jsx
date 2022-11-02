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
            <SidebarRoute to='/about'>Uber Uns</SidebarRoute>
            <SidebarRoute to='/photo_blog'>Photo Blog</SidebarRoute>
            <SidebarRoute to='/contact'>Contact</SidebarRoute>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
