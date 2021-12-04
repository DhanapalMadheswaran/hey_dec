import React from "react";
import FileUploadService from "../../../services/FileUploadService";
class InfoForm extends React.Component {
  imageref = React.createRef();
  fileuploadservice = new FileUploadService();
  constructor() {
    super();
    this.onFileChange = this.onFileChange.bind(this);

    this.state = {
      _id: "",
      name: "",
      image: null,
      isEdit: false,
      isImageUpdate: false,
    };
  }

  infoChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onFileChange(e) {
    this.setState({ image: e.target.files[0] });
    if (this.state.isEdit) {
      this.setState({ isImageUpdate: true });
    }
  }

  handleSubmit = async (e) => {
    //Create
    e.preventDefault();
    this.props.setLoader(true);
    if (!this.state.isEdit) {
      await this.fileuploadservice.upload(this.state.image).then((res) => {
        this.props.myData({
          ...this.state,
          image: res,
        });
        this.setState({
          name: "",
        });
        this.imageref.current.value = null;
      });
    }
    //update
    else {
      if (this.state.isImageUpdate) {
        await this.fileuploadservice.upload(this.state.image).then((res) => {
          this.props.myData({
            ...this.state,
            image: res,
          });
          this.setState({
            name: "",
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
          name: "",
          isEdit: false,
          isImageUpdate: false,
        });
        this.imageref.current.value = null;
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    //console.log(props.setForm);
    //console.log(nextProps.setForm._id, this.props.setForm._id);
    if (
      nextProps.setForm !== this.props.setForm &&
      nextProps.setForm._id !== this.props.setForm._id &&
      nextProps.setForm._id != null
    ) {
      //console.log(nextProps.setForm, this.props.setForm);
      if (nextProps.setForm.edit) {
        this.setState({
          _id: nextProps.setForm._id,
          isEdit: nextProps.setForm.edit,
          name: nextProps.setForm.name,
          image: nextProps.setForm.image,
          isImageUpdate: false,
        });
      } else {
        this.setState({
          isEdit: nextProps.setForm.edit,
          image: null,
          name: "",
          isImageUpdate: false,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Category Name:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={this.infoChange}
            name="name"
            value={this.state.name}
          />
        </div>
        <div className="form-group">
          <label>Category Icon:</label>
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

export default InfoForm;
