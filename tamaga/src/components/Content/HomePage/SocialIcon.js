import React from "react";
import styled from "styled-components";

export const SocialIcon = ({ link, element }) => {
  return (
    <li>
      <StyledLink href={link}>{element}</StyledLink>
    </li>
  );
};

const StyledLink = styled.a`
  color: var(--color-main-blue);

  &:hover {
    color: var(--color-light-blue);
    transition: all 0.2s ease-in-out;
  }
`;
