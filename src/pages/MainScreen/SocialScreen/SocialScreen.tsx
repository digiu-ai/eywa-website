import styled from "@emotion/styled";
import React from "react";
import {Row} from "@components/flex";
import MainCard from "@pages/MainScreen/SocialScreen/MainCard";
import SocialIcons from "@components/SocialIcons";
import Tweet from "@pages/MainScreen/SocialScreen/Tweet";
import digiu from "@assets/img/digiu.svg";
import brCapital from "@assets/img/br-capital.png";
import {ReactComponent as Logo} from "@assets/img/bigLogo.svg";

interface IProps {
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #03011f;
  padding: 90px 0 100px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 62px;

  text-align: center;
  letter-spacing: 1px;

  color: #ffffff;
  padding-bottom: 50px;
`;

const LearMore = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 34px;
  color: #3bc199;
  cursor: pointer;
`;
const TweeetsWrapper = styled(Row)`
  background: #ffffff;
  border-radius: 8px;
  max-width: 1307px;
  padding: 28px 4px;
  margin: 17px;

  & > * {
    margin-left: 0;
  }

  & > :last-of-type {
    margin-right: -18px;
  }
`;
const SupportedBy = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #8B92A8;
  padding: 80px 0 60px;

`;

const SocialScreen: React.FC<IProps> = () => {
    return (
        <Root>
            <Title>Join EYWA</Title>
            <Row justifyContent="center">
                <MainCard
                    title="Community"
                    subtitle="Learn more about EYWA, chat with the team, and be the part of our growing community."
                >
                    <SocialIcons/>
                </MainCard>
                <MainCard
                    title="EYWA Relayers Network launch program"
                    subtitle="Participate in the protocol Beta testing and get extra rewards."
                >
                    <LearMore>
                        <div>Lear more</div>
                        <Logo/>
                    </LearMore>
                </MainCard>
            </Row>
            <TweeetsWrapper>
                <Tweet/>
                <Tweet/>
                <Tweet/>
            </TweeetsWrapper>
            <SupportedBy>Supported by</SupportedBy>
            <Row justifyContent='center' alignItems="center">
                <img src={digiu} alt='digiu'/>
                <img src={brCapital} alt='brCapital' style={{marginLeft: 50, width: 180}}/>
            </Row>
        </Root>
    );
};
export default SocialScreen;
