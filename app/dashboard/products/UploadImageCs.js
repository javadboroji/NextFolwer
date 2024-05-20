'use client'
import React, { useEffect, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";
import Image from 'next/image';
function UploadImage({imageFile,setImageFile}) {
  
    const inpHandler=(e)=>{
        setImageFile(e.target.files[0]);
    }
    useEffect(() => {
        console.log("renderUpload",imageFile);
    }, [imageFile])
    
  return (
    <Box maxWidth="md" sx={{ mt: 8,display:'flex',flexDirection:'column' }}>
      <Box>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <input id='image' hidden accept="image/*" type="file"  onChange={inpHandler}/>
        <PhotoCamera />
      </IconButton>
      </Box>
      <Box sx={{marginTop:"1rem"}}>
      {
         imageFile&&<Image src={URL.createObjectURL(imageFile)} width={250} height={250}/>
      }
      </Box>
  </Box>
  )
}

export default UploadImage