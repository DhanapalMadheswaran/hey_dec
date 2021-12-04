import React, { Component } from "react";
import BasicInfo from "./basic_info";
import AdditionalInfo from "./addition_info";
import BanquetsInfo from "./banquets_info";
import FinanceInfo from "./finance_legal";
import FileUploadService from "../../services/FileUploadService";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
export default class Profile extends Component {
  fileuploadservice = new FileUploadService();

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      error: false,
      errorObject: {},
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    if (this.props.location.state) {
      const update = { ...this.state.data, ...this.props.location.state };
      this.setState({
        data: update,
      });
    }
  }

  onChange = (data1) => {
    this.setState({ data: { ...this.state.data, ...data1 } });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    let { data } = this.state;
    const isEdit = window.location.pathname === "/editeventVendor";

    if (!isEdit) {
      let imgArray = [];
      data.image.forEach((img) => {
        imgArray.push(this.fileuploadservice.upload(img.image));
      });
      Promise.all(imgArray).then(async (imgRes) => {
        if (!isEdit) {
          await this.vendorService
            .create({ ...data, image: imgRes })
            .then((res) => {
              console.log(res);
            });
          window.location.href = "/VendorList";
        }
      });

      console.log({ imgArray });
    }

    //update
    else {
      let imgArray = [];
      let newArray = [];
      data.image.forEach((img) => {
        if (img.imageUpdate) {
          imgArray.push(this.fileuploadservice.upload(img.image));
        }

        //image not updated
        else {
          delete img.imageUpdate;
          newArray.push(img);
        }
      });

      Promise.all(imgArray).then(async (imgRes) => {
        if (isEdit) {
          await this.vendorService
            .update({ ...data, image: [...imgRes, ...newArray] })
            .then((res) => {
              console.log(res);
            });
          window.location.href = "/eventVendorprofile";
        }
      });
    }

    //await this.fileuploadservice.upload(this.state.image).then((res) => {});
  };

  delData = (data) => {};
  render() {
    return (
      <div>
        <BasicInfo onChange={this.onChange} />
        <AdditionalInfo onChange={this.onChange} />
        <BanquetsInfo onChange={this.onChange} />
        <FinanceInfo onChange={this.onChange} />
        <Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onFormSubmit}
          >
            Save
          </Button>
        </Grid>
      </div>
    );
  }
}
