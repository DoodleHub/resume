import styled from "styled-components";

import { Section } from "../Section/Section";
import { Badge } from "../Badge/Badge";

const PROJECTS = [
  {
    title: "Movie Browser",
    type: "Web",
    stack: ["React", "styled-components"],
    url: "https://github.com/doodlehub/movie-browser",
    description:
      "A web-based movie browser that allows users to explore films, unveiling cast details and ratings.",
  },
  {
    title: "Crwn Clothing",
    type: "Web",
    stack: [
      "React",
      "Redux",
      "styled-components",
      "TypeScript",
      "Stripe",
      "Firebase",
    ],
    url: "https://github.com/doodlehub/crwn-clothing",
    description:
      "A web-based e-commerce application that allows users to facilitate clothing exploration and purchasing experiences.",
  },
  {
    title: "Employee Directory (Frontend)",
    type: "Web",
    stack: ["React", "styled-components", "TypeScript"],
    url: "https://github.com/doodlehub/employee-dir-frontend",
    description:
      "A web-based employee directory that allows access to a random sample set of employee information.",
  },
  {
    title: "Employee Directory (Backend)",
    type: "Server",
    stack: ["Node.js", "Express.js", "MongoDB", "Swagger API"],
    url: "https://github.com/doodlehub/employee-dir-backend",
    description:
      "A web server providing REST API endpoints for access and management of the employee directory application.",
  },
  {
    title: "Meals To Go",
    type: "Mobile",
    stack: [
      "React Native",
      "Expo",
      "styled-components",
      "Firebase",
      "Stripe",
      "Google Maps API",
    ],
    url: "https://github.com/doodlehub/meals-to-go",
    description:
      "A mobile food delivery app enabling users to locate restaurants on a map, place orders, and make secure payments.",
  },
  {
    title: "Fantasy Stock Market",
    type: "Mobile",
    stack: ["React Native", "Expo", "Firebase", "Tailwind CSS"],
    url: "https://github.com/doodlehub/fantasy-stock-market",
    description:
      "A mobile fantasy stock draft app, fostering real-time engagement by enabling users to participate in live stock drafts with peers, complemented by an integrated social media feature for market discussions and community interaction.",
  },
];

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;

  a {
    font-size: 20px;
    font-weight: 700;
    color: #0699a6;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`;

export const Projects = () => {
  return (
    <Section subTitle="PROJECTS">
      <Container>
        {PROJECTS.map((project) => (
          <li key={project.title}>
            <span>
              <a href={project.url}>{project.title}</a>
            </span>
            <p>{project.description}</p>
            <Stack>
              {project.stack.map((s, idx) => (
                <Badge key={idx}>{s}</Badge>
              ))}
            </Stack>
          </li>
        ))}
      </Container>
    </Section>
  );
};
