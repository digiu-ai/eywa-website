import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

type TAdvantagesItem = {
  icon: JSX.Element;
  title: string;
  link: string;
};

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  items: TAdvantagesItem[];
  dark?: boolean;
}

const Root = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 80px 0 120px 0;
  box-sizing: border-box;
  background: transparent;
  text-align: center;

  .title {
    font-weight: 500;
    font-size: 48px;
    line-height: 50px;
    letter-spacing: 0.01em;
    color: ${({ dark }) => (dark ? "#fff" : "#03011F")};
    margin-bottom: 50px;
  }

  .description {
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 0.01em;
    color: ${({ dark }) => (dark ? "#fff" : "#03011F")};
    margin-bottom: 64px;
    white-space: pre-wrap;
  }
  .container {
    display: flex;
    justify-content: center;
    & > * {
      margin-right: 35px;
    }
    & > :last-of-type {
      margin-right: 0;
    }
    .box {
      box-sizing: border-box;
      flex: 1;
      background: ${({ dark }) => (dark ? "#171531" : "#F6F5F8")};
      ${({ dark }) =>
        dark && " box-shadow: 0px 2px 4px rgba(14, 86, 124, 0.165308)"};
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      padding: 36px 3px 24px 36px;
      max-width: 410px;
      .box-title {
        white-space: pre-wrap;
        text-align: start;
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        color: ${({ dark }) => (dark ? "#fff" : "#03011F")};
      }
      .link {
        font-weight: 500;
        font-size: 16px;
        line-height: 34px;
        color: #3bc199;
      }
    }
  }
`;

const Advantages: React.FC<IProps> = ({ title, subtitle, items, ...rest }) => {
  return (
    <Root {...rest}>
      <div className="title">{title}</div>
      <div className="description">{subtitle}</div>
      <div className="container">
        {items.map(({ icon, title, link }, i) => (
          <div key={i} className="box">
            {icon}
            <div className="box-title">{title}</div>
            <a className="link" href={link}>
              Learn more
            </a>
          </div>
        ))}
      </div>
    </Root>
  );
};
export default Advantages;
