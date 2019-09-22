import React from "react";
import { MainContext } from "../../contexts/MainContext";

import TaskList from "./TaskList";

export default props => (
  <MainContext.Consumer>
    {({ loggedIn }) => (
      <TaskList
        {...props}
        loggedIn={loggedIn}
      />
    )}
  </MainContext.Consumer>
);

