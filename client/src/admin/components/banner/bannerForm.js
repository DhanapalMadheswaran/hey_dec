import React from "react";
import FileUploadService from "../../../services/FileUploadService";

class BannerForm extends React.Component {
  imageref = React.createRef();
  fileuploadservice = new FileUploadService();
  constructor() {
    super();
    this.onFileChange = this.onFileChange.bind(this);

    this.state = {
      _id: "",
      bannerText: "",
      bannerRedirectUrl: "",
      image: null,
      isEdit: false,
      isImageUpdate: false,
    };
  }

  infoChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value });
  };
  onFileChange(e) {
    this.setState({ image: e.target.files[0] });
    if (this.state.isEdit) {
      this.setState({ isImageUpdate: true });
    }
  }

  handleSubmit = async (e) => {
    //Create
    const { bannerText, bannerRedirectUrl } = this.state;
    e.preventDefault();
    this.props.setLoader(true);
    if (!this.state.isEdit) {
      await this.fileuploadservice
        .uploadBanner(this.state.image)
        .then((res) => {
          this.props.myData({
            bannerText,
            bannerRedirectUrl,
            isEdit: false,
            image: res,
          });
          this.setState({
            bannerText: "",
            bannerRedirectUrl: "",
          });
          this.imageref.current.value = null;
        });
    }
    //update
    else {
      if (this.state.isImageUpdate) {
        await this.fileuploadservice
          .uploadBanner(this.state.image)
          .then((res) => {
            this.props.myData({
              ...this.state,
              image: res,
            });
            this.setState({
              bannerText: "",
              bannerRedirectUrl: "",
              isEdit: false,
              isImageUpdate: false,
            });
            this.imageref.current.value = null;
          });
      } else {
        this.props.myData({
          ...this.state,
        });
        this.setState({
          bannerText: "",
          bannerRedirectUrl: "",
          isEdit: false,
          isImageUpdate: false,
        });
        this.imageref.current.value = null;
      }
    }
  };

  componentWillReceiveProps(props) {
    if (props.setForm.edit) {
      this.setState({
        _id: props.setForm._id,
        bannerText: props.setForm.bannerText,
        isEdit: true,
        bannerRedirectUrl: props.setForm.redirectUrl,
        image: props.setForm.image,
        isImageUpdate: false,
      });
    } else {
      this.setState({
        isEdit: false,
        image: null,
        bannerText: "",
        bannerRedirectUrl: "",
        isImageUpdate: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Redirect URL:</label>
          <input
            type="text"
            className="form-control"
            onChange={this.infoChange}
            name="bannerRedirectUrl"
            value={this.state.bannerRedirectUrl}
          />
        </div>
        <div className="form-group">
          <label>Banner Text:</label>
          <input
            type="text"
            className="form-control"
            onChange={this.infoChange}
            name="bannerText"
            value={this.state.bannerText}
          />
        </div>
        <div className="form-group">
          <label>Banner Image:</label>
          <input
            type="file"
            name="image"
            className="form-control"
            ref={this.imageref}
            onChange={this.onFileChange}
          />
        </div>
        {this.state.isEdit ? (
          <img src={this.state.image.url} alt="" width={80} />
        ) : (
          <img src="" alt="" />
        )}
        <br />
        <button
          type="button"
          className="btn btn-default"
          onClick={this.handleSubmit}
        >
          {this.state.isEdit ? "Update" : "Create"}
        </button>
      </div>
    );
  }
}

export default BannerForm;
