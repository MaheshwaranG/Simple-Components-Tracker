import React, { Component } from "react";
import { connect } from "react-redux";
import Constants from "../Constants";
import "../styles/mg-styles.css";
import { service } from "../services/service";

class CreateAttributeDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      isFromState: false,
      attributes: {
        name: "ss",
        desc: "sds",
        issue: "sds",
        inputType: "sds",
        inputFormat: "sds"
      },
      style: {
        row: {
          backgroundColor: "red",
          overflow: "hidden",
          justifyContent: "flex-start",
          backgroundColor: "transparant"
        },
        colLabel: {
          width: "160px",
          justifyContent: "flex-end",
          padding: "0 6px",
          whiteSpace: "nowrap",
          backgroundColor: "transparant"
        },
        ColInput: {
          width: "calc(100% - 212px)",
          justifyContent: "flex-start",
          padding: "0 6px",
          backgroundColor: "transparant"
        }
      }
    };
    this.closeDialog = this.closeDialog.bind(this);
    this.windowClickListners = this.windowClickListners.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.saveAttribute = this.saveAttribute.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onIssueChange = this.onIssueChange.bind(this);
    this.onInputTypeChange = this.onInputTypeChange.bind(this);
    this.onInputFormateChange = this.onInputFormateChange.bind(this);
  }

  onNameChange(event) {
    this.setState({
      attributes: { ...this.state.attributes, name: event.target.value }
    });
  }
  onDescChange(event) {
    this.setState({
      attributes: { ...this.state.attributes, desc: event.target.value }
    });
  }
  onIssueChange(event) {
    this.setState({
      attributes: { ...this.state.attributes, issue: event.target.value }
    });
  }
  onInputTypeChange(event) {
    this.setState({
      attributes: { ...this.state.attributes, inputType: event.target.value }
    });
  }
  onInputFormateChange(event) {
    this.setState({
      attributes: { ...this.state.attributes, inputFormat: event.target.value }
    });
  }

  saveAttribute() {
    console.log("Save Attribute " + JSON.stringify(this.state.attributes));
    service.saveAttributes(this.state.attributes).then(data => {
      console.log(JSON.stringify(data));
    });
  }

  windowClickListners(event) {
    let modal = document.getElementById("mg-attribute-modal");
    if (event.target === modal) {
      this.setState({ isOpen: false, isFromState: true });
    }
  }

  handleResize(e) {}

  componentDidMount() {
    // window.addEventListener("onclick", this.windowClickListners);
    window.onclick = this.windowClickListners;
  }
  componentWillUnmount() {
    window.onclick = null;
    console.log("create Attribute unmount");
    // window.removeEventListener("mousedown", this.windowClickListners);
    // window.removeEventListener("resize", this.handleResize);
  }

  static getDerivedStateFromProps(nextProps, previous) {
    if (nextProps.isOpen !== previous.isOpen && previous.isFromState === true) {
      return { isOpen: previous.isOpen, isFromState: false };
    } else if (nextProps.isOpen !== previous.isOpen) {
      return { isOpen: nextProps.isOpen };
    }
    return { isFromState: false };
  }
  closeDialog() {
    let item = document.getElementById("mg-attribute-modal");
    this.setState({ isOpen: false, isFromState: true });
  }

  render() {
    return (
      <div
        id="mg-attribute-modal"
        className="mg-modal"
        style={{ display: this.state.isOpen ? "block" : "none" }}
      >
        <div className="mg-modal-content">
          <div className="mg-modal-header">
            <span className="mg-close" onClick={this.closeDialog}>
              &times;
            </span>
            <h2>{this.props.title}</h2>
          </div>
          <div className="mg-modal-body">
            <div className="mg-row" style={this.state.style.row}>
              <div className="mg-col" style={this.state.style.colLabel}>
                <div className="mg-label">
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div className="mg-col" style={this.state.style.ColInput}>
                <input
                  type="text"
                  id="mg-ad-attribute-name"
                  name="mgADAttributeName"
                  placeholder="placeholder"
                  value={this.state.attributes.name}
                  onChange={event => this.onNameChange(event)}
                />
              </div>
            </div>
            <div
              className="mg-row"
              style={{ ...this.state.style.row, height: "auto" }}
            >
              <div className="mg-col" style={this.state.style.colLabel}>
                <div className="mg-label">
                  <label htmlFor="description">Desc </label>
                </div>
              </div>
              <div className="mg-col" style={this.state.style.ColInput}>
                <textarea
                  id="mg-ad-attribute-description"
                  name="mgADAttributeDescription"
                  placeholder="It used for"
                  value={this.state.attributes.desc}
                  onChange={event => this.onDescChange(event)}
                />
              </div>
            </div>
            <div
              className="mg-row"
              style={{ ...this.state.style.row, height: "auto" }}
            >
              <div className="mg-col" style={this.state.style.colLabel}>
                <div className="mg-label">
                  <label htmlFor="issues">Issue </label>
                </div>{" "}
              </div>
              <div className="mg-col" style={this.state.style.ColInput}>
                <textarea
                  id="mg-ad-attribute-issues"
                  name="mgADAttributeIssues"
                  placeholder="It has issue"
                  value={this.state.attributes.issue}
                  onChange={event => this.onIssueChange(event)}
                />
              </div>
            </div>
            <div className="mg-row" style={this.state.style.row}>
              <div className="mg-col" style={this.state.style.colLabel}>
                <div className="mg-label">
                  <label htmlFor="input-format">Input Format </label>
                </div>
              </div>
              <div className="mg-col" style={this.state.style.ColInput}>
                <input
                  type="text"
                  id="mg-ad-attribute-input-format"
                  name="mgADAttributeInputFormat"
                  placeholder="2019/02/32"
                  onChange={event => this.onInputFormateChange(event)}
                />
              </div>
            </div>
            <div className="mg-row" style={this.state.style.row}>
              <div className="mg-col" style={this.state.style.colLabel}>
                <div className="mg-label">
                  <label htmlFor="input-type">Input Type </label>
                </div>
              </div>
              <div className="mg-col" style={this.state.style.ColInput}>
                <input
                  type="text"
                  list="mgADAttributeType"
                  name="mgADAttributeType"
                  id="mg-ad-attribute-input-type"
                  onChange={event => this.onInputTypeChange(event)}
                />
                <datalist id="mgADAttributeType">
                  <option value="string">string</option>
                  <option value="number">number</option>
                  <option value="date">date</option>
                  <option value="boolean">boolean</option>
                  <option value="time">time</option>
                  <option value="datetime">datetime</option>
                </datalist>
              </div>
            </div>
          </div>
          <div className="mg-modal-footer">
            <div className="mg-row-right">
              <button
                name="mg-attribute-create-ok"
                className="mg-button"
                onClick={this.saveAttribute}
              >
                Ok
              </button>
              <button
                name="mg-attribute-create-cancel"
                className="mg-button"
                onClick={this.closeDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAttributeDialog;
