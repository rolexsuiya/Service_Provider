import DraftsIcon from "@mui/icons-material/Drafts";
import LockIcon from "@mui/icons-material/Lock";
import {
  Box,
  Button,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypographyText from "../../Components/typography/index";
import { useToastContext } from "../../context/toastContext";
import { appRoutes } from "../../router/routes";
import { SigninStyle } from "./style";

export default function SignIn() {
  let navigate = useNavigate();
  const toastContext = useToastContext();
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
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data?.email?.length === 0) {
      isValid = false;
      error.email = "Email is Required";
    }
    if (data?.password?.length === 0) {
      isValid = false;
      error.password = "Password is Required";
    }
    if (data?.email && regexEmail.test(data?.email) === false) {
      isValid = false;
      error.email = "Please Enter Valid Email";
    }
    if (
      data?.email &&
      regexEmail.test(data?.email) === true &&
      data?.password
    ) {
      localStorage.setItem("validUser", true);
      toastContext("success", "Successfully login");
      navigate(appRoutes.lcaListPage);
    }
    if (error?.password && error?.email) {
      toastContext("error", "Please Enter Email and Password!");
    }
    if (error?.password && error?.email?.length === 0) {
      toastContext("error", "Please Enter Password!");
    }
    if (error?.email && error?.password?.length === 0) {
      toastContext("error", "Please Enter Email!");
    }

    setData({ ...data, error });

    return isValid;
  };

  const handeleSumit = (event) => {
    event.preventDefault();
    if (validateForm()) {
    }
  };

  return (
    <Box sx={SigninStyle.boxStyle}>
      <Paper elevation={3} sx={SigninStyle.paperBox}>
        <form>
          <Stack>
            <TypographyText
              sx={SigninStyle.typoSx}
              variant="h4"
              title="SIGNIN"
            />

            <TextField
              sx={SigninStyle.inputText}
              helperText={data?.error?.email}
              onChange={(e) => handeleChange("email", e.target.value)}
              placeholder="Enter Email Id"
              type={"email"}
              error={data?.error?.email ? true : false}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={SigninStyle.iconText}>
                    <DraftsIcon sx={SigninStyle.iconFont} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={SigninStyle.inputText}
              helperText={data?.error?.password}
              onChange={(e) => handeleChange("password", e.target.value)}
              placeholder="Enter Password"
              name="password"
              error={data?.error?.password ? true : false}
              type={"password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={SigninStyle.iconText}>
                    <LockIcon sx={SigninStyle.iconFont} />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={SigninStyle.signBox}>
              <Link
                onClick={() => navigate(appRoutes.resetSign)}
                color="primary"
                underline="always"
              >
                Forgot Password?
              </Link>
              <Button variant="contained" onClick={handeleSumit} type="submit">
                SIGN IN
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
