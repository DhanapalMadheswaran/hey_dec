import React from "react";

import TextField from "@material-ui/core/TextField";
function TextInput(props) {
  const { style, name, label, type = "text", onChange, defaultValue } = props;
  return (
    <TextField
      style={style}
      name={name}
      label={label}
      type={type}
      onChange={onChange}
      defaultValue={defaultValue}
      {...props}
    />
  );
}

export default TextInput;
