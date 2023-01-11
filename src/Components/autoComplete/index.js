import Autocomplete from "@mui/material/Autocomplete";
import { Typography, TextField } from "@mui/material";

import React from "react";

export const SelectAuto = ({
  label = "",
  onChange = "",
  value = "",
  options = [],
  errorMsg = "",
  isValid = false,
  IconTitle,
  sxa,

  defaultValue,
  sxt,
  placeholder,
  stateName = "",
  onSelectionChange,
}) => {
  return (
    <>
      <Autocomplete
        size="small"
        options={options}
        value={value}
        defaultValue={defaultValue}
        onChange={(event, value) => {
          onSelectionChange(stateName, value?.value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            sx={sxt}
            error={isValid}
          />
        )}
        sx={sxa}
      />
      {isValid && <Typography>{errorMsg}</Typography>}
    </>
  );
};
