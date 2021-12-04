import ApiService from "./ApiServices";

export default class SliderService extends ApiService {
  create = async (data) => {
    console.log(data);
    let Url = "http://localhost:5000/api/slider/";

    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

  update = async (data) => {
    let Url = "http://localhost:5000/api/slider/update/";

    let response = await this.put(Url, data);

    return response;
  };
}
