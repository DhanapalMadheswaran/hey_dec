import React, { Component } from "react";
import SideBar from "../../includes/sideBar";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
import BasicInformationForm from "./BasicInformation";
import AdditionalInformation from "./AdditionalInformation";
import BonquestInformation from "./BonquetsInformation";
import { Validation } from "./validation";
import FileUploadService from "../../../services/FileUploadService";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import VendorService from "../../../services/VendorServices";
export default class AddVendor extends Component {
  fileuploadservice = new FileUploadService();
  vendorService = new VendorService();
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
    const isEdit = window.location.pathname === "/editVendor";

    if (!isEdit) {
      let imgArray = [];
      data.image.forEach((img) => {
        imgArray.push(this.fileuploadservice.vendorupload(img.image));
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
          window.location.href = "/VendorList";
        }
      });
    }

    //await this.fileuploadservice.upload(this.state.image).then((res) => {});
  };

  delData = (data) => {};

  render() {
    const { error, errorObject } = this.state;
    return (
      <div className="nk-app-root">
        <div className="nk-main ">
          <SideBar />
          <div className="nk-wrap ">
            <Header />

            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <BasicInformationForm
                    onChange={this.onChange}
                    error={error}
                    errorObject={errorObject}
                    del={this.delData}
                    data={this.state.data}
                  />
                  <AdditionalInformation
                    onChange={this.onChange}
                    error={error}
                    errorObject={errorObject}
                    data={this.state.data}
                  />
                  <BonquestInformation
                    onChange={this.onChange}
                    error={error}
                    errorObject={errorObject}
                    data={this.state.data}
                  />
                  <br />
                  <Grid container justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.onFormSubmit}
                    >
                      Save
                    </Button>
                  </Grid>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
