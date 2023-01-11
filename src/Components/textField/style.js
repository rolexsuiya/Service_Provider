export const InputStyleSx = {
  labelSx: {
    font: "Nunito Sans !important",
    fontSize: "12px",
    letterSpacing: "0.05rem",
    marginBottom: "5px",
    
  },
  textfieldSx: {
    borderRadius: "4px",
    height: "35px",
    
    fontSize: "12px",
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
  },
  '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
  },
  '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
  }
  },
};
