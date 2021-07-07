import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Comment } from "@assets/img/comment.svg";
import { ReactComponent as Shuffle } from "@assets/img/shuffle.svg";
import { ReactComponent as Like } from "@assets/img/like.svg";
import { ReactComponent as Upload } from "@assets/img/upload.svg";

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
        <Comment style={{ paddingRight: 5 }} /> <Amount>{comments}</Amount>
      </Wrap>
      <Shuffle />
      <Wrap>
        <Like style={{ paddingRight: 5 }} /> <Amount>{likes}</Amount>
      </Wrap>
      <Upload />
    </Root>
  );
};
export default TweetActivity;
