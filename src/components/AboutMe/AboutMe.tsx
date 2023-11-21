import styled from "styled-components";

import { Section } from "../Section/Section";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  font-size: 20px;
  line-height: 32px;
  font-family: PT Sans Narrow;
`;

const Divider = styled.div`
  height: 10px;
  width: 71px;
  background-color: #0699a6;
`;

export const AboutMe = () => {
  return (
    <Section title="About Me">
      <Container>
        <span>
          Hello! I'm an experienced Senior Software Engineer with a passion for
          creating user-friendly and visually appealing experiences. Proficient
          in HTML, CSS, and JavaScript, I specialize in modern frameworks like
          React to build scalable and responsive applications. I thrive in
          collaborative, cross-functional teams, effectively communicating
          technical concepts. Committed to delivering high-quality code and
          proactive problem-solving, I stay updated with industry trends for
          cutting-edge contributions. I look forward to connecting and
          discussing how my skills can benefit your team and projects.
        </span>
        <Divider />
      </Container>
    </Section>
  );
};
