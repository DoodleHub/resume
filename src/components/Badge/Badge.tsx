import styled from "styled-components";

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0699a6;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  padding: 2px 4px;
  white-space: nowrap;
`;

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return <Wrapper>{children}</Wrapper>;
};
