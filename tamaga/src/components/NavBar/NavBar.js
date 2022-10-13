import { StyledNav, StyledNavButton } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledNavButton to="/projects">projects</StyledNavButton>
      <StyledNavButton to="/about">about</StyledNavButton>
    </StyledNav>
  );
};
