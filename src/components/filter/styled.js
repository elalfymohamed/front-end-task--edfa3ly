import styled from "@emotion/styled";

export const Section = styled.section`
  grid-column: 1 / 2;
  display: block;
  width: calc(0.25 * (100vw - 80px));
  min-width: 247px;
  max-width: 305px;
  margin-top: 1rem;
`;

export const Container = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
  padding: 1.5rem;
  position: relative;
  /* border-top: 0; */

  &:before {
    content: "Filters";
    position: absolute;
    top: -13px;
    left: 10px;
    background: #fff;
    margin: 0;
    padding: 0 0.4rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;
