import React from "react";

import classes from "./Categories.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const categories = props => {
  return (
    <div className={classes.Categories}>
      <NavigationItems links={props.categories} />
    </div>
  );
};

export default categories;
