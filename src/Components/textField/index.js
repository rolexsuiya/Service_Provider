import { InputLabel, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { InputStyleSx } from "./style";

export default function TextFieldCom(props) {
  const {
    label = "",
    defaultValue = "",
    disabled = "",
    placeholder = "",
    startAdornment = "",
    type = "",
    value = "",
    stateName = "",
    handleChange,
    error,
    isValid = false,
    errorMsg = "",
  } = props;

  TextFieldCom.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.string,
    color: PropTypes.string,
    startAdornment: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
  };

  return (
    <>
      <InputLabel sx={InputStyleSx.labelSx} variant="standard">
        {label}{" "}
      </InputLabel>
      <TextField
        size={"small"}
        fullWidth
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        InputProps={{
          readOnly: disabled,
          style: InputStyleSx.textfieldSx,
        }}
        type={type}
        error={isValid}
        helperText={errorMsg}
        onChange={(e) => handleChange(stateName, e?.target?.value)}
      />
    </>
  );
}
