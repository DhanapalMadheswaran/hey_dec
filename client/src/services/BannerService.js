import ApiService from "./ApiServices";

export default class BannerService extends ApiService {
  create = async (data) => {
    console.log(data);
    let Url = "http://localhost:5000/api/banner/";

    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

  update = async (data) => {
    let Url = "http://localhost:5000/api/banner/update/";

    let response = await this.put(Url, data);

    return response;
  };
}
