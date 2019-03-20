import React, { Component } from "react";
import { connect } from "react-redux";
import SideMenu from "./SIdeMenus";

class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="mg-side-menu">
          <SideMenu />
        </div>
        <div className="mg-content-area">
        </div>
      </div>
    );
  }
}

export default connect()(Body);
