import { Button, Grid, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TablePagination from "@mui/material/TablePagination";
import { Appbar } from "./style";

export default function TablePag(props) {
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    preBtn,
    nextBtn,
    items,
    setPage,
    table,
    rowsPerPage,
    myPage,
  } = props;

  return (
    <>
      <Grid
        container
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box sx={Appbar.BoxStart}
            

          >
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={table?.length}
              rowsPerPage={rowsPerPage}
              page={myPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{
                "& .MuiToolbar-root": {
                  paddingLeft: "0px !important",
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box sx={Appbar.BoxEnd}
          >
            <List
              sx={Appbar.Listsx}
            >
              {items.map(({ page, type, selected }, index) => {
                let children = null;

                if (type === "start-ellipsis" || type === "end-ellipsis") {
                  children = ".....";
                } else if (type === "page") {
                  children = (
                    <Button
                      size="small"
                      variant={myPage === page - 1 ? "contained" : "outlined"}
                      type="button"
                      onClick={() => {
                        setPage(page - 1);
                      }}
                      style={{
                        fontWeight: selected ? "bold" : undefined,
                      }}
                    >
                      {page}
                    </Button>
                  );
                } else {
                  children = (
                    <Button
                      variant="outlined"
                      type="button"
                      size="small"
                      onClick={() => {
                        type === "next" ? nextBtn() : preBtn();
                      }}
                    >
                      {type}
                    </Button>
                  );
                }
                return (
                  <Typography
                  
                    variant="subtitle1"
                    // component={"span"}
                    key={index}
                  >
                    {" "}
                    {children}
                    
                  </Typography>
                );
              })}
            </List>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
