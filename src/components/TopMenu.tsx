import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { Row } from "@components/flex";
import SocialIcons from "@components/SocialIcons";
interface IProps {}

const Root = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;

const MenuLink = styled(Link)`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-right: 24px;
  color: #fff;
  text-decoration: none;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
  & > :last-of-type {
    margin-right: 0;
  }
`;

const TopMenu: React.FC<IProps> = () => {
  return (
    <Root>
      <Link to="/">
        <img src="assets/img/logo.svg" />
      </Link>
      <ItemsWrapper>
        <MenuLink to="/">ABOUT</MenuLink>
        <MenuLink to="/">TECHNOLOGY</MenuLink>
        <MenuLink to="/">COMmUNITY</MenuLink>
        <MenuLink to="/">GITHUB</MenuLink>
        <MenuLink to="/">CONTACTS</MenuLink>
        <SocialIcons />
      </ItemsWrapper>
    </Root>
  );
};
export default TopMenu;
