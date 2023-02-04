import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SingUp>GET ALL THERE</SingUp>
        <Description>
          Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta,
          computadora, teléfono y otros. Vive una experiencia única con una
          amplia selección de títulos en 4K. Además, puedes ver en cuatro
          pantallas en simultáneo para que nadie se quede afuera.
        </Description>
        <CTAlogoTwo src="/images/cta-logo-two.png"></CTAlogoTwo>
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SingUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTAlogoTwo = styled.img`
  width: 90%;
`;
