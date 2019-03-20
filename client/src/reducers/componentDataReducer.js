import Constants from "../Constants";
let initialState = {
  allProperties: null,
  ComponentData: null
};
//  djdj
export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.actions.FETCH_ALL_DATA:
      return {
        allProperties: { start: "Data" },
        ComponentData: { start: "COmponenet" }
      };
    default:
      return state;
  }
};
