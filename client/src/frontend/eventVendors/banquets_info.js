import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
//import Icon from "@material-ui/core/Icon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import Icon from "@material-ui/core/Icon";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
const checkboxes = [
  { id: 1, text: "Indoor", name: "Indoor", value: true },
  { id: 2, text: "Outdoor", name: "Outdoor", value: false },
  { id: 3, text: "Poolside", name: "Poolside", value: false },
  { id: 4, text: "Terrace", name: "Terrace", value: false },
];

const halltype = [
  {
    id: 1,
    text: "Theatre",
    name: "Theatre",
    value: true,
  },
  { id: 2, text: "Classroom", name: "Classroom", value: false },
  { id: 3, text: "U-Shaped", name: "U-Shaped", value: false },
];

export default function BanquetsInfo(props) {
  const [formData, setformData] = useState({
    venu: checkboxes,
    hall: halltype,
    about: "",
  });
  const isEdit = window.location.pathname === "/editVendor";

  const [inputImage, setinputImage] = useState([{ image: null }]);

  const onInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });

    props.onChange({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheck = (event) => {
    const { name } = event.target;

    const update = [...formData.venu];
    const findCheckboxIndex = formData.venu.findIndex((v) => v.name === name);
    if (findCheckboxIndex > -1) {
      update[findCheckboxIndex].value = !update[findCheckboxIndex].value;
    }

    setformData({ ...formData, venu: update });
    props.onChange({ ...formData, venu: update });
  };

  const handleCheckHall = (event) => {
    const { name } = event.target;

    const update = [...formData.hall];
    const findCheckboxIndex = formData.hall.findIndex((v) => v.name === name);
    if (findCheckboxIndex > -1) {
      update[findCheckboxIndex].value = !update[findCheckboxIndex].value;
    }

    setformData({ ...formData, hall: update });
    props.onChange({ ...formData, hall: update });
  };

  const handleInputChangeImage = (e, index) => {
    const { name } = e.target;
    const value = e.target.files[0];
    const list = [...inputImage];
    list[index] = {};
    list[index][name] = value;
    if (isEdit) {
      list[index].imageUpdate = true;
    }
    setinputImage(list);

    setformData({
      ...formData,
      image: list,
    });
    props.onChange({
      ...formData,
      image: list,
    });
  };

  // handle click event of the Remove button
  const handleRemoveClickImage = (index) => {
    const list = [...inputImage];
    list.splice(index, 1);
    setinputImage(list);
  };

  // handle click event of the Add button
  const handleAddClickImage = () => {
    setinputImage([...inputImage, { image: "" }]);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Bonquets Information
      </Typography>
      <br />
      <div className="bank-inputdetail">
        <Grid container spacing={3}>
          <Grid item xs={1}>
            Venu Filter:
          </Grid>

          <Grid item xs={4}>
            {formData.venu?.map((checkbox, i) => (
              <FormControlLabel
                key={`check-${i}`}
                checkbox="true"
                name={checkbox.name}
                options={checkbox.text}
                control={<Checkbox />}
                label={checkbox.text}
                checked={checkbox.value}
                onChange={handleCheck.bind(this)}
              />
            ))}
          </Grid>
          <Grid item xs={1}>
            Seating Style
          </Grid>

          <Grid item xs={4}>
            {formData.venu?.map((checkbox, i) => (
              <FormControlLabel
                key={`check-${i}`}
                checkbox="true"
                name={checkbox.name}
                options={checkbox.text}
                control={<Checkbox />}
                label={checkbox.text}
                checked={checkbox.value}
                onChange={handleCheck.bind(this)}
              />
            ))}
          </Grid>
          <Grid item xs={3} sm={3}>
            {inputImage.map((x, i) => {
              return (
                <div className="box">
                  <Button variant="contained" component="label">
                    Upload File
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => handleInputChangeImage(e, i)}
                    />
                  </Button>
                  {x?.url && (
                    <img
                      src={x.url}
                      alt="..."
                      className="bonquet-image-preview"
                    />
                  )}
                  <div
                    className="btn-box"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      marginRight: "85px",
                      marginTop: "auto",
                    }}
                  >
                    {inputImage.length !== 1 && (
                      <DeleteRoundedIcon
                        color="primary"
                        onClick={() => handleRemoveClickImage(i)}
                      />
                    )}
                    {inputImage.length - 1 === i && (
                      <Icon color="primary" onClick={handleAddClickImage}>
                        add_circle
                      </Icon>
                    )}
                  </div>
                </div>
              );
            })}
          </Grid>

          <Grid item xs={2} sm={2}>
            <TextField
              variant="filled"
              placeholder="Enter Dimension"
              name="dimension"
              onChange={onInputChange}
              label="Dimensions: m.x-m"
              value={formData.dimension}
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={2} sm={2}>
            <TextField
              variant="filled"
              placeholder="Enter Area"
              name="area"
              onChange={onInputChange}
              label="Area:sq.m"
              value={formData.area}
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={2} sm={2}>
            <TextField
              variant="filled"
              placeholder="Enter Height"
              name="height"
              onChange={onInputChange}
              label="Height:m"
              value={formData.height}
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <TextField
              variant="filled"
              placeholder="Enter Guest Entry Point"
              name="entry_point"
              onChange={onInputChange}
              label="Guest Entry Point"
              autoComplete="new-password"
            />
          </Grid>

          <Grid item xs={12}>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                About
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="about"
                  value={formData.about}
                  onChange={onInputChange}
                  type="text"
                />
              </Form.Group>
            </Form>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
