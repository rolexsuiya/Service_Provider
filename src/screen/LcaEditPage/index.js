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
import axios from "axios";
import { MuiTelInput } from "mui-tel-input";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { SelectAuto } from "../../Components/autoComplete";
import TextFieldCom from "../../Components/textField";
import { useToastContext } from "../../context/toastContext";
import { appRoutes } from "../../router/routes";
import { CreatePropertyStyle } from "./style";

export default function LcaEditPage() {
  const users = useSelector((store) => store.users);

  const toastContext = useToastContext();

  const [data, setData] = useState({ ...users.userDetails });

  const handleRomve = () => {
    setData({ ...data, images: "" });
  };

  const handeleImages = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setData({ ...data, images: base64 });
  };

  //  Image convert to base64 function
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // end

  const onChange = (e) => {
    setData({ ...data, description: e });
  };

  const handeleChange = (key, value) => {
    debugger;
    const copyState = JSON.parse(JSON.stringify(data));
    if (key === "doorNum") {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        copyState["error"][key] = "";
        copyState[key] = value === undefined ? "" : value;
        setData({
          ...copyState,
        });
      }
    } else {
      copyState["error"][key] = "";
      copyState[key] = value === undefined ? "" : value;
      setData({
        ...copyState,
      });
    }
  };

  // form validation
  const validateForm = () => {
    debugger;
    var isValid = true;
    const copyState = JSON.parse(JSON.stringify(data));
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (copyState?.company?.length === 0 || copyState?.company === null) {
      isValid = false;
      copyState.error["company"] = true;
    }
    if (copyState?.catagory?.length === 0 || copyState?.catagory === null) {
      isValid = false;
      copyState.error["catagory"] = true;
    }
    if (copyState?.Name?.length === 0) {
      isValid = false;
      copyState.error["Name"] = true;
    }
    if (copyState?.code?.length === 0) {
      isValid = false;
      copyState.error["code"] = true;
    }
    if (copyState?.doorNum?.length === 0) {
      isValid = false;
      copyState.error["doorNum"] = true;
    }
    if (copyState?.addOne?.length === 0) {
      isValid = false;
      copyState.error["addOne"] = true;
    }
    if (copyState?.addTwo?.length === 0) {
      isValid = false;
      copyState.error["addTwo"] = true;
    }
    if (copyState?.landMark?.length === 0) {
      isValid = false;
      copyState.error["landMark"] = true;
    }
    if (copyState?.area?.length === 0) {
      isValid = false;
      copyState.error["area"] = true;
    }
    if (copyState?.city?.length === 0) {
      isValid = false;
      copyState.error["city"] = true;
    }
    if (copyState?.stateIn?.length === 0) {
      isValid = false;
      copyState.error["stateIn"] = true;
    }
    if (copyState?.country?.length === 0) {
      isValid = false;
      copyState.error["country"] = true;
    }
    if (copyState?.pinCode?.length === 0) {
      isValid = false;
      copyState.error["pinCode"] = true;
    }
    if (copyState?.telePhone?.length === 0) {
      isValid = false;
      copyState.error["telePhone"] = true;
    }
    if (copyState?.mobile?.length === 0) {
      isValid = false;
      copyState.error["mobile"] = true;
    }
    if (copyState?.email?.length === 0) {
      isValid = false;
      copyState.error["email"] = true;
    }
    if (copyState?.email && regexEmail.test(copyState?.email) === false) {
      isValid = false;
      copyState.error["email"] = true;
      copyState.error.email = "Please Enter Valid Email";
    }
    setData({
      ...copyState,
    });
    return isValid;
  };
  // end

  let idStud = uuid();
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setData({ ...users?.userDetails, ...users?.editUser });
  }, []);

  var payload = {
    company: data?.company ?? "",
    catagory: data?.catagory ?? "",
    Name: data?.Name ?? "",
    code: data?.code ?? "",
    description: data?.description ?? "",
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
    images: data?.images ?? "",
  };

  // submit button
  const handeleSumit = () => {
    if (validateForm()) {
      // edit data
      if (data?.id) {
        payload["id"] = data?.id;
        axios.put(
          `https://63ce24f3d2e8c29a9bd15b2d.mockapi.io/registerForm/${data?.id}`,
          payload
        );

        toastContext("success", "Succesfully Updated");
      }
      // add data
      else {
        axios
          .post(
            "https://63ce24f3d2e8c29a9bd15b2d.mockapi.io/registerForm",
            payload
          )
          .then((res) => {});
        toastContext("success", "Succesfully Added");
      }
      navigate(appRoutes.lcaListPage);
    } else {
      toastContext("error", "Please Fill in all the mandatory Fields");
    }
    // end
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
                {data.images ? (
                  <img
                    src={data?.images}
                    alt="upload"
                    style={{ marginLeft: "12px" }}
                  />
                ) : (
                  <img src={require("../../assets/images/propertyimg.png")} />
                )}
              </Card>
              <Button
                component="label"
                type="file"
                sx={CreatePropertyStyle.uploadBtnSx}
              >
                Upload Image
                <input
                  onChange={handeleImages}
                  name="file"
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                />
              </Button>

              <Typography
                variant="h6"
                component="h6"
                sx={CreatePropertyStyle.typeRemove}
                align="center"
                onClick={handleRomve}
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
                    isValid={data?.error?.company ? true : false}
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
                    isValid={data?.error?.catagory ? true : false}
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
                    placeholder="Enter Name"
                    value={data?.Name ?? ""}
                    isValid={data?.error?.Name ? true : false}
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
                    isValid={data?.error?.code ? true : false}
                  />
                </Grid>
              </Grid>
              <Typography sx={CreatePropertyStyle.labelSx}>
                Description
              </Typography>
              <Box sx={CreatePropertyStyle.boxSx}>
                <ReactQuill
                  sx={{ fontSize: "10px" }}
                  value={data?.description ?? ""}
                  theme="snow"
                  onChange={onChange}
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
                  placeholder="Enter Number"
                  value={data?.doorNum ?? ""}
                  isValid={data?.error?.doorNum ? true : false}
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
                  isValid={data?.error?.addOne ? true : false}
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
                  isValid={data?.error?.addTwo ? true : false}
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
                  isValid={data?.error?.landMark ? true : false}
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
                  isValid={data?.error?.area ? true : false}
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
                  isValid={data?.error?.city ? true : false}
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
                  isValid={data?.error?.stateIn ? true : false}
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
                  isValid={data?.error?.country ? true : false}
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
                  errorMsg={data?.error?.pinCode}
                  stateName="pinCode"
                  handleChange={handeleChange}
                  value={data?.pinCode ?? ""}
                  placeholder="Enter Pincode"
                  isValid={data?.error?.pinCode ? true : false}
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

                <MuiTelInput
                  defaultCountry="IN"
                  onChange={(e) => handeleChange("telePhone", e)}
                  sx={CreatePropertyStyle.phoneSx}
                  value={data?.telePhone ?? ""}
                  placeholder="enter telephone number"
                  error={data?.error?.telePhone ? true : false}
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

                <MuiTelInput
                  defaultCountry="IN"
                  onChange={(e) => handeleChange("mobile", e)}
                  sx={CreatePropertyStyle.phoneSx}
                  value={data?.mobile ?? ""}
                  error={data?.error?.mobile ? true : false}
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
                  errorMsg={data?.error?.email}
                  value={data?.email ?? ""}
                  handleChange={handeleChange}
                  placeholder="example@gmail.com"
                  isValid={data?.error?.email ? true : false}
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
