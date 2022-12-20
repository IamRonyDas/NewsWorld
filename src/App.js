// import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./Components/Navbar";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import New from "./Components/New";

export default class App extends Component {
  render() {
    return <div>
<Navbar/>
<New/>
    </div>;
  }
}
