import React, { Component } from "react";
import { connect } from "react-redux";
import SideMenu from "./SIdeMenus";
import ContentArea from "./ContentArea";

class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SideMenu />
        <div className="mg-content-area">
          <ContentArea type="Content"/>
        </div>
      </div>
    );
  }
}

export default connect()(Body);
