import styled from "@emotion/styled";

export const AppHeader = styled.header`
  text-align: center;
  color: #000;
`;

export const H1 = styled.h1`
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: calc(10px + 6vmin);
  color: #000;
`;

export const P = styled.p`
  margin-bottom: 1rem;
  margin-top: 0;
  font-weight: 300;
  font-size: calc(7px + 1vmin);
  color: #000;
`;

export const ItemsCategory = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
`;

export const Item = styled.div`
  position: relative;
`;

export const ItemImage = styled.img`
  @media only screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (max-width: 425px) {
    width: 60px;
    height: 60px;
  }
`;

export const ItemTitle = styled.h4`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-weight: 300;
  font-size: calc(7px + 1vmin);
  color: #000;
  background: #ffff;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  max-width: 7rem;

  @media only screen and (max-width: 768px) {
    padding: 0.1rem 0.3rem;
    max-width: 5rem;
  }
  @media only screen and (max-width: 425px) {
    top: 25%;
    padding: 0.1rem 0.2rem;
    max-width: 3rem;
  }
`;
