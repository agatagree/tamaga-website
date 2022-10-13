import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 30px;
`;

export const StyledNavButton = styled.button`
  font-size: 16px;
  margin: 5px 10px 10px 10px;
  padding: 15px 0px 2px 0px;
  border: none;
  border-bottom: 5px solid transparent;
  font-weight: 600;
  text-decoration: none;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--color-main-blue);

  &:hover {
    color: var(--color-light-blue);
    transition: all 0.2s ease-in-out;
  }
`;
