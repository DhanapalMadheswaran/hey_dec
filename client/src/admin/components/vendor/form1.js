import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
class form1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Additional Information
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <InputLabel id="demo-simple-select-helper-label">
              Venu Category
            </InputLabel>
            <Select>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sm={6}>
            <InputLabel id="demo-simple-select-helper-label">
              Amenties
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="date"
              label="Established Year"
              type="date"
              defaultValue="2021-07-28"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="address2"
              name="address2"
              label="Years Of Experience"
              fullWidth
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="city"
              name="city"
              label="Basic Bontique's Price"
              fullWidth
              autoComplete="new-password"
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <h6>Accomodation Avail</h6>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Yes"
                labelPlacement="start"
              />
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="country"
              name="country"
              label="Accessability"
              fullWidth
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="country"
              name="country"
              label="Cleanliness & Safety"
              fullWidth
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <h6>Food Served</h6>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Yes"
                labelPlacement="start"
              />
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default form1;
