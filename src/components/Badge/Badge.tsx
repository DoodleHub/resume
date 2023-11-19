import styled from "styled-components";

const Wrapper = styled.span`
  background-color: #0699a6;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  padding: 1px 4px;
  text-align: center;
  white-space: nowrap;
`;

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return <Wrapper>{children}</Wrapper>;
};
