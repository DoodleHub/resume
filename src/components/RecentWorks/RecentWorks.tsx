import styled from "styled-components";

import { Section } from "../Section/Section";

const RECENT_WORKS = [
  {
    title: "Placeholder",
    url: "#",
  },
  {
    title: "Placeholder",
    url: "#",
  },
  {
    title: "Placeholder",
    url: "#",
  },
  {
    title: "Placeholder",
    url: "#",
  },
  {
    title: "Placeholder",
    url: "#",
  },
  {
    title: "Placeholder",
    url: "#",
  },
];

const Container = styled.ul`
  display: flex;
  flex-direction: column;

  a {
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    color: #0699a6;
  }
`;

export const RecentWorks = () => {
  return (
    <Section subTitle="RECENT WORKS">
      <Container>
        {RECENT_WORKS.map((skill, idx) => (
          <li key={idx}>
            <a href={skill.url}>{skill.title}</a>
          </li>
        ))}
      </Container>
    </Section>
  );
};
