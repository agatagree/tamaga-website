import React from "react";

export const SocialIcon = ({ link, element }) => {
  return (
    <li>
      <a href={link}>{element}</a>
    </li>
  );
};

