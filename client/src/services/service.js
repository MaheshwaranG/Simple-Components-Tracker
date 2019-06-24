export const service = {
  postApi,
  getApi,
  getAllComponentData,
  getTest,
  saveAttributes
};

const URL = "http://localhost:36987";

function saveAttributes(attributesData) {
  return this.postApi("/api/insertSingleAttribute", attributesData);
}

function getTest() {
  return this.getApi("/check");
  // .then(data => {
  //   console.log(JSON.stringify(data));
  //   return data;
  // });
}

async function getAllComponentData() {
  this.getApi("/api/getComponentData");
  // .then(data => {
  //   console.log(JSON.stringify(data));
  //   return Promise.resolve();
  // });
}

function getApi(requestURL) {
  return fetch(`${URL}${requestURL}`, {
    method: "GET",
    credentials: "omit",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}

function postApi(requestURL, data) {
  return fetch(`${URL}${requestURL}`, {
    method: "POST",
    // mode: "cors",
    credentials: "include",
    // credentials: "omit",
    headers: {
      Accept: "application/json",
      // Origin: "http://localhost:3000", 
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "Content-Type, Authorization"
      // "Access-Control-Allow-Origin": "http://localhost:3000"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => data);
}
