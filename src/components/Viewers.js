import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="img" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="img" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="img" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="img" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="img" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
  margin-top: 30px;
  padding: 30px 0px 26px;
  cursor: pointer;
`;
const Wrap = styled.section`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: conver;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
