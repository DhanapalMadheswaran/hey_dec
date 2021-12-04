import React from "react";
import FileUploadService from "../../../services/FileUploadService";

class SliderForm extends React.Component {
  imageref = React.createRef();
  fileuploadservice = new FileUploadService();
  constructor() {
    super();
    this.onFileChange = this.onFileChange.bind(this);

    this.state = {
      _id: "",
      sliderText: "",
      sliderRedirectUrl: "",
      image: null,
      isEdit: false,
      isImageUpdate: false,
    };
  }

  infoChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value });
    console.log(this.state);
  };

  onFileChange(e) {
    this.setState({ image: e.target.files[0] });
    if (this.state.isEdit) {
      this.setState({ isImageUpdate: true });
    }
  }

  handleSubmit = async (e) => {
    const { sliderText, sliderRedirectUrl } = this.state;
    //Create
    e.preventDefault();
    this.props.setLoader(true);
    if (!this.state.isEdit) {
      await this.fileuploadservice
        .uploadSlider(this.state.image)
        .then((res) => {
          this.props.myData({
            sliderText,
            sliderRedirectUrl,
            isEdit: false,
            image: res,
          });
          this.setState({
            sliderText: "",
            sliderRedirectUrl: "",
          });
          this.imageref.current.value = null;
        });
    }
    //update
    else {
      //is image changed
      if (this.state.isImageUpdate) {
        await this.fileuploadservice
          .uploadSlider(this.state.image)
          .then((res) => {
            this.props.myData({
              ...this.state,
              image: res,
            });
            this.setState({
              sliderText: "",
              sliderRedirectUrl: "",
              isEdit: false,
              isImageUpdate: false,
            });
            this.imageref.current.value = null;
          });
      }
      // content only changed
      else {
        this.props.myData({
          ...this.state,
        });
        this.setState({
          sliderText: "",
          sliderRedirectUrl: "",
          isEdit: false,
          isImageUpdate: false,
        });
        this.imageref.current.value = null;
      }
    }
  };

  componentWillReceiveProps(props) {
    console.log(props.setForm);
    if (props.setForm.edit) {
      this.setState({
        _id: props.setForm._id,
        sliderText: props.setForm.sliderText,
        isEdit: true,
        sliderRedirectUrl: props.setForm.redirectUrl,
        image: props.setForm.image,
        isImageUpdate: false,
      });
    } else {
      this.setState({
        isEdit: false,
        image: null,
        sliderText: "",
        sliderRedirectUrl: "",
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
            name="sliderRedirectUrl"
            value={this.state.sliderRedirectUrl}
          />
        </div>
        <div className="form-group">
          <label>Slider Text:</label>
          <input
            type="text"
            className="form-control"
            onChange={this.infoChange}
            name="sliderText"
            value={this.state.sliderText}
          />
        </div>
        <div className="form-group">
          <label>Slider Image:</label>
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

export default SliderForm;
