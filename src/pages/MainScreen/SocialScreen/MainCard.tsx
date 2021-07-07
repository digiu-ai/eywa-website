import styled from "@emotion/styled";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  margin: 17px;

  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  max-width: 640px;
  height: 390px;
  padding: 50px 40px;
`;
const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1px;
  padding-bottom: 20px;
`;
const Subtitle = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: #03011f;
  padding-bottom: 30px;
`;

const MainCard: React.FC<IProps> = ({ title, subtitle, children }) => {
  return (
    <Root>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Root>
  );
};
export default MainCard;
