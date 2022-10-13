import styled from "styled-components";

export const UnderConstruction = () => {
  return (
    <StyledLayout>
      <StyledImg src="https://img.freepik.com/premium-vector/construction-website-page-web-page-vector-illustration_123447-3974.jpg?w=826" />
      <h3>Sorry, page under construction</h3>
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
