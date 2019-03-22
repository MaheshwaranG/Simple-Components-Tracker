export const service = {
  postApi,
  getApi,
  getAllComponentData
};

const URL = "http://localhost:36987";

async function getAllComponentData() {
  this.getApi("/api/getComponentData").then(data => {
    console.log(JSON.stringify(data));
    return Promise.resolve();
  });
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
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: data
  })
    .then(response => response.json())
    .then(data => data);
}
