
export const CreatePropertyStyle = {
  BoxBolor: {
    backgroundColor: "#f2f4f7",
  },
  BoxButtom: {
    borderBottom: "1px solid #e4e7ee",
    boxShadow: "none",
  },
  AppbarStyle: {
    padding: "10px",
  },
  NavIcon: {
    padding: "12px",
    bgcolor: "#E4E8EE",
    color: "#091B29",
    width: "20px",
    height: "20px",
    "&:hover": { bgcolor: "#E4E8EE" },
  },
  LeftIcon: {
    fontSize: "20px",
  },
  HeadStyle: {
    fontSize: "13px",
    fontWeight: "600",
    padding: "2px 0 0 10px",
  },
  companyAuto: {
    padding: "5px 10px 5px 0",
width:"100%",
    "&.MuiAutocomplete-root .MuiOutlinedInput-root": {
      fontSize: "12px",

    },

  },
  companyText: {
    fontSize:"12px",

"&.MuiInputBase":{
height:"100%",
},
    
  },

  propertyimgSx: {
    display: "flex",
    margin: "auto",
    marginTop: "17px",
    marginBottom: "15px",
    backgroundColor: "#F2F4F7",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    boxShadow: "none",
  },
  typeText: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#4E5A6B",
    marginBottom: "6px",
  },
  typeRemove: {
    fontSize: "11px",
    fontWeight: "550",
    color: "#5c4edf",
    mt: "5px",
  },
  uploadBtnSx: {
    "&.MuiButton-root": {
      color: "#071741",
      border: "1px solid #E4E8EE",
      textTransform: "capitalize",
      width: "100%",
      padding: "6px",
      display: "flex",
      margin: "auto",
      font: " Nunito Sans ",
      fontSize: "11px",
      fontWeight: "bold",
    },
  },

  propertyCardSx: {
    marginTop: "4px",
    borderRadius: "4px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "10px",
    minHeight: "230px",
    font: "Nunito Sans !important",
  },
  boxProfile: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
  },
  profileText: {
    fontSize: "11px",
    color: "#979eac",
  },

  boxSx: {
    borderRadius: "2px",
    border: "1px solid #E4E8EE",
    marginTop: "10px",

    "& div": {
      border: "0 !important",
      margin: "0",
    },
    "& .ql-header": {
      display: "none",
    },
    "& textarea": {
      border: "0 !important",
      outline: "0 !important",
      padding: "7px 0px",
      font: "normal normal 600 14px/19px NunitoSans-Bold !important",
      "&:hover": {
        border: "0 !important",
      },
    },
    "& .quill": {
      display: "flex",
      flexDirection: "column-reverse",
    },
    "& .ql-toolbar": {
      borderTop: "1px solid #E4E8EE !important",
    },
    "& .ql-toolbar.ql-snow, .ql-container.ql-snow": {
      font: "normal normal 500 16px/19px NunitoSans-Regular !important",
    },
  },
  cardSx: {
    borderRadius: "0",
    boxShadow: "0px 3px 3px #5C86CB2E",
    width: "100%",
    bottom:"0",
    position:"fixed",
    borderTop: "1px solid #e4e7ee"
    
  },
  cardSx1: {
    boxShadow: "0px 3px 3px #5C86CB2E",
    borderRadius: "8px",
    padding: "14px",

    width: "100%",
    margin: "13px 0px 6px 10px",
  },
  saveBtnSx: {
    padding: "10px",
    width: "250px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  cancelSx: {
    
    font: "Nunito Sans",
    fontWeight: "600",
    fontSize:"12px",
    marginRight: "20px"
  },
  saveSx: {
    font: "Nunito Sans",
    fontWeight: "600",
    fontSize:"12px",
    
  },

  endCard: {
    display: "flex",
    justifyContent: "flex-end",
    rowGap: "10px",
  },
  contactCardSx: {
    margin: "5px 0px 50px 10px ",

    borderRadius: "8px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
    width: "100%",
  },
  toggleCheckSx: {
    "& .MuiButtonBase-root": {
      borderRadius: "25px!important",
      height: "30px",
      width: "30px",
      marginTop: "8px",
    },
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "#5078E1",
      color: "#fff",
    },
  },
  labelSx: {
    marginTop:"4px",
    font: "Nunito Sans !important",
    fontSize: "11px",
    
    color: "#979eac" + " !important",
  },
  toggleBtnSx: {
    "& .MuiButtonBase-root.MuiToggleButton-root": {
      borderRadius: "6px",
      border: "1px solid #E4E8EE",
      height: "38px",
      margin: "6px 4px 5px 5px",
      font: "Nunito Sans !important",
      fontSize: "13px !important",
      fontWeight: "bold",
      color: "#333",
    },

    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "#5078E1",
      color: "#fff",
      fontWeight: "bold",
      font: "Nunito Sans !important",
      "&:hover": { backgroundColor: "#5078E1" },
    },
  },
  boxSx1: {
    display: { xs: "none", sm: "none", md: "none", lg: "none" },
    // fontSize:"9px"
  },
  phoneSx:{
    border: "1px solid #c4c4c4",
                    width: "100%",
                    borderRadius: "3px",
                    marginTop: "5px",
                    
                    fontSize:"8px",
                    // '& .MuiInput-root:after': {
                    //   borderBottom: 'none'
                    // },
                    "& .MuiInputBase-input":{
                      fontSize:"12px",
                      padding:"8px"
                      
                    },
                    "& .MuiInput-root:before": {
                      borderBottom: "none",
                    }
                  

  }
};
