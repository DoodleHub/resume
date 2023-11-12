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
          Greetings! I'm a seasoned Senior Frontend Engineer passionate about
          crafting seamless and visually stunning user experiences. With a
          strong foundation in HTML, CSS, and JavaScript, I specialize in modern
          frameworks like React, delivering scalable and responsive
          applications. My collaborative spirit shines in cross-functional
          teams, where I communicate technical concepts effectively. Committed
          to high-quality code and proactive problem-solving, I stay current
          with industry trends to ensure cutting-edge contributions. Let's
          connect and explore how my expertise can elevate your team and
          projects.
        </span>
        <Divider />
      </Container>
    </Section>
  );
};
