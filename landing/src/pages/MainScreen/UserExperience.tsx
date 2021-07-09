import React from "react";
import Advantages from "@components/Advantages";

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
        icon: <img src="assets/img/tokens1.svg" />,
        title: "Move your tokens to \nany blockchain",
        link: "/",
      },
      {
        icon: <img src="assets/img/tokens2.svg" />,
        title: "Pay comission with your \nfavorite assets",
        link: "/",
      },
      {
        icon: <img src="assets/img/tokens3.svg" />,
        title: "Cross-chain stable coin \nyield farming",
        link: "/",
      },
    ]}
  />
);
export default UserExperience;
