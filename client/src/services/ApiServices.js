import axios from "axios";
//import PersistentStorage from "../shared/PersistentStorage";

class ApiService {
  baseURL = "";
  headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  imageHeaders = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  //persistentStorage = new PersistentStorage();

  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(url) {
    this.setAuthorizationToken();

    let response = await axios.get(url, { headers: this.headers });
    if (response.status !== 200) {
      // TODO: Throw more specific errors
      throw Error(response.statusText);
    }
    return response;
  }

  async getImage(url) {
    this.setAuthorizationToken();
    let response = await axios.get(url, { headers: this.headers });
    if (response.status !== 200) {
      // TODO: Throw more specific errors
      throw Error(response.statusText);
    }
    return response;
  }

  async postImage(url, data) {
    this.setAuthorizationToken();
    let res = await axios.post(url, data, { headers: this.imageHeaders });
    if (res.status !== 200 && res.status !== 202) {
      // TODO: Throw more specific errors
      throw Error(res);
    }
    return res;
  }

  async post(url, data) {
    this.setAuthorizationToken();
    let res = await axios.post(url, data, { headers: this.headers });
    if (res.status !== 200 && res.status !== 202 && res.status !== 201) {
      // TODO: Throw more specific errors
      throw Error(res);
    }
    return res;
  }

  async put(url, data) {
    this.setAuthorizationToken();
    let res = await axios.put(url, data, { headers: this.headers });
    if (res.status !== 200 && res.status !== 202) {
      // TODO: Throw more specific errors
      throw Error(res);
    }
    return res;
  }

  setHeader(key, value) {
    this.headers[key] = value;
    this.imageHeaders[key] = value;
  }

  setAuthorizationToken() {
    this.setHeader("Authorization", "Bearer " + localStorage.getItem("token"));
  }

  generateCancelToken() {
    return axios.CancelToken.source();
  }

  setCancelToken(token) {
    this.headers["cancelToken"] = token;
  }

  queryParamString(queryParam) {
    let filterElement = queryParam.find((obj) => obj[0] === "filter");
    queryParam = queryParam.filter((obj) => obj[0] !== "filter");
    let filterKeys;
    let filterQueryParams = "";
    if (filterElement && filterElement[1]) {
      filterKeys = Object.keys(filterElement[1]);
      filterQueryParams =
        "filter=" +
        filterKeys.map((obj) => obj).join(",") +
        "&" +
        filterKeys
          .map(
            (obj) =>
              obj +
              "=" +
              filterElement[1][obj]
                .map((obj) => encodeURIComponent(obj))
                .join(",")
          )
          .join("&");
    }

    let otherQueries;
    if (queryParam.length > 0) {
      otherQueries = queryParam.map((obj) => obj.join("=")).join("&");
    }
    return "?" + filterQueryParams + "&" + otherQueries;
  }
}
export default ApiService;
