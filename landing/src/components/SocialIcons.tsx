import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 16px;
  }

  & > :last-of-type {
    margin-right: 0;
  }
`;

const SocialIcons: React.FC<IProps> = () => {
  return (
    <Root>
      <Link to="/">
        <img
          src="assets/img/facebook.svg"
          style={{ background: "#fff", borderRadius: "50%" }}
        />
      </Link>
      <Link to="/">
        <img
          src="assets/img/telegram.svg"
          style={{ background: "#fff", borderRadius: "50%" }}
        />
      </Link>
      <Link to="/">
        <img
          src="assets/img/twitter.svg"
          style={{ background: "#fff", borderRadius: "50%" }}
        />
      </Link>
    </Root>
  );
};
export default SocialIcons;
