import "@lottiefiles/lottie-player";
import styled from "styled-components";

export const WrongWebsite = () => {
  return (
    <StyledLayout>
      <StyledImg src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=996&t=st=1665684552~exp=1665685152~hmac=ac9bf94fac80e1abda4518b89b42c3cfc6658bcfce715107555da20cd55f4ea7" />
      <h3>Ups, page not found</h3>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledImg = styled.img`
  max-height: 80%;
  max-width: 80%;
  object-fit: contain;
`;
