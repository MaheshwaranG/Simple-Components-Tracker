import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/mg-styles.css";

class ContentArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="mg-row">
          <div className="mg-col" />
          <div className="mg-col" />
          <div className="mg-col" />
          <div className="mg-col" />
        </div>
      </div>
    );
  }
}

export default connect()(ContentArea);
