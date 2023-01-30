import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Divider, Grid } from "@mui/material";
import usePagination from "@mui/material/usePagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import filter from "../../assets/images/filter.svg";
import AppBarCom from "../../Components/appBar";
import InputText from "../../Components/inputField";
import TableCom from "../../Components/table";
import TablePag from "../../Components/tablePaginaition";
import { useToastContext } from "../../context/toastContext";
import { addUser, editUser } from "../../redux/userSlice";
import { appRoutes } from "../../router/routes";
import { ListStyle } from "./style";

const LcaListPage = () => {
  const users = useSelector((store) => store.users);
  const [search, setSearch] = useState("");

  let navigate = useNavigate();
  const toastContext = useToastContext();

  const columnArray = [
    {
      coloumName: "Company",
      columnStateName: "company",
      columnType: "string",
    },
    {
      coloumName: "Provider Name",
      columnStateName: "name",
      columnType: "string",
    },
    {
      coloumName: "Provider Code",
      columnStateName: "code",
      columnType: "string",
    },
    {
      coloumName: "City",
      columnStateName: "city",
      columnType: "string",
    },
    {
      coloumName: "Country",
      columnStateName: "country",
      columnType: "string",
    },
    {
      coloumName: "Primary Mobile Number",
      columnStateName: "mobile",
      columnType: "string",
    },
    {
      coloumName: "Primary Email ID",
      columnStateName: "email",
      columnType: "string",
    },
    {
      coloumName: "Edit",
      columnStateName: "",
      columnType: "",
    },
    {
      coloumName: "Delete",
      columnStateName: "",
      columnType: "",
    },
  ];
  const [myPage, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();

  const handleEdit = (row) => {
    dispatch(editUser(row));
    navigate(appRoutes.lcaEditPage);
  };

  const [load, setloading] = useState(false);

  const getUsers = async () => {
    const response = await axios.get(
      "https://63ce24f3d2e8c29a9bd15b2d.mockapi.io/registerForm"
    );
    dispatch(addUser(response.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = (id) => {
    setloading(true);
    axios
      .delete(`https://63ce24f3d2e8c29a9bd15b2d.mockapi.io/registerForm/${id}`)
      .then((res) => {
        setloading(false);
        getUsers();
        toastContext("success", "Succesfully Deleted");
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  const changeSearchData = (data) => {
    return data?.filter((item) =>
      item?.Name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const { items } = usePagination({
    count: Math.ceil(
      changeSearchData(users?.userData?.length > 0 ? users?.userData : [])
        ?.length / rowsPerPage
    ),
  });
  const nextBtn = () => {
    if (myPage * rowsPerPage + rowsPerPage < users?.userData?.length) {
      setPage((pre) => pre + 1);
    }
  };

  const preBtn = () => {
    if (myPage > 0) {
      setPage((pre) => pre - 1);
    }
  };

  const onInputChange = (text) => {
    setSearch(text);
    setPage(0);
  };

  return (
    <>
      <Box sx={ListStyle.BoxBolor}>
        <AppBarCom />
        <Box sx={ListStyle.BoxPad}>
          <Box sx={ListStyle.BoxGrad}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box sx={ListStyle.BoxStart}>
                  <InputText
                    type="search"
                    placeholder={"Search Provider Name"}
                    font={"Nunito Sans"}
                    value={search}
                    onChange={(e) => onInputChange(e.target.value)}
                    startAdornment={<SearchIcon sx={ListStyle.SearchIcon} />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box sx={ListStyle.BoxEnd}>
                  <img src={filter} height="35px" alt={"filter"} />
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={ListStyle.DivStyle}
                  />
                  <Button
                    color="warning"
                    variant="contained"
                    sx={ListStyle.ButtonStyle}
                    onClick={() => {
                      dispatch(editUser({}));
                      navigate(appRoutes.lcaEditPage);
                    }}
                  >
                    ADD NEW provider
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <TableCom
              // table={search ? searchData : users?.userData}
              table={changeSearchData(
                users?.userData?.length > 0 ? users?.userData : []
              )}
              myPage={myPage}
              rowsPerPage={rowsPerPage}
              columnData={columnArray ?? []}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              load={load}
            />
            <TablePag
              items={items}
              rowsPerPage={rowsPerPage}
              myPage={myPage}
              table={changeSearchData(
                users?.userData?.length > 0 ? users?.userData : []
              )}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              setPage={setPage}
              preBtn={preBtn}
              nextBtn={nextBtn}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LcaListPage;
