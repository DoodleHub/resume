import styled from "styled-components";

import { Section } from "../Section/Section";

const EXPERIENCES = [
  {
    title: "Senior Software Engineer - Launch by NTT DATA",
    dateText: "Jun. 2023 - Present",
    responsibilities: [
      "Led the design and implementation of responsive and intuitive user interfaces for insurance applications, ensuring optimal user experience across various devices",
      "Demonstrated mastery in frontend frameworks such as React, utilizing component-based architectures to streamline development and enhance code maintainability",
      "Spearheaded the migration of legacy frontend systems such as Backbone.js and jQuery to React, resulting in improvements in development efficiency",
      "Collaborated with backend teams to optimize API calls and improve overall frontend responsiveness",
      "Implemented performance optimization techniques, including code splitting and lazy loading, resulting in reductions in page load times for critical workflows",
    ],
  },
  {
    title: "Software Engineer — Postlight",
    dateText: "Jan. 2022 - Jun. 2023",
    responsibilities: [
      "Developed and maintained responsive and user-friendly web applications using React, ensuring a seamless and intuitive user experience",
      "Implemented complex UI features, leveraging state management libraries like Redux for efficient data flow and state synchronization",
      "Designed and implemented reusable and modular components, promoting a component-based architecture that enhanced code maintainability and scalability",
      "Implemented unit tests using tools like Jest and React Testing Library, resulting in reductions in production bugs",
    ],
  },
  {
    title: "Solutions Engineer — Transperfect Legal Solutions",
    dateText: "Jul. 2017 - Jan. 2022",
    responsibilities: [
      "Led the development of frontend and backend features for an in-house processing application, excelling in data conversion from platforms like Slack, Asana, Zendesk, Mobile, and Social Media into attorney-reviewed documents",
      "Utilized third-party API services from providers such as Slack, Asana, and Zendesk for efficient data collection, contributing to the seamless integration of relevant information",
    ],
  },
  {
    title: "Data Analyst — Transperfect Legal Solutions",
    dateText: "Mar. 2016 - Jul. 2017",
    responsibilities: [
      "Developed and implemented efficient ETL pipelines for seamless data processing, encompassing extraction, transformation, and loading of diverse datasets",
      "Utilized SQL expertise to query databases, optimized performance, and conducted thorough data analysis, producing valuable insights to drive decision-making processes",
    ],
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
  font-size: 20px;
  line-height: 32px;
  font-family: PT Sans Narrow;
`;

const Divider = styled.div`
  height: 10px;
  width: 71px;
  background-color: #0699a6;
`;

const ResponsibilitiesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  line-height: 28px;

  li {
    display: flex;
    gap: 8px;

    &:before {
      content: "-";
    }
  }
`;

export const Experiences = () => {
  return (
    <Section title="Experience">
      <Container>
        {EXPERIENCES.map((experience) => (
          <Section subTitle={experience.title} dateText={experience.dateText}>
            <ResponsibilitiesContainer>
              {experience.responsibilities.map((responsibility) => (
                <li>{responsibility}</li>
              ))}
            </ResponsibilitiesContainer>
          </Section>
        ))}
        <Divider />
      </Container>
    </Section>
  );
};
