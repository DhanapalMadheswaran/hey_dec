import ApiService from "./ApiServices";

export default class VendorServices extends ApiService {
  getAllVendors = async (data) => {
    let Url = "http://localhost:5000/api/vendor/";

    let response = await this.get(Url);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

  getAllVendorsByCategory = async (data) => {
    let Url = "http://localhost:5000/api/vendor/getAllVendorsByCategory";

    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    console.log(response);
    return response;
  };

  create = async (data) => {
    let Url = "http://localhost:5000/api/vendor/";

    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

  update = async (data) => {
    let Url = "http://localhost:5000/api/vendor/update";

    let response = await this.put(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };
}
