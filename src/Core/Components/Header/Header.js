import React from "react";
import { NavLink } from "react-router-dom";
import * as classes from "./Header.module.css";

const header = props => {
  const navigation = props.navigationItems.map(navigationItem => (
    <li className={classes.NavigationItem} key={navigationItem.link}>
      <NavLink to={navigationItem.link} exact={navigationItem.exact}>
        {navigationItem.name}
      </NavLink>
    </li>
  ));
  return (
    <div className={classes.Header}>
      <h2>IMR</h2>
      <nav>
        <ul className={classes.NavigationItems}>
          {navigation}
          <li className={classes.NavigationItem}>
            <NavLink to="/auth" exact={true}>
              LOGIN
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
