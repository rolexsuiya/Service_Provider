import { IconButton, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { AppStyle } from "./style";
import { SelectAuto } from "../autoComplete/index";
import TypographyText from "../typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../router/routes";

const AppBarCom = () => {

  let navigate = useNavigate();
  const [data, setData] = useState();
  const handeleChange = (key, value) => {
    setData({value})
  };

  return (
    <>
      <Box position="static">
        <Box sx={AppStyle.appBox}>
        <Stack direction="row" sx={AppStyle.AppbarStyle}>
        <IconButton onClick={() => navigate(appRoutes.login)} sx={AppStyle.NavIcon}>
            <ChevronLeftIcon sx={AppStyle.LeftIcon} />
          </IconButton>
          <TypographyText
            variant="h6"
            sx={AppStyle.appType}
            title="Service Provider"
          />
          </Stack>
          <SelectAuto
            defaultValue={"Apartment"}
            placeholder="Crayon'd"
            sxa={AppStyle.textBar}
            onSelectionChange={handeleChange}
            value={data?.value}
            options={[
              { label: "Crayon'd", value: "Crayon'd" },
              { label: "amazon", value: "amazon" },
            ]}
          ></SelectAuto>
          {/* <TextField type={"number"} InputLabelProps={{ shrink: true }} /> */}
        </Box>
      </Box>
    </>
  );
};

export default AppBarCom;
