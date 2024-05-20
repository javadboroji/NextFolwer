"use client";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import uuid4 from "react-uuid";
import UploadImage from "./UploadImageCs";
function ProductInpForm({rows ,setRows}) {
 const initialValueCu={
  title: "",
  price: "",
    productCount: "",
 }
 const [imageFile, setImageFile] = useState('')
const ServeActionHandler=async(formData)=>{
  'use serve '
  const title = formData.get('title');
  const price = formData.get('price');
  const productCount = formData.get('productCount');
  const image=imageFile
if(!title||!price||!productCount){
  return
}else{
  
  console.log(title,price,productCount,image);
}
}
  return (
    <div className="flex p-3  justify-center items-baseline flex-wrap ">
          <form className="w-full flex-col lg:flex-row items-center flex items-baseline p-0" action={ServeActionHandler}>
          <UploadImage imageFile={imageFile} setImageFile={setImageFile} />
            <input
            id="title"
              name="title"
              className="border-2 border-gray-400 p-2  rounded-md m-2 w-full lg:w-1/4"
              placeholder="نام محصول"
           
            />
            <input
            id="price"
              name="price"
              className="border-2 border-gray-400 p-2  rounded-md m-2  mx-2w-full lg:w-1/4"
              placeholder="قیمت"
             
            />
            <input
            id="productCount"
              name="productCount"
              className="border-2 border-gray-400 p-2  rounded-md m-2 w-full lg:w-1/4"
              placeholder="تعداد"
          
            />
            <Button type="submit" sx={{padding:'0.5rem 0 !important'}} className=" flex-auto lg:w-[10%]" variant="outlined">
              {" "}
              ارسال
            </Button>
          </form>
        
    </div>
  );
}

export default ProductInpForm;
