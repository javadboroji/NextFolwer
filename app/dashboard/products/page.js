"use client";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout";
import useSWR from "swr";
import EditIcon from "@mui/icons-material/Edit";
//datagride
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { InputOutlined, TextFieldsOutlined } from "@mui/icons-material";
import Image from "next/image";
import ProductInpForm from "./ProductInpForm";
import ProductInfo from "./ProductInfo";
import UploadImage from "./UploadImageCs";
function Products() {
  /**------------------------------------------------------------------------
   *                           Api Fetch
   *------------------------------------------------------------------------**/
  const api = "http://localhost:3000/api/products";
  const fetcher = async () => await fetch(api).then((res) => res.json());

  const { data, error, isLoading } = useSWR("dashboard/product", fetcher);
  const columns = [
    {
      field: "image",
      headerName: "تصویر",
      width: 180,
      editable: false,
      renderCell: (params) => {
        return (
          <Image
            src={params.row.src?params.row.src?.src:'/'}
            width={48}
            height={48}
            alt={"image"}
          />
        );
      },
    },
    {
      field: "title",
      headerName: "نام محصول",
      minWidth: 200,
      flex: 1,
      type: "string",
      editable: false,
      align: "left",
    },
    {
      field: "price",
      headerName: "قیمت",
      type: "number",
      minWidth: 200,
      align: "left",
      headerAlign: "left",
      flex: 1,
      editable: false,
    },
    {
      field: "counter",
      headerName: "تعداد",
      type: "number",
      minWidth: 180,
      align: "left",
      headerAlign: "left",
      flex: 1,
      editable: false,
    },
    {
      field: "Remove",
      headerName: "عملیات",
      minWidth: 180,
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <IconButton onClick={() => RemoveShoppingCart(params)}>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  const rowData=data?data.productData:[]
  const [rows, setRows] = useState(rowData)

  const RemoveShoppingCart=(row)=>{
    console.log(row);
  }
useEffect(() => {

}, [rows])


  return (
    <>
      <Grid
        container
        display={"flex"}
        m={"auto"}
        justifyContent={"center"}
        mt={2}
      >
        <Grid item xs={11} lg={10}>
          <ProductInfo />
        </Grid>
        <Grid item xs={11} lg={10} mt={2}>
        
          <ProductInpForm  setRows={setRows} rows={rows}/>
        </Grid>
        <Grid item xs={11} lg={10} minHeight={"20rem"}>
          <DataGrid rows={rows} columns={columns} hideFooter />
        </Grid>
      </Grid>
    </>
  );
}

export default Products;
