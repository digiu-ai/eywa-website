import styled from "@emotion/styled";
import React from "react";
import { Column } from "@components/flex";
import Button from "@components/Button";
import TopMenu from "@components/TopMenu";
import Advantages from "@components/Advantages";
import { useLanguage } from "@src/hooks/useLang";
import {
  DEFAULT_BUTTON,
  PRIMARY_BUTTON,
  SUBTITLE,
  SUBTITLE_WITH,
  TITLE,
} from "@src/langConstants";
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
  const lang = useLanguage();
  return (
    <Root>
      <TopMenu />
      <Body>
        <Title>{TITLE[lang]}</Title>
        <Subtitle>
          {SUBTITLE_WITH[lang]}&nbsp;
          <span className="green">{SUBTITLE[lang]}</span>
        </Subtitle>
        <ButtonsWrapper>
          <Button primary>{PRIMARY_BUTTON[lang]}</Button>
          <Button>{DEFAULT_BUTTON[lang]}</Button>
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
