import styled from "styled-components";

const Wrapper = styled.span`
  background-color: #0699a6;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid;
  min-width: 48px;
  text-align: center;
`;

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return <Wrapper>{children}</Wrapper>;
};
