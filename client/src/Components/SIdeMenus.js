import React, { Component } from "react";
import { connect } from "react-redux";
import { service } from "../services/service";

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Sidemenu did mount");
    service.getAllComponentData();
  }
  render() {
    return <h1> side menus </h1>;
  }
}

export default connect()(SideMenu);
