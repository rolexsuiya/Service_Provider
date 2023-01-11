import { padding } from "@mui/system";

export const AppStyle = {
  appBox: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    background: "#fff",
    borderBottom: "1px solid #e4e7ee",
  },
  appType: {
    fontWeight: "600",
    color: "black",
    fontSize: "12px",
    padding: "13px 0 10px 10px",
  },
  textBar: {
    padding: "5px 10px 5px 0",
    width: "25%",
    "&.MuiAutocomplete-root .MuiOutlinedInput-root": {
      background: "#f2f4f7",
      fontSize: "12px",
    },
  },
  NavIcon: {
    marginTop: "10px",
    padding: "12px",
    bgcolor: "#E4E8EE",
    color: "#091B29",
    width: "20px",
    height: "20px",
    "&:hover": { bgcolor: "#E4E8EE" },
  },
  LeftIcon: {
    fontSize: "20px",

    paddingButtom: "20px",
  },
  AppbarStyle: {
    // padding: "10px",
    paddingLeft:"10px"
    // marginTop:"10px"
  },
};
