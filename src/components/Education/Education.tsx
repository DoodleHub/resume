import styled from "styled-components";

import { Section } from "../Section/Section";

const GPA = styled.span`
  font-family: PT Sans Narrow;
  line-height: 8px;
`;

export const Education = () => {
  return (
    <Section
      title="Education"
      subTitle="BS in Applied Mathematics - City College of New York"
      dateText="Graduated 2015"
    >
      <GPA>GPA: 3.8</GPA>
    </Section>
  );
};
