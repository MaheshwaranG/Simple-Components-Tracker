import React, { Component } from "react";
import { connect } from "react-redux";
import { service } from "../services/service";
import * as action from "../actions/componentDataAction";

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Sidemenu did mount");
    service.getAllComponentData().then(data => {
      console.log("dsdjdsjgdsgdsggfd");
      this.props.getAllData(data);
    });
  }

  componentDidUpdate() {
    console.log(this.props.allProperties.start);
    console.log(this.props.componentData.start);
  }

  render() {
    return (
      <div>
        <div className="mg-sidemenu-search-area">SEarch Bar</div>
        <div className="mg-sidemenu-content-area">
          <h1> side menus </h1>
        </div>
        <div className="mg-sidemenu-footer-area">
          <button
            id="mg-component-add-button"
            name="mgComponentAddButton"
            value="C Add"
          >
            C Add
          </button>
          <button
            id="mg-attribute-add-button"
            name="mgAttributeAddButton"
            value="A Add"
          >
            A Add
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllData: data => dispatch(action.fetchAllData(data))
});

const mapStateToProps = state => ({
  componentData: state.allData.componentData,
  allProperties: state.allData.allProperties
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
