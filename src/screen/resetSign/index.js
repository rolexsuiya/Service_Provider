import {
  Box,
  Button,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import { ResigninStyle } from "../resetSign/style";
import React, { useState } from "react";
import TypographyText from "../../Components/typography/index";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../router/routes";

const ResignIn = () => {

  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  });

  const handeleChange = (key, value) => {
    const error = data?.error;
    error[key] = "";
    setData({ ...data, [key]: value, error });
  };

  const validateForm = () => {
    var isValid = true;
    const error = data?.error;
    if (data?.email?.length === 0) {
      isValid = false;
      error.email = "Email is Required";
    }
    setData({ ...data, error });
    return isValid;
  };

  const handeleSumit = () => {
    if (validateForm()) {
    }
  };

  return (
    <Box sx={ResigninStyle.boxStyle}>
      <Paper elevation={3} sx={{ padding: "35px" }}>
        <Stack>
          <TypographyText
            variant="h5"
            sx={ResigninStyle.typoSx}
            title="RESET YOUR PASSWORD?"
          />

          <Typography variant="body1" sx={ResigninStyle.typeText}>
            Please provide the email address that you used when you signed up
            for your Immidart account.
          </Typography>
          <Typography variant="body1" sx={ResigninStyle.typeText}>
            We will send you an email hat will allow you to reset your password.
          </Typography>
          <TextField
            sx={ResigninStyle.inputText}
            name="email"
            helperText={data?.error?.email}
            onChange={(e) => handeleChange("email", e.target.value)}
            error={data?.error?.email ? true : false}
            placeholder="Enter Email Id"
            type={"email"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={ResigninStyle.iconText}>
                  <DraftsIcon sx={ResigninStyle.iconFont} />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={ResigninStyle.signBox}>
            <Link onClick={()=>navigate(appRoutes.login)} color="primary" underline="always">
              Back to Sign In
            </Link>
            <Button variant="contained" onClick={(e) => handeleSumit(e)}>
              SEND CODE
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ResignIn;
