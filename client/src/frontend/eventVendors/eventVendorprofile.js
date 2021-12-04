import React, { Component } from "react";
import Header from "../includes/header";
import Footer from "../includes/footer";
import VendorHeader from "./header";
import BasicInfo from "./basic_info";
import AdditionalInfo from "./addition_info";
import BanquetsInfo from "./banquets_info";
import FinanceInfo from "./finance_legal";
import FileUploadService from "../../services/FileUploadService";
import VendorService from "../../services/VendorServices";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Toast from "../../components/toast";
export default class EventVendorprofile extends Component {
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

    const isEdit = window.location.pathname === "/editeventVendor";

    if (!isEdit) {
      let imgArray = [],
        profile_image = "",
        document_image = "",
        idproof_image = "";

      data?.image?.forEach((img) => {
        imgArray.push(this.fileuploadservice.vendorupload(img.image));
      });
      if (data?.profile_image) {
        profile_image = await this.fileuploadservice.vendorupload(
          data.profile_image
        );
      }
      if (data?.idproof_image) {
        idproof_image = await this.fileuploadservice.vendorupload(
          data.idproof_image
        );
      }
      if (data?.document_image) {
        document_image = await this.fileuploadservice.vendorupload(
          data.document_image
        );
      }
      Promise.all(imgArray).then(async (imgRes) => {
        if (!isEdit) {
          await this.vendorService
            .create({
              ...data,
              image: imgRes,
              profile_image,
              document_image,
              idproof_image,
            })
            .then((res) => {
              console.log(res);
            });
          Toast("success", "🦄 Vendor Added !");
          // window.location.href = "/eventVendorRegistration";
        }
      });
    }

    //update
    else {
      let imgArray = [],
        newArray = [],
        profile_image = "",
        document_image = "",
        idproof_image = "";
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
      if (data?.profile_image) {
        if (data?.profile_image?.secure_url) {
          profile_image = await this.fileuploadservice.vendorupload(
            data.profile_image
          );
        } else {
          profile_image = data.profile_image;
        }
      }
      if (data?.document_image) {
        if (data?.document_image?.secure_url) {
          document_image = await this.fileuploadservice.vendorupload(
            data.document_image
          );
        } else {
          document_image = data.document_image;
        }
      }
      if (data?.idproof_image) {
        if (data?.idproof_image?.secure_url) {
          idproof_image = await this.fileuploadservice.vendorupload(
            data.idproof_image
          );
        } else {
          idproof_image = data.idproof_image;
        }
      }
      Promise.all(imgArray).then(async (imgRes) => {
        if (isEdit) {
          await this.vendorService
            .update({
              ...data,
              image: [...imgRes, ...newArray],
              profile_image,
              document_image,
              idproof_image,
            })
            .then((res) => {
              console.log(res);
            });
          window.location.href = "/eventVendorRegistration";
        }
      });
    }
  };

  delData = (data) => {};
  render() {
    return (
      <div className="container">
        <Header />
        <VendorHeader />
        <BasicInfo onChange={this.onChange} />
        <AdditionalInfo onChange={this.onChange} />
        <BanquetsInfo onChange={this.onChange} />
        <FinanceInfo onChange={this.onChange} />
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={this.onFormSubmit}
          >
            Save
          </Button>
        </Grid>
        <Footer />
      </div>
    );
  }
}
