import styled from "styled-components";

import { Section } from "../Section/Section";

const EXPERIENCES = [
  {
    title: "Senior Software Engineer - Launch by NTT DATA",
    dateText: "Jun. 2023 - Present",
    responsibilities: [
      "Lead the design and implementation of responsive and intuitive user interfaces for insurance applications, ensuring optimal user experience across various devices",
      "Demonstrate mastery in frontend frameworks such as React, utilizing component-based architectures to streamline development and enhance code maintainability",
      "Spearhead the migration of legacy frontend systems such as Backbone.js and jQuery to React, resulting in improvements in development efficiency",
      "Collaborate with backend teams to optimize API calls and improve overall frontend responsiveness",
    ],
  },
  {
    title: "Software Engineer — Postlight",
    dateText: "Jan. 2022 - Jun. 2023",
    responsibilities: [
      "Developed and maintained responsive and user-friendly web applications using React, ensuring a seamless and intuitive user experience",
      "Implemented UI features, leveraging state management libraries like Redux for efficient data flow and state synchronization",
      "Implemented unit tests using tools like Jest and React Testing Library, resulting in reductions in production bugs",
    ],
  },
  {
    title: "Solutions Engineer — Transperfect Legal Solutions",
    dateText: "Jul. 2017 - Jan. 2022",
    responsibilities: [
      "Led the development of frontend and backend features for an in-house processing application, excelling in data conversion from platforms like Slack, Asana, Zendesk, Mobile, and Social Media into attorney-reviewed documents",
      "Utilized third-party API services from providers such as Slack, Asana, and Zendesk for efficient data collection, contributing to the integration of relevant information",
    ],
  },
  {
    title: "Data Analyst — Transperfect Legal Solutions",
    dateText: "Mar. 2016 - Jul. 2017",
    responsibilities: [
      "Developed and implemented ETL pipelines for data processing, encompassing extraction, transformation, and loading of diverse datasets",
      "Utilized SQL to query databases, optimized performance, and conducted data analysis",
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
          <Section
            key={experience.title}
            subTitle={experience.title}
            dateText={experience.dateText}
          >
            <ResponsibilitiesContainer>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ResponsibilitiesContainer>
          </Section>
        ))}
        <Divider />
      </Container>
    </Section>
  );
};
