import styled from "@emotion/styled";

export const MainDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: flex-start; */
  width: calc(100vw - 44px + 12px);
  padding: 0;
  min-width: 988px;
  overflow: hidden;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Section = styled.section`
  padding: 0 12px;
  height: 100%;
  grid-column: 2 / span 4;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: stretch;
  justify-items: stretch;
  grid-auto-flow: dense;
  grid-gap: 1rem;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(16, 1fr);
  }
`;

export const ContentProduct = styled.div`
  grid-column: auto/span 4;
  margin-bottom: 16px !important;
  text-align: center;
`;

export const Content = styled.div`
  padding: 12px;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 230px;
  height: 230px;

  @media (min-width: 1440px) {
    width: 195px;
    height: 195px;
  }
`;

export const H3 = styled.h3`
  margin: 10px 0;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.2;
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    color: #fb9c19;
  }
`;

export const Stars = styled.div`
  display: inline-block;
  font-size: 1.25rem;
  line-height: 1;
  margin-bottom: 0.4rem;
  &::before {
    content: "★★★★★";
    letter-spacing: 1.3px;
    background: linear-gradient(
      90deg,
      #fc0 calc(${(props) => props.stars} / 5 * 100%),
      #0003 calc(${(props) => props.stars} / 5 * 100%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-size: 0.8rem;
    color: #007185;
    font-weight: 300;
  }
`;

export const Price = styled.div`
  padding: 1px;
`;

export const SpanSymbol = styled.span`
  font-size: 0.82rem;
  color: #000;
`;

export const SpanWhole = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
`;
