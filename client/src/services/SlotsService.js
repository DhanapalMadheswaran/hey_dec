import ApiService from "./ApiServices";

export default class SlotsService extends ApiService {
  create = async (data) => {
    let Url = "http://localhost:5000/api/slots/add/";

    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };
  //get slots mapping
  getAll = async (data) => {
    let Url = `http://localhost:5000/api/slots/getAllById/${data}`;

    let response = await this.get(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };
  //create slots
  update = async (data) => {
    let Url = "http://localhost:5000/api/slots/update";

    let response = await this.put(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };
  //get Slots
  getSlots = async (data) => {
    let Url = `http://localhost:5000/api/slots/getSlots/${data}`;

    let response = await this.get(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };
}
