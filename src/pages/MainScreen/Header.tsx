import styled from "@emotion/styled";
import React from "react";
import { Column } from "@components/flex";
import Button from "@components/Button";
import TopMenu from "@components/TopMenu";
import Advantages from "@components/Advantages";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #03011f;
  box-sizing: border-box;
  padding: 37px 40px 0 40px;
`;

const Body = styled(Column)`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
  margin: 0;
  @media (max-width: 1340px) {
    height: auto;
    margin: 325px 0;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 80px;
  line-height: 72px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const Subtitle = styled.div`
  font-size: 32px;
  line-height: 72px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  margin-bottom: 78px;

  .green {
    color: #3bc199;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    margin-left: 16px;
  }

  & > :first-of-type {
    margin: 0;
  }
`;

const Header: React.FC<IProps> = () => {
  return (
    <Root>
      <TopMenu />
      <Body>
        <Title>Cross-chain Liquidity Freedom</Title>
        <Subtitle>
          with&nbsp;
          <span className="green">EYWA Multichain DEX and Bridge Protocol</span>
        </Subtitle>
        <ButtonsWrapper>
          <Button primary>LAUNCH APP</Button>
          <Button>DOCS</Button>
        </ButtonsWrapper>
      </Body>
      <Advantages
        dark
        title="Multichain Automated Marketplace"
        subtitle={
          "EYWA protocol empowers developers, liquidity providers and traders to participate\nin a cross-chain financial marketplace that is open and accessible to all."
        }
        items={[
          {
            icon: <img src="assets/img/swap.svg" />,
            title: "Cross-chain swap \nand bridge",
            link: "/",
          },
          {
            icon: <img src="assets/img/database.svg" />,
            title: "Cross-chain liquidity pools\nand yield farming",
            link: "/",
          },
          {
            icon: <img src="assets/img/cross-chain.svg" />,
            title: "EYWA relayers network",
            link: "/",
          },
        ]}
      />
    </Root>
  );
};
export default Header;
