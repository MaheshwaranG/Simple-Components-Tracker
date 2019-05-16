module.exports = {
  attributes,
  components
};

function attributes() {
  return {
    uuid: {
      name: "",
      havingComponents: [],
      inputFormat: [],
      inputType: "",
      isCortexSpecific: false,
      issue: "",
      description: "",
      createdUser: "",
      createdDate: "",
      updatedUser: "",
      updatedDate: ""
    }
  };
}

function components() {
  return {
    uuid: {
      name: "",
      isHavingAttribute: {
        name: "",
        status: false,
        issue: "",
        description: ""
      },
      isGroupComponent: false,
      status: false,
      issue: "",
      description: "",
      createdUser: "",
      createdDate: "",
      updatedUser: "",
      updatedDate: ""
    }
  };
}
