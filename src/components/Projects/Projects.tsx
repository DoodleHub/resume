import styled from "styled-components";

import { Section } from "../Section/Section";
import { Badge } from "../Badge/Badge";

const PROJECTS = [
  {
    title: "Movie Browser",
    type: "Web",
    stack: ["React", "styled-components"],
    url: "https://github.com/cc-sandbox/movie-browser",
  },
  {
    title: "Crwn Clothing (e-commerce)",
    type: "Web",
    stack: [
      "React",
      "Redux",
      "styled-components",
      "TypeScript",
      "Stripe",
      "Firebase",
    ],
    url: "https://github.com/cc-sandbox/crwn-clothing",
  },
  {
    title: "Employee Directory (frontend)",
    type: "Web",
    stack: ["React", "styled-components", "TypeScript"],
    url: "https://github.com/cc-sandbox/employee-dir-frontend",
  },
  {
    title: "Employee Directory (backend)",
    type: "Server",
    stack: ["Node.js", "Express.js", "MongoDB", "Swagger API"],
    url: "https://github.com/cc-sandbox/employee-dir-backend",
  },
  {
    title: "Meals To Go (food delivery)",
    type: "Mobile",
    stack: [
      "React Native",
      "Expo",
      "styled-components",
      "Firebase",
      "Stripe",
      "Google Maps API",
    ],
    url: "https://github.com/cc-sandbox/meals-to-go",
  },
  {
    title: "Fantasy Stock Market",
    type: "Mobile",
    stack: ["React Native", "Expo", "Firebase", "Tailwind CSS"],
    url: "https://github.com/cc-sandbox/fantasy-stock-market",
  },
];

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectItemContainer = styled.li`
  display: flex;
  align-items: start;
  gap: 8px;
  line-height: 20px;

  a {
    font-size: 20px;
    font-weight: 700;
    color: #0699a6;
  }
`;

const ProjectInfo = styled.div`
  display: flex
  flex-direction: column;
`;

export const Projects = () => {
  return (
    <Section subTitle="PROJECTS">
      <Container>
        {PROJECTS.map((project, idx) => (
          <ProjectItemContainer key={idx}>
            <Badge>{project.type}</Badge>
            <ProjectInfo>
              <a href={project.url}>{project.title}</a>
              <p>{`stack: ${project.stack.join(", ")}`}</p>
            </ProjectInfo>
          </ProjectItemContainer>
        ))}
      </Container>
    </Section>
  );
};
