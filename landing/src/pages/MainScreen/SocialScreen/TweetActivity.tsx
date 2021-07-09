import styled from "@emotion/styled";
import React from "react";

interface IProps {
  comments?: number;
  likes?: number;
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 23px 0;
`;
const Amount = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #5b7083;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TweetActivity: React.FC<IProps> = ({ comments, likes }) => {
  return (
    <Root>
      <Wrap>
        <img src="assets/img/comment.svg" style={{ paddingRight: 5 }} />
        <Amount>{comments}</Amount>
      </Wrap>
      <img src="assets/img/shuffle.svg" />
      <Wrap>
        <img src="assets/img/comment.svg" style={{ paddingRight: 5 }} />
        <Amount>{likes}</Amount>
      </Wrap>
      <img src="assets/img/upload.svg" />
    </Root>
  );
};
export default TweetActivity;
