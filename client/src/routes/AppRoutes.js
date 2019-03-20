import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import * as actions from "../actions/componentDataAction";
import Header from "../Components/Header";
import Body from "../Components/Body";
import { create } from "domain";

export const history = createHistory();
class AppRouter extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Router screen DId mount");
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <div className="mg-header">
            <Header />
          </div>
          <div className="mg-content">
            <Switch>
              <Route path="/" component={Body} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(AppRouter);
