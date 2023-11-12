import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 36px;
  line-height: 46px;
  font-weight: 900;
  margin-bottom: 6px;
  font-family: Playfair Display;
`;

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: PT Sans Narrow;
`;

const SubTitle = styled.span`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 700;
  color: #9e8c6c;
`;

const DateText = styled.span`
  font-size: 18px;
  line-height: 24px;
`;

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
  dateText?: string;
}

export const Section = ({
  children,
  title,
  subTitle,
  dateText,
}: SectionProps) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {subTitle && (
        <SubTitleContainer>
          <SubTitle>{subTitle}</SubTitle>
          <DateText>{dateText}</DateText>
        </SubTitleContainer>
      )}
      {children}
    </Wrapper>
  );
};
