import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { SelectAuto } from "../../Components/autoComplete";
import TextFieldCom from "../../Components/textField";
import { useToastContext } from "../../context/toastContext";
import { addUser, editUser } from "../../redux/userSlice";
import { appRoutes } from "../../router/routes";
import { CreatePropertyStyle } from "./style";

export default function LcaEditPage() {
  const dispatch = useDispatch();

  const [value, setValue] = useState(
    "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration."
  );
  const toastContext = useToastContext();
  const [error, setError] = useState({
    company: "",
    catagory: "",
    Name: "",
    code: "",
    doorNum: "",
    addOne: "",
    addTwo: "",
    landMark: "",
    area: "",
    city: "",
    stateIn: "",
    country: "",
    pinCode: "",
    telePhone: "",
    mobile: "",
    email: "",
  });
  const [data, setData] = useState({
    company: "",
    catagory: "",
    Name: "",
    code: "",
    doorNum: "",
    addOne: "",
    addTwo: "",
    landMark: "",
    area: "",
    city: "",
    stateIn: "",
    country: "",
    pinCode: "",
    telePhone: "",
    mobile: "",
    email: "",
    id: "",
  });

  const handeleChange = (key, value) => {
    debugger;
    if (key === "doorNum") {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        const erro = error;
        erro[key] = "";
        setError({ ...error, erro });
        setData({ ...data, [key]: value === undefined ? "" : value });
      }
    } else {
      const erro = error;
      erro[key] = "";
      setError({ ...error, erro });
      setData({ ...data, [key]: value === undefined ? "" : value });
    }
  };

  const validateForm = () => {
    var isValid = true;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const erro = error;
    if (data?.company?.length === 0 || data?.company === null) {
      isValid = false;
      toastContext("error", "Please Fill in all the Highlighted Fields");
      erro["company"] = true;
    }
    if (data?.catagory?.length === 0 || data?.catagory === null) {
      isValid = false;
      erro["catagory"] = true;
    }
    if (data?.Name?.length === 0) {
      isValid = false;
      erro["Name"] = true;
    }
    if (data?.code?.length === 0) {
      isValid = false;
      erro["code"] = true;
    }
    if (data?.doorNum?.length === 0) {
      isValid = false;
      erro["doorNum"] = true;
    }
    if (data?.addOne?.length === 0) {
      isValid = false;
      erro["addOne"] = true;
    }
    if (data?.addTwo?.length === 0) {
      isValid = false;
      erro["addTwo"] = true;
    }

    if (data?.landMark?.length === 0) {
      isValid = false;
      erro["landMark"] = true;
    }
    if (data?.area?.length === 0) {
      isValid = false;
      erro["area"] = true;
    }
    if (data?.city?.length === 0) {
      isValid = false;
      erro["city"] = true;
    }
    if (data?.stateIn?.length === 0) {
      isValid = false;
      erro["stateIn"] = true;
    }
    if (data?.country?.length === 0) {
      isValid = false;
      erro["country"] = true;
    }
    if (data?.pinCode?.length === 0) {
      isValid = false;
      erro["pinCode"] = true;
    }
    if (data?.telePhone?.length === 0) {
      isValid = false;
      erro["telePhone"] = true;
    }
    if (data?.mobile?.length === 0) {
      isValid = false;
      erro["mobile"] = true;
    }
    if (data?.email?.length === 0) {
      isValid = false;
      erro["email"] = true;
    }
    if (data?.email && regexEmail.test(data?.email) === false) {
      isValid = false;
      erro["email"] = true;
      erro.email = "Please Enter Valid Email";
    }
    setError({
      ...error,
      erro,
    });
    return isValid;
  };

  let idStud = uuid();
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (location?.state?.row?.id?.length > 0) {
      setData(location?.state?.row);
    }
  }, [location?.state?.row?.id]);

  const handeleSumit = () => {
    if (validateForm()) {
      if (data?.id) {
        dispatch(
          editUser({
            id: data?.id ?? "",
            company: data?.company ?? "",
            catagory: data?.catagory ?? "",
            Name: data?.Name ?? "",
            code: data?.code ?? "",
            doorNum: data?.doorNum ?? "",
            addOne: data?.addOne ?? "",
            addTwo: data?.addTwo ?? "",
            landMark: data?.landMark ?? "",
            area: data?.area ?? "",
            city: data?.city ?? "",
            stateIn: data?.stateIn ?? "",
            country: data?.country ?? "",
            pinCode: data?.pinCode ?? "",
            telePhone: data?.telePhone ?? "",
            mobile: data?.mobile ?? "",
            email: data?.email ?? "",
          })
        );
        toastContext("success", "Succesfully Updated");
      } else {
        dispatch(
          addUser({
            id: idStud,
            company: data?.company ?? "",
            catagory: data?.catagory ?? "",
            Name: data?.Name ?? "",
            code: data?.code ?? "",
            doorNum: data?.doorNum ?? "",
            addOne: data?.addOne ?? "",
            addTwo: data?.addTwo ?? "",
            landMark: data?.landMark ?? "",
            area: data?.area ?? "",
            city: data?.city ?? "",
            stateIn: data?.stateIn ?? "",
            country: data?.country ?? "",
            pinCode: data?.pinCode ?? "",
            telePhone: data?.telePhone ?? "",
            mobile: data?.mobile ?? "",
            email: data?.email ?? "",
          })
        );
        toastContext("success", "Succesfully Added");
      }
      navigate(appRoutes.lcaListPage);
    }
  };

  return (
    <Box sx={CreatePropertyStyle.BoxBolor}>
      <Card sx={CreatePropertyStyle.BoxButtom}>
        <Stack direction="row" sx={CreatePropertyStyle.AppbarStyle}>
          <IconButton
            onClick={() => navigate(appRoutes.lcaListPage)}
            sx={CreatePropertyStyle.NavIcon}
          >
            <ChevronLeftIcon sx={CreatePropertyStyle.LeftIcon} />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            sx={CreatePropertyStyle.HeadStyle}
          >
            SERVICE PROVIDER ADD/EDIT
          </Typography>
        </Stack>
      </Card>
      <Box p={1}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={3} lg={2}>
            <Card sx={CreatePropertyStyle.propertyCardSx}>
              <Typography
                variant="h6"
                component="h6"
                align="center"
                sx={CreatePropertyStyle.typeText}
              >
                PROFILE PICTURE
              </Typography>
              <Card sx={CreatePropertyStyle.propertyimgSx}>
                <img
                  src={require("../../assets/images/propertyimg.png")}
                  alt="propimg"
                />
              </Card>
              <Button sx={CreatePropertyStyle.uploadBtnSx}>Upload Image</Button>
              <Typography
                variant="h6"
                component="h6"
                sx={CreatePropertyStyle.typeRemove}
                align="center"
              >
                Remove Image
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <Card sx={CreatePropertyStyle.propertyCardSx}>
              <Typography
                variant="h6"
                component="h6"
                sx={CreatePropertyStyle.typeText}
              >
                PROFILE DETAILS
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Box sx={CreatePropertyStyle.boxProfile}>
                    <Typography sx={CreatePropertyStyle.profileText}>
                      Company
                      <Typography color="error" variant="caption">
                        *
                      </Typography>
                    </Typography>
                  </Box>
                  <SelectAuto
                    onSelectionChange={handeleChange}
                    placeholder="Crayon'd"
                    value={data?.company ?? ""}
                    stateName="company"
                    sxa={CreatePropertyStyle.companyAuto}
                    isValid={error?.company === true ? true : false}
                    options={[
                      { label: "zoho", value: "zoho" },
                      { label: "amazon", value: "amazon" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Box sx={CreatePropertyStyle.boxProfile}>
                    <Typography sx={CreatePropertyStyle.profileText}>
                      Service Provider Catagory
                      <Typography color="error" variant="caption">
                        *
                      </Typography>
                    </Typography>
                  </Box>

                  <SelectAuto
                    onSelectionChange={handeleChange}
                    stateName="catagory"
                    placeholder="Devoloper"
                    value={data?.catagory ?? ""}
                    sxa={CreatePropertyStyle.companyAuto}
                    options={[
                      {
                        label: "back end developer",
                        value: "back end developer",
                      },
                      {
                        label: "front end developer",
                        value: "front end developer",
                      },
                    ]}
                    isValid={error?.catagory ? true : false}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Box sx={CreatePropertyStyle.boxProfile}>
                    <Typography sx={CreatePropertyStyle.profileText}>
                      Service Provider Name
                      <Typography color="error" variant="caption">
                        *
                      </Typography>
                    </Typography>
                  </Box>
                  <TextFieldCom
                    stateName="Name"
                    handleChange={handeleChange}
                    placeholder="Enter Number"
                    value={data?.Name ?? ""}
                    isValid={error?.Name ? true : false}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Box sx={CreatePropertyStyle.boxProfile}>
                    <Typography sx={CreatePropertyStyle.profileText}>
                      Service Provider Code
                      <Typography color="error" variant="caption">
                        *
                      </Typography>
                    </Typography>
                  </Box>
                  <TextFieldCom
                    stateName="code"
                    handleChange={handeleChange}
                    placeholder="Enter Code"
                    value={data?.code ?? ""}
                    isValid={error?.code ? true : false}
                  />
                </Grid>
              </Grid>
              <Typography sx={CreatePropertyStyle.labelSx}>
                Description
              </Typography>

              <Box sx={CreatePropertyStyle.boxSx}>
                <ReactQuill
                  sx={{ fontSize: "10px" }}
                  value={value}
                  theme="snow"
                  onChange={setValue}
                />
              </Box>
            </Card>
          </Grid>

          <Card mt={3} sx={CreatePropertyStyle.cardSx1}>
            <Typography
              variant="h6"
              component="h6"
              sx={CreatePropertyStyle.typeText}
            >
              ADDRESS
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Door Number
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <TextFieldCom
                  stateName="doorNum"
                  handleChange={handeleChange}
                  // type="number"
                  placeholder="Enter Number"
                  value={data?.doorNum ?? ""}
                  isValid={error?.doorNum ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Address Line 1
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <TextFieldCom
                  stateName="addOne"
                  handleChange={handeleChange}
                  placeholder="address"
                  value={data?.addOne ?? ""}
                  isValid={error?.addOne ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Address Line 2
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <TextFieldCom
                  stateName="addTwo"
                  handleChange={handeleChange}
                  placeholder="address"
                  value={data?.addTwo ?? ""}
                  isValid={error?.addTwo ? true : false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Landmark
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <TextFieldCom
                  stateName="landMark"
                  handleChange={handeleChange}
                  placeholder="Enter Landmark"
                  value={data?.landMark ?? ""}
                  isValid={error?.landMark ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Area
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>

                <SelectAuto
                  stateName="area"
                  onSelectionChange={handeleChange}
                  placeholder="area"
                  value={data?.area ?? ""}
                  sxa={CreatePropertyStyle.companyAuto}
                  options={[
                    {
                      label: "Nedungundram",
                      value: "Nedungundram",
                    },
                    {
                      label: "Alapakkam",
                      value: "alapakkam",
                    },
                  ]}
                  isValid={error?.area ? true : false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    City
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <SelectAuto
                  stateName="city"
                  onSelectionChange={handeleChange}
                  placeholder="Enter your city"
                  value={data?.city ?? ""}
                  sxa={CreatePropertyStyle.companyAuto}
                  options={[
                    {
                      label: "Chennai",
                      value: "Chennai",
                    },
                    {
                      label: "Madurai",
                      value: "Madurai",
                    },
                  ]}
                  isValid={error?.city ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    State
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <SelectAuto
                  stateName="stateIn"
                  onSelectionChange={handeleChange}
                  value={data?.stateIn ?? ""}
                  placeholder="Enter Your state"
                  sxa={CreatePropertyStyle.companyAuto}
                  options={[
                    {
                      label: "Tamil nadu",
                      value: "Tamil nadu",
                    },
                    {
                      label: "Kerala",
                      value: "Kerala",
                    },
                  ]}
                  isValid={error?.stateIn ? true : false}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Country
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <SelectAuto
                  stateName="country"
                  onSelectionChange={handeleChange}
                  value={data?.country ?? ""}
                  placeholder="Enter country"
                  sxa={CreatePropertyStyle.companyAuto}
                  options={[
                    {
                      label: "India",
                      value: "India",
                    },
                    {
                      label: "Australia",
                      value: "Australia",
                    },
                  ]}
                  isValid={error?.country ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Pincode
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <TextFieldCom
                  errorMsg={error?.pinCode}
                  stateName="pinCode"
                  handleChange={handeleChange}
                  value={data?.pinCode ?? ""}
                  placeholder="Enter Pincode"
                  isValid={error?.pinCode ? true : false}
                />
              </Grid>
            </Grid>
          </Card>

          <Card mt={1} sx={CreatePropertyStyle.contactCardSx}>
            <Typography
              variant="h6"
              component="h6"
              sx={CreatePropertyStyle.typeText}
            >
              CONTACT & OTHER INFORMATION
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Primary Telephone
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>

                <MuiPhoneNumber
                  onChange={(e) => handeleChange("telePhone", e)}
                  sx={CreatePropertyStyle.phoneSx}
                  value={data?.telePhone ?? ""}
                  defaultCountry={"in"}
                  placeholder="hello"
                  error={error?.telePhone ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Primary Mobile
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <MuiPhoneNumber
                  onChange={(e) => handeleChange("mobile", e)}
                  sx={CreatePropertyStyle.phoneSx}
                  value={data?.mobile ?? ""}
                  defaultCountry={"in"}
                  error={error?.mobile ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box sx={CreatePropertyStyle.boxProfile}>
                  <Typography sx={CreatePropertyStyle.profileText}>
                    Primary Email Address
                    <Typography color="error" variant="caption">
                      *
                    </Typography>
                  </Typography>
                </Box>
                <TextFieldCom
                  stateName="email"
                  errorMsg={error?.email}
                  value={data?.email ?? ""}
                  handleChange={handeleChange}
                  placeholder="example@gmail.com"
                  isValid={error?.email ? true : false}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
      <Card sx={CreatePropertyStyle.cardSx}>
        <Stack sx={CreatePropertyStyle.endCard} direction="row">
          <ListItem sx={CreatePropertyStyle.saveBtnSx}>
            <Button
              fullWidth={true}
              variant="outlined"
              sx={CreatePropertyStyle.cancelSx}
              onClick={() => navigate(appRoutes.lcaListPage)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => handeleSumit()}
              sx={CreatePropertyStyle.saveSx}
              fullWidth={true}
              variant="contained"
            >
              {data?.id?.length > 0 ? "Update" : "Submit"}
            </Button>
          </ListItem>
        </Stack>
      </Card>
    </Box>
  );
}
