import Constants from "../Constants";

export const fetchAllData = () => dispatch => {
  const data = {
    data: "Sample Action Pass"
  };
  dispatch({
    type: Constants.actions.FETCH_ALL_DATA,
    data: data
  });
};
