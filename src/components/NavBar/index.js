import React from "react";
import { MainContext } from "../../contexts/MainContext";

import NavBar from "./NavBar";

export default props => (
  <MainContext.Consumer>
    {({ handleMenuItemClick }) => (
      <NavBar
        {...props}
        handleMenuItemClick={handleMenuItemClick}
      />
    )}
  </MainContext.Consumer>
);

