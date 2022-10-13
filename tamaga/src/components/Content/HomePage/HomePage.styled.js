import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  height: 100%;
  min-width: 280px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledBanner = styled.div`
  flex: 1 0 50%;
`;

export const StyledGallery = styled.div`
  overflow: hidden;
  position: fixed;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("https://tamagastudio.pl/images/banner.jpg");
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

export const StyledMain = styled.div`
  flex: 1 0 50%;
  overflow-y: auto;
  padding: 30px;
  display: flex;
`;

export const StyledContent = styled.div`
  width: 100%;
  justify-content: center;
  align-self: center;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: 300;
  display: inline-block;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
export const BoldName = styled(StyledTitle)`
  font-weight: 700;
`;

export const StyledText = styled.p`
  font-size: 22px;
  font-weight: 300;
  margin: 32px 0 60px 0;
  @media (max-width: 500px) {
    font-size: 16px;
    margin: 32px 0;
  }
`;

export const StyledSocialSection = styled.div`
  display: flex;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 32px;
    margin: 12px;
  }
`;

export const StyledContact = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 32px 0;
  @media (max-width: 500px) {
    font-size: 16px;
    margin: 16px 0;
  }
`;
