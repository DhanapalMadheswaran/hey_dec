import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
export default function FinanceInfo(props) {
  const [formData, setformData] = useState({});

  // const [profileImage, setprofileImage] = useState({ profile_image: null });
  // const [idproofImage, setidproofImage] = useState({ idproof_image: null });
  // const [documentImage, setdocumentImage] = useState({ document_image: null });
  useEffect(() => {
    setformData(props.data);
  }, [props.data]);
  const onInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });

    props.onChange({ ...formData, [e.target.name]: e.target.value });
  };
  const profileImageChange = (e) => {
    //setprofileImage({ 'profile_image': e.target.files[0] });
    setformData({
      ...formData,
      profile_image: e.target.files[0],
    });
    props.onChange({
      ...formData,
      profile_image: e.target.files[0],
    });
  };
  const documentImageChange = (e) => {
    // setdocumentImage({ document_image: e.target.files[0] });
    setformData({
      ...formData,
      document_image: e.target.files[0],
    });
    props.onChange({
      ...formData,
      document_image: e.target.files[0],
    });
  };
  const idproofImageChange = (e) => {
    // setidproofImage({ idproof_image: e.target.files[0] });
    setformData({
      ...formData,
      idproof_image: e.target.files[0],
    });
    props.onChange({
      ...formData,
      idproof_image: e.target.files[0],
    });
  };
  return (
    <div>
      <div className="topMargin"></div>

      <div className="row">
        <Typography variant="h4" gutterBottom>
          Bank Details
        </Typography>

        <div className="bank-inputdetail">
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="filled"
                placeholder="Enter Your Account Number"
                name="account_number"
                label="Account Number"
                onChange={onInputChange}
                fullWidth
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="filled"
                placeholder="Enter Your Ifsc Code"
                name="ifsc_code"
                label="IFSC Code"
                onChange={onInputChange}
                fullWidth
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                autoComplete="off"
              />
            </Grid>{" "}
            <Grid item xs={3} sm={3}>
              <InputLabel id="demo-simple-select-helper-label">
                Bank Name
              </InputLabel>
              <Select
                style={{ minWidth: 225 }}
                name="bank_name"
                defaultValue="State Bank of India"
                onChange={onInputChange}
              >
                <MenuItem value="State Bank of India">
                  State Bank of India
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="filled"
                placeholder="Enter Your PAN Number"
                name="pan_number"
                label="PAN Number"
                fullWidth
                onChange={onInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="filled"
                placeholder="Enter Your GST Number"
                name="gst_number"
                label="GST Number"
                onChange={onInputChange}
                fullWidth
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 16 } }}
                autoComplete="off"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="row">
        <Typography variant="h4" gutterBottom>
          Finance & Legal
        </Typography>
        <div className="bank-inputdetail">
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4}>
              <label>ID Proof</label>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Select
                style={{ minWidth: 320 }}
                name="idproof_name"
                defaultValue="Aadhar Card"
                onChange={onInputChange}
              >
                <MenuItem value="Aadhar Card">Aadhar Card</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button variant="contained" component="label">
                <CloudUploadIcon />
                <input
                  type="file"
                  name="idproof_image"
                  onChange={(e) => idproofImageChange(e)}
                />
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <label>Business Proof</label>
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="filled"
                placeholder="Enter Document Name"
                name="businessproof_document_name"
                onChange={onInputChange}
                fullWidth
                label="Document Name"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <Button variant="contained" component="label">
                <CloudUploadIcon />
                <input
                  type="file"
                  name="document_image"
                  onChange={(e) => documentImageChange(e)}
                />
              </Button>
            </Grid>
            <Grid item xs={4} sm={4}>
              <label>Your Photo</label>
            </Grid>
            <Grid item xs={4} sm={4}></Grid>
            <Grid item xs={4} sm={4}>
              <Button variant="contained" component="label">
                <CloudUploadIcon />
                <input
                  type="file"
                  name="photo"
                  onChange={(e) => profileImageChange(e)}
                />
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="topMargin"></div>
    </div>
  );
}
