import React from "react";

import axios from "axios";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
import SideBar from "../../includes/sideBar";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

import BannerService from "../../../services/BannerService";
import BannerForm from "./bannerForm";
import BannerTable from "./bannerTable";

toast.configure({
  draggable: false,
  autoClose: false,
});
class Banner extends React.Component {
  bannerService = new BannerService();
  constructor() {
    super();

    this.state = {
      data: [],
      editData: [],
      loader: false,
      edit: false,
    };
  }

  create = (data) => {
    const { edit } = this.state;
    //create
    if (!edit) {
      try {
        this.setState({ loader: true });

        this.bannerService.create(data).then((res) => {
          this.setState({ loader: false, editData: [], edit: false });
          this.getAll();
        });
      } catch (error) {
        console.log(error);
        this.setState({ loader: false });
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
    //update
    else {
      this.setState({ loader: true });
      this.bannerService.update(data).then((res) => {
        this.setState({ loader: false, editData: [], edit: false });

        this.getAll();
      });
    }
  };
  componentDidMount() {
    this.getAll();
  }

  getAll() {
    this.setState({ loader: true });
    axios
      .get("http://localhost:5000/api/banner/")
      .then((res) => {
        this.setState({
          data: res.data,
          loader: false,
        });
      })
      .catch((error) => {
        this.setState({ loader: false });
      });
  }

  update = (data) => {
    this.setState({
      editData: data,
      edit: true,
    });
  };

  delData = (data) => {
    Swal.fire({
      title: "Are you sure want to delete This Vendor? " + data.name,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(data)
        axios
          .delete(`http://localhost:5000/api/banner/delete/${data._id}`)
          .then((res) => {
            if (res.data.result === "success") {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              this.getAll();
            } else {
              Swal.fire("Cancelled!", +res.message, "error");
            }
          });
      }
    });
  };

  setLoader = (props) => {
    this.setState({ loader: props });
  };

  render() {
    const { loader } = this.state;
    return (
      <div className="nk-app-root">
        <title>Admin-Banner</title>
        {loader && <div className="loader"></div>}
        <div className="nk-main ">
          <SideBar />
          <div className="nk-wrap ">
            <Header />
            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="row">
                    <div className="col-4">
                      <BannerForm
                        myData={this.create}
                        setForm={{
                          ...this.state.editData,
                          edit: this.state.edit,
                        }}
                        setLoader={this.setLoader}
                      />
                    </div>

                    <div className="col-6">
                      <BannerTable
                        getData={this.state.data}
                        setData={(e) => this.update(e)}
                        del={this.delData}
                      />
                    </div>
                  </div>
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

export default Banner;
