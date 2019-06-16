import React, { Component } from "react";
import { connect } from "react-redux";
import { service } from "../services/service";
import * as action from "../actions/componentDataAction";
import CreateAttributeDialog from "./CreateAttributeDialog";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
    };
    this.openAttributeDialog = this.openAttributeDialog.bind(this);
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

  openAttributeDialog() {
    this.setState({ isDialogOpen: true });
  }

  openComponentDialog = () => {
    console.log("sdfsf ");
    service.getTest().then(data => {
      console.log("dsdjdsjgdsgdsggfd ++++++++==" + data);
    });
  };

  render() {
    return (
      <div>
        <div className="mg-side-menu">
          <div className="mg-sidemenu-search-area">SEarch Bar</div>
          <div className="mg-sidemenu-content-area">
            <h1> side menus </h1>
          </div>
          {/* <div className="mg-sidemenu-footer-area" /> */}
        </div>
        <CreateAttributeDialog
          isOpen={this.state.isDialogOpen ? true : false}
          test="sample"
          start="asdsad"
          title="Create Attribute"
        />
        <div className="mg-float-area">
          <button
            id="mg-component-add-button"
            name="mgComponentAddButton"
            value="C Add"
            className="mg-float-button"
            onClick={this.openComponentDialog}
          >
            C
          </button>
          <button
            id="mg-attribute-add-button"
            name="mgAttributeAddButton"
            value="A Add"
            style={{ left: "2px" }}
            className="mg-float-button"
            onClick={this.openAttributeDialog}
          >
            A
            {/* box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19); */}
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
