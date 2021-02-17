import React, { Component } from "react";
import HeaderComp from "../../Components/Header/Header";
import Categories from "../../Components/Categories/Categories";
class Layout extends Component {
  state = {
    navigationItems: [
      {
        name: "Link 1",
        link: "/link1",
        exact: true
      }
    ],
    categories: [
      {
        name: "Movies",
        link: "/movies",
        exact: true
      },
      {
        name: "TV Shows",
        link: "/tvshows",
        exact: true
      }
    ]
  };

  render() {
    return (
      <div>
        <HeaderComp navigationItems={this.state.navigationItems} />
        <Categories categories={this.state.categories} />
      </div>
    );
  }
}

export default Layout;
