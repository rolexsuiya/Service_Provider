import { Button, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../router/routes";
import TypographyText from "../typography";
import { AppStyle } from "./style";
import { Logout } from "@mui/icons-material";
const AppBarCom = () => {

  let navigate = useNavigate();

const logOut =()=>{
  localStorage.clear();
  navigate(appRoutes.login)
}

  return (
    <>
      <Box position="static">
        <Box sx={AppStyle.appBox}>
        <Stack direction="row" sx={AppStyle.AppbarStyle}>
        <IconButton onClick={() => navigate(appRoutes.lcaEditPage)} sx={AppStyle.NavIcon}>
            <ChevronLeftIcon sx={AppStyle.LeftIcon} />
          </IconButton>
          <TypographyText
            variant="h6"
            sx={AppStyle.appType}
            title="Service Provider"
          />
          </Stack>
          <Button sx={AppStyle.Logouticon} startIcon={<LogoutIcon/>} onClick={() => logOut()}>Logout</Button>
          
        </Box>
      </Box>
    </>
  );
};

export default AppBarCom;
