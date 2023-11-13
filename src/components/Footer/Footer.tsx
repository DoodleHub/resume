import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 547px;
  align-items: center;
  justify-content: center;
  background-color: #f5f3f0;
  font-family: Playfair Display;
  font-weight: 900;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    height: 400px;
    gap: 8px;
    padding: 12px;
  }
`;

const Title = styled.span`
  font-size: 66px;
  line-height: 82px;
  letter-spacing: -1.14px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
`;

const Contacts = styled.span`
  font-size: 36px;
  line-height: 46px;
  color: #0699a6;

  a {
    color: #0699a6;
  }

  a:first-child:after {
    content: " | ";
  }

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;

    a:first-child:after {
      content: "";
    }
  }
`;

const DiagonalBackground = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 125px;
  background: linear-gradient(to right bottom, white 50%, #f5f3f0 50%);
`;

export const Footer = () => {
  return (
    <Wrapper>
      <DiagonalBackground />
      <Title>Get in touch!</Title>
      <Contacts>
        <a href="mailto: chaochen@live.com">chaochen@live.com</a>
        <a href="tel: 917-250-8137">917.250.8137</a>
      </Contacts>
    </Wrapper>
  );
};
