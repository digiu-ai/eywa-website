import styled from "@emotion/styled";
import React from "react";
import { Column, Row } from "@components/flex";
import { ReactComponent as Logo } from "@assets/img/footer-logo.svg";
import SocialIcons from "@components/SocialIcons";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 37px 40px 43px 40px;
  //align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #060142;
  padding: 8px 0;
`;
const Subtitle = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: #060142;
  padding: 8px 0;
`;
const Text = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #060142;
`;
const GrayText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #060142;
  opacity: 0.5;
`;
const ExtendedColumn = styled(Column)`
  padding: 0 40px;
`;

const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Row>
        <Column>
          <Logo />
          <Text style={{ padding: "25px 0 16px" }}>
            Crosschain liquidity AMM DEX <br />
            and bridge protocol
          </Text>
          <GrayText>Copyright 2021 EYWA.FI</GrayText>
        </Column>
      </Row>
      <Row>
        <ExtendedColumn>
          <Title>General</Title>
          <Subtitle>About</Subtitle>
          <Subtitle>Team</Subtitle>
          <Subtitle>Career</Subtitle>
        </ExtendedColumn>
        <ExtendedColumn>
          <Title>Technology</Title>
          <Subtitle>Documentation</Subtitle>
          <Subtitle>Roadmap</Subtitle>
          <Subtitle>White Paper</Subtitle>
          <Subtitle>Pitch Desk</Subtitle>
        </ExtendedColumn>
        <ExtendedColumn>
          <Title>Community</Title>
          <Subtitle>Governance</Subtitle>
          <Subtitle>Blog</Subtitle>
          <Subtitle>Medium</Subtitle>
        </ExtendedColumn>
        <ExtendedColumn>
          <SocialIcons />
          <Row justifyContent="flex-end">
            <Title style={{ paddingRight: 10 }}>RU</Title>
            <Title>ENG</Title>
          </Row>
        </ExtendedColumn>
      </Row>
    </Root>
  );
};
export default Footer;
