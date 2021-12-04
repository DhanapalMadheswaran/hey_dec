import ApiService from "./ApiServices";

export default class OrderService extends ApiService {
  getAll = async (data) => {
    let Url = `http://localhost:5000/api/customers/${data}`;

    let response = await this.get(Url, data);

    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };
}
