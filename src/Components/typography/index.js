import propTypes from "prop-types";
import { Typography } from "@mui/material";

export default function TypographyText({
    variant,component,title,sx
}) {

  return (
    <>
      <Typography variant={variant} component={component} sx={sx}>
        {title}
        </Typography>
    </>
  );
}
