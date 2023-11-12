import styled, { createGlobalStyle } from "styled-components";

import { Hero } from "./components/Hero/Hero";
import { Skillset } from "./components/Skillset/Skillset";
import { RecentWorks } from "./components/RecentWorks/RecentWorks";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Experiences } from "./components/Experiences/Experiences";
import { Education } from "./components/Education/Education";
import { Footer } from "./components/Footer/Footer";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    ul {
      list-style-type: none;
    }

    a {
      text-decoration: none;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`;

const StyledBody = styled.div`
  padding: 90px 165px;
  display: flex;
  gap: 125px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  min-width: 350px;
  font-family: PT Sans Narrow;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
  min-width: 635px;
`;

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Hero />
      <StyledBody>
        <LeftColumn>
          <Skillset />
          {/* <RecentWorks /> */}
        </LeftColumn>
        <RightColumn>
          <AboutMe />
          <Experiences />
          <Education />
        </RightColumn>
      </StyledBody>
      <Footer />
    </Wrapper>
  );
};
