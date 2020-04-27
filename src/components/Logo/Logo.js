import React from "react";

import burgerLogo from "../../assets/images/Logo.png";

import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="BurgerBuilderLogo" />
  </div>
);

export default logo;
