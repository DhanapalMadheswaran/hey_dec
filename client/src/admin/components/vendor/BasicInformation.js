import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

function BasicInformation(props) {
  const [formData, setFormData] = useState({});
  const [inputEmail, setinputEmail] = useState([{ email: "" }]);
  const [inputContact, setinputContact] = useState([{ contact_number: "" }]);

  useEffect(() => {
    setFormData(props.data);
    if (props?.data?.email?.length > 0) setinputEmail(props.data.email);
    if (props?.data?.contact_number?.length > 0)
      setinputContact(props.data.contact_number);
  }, [props.data]);
  // handle input change event
  const onInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({ [name]: value });

    props.onChange({ ...formData, [name]: value });
  };

  const handleInputChangeEmail = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputEmail];
    list[index][name] = value;
    setinputEmail(list);
    setFormData({
      ...formData,
      email: list,
    });
  };

  // handle click event of the Remove button
  const handleRemoveClickEmail = (index) => {
    const list = [...inputEmail];
    list.splice(index, 1);
    setinputEmail(list);
  };

  // handle click event of the Add button
  const handleAddClickEmail = () => {
    setinputEmail([...inputEmail, { email: "" }]);
  };

  const handleInputChangeContact = (e, index) => {
    const { name, value } = e.target;
    const list1 = [...inputContact];
    list1[index][name] = value;
    setinputContact(list1);
    setFormData({
      ...formData,
      contact_number: list1,
    });
  };

  // handle click event of the Remove button
  const handleRemoveClickContact = (index) => {
    const list1 = [...inputContact];
    list1.splice(index, 1);
    setinputContact(list1);
  };

  // handle click event of the Add button
  const handleAddClickContact = () => {
    setinputContact([...inputContact, { contact_number: "" }]);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Basic Information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            name="name"
            value={formData.name}
            label="Login ID"
            fullWidth
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
            onChange={onInputChange.bind(this)}
            autoComplete="off"
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            name="brand"
            label="Brand"
            value={formData.brand}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            name="contact_person"
            label="Concern Person"
            value={formData.contact_person}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={5} sm={5}>
          {inputEmail.map((x, i) => {
            return (
              <div className="box">
                <TextField
                  name="email"
                  label="Primary Email ID"
                  value={x.email}
                  fullWidth
                  onChange={(e) => handleInputChangeEmail(e, i)}
                />

                <div
                  className="btn-box"
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    marginRight: "-28px",
                    marginTop: "auto",
                  }}
                >
                  {inputEmail.length !== 1 && (
                    <DeleteRoundedIcon
                      color="primary"
                      onClick={() => handleRemoveClickEmail(i)}
                    />
                  )}
                  {inputEmail.length - 1 === i && (
                    <Icon color="primary" onClick={handleAddClickEmail}>
                      add_circle
                    </Icon>
                  )}
                </div>
              </div>
            );
          })}
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            name="website"
            label="Website URL"
            value={formData.website}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={5} sm={5}>
          {inputContact.map((x, i) => {
            return (
              <div className="box">
                <TextField
                  name="contact_number"
                  label="Primary Contact Number"
                  value={x.contact_number}
                  fullWidth
                  onChange={(e) => handleInputChangeContact(e, i)}
                />

                <div
                  className="btn-box"
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    marginRight: "-28px",
                    marginTop: "auto",
                  }}
                >
                  {inputContact.length !== 1 && (
                    <DeleteRoundedIcon
                      color="primary"
                      onClick={() => handleRemoveClickContact(i)}
                    />
                  )}
                  {inputContact.length - 1 === i && (
                    <Icon color="primary" onClick={handleAddClickContact}>
                      add_circle
                    </Icon>
                  )}
                </div>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            name="facebook"
            label="Facebook"
            value={formData.facebook}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            name="instagram"
            label="Instagram"
            value={formData.instagram}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            name="youtube"
            label="Youtube"
            value={formData.youtube}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            name="city"
            label="City"
            value={formData.city}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="address"
            label="Address"
            value={formData.address}
            onChange={onInputChange.bind(this)}
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
      </Grid>
      <br />
    </React.Fragment>
  );
}
export default BasicInformation;
