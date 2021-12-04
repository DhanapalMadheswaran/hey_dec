import ApiService from "./ApiServices";

export default class FileUploadService extends ApiService {
  upload = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "category");
    formData.append("cloud_name", "dsczip846");
    const url = "https://api.cloudinary.com/v1_1/dsczip846/image/upload";
    return fetch(url, { method: "post", body: formData })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  };

  uploadSlider = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "slider");
    formData.append("cloud_name", "dsczip846");
    const url = "https://api.cloudinary.com/v1_1/dsczip846/image/upload";
    return fetch(url, { method: "post", body: formData })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  };

  uploadBanner = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "banner");
    formData.append("cloud_name", "dsczip846");
    const url = "https://api.cloudinary.com/v1_1/dsczip846/image/upload";
    return fetch(url, { method: "post", body: formData })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  };

  vendorupload = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "vendor");
    formData.append("cloud_name", "dsczip846");
    const url = "https://api.cloudinary.com/v1_1/dsczip846/image/upload";
    return fetch(url, { method: "post", body: formData })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  };
}
