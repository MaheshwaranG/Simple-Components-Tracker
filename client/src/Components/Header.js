import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Constants from "../Constants";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  //   static getDerivedS tateFromProps(nextProps, previous) {
  //     console.log(
  //       " willRecisiver " +
  //         JSON.stringify(nextProps) +
  //         "\n -------------" +
  //         JSON.stringify(previous)
  //     );
  //     console.log(
  //       "Example " + nextProps.auth.isUserLogin + " ++ " + previous.isUserLogin
  //     );
  //     let isUserLogin = nextProps.auth.isUserLogin;
  //     return { isUserLogin: nextProps.auth.isUserLogin };
  //   }
  render() {
    return <div className="mg-header-label">Components</div>;
  }
}

export default connect()(Header);
