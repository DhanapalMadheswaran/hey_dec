import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
//import { makeStyles } from "@material-ui/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextInput from "../../../inputComponents/TextInput";

function AdditionalInformation(props) {
  const [formData, setformData] = useState({});
  useEffect(() => {
    setformData(props.data);
  }, [props.data]);
  const inputChange = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
    props.onChange({ ...formData, [name]: value });
  };

  //const { error } = props;
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Additional Information
      </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3}>
          <InputLabel id="demo-simple-select-helper-label">
            Venu Category
          </InputLabel>
          <Select
            style={{ minWidth: 300 }}
            onChange={inputChange}
            name="category"
            defaultValue="dhanapal"
          >
            <MenuItem value="dhanapal">dhanapal</MenuItem>
            <MenuItem value="jagan">jagan</MenuItem>
            <MenuItem value="billy">billy</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3} sm={3}>
          <InputLabel id="demo-simple-select-helper-label">Amenties</InputLabel>
          <Select
            style={{ minWidth: 300 }}
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="amenties"
            onChange={inputChange}
            defaultValue=""
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="dsfdsf">Ten</MenuItem>
            <MenuItem value="dsafds">Twenty</MenuItem>
            <MenuItem value="dsfds">Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <TextField
            style={{ minWidth: 300 }}
            name="established_year"
            label="Established Year"
            type="date"
            onChange={inputChange}
            defaultValue="2021-07-28"
          />
        </Grid>
        <Grid item xs={3}>
          <TextInput
            name="experience"
            label="Years Of Experience"
            fullWidth
            onChange={inputChange}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            id="price"
            name="basic_price"
            label="Basic Bontique's Price"
            fullWidth
            onChange={inputChange}
            autoComplete="new-password"
          />
        </Grid>

        <Grid item xs={3} sm={3}>
          <h6>Accomodation Avail</h6>
          <RadioGroup
            row
            aria-label="position"
            name="accomodation"
            defaultValue="top"
            onChange={inputChange}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
            />
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <FormControlLabel
              value="No"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="country"
            name="Accessability"
            label="Accessability"
            onChange={inputChange}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="Cleanliness"
            name="Cleanliness"
            label="Cleanliness & Safety"
            fullWidth
            onChange={inputChange}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <h6>Food Served</h6>
          <RadioGroup
            row
            aria-label="position"
            name="food_served"
            defaultValue="top"
            onChange={inputChange}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
            />
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <FormControlLabel
              value="No"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AdditionalInformation;
