import React from "react";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

const navigationItems = props => {
  const navItems = props.links.map(link => (
    <li className={classes.NavigationItem}>
      <NavLink to={link.link}>{link.name}</NavLink>
    </li>
  ));
  return <ul className={classes.NavigationItems}>{navItems}</ul>;
};

export default navigationItems;
