import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Route, Switch } from "react-router-dom";
import MainScreen from "@pages/MainScreen";

const Root = styled.div`
  @media (max-width: 1340px) {
    width: 1920px;
  }
`;

enum ROUTES {
  root = "/",
}

const App = () => {
  return (
    <Root>
      <Switch>
        <Route path={ROUTES.root}>
          <MainScreen />
        </Route>
      </Switch>
    </Root>
  );
};

export default App;
