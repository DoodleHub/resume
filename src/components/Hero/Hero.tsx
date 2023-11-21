import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #f5f3f0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-height: 747px;
  padding: 180px 165px;
  justify-content: center;
  gap: 24px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    padding: 72px 24px 140px 24px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 175px;
  height: 350px;
  width: 350px;

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.span`
  font-family: PT Sans Narrow;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #9e8c6c;
`;

const Name = styled.span`
  font-family: Playfair Display;
  font-weight: 900;
  font-size: 126px;
  line-height: 112px;
  filter: brightness(90%);
  letter-spacing: -2.17px;

  @media screen and (max-width: 1024px) {
    font-size: 72px;
    line-height: 72px;
  }
`;

const ContactButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0699a6;
  font-family: PT Sans Narrow;
  font-weight: 700;
  line-height: 24px;
  font-size: 18px;
  height: 60px;
  width: 225px;
  border: none;
  letter-spacing: 2px;

  a {
    color: white;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }

  @media screen and (max-width: 1024px) {
    width: 170px;
    height: 40px;
    font-size: 14px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DiagonalBackground = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 125px;
  background: linear-gradient(to right bottom, #f5f3f0 50%, white 50%);
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <ProfileImage src="./images/Avatar.jpeg" alt="avatar" />
        <ProfileContainer>
          <Title>Senior Software Engineer</Title>
          <Name>Chao Chen</Name>
          <ContactButton>
            <a href="mailto: chaochen@live.com">CONTACT ME</a>
          </ContactButton>
        </ProfileContainer>
      </Container>
      <DiagonalBackground />
    </Wrapper>
  );
};
