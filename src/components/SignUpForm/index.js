import React from "react";
import { MainContext } from "../../contexts/MainContext";

import SignUpForm from "./SignUpForm";

export default props => (
  <MainContext.Consumer>
    {({ signUpModal, handleSignUpClose }) => (
      <SignUpForm
        {...props}
        signUpModal={signUpModal}
        handleSignUpClose={handleSignUpClose}
      />
    )}
  </MainContext.Consumer>
);

