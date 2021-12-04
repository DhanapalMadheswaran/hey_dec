import ApiService from "./ApiServices";

export default class CategoryService extends ApiService {
  create = async (data) => {
    let Url = "http://localhost:5000/api/items/";

    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

  update = async (data) => {
    let Url = "http://localhost:5000/api/items/update/";

    let response = await this.put(Url, data);

    return response;
  };
}
