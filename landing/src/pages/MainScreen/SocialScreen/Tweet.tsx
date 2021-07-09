import styled from "@emotion/styled";
import React from "react";
import { Column, Row } from "@components/flex";
import TweetActivity from "@pages/MainScreen/SocialScreen/TweetActivity";

interface IProps {
  username?: string;
  minutes?: number;
  likes?: number;
  comments?: number;
}

const Root = styled.div`
  display: flex;
  //max-width: 410px;
  margin: 0 16px;
`;

const Name = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
`;
const Username = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  color: #5b7083;
`;
const Text = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  max-width: 320px;

  color: #0f1419;
`;
const Icon = styled.img`
  width: 48px;
  height: 48px;
  padding: 0 12px;
`;
const UserDetails = styled(Row)`
  & > * {
    margin-right: 4px;
  }
`;
const Tweet: React.FC<IProps> = ({ username = "eywa", minutes = 1 }) => {
  return (
    <Root>
      <Icon src="assets/img/eywa-comment-icon.svg" alt="icon" />
      <Column>
        <Row alignItems="center" style={{ paddingBottom: 3 }}>
          <UserDetails alignItems="center">
            <Name>{username.toUpperCase()}</Name>
            <Username>@{username}</Username>
            <img src="assets/img/dot.svg" />
            <Username>{minutes} min</Username>
          </UserDetails>
          <img src="assets/img/details-dots.svg" />
        </Row>
        <Text>
          EYWA is doing major work on Community-Driven Design, with several
          different variants. If you are working in this area, submit a paper to
          the DIS conference here in San Diego (see DesignLab posting below)....
          <div style={{ color: "#1DA1F2" }}>
            https://facebook.com/don.norman.18/...
          </div>
        </Text>
        <TweetActivity comments={3} likes={16} />
      </Column>
    </Root>
  );
};
export default Tweet;
