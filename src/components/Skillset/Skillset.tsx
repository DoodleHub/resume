import styled from "styled-components";

import { Section } from "../Section/Section";

const SKILLS = [
  "HTML",
  "CSS",
  "Javascript",
  "SQL",
  "React",
  "Next.js",
  "Redux",
  "React Native",
  "styled-components",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "Firebase",
  "GraphQL",
];

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 32px;
`;

export const Skillset = () => {
  return (
    <Section subTitle="SKILLSET">
      <Container>
        {SKILLS.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </Container>
    </Section>
  );
};
