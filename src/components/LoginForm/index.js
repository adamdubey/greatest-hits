import React from "react";
import { MainContext } from "../../contexts/MainContext";

import LoginForm from "./LoginForm";

export default props => (
  <MainContext.Consumer>
    {({ loginModal, handleLoginClose, handleValidLogin }) => (
      <LoginForm
        {...props}
        loginModal={loginModal}
        handleLoginClose={handleLoginClose}
        handleValidLogin={handleValidLogin}
      />
    )}
  </MainContext.Consumer>
);

