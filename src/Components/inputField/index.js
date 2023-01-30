import { InputLabel, TextField, InputAdornment } from "@mui/material";
import React from "react";
import { InputStyle } from "./style";

import PropTypes from "prop-types";

export default function InputText(props) {
  const {
    label = "",
    defaultValue = "",
    disabled = "",
    placeholder = "",
    startAdornment = "",
    type = "",
    onChange
    // sxTextfield,labelSx
  } = props;

  InputText.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.string,
    color: PropTypes.string,
    startAdornment: PropTypes.string,
    type: PropTypes.string,
    // sx:PropTypes.string
  };

  return (
    <>
      <InputLabel sx={InputStyle.labelSx} variant="standard">
        {label}{" "}
      </InputLabel>
      <TextField
       
        required
        id="outlined-required"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          readOnly: disabled,
          style: InputStyle.textfieldSx,
        }}
        disabled={disabled}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        fullWidth={true}
        onChange={onChange}
      ></TextField>
    </>
  );
}