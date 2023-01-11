
export const PropertiesStyle = {
  tableContainerSx: {
    marginTop: "20px",
    height: "62vh !important",
    overflow: "auto !important",
  },
  tableHeaderSx: {
    "& th": {
      cursor: "pointer",
      backgroundColor: "#f2f4f7",
      padding: "12px 10px",
      marginBottom: "10px",
      border: 0,
      borderRadius: "3px",
      color: "#4E5A6B",
      font: "Nunito Sans",
      fontSize: "12px",
      fontWeight: "600",
      
    },
  },
  tableRowSx: {
    "& td p": {
      font: "Nunito Sans",
      fontSize: "12px",
    },
  },
  IconSx:{
  transition:" all .3s",
  cursor: "pointer",
    "&:active": {
      transform: "scale(0.98)",
      boxShadow: "3px 2px 22px 1px rgba(0, 0, 0, 0.24)"
      },
      "&:hover": {
        transform: "scale(1.40)",
          transition: "all .2s ease-in-out 0s",
        
        },

  }

};
