import React, { Component } from "react";
import "./App.css";
import ColorMe from "./Components/ColorMe";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserSeearch from "./Components/UserSerach";
import Layout from "./Core/Containers/Layout/Layout";

class App extends Component {
  render() {
    return (
      <>
        <UserSeearch />
        {/* <ColorMe /> */}
      </>
    );
  }
}

export default App;
