import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import React from "react";
import { PropertiesStyle } from "./style";

const TableCom = (props) => {
  const {
    table,
    load,
    rowsPerPage,
    myPage,
    handleDelete,
    handleEdit,
    columnData = [],
  } = props;

  return (
    <>
      <TableContainer sx={PropertiesStyle.tableContainerSx}>
        <Table sx={{ minWidth: 320 }} aria-label="table">
          <TableHead sx={PropertiesStyle.tableHeaderSx}>
            <TableRow>
              {Array.isArray(columnData) && columnData?.length > 0
                ? columnData.map((val, i) => (
                    <TableCell key={i}>{val?.coloumName}</TableCell>
                  ))
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {!load
              ? table?.length > 0 &&
                table
                  ?.slice(
                    myPage * rowsPerPage,
                    myPage * rowsPerPage + rowsPerPage
                  )
                  ?.map((row, index) => (
                    <TableRow sx={PropertiesStyle.tableRowSx} key={index}>
                      <TableCell scope="row">
                        <Typography variant="body1" component="p">
                          {row.company}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.Name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.code}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.city}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.country}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.mobile}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.email}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <EditIcon
                            color="warning"
                            sx={PropertiesStyle.IconSx}
                            onClick={() => handleEdit(row)}
                          />
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <DeleteIcon
                            color="warning"
                            sx={PropertiesStyle.IconSx}
                            onClick={() => handleDelete(row?.id)}
                          />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
              : table?.map((row) => (
                  <TableRow>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                    <TableCell>
                      <Skeleton animation="wave" />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableCom;
