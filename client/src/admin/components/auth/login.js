import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onchange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/user-login", formData)
      .then((res) => {
        localStorage.setItem(
          "profileData",
          JSON.stringify({
            email: res.data.email,
            name: res.data.name,
            role: res.data.role,
          })
        );

        localStorage.setItem("token", res.data.token);

        props.history.push("/dashboard");
      });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="filled"
        name="email"
        type="email"
        required
        onChange={onchange}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        name="password"
        required
        onChange={onchange}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
