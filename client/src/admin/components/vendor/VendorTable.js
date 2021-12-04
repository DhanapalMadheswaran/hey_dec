import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

import VendorService from "../../../services/VendorServices";

export default function VendorTable(props) {
  const vendorService = new VendorService();
  const history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let i = 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await vendorService.getAllVendors();

      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  const editData = (data) => {
    // const
    history.push({ pathname: "/editVendor", state: { ...data, isEdit: true } });
  };
  const delData = (data) => {
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
          .delete(`http://localhost:5000/api/vendor/delete/${data._id}`)
          .then((res) => {
            if (res.result === "success") {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              console.log(res);
              Swal.fire("Cancelled!", +res.message, "error");
            }
          });
      }
    });
    // var option = window.confirm(`Are you Sure Want to Delete ${data.name}`);
    //   if (option) {
    //     axios
    //     .delete(`http://localhost:5000/api/vendor/delete/${data._id}`)
    //     .then((res) => {
    //      getProductData();
    //     });

    //   }
  };

  return (
    <Paper>
      <TableContainer>
        <br />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="outlined"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Vendor Name</TableCell>
              <TableCell>Vendor Email</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {product
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
                return false;
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell>{++i}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email[0].email} </TableCell>
                    <TableCell>{row.brand} </TableCell>
                    <TableCell>
                      {row.contact_number[0].contact_number}
                    </TableCell>
                    <TableCell>
                      <button onClick={() => editData(row)}>Edit</button>
                    </TableCell>
                    <TableCell>
                      <button onClick={() => delData(row)}>Delete</button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={product.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
