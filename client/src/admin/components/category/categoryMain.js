import React from "react";

import axios from "axios";
import InfoTable from "./table";

import InfoForm from "./form";
import Header from "../../includes/header";
import Footer from "../../includes/footer";
import SideBar from "../../includes/sideBar";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

import CategoryService from "../../../services/CategoryService";

toast.configure({
  draggable: false,
  autoClose: false,
});
class CategoryMain extends React.Component {
  categoryService = new CategoryService();
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
        this.categoryService.create(data).then((res) => {
          this.setState({ loader: false, editData: [], edit: false });
          toast.success("Registration Successfull", {
            position: toast.POSITION.TOP_RIGHT,
          });
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
      this.categoryService.update(data).then((res) => {
        this.setState({ loader: false, editData: [], edit: false });
        toast.success("Updated Successfull", {
          position: toast.POSITION.TOP_RIGHT,
        });

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
      .get("http://localhost:5000/api/items/")
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
          .delete(`http://localhost:5000/api/items/delete/${data._id}`)
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
                      <InfoForm
                        myData={this.create}
                        setForm={{
                          ...this.state.editData,
                          edit: this.state.edit,
                        }}
                        setLoader={this.setLoader}
                      />
                    </div>

                    <div className="col-6">
                      <InfoTable
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

export default CategoryMain;
