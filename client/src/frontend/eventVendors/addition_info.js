import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import moment from "moment";
export default function AdditionalInfo(props) {
  let year = moment(new Date()).format("YYYY-MM-DD");
  const [formData, setformData] = useState({});
  useEffect(() => {
    setformData(props.data);
  }, [props.data]);
  const inputChange = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
    props.onChange({ ...formData, [name]: value });
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Additional Information
      </Typography>
      <br />
      <div className="bank-inputdetail">
        <Grid container spacing={3}>
          <Grid item xs={3} sm={3}>
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              style={{ minWidth: 225 }}
              onChange={inputChange}
              name="category"
              defaultValue="EventSpace"
            >
              <MenuItem value="EventSpace">EventSpace</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} sm={3}>
            <InputLabel id="demo-simple-select-helper-label">
              Amenties
            </InputLabel>
            <Select
              style={{ minWidth: 225 }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name="amenties"
              onChange={inputChange}
              defaultValue="Yes"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="filled"
              style={{ minWidth: 225 }}
              name="established_year"
              label="Established Year"
              type="date"
              onChange={inputChange}
              defaultValue={year}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="filled"
              placeholder="Enter Your Experience"
              fullWidth
              name="experience"
              label="Years of Experience"
              onChange={inputChange}
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <TextField
              variant="filled"
              placeholder="Enter Total Amount"
              name="total_amount"
              label="Total Amount"
              fullWidth
              onChange={inputChange}
              autoComplete="new-password"
            />
          </Grid>

          <Grid item xs={3} sm={3}>
            <InputLabel id="demo-simple-select-helper-label">
              Accomodation
            </InputLabel>
            <Select
              style={{ minWidth: 225 }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name="accomodation"
              onChange={inputChange}
              defaultValue=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} sm={3}>
            <InputLabel id="demo-simple-select-helper-label">
              Food Served
            </InputLabel>
            <Select
              style={{ minWidth: 225 }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name="food_served"
              onChange={inputChange}
              defaultValue=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} sm={3}>
            <TextField
              variant="filled"
              placeholder="Enter Advance Price"
              id="price"
              name="advance"
              label="Advance Price"
              fullWidth
              onChange={inputChange}
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="filled"
              placeholder="Cleanliness"
              id="Cleanliness"
              name="Cleanliness"
              label="Cleanliness & Safety"
              fullWidth
              onChange={inputChange}
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="filled"
              placeholder="Enter Your Accessability"
              id="country"
              name="Accessability"
              label="Accessability"
              onChange={inputChange}
              fullWidth
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
      </div>{" "}
      <br />
    </React.Fragment>
  );
}
