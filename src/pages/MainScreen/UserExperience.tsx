import React from "react";
import Advantages from "@components/Advantages";
import { ReactComponent as Tokens1 } from "@assets/img/tokens1.svg";
import { ReactComponent as Tokens2 } from "@assets/img/tokens2.svg";
import { ReactComponent as Tokens3 } from "@assets/img/tokens3.svg";

interface IProps {}

const UserExperience: React.FC<IProps> = () => (
  <Advantages
    style={{ paddingLeft: 40, paddingRight: 40 }}
    title="Better User Experience"
    subtitle={
      "Single platform that allows for multiple chains. We believe that ultimately, decentralized apps \nwill rely on the execution of multiple smart contracts, across multiple blockchains."
    }
    items={[
      {
        icon: <Tokens1 />,
        title: "Move your tokens to \nany blockchain",
        link: "/",
      },
      {
        icon: <Tokens2 />,
        title: "Pay comission with your \nfavorite assets",
        link: "/",
      },
      {
        icon: <Tokens3 />,
        title: "Cross-chain stable coin \nyield farming",
        link: "/",
      },
    ]}
  />
);
export default UserExperience;
