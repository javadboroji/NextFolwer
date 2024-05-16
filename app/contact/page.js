import React from "react";
import HeaderCS from "../Components/HeaderCs/HeaderCS";
import FooterCs from "../Components/FooterCs";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "@/app/globals.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import Image from "next/image";
import contactImage from '@/public/5124556.jpg'
function Contact() {
  return (
    <>
      <HeaderCS />
      <div className="h-full">
        {/* Banner */}
        <div className="page-banner">
          <h1 className="text-5xl text-slate-50"> تماس با ما</h1>
        </div>
        <div className="container flex flex-col mx-auto px-4 py-8">
          <Grid container spacing={2} flex flex-col mx-auto mt={8}>
            <Grid item xs={12} lg={6}>
              <h1 className="text-4xl font-semibold">سایت گل</h1>
              <Box sx={{display:{lg:'flex' },flexDirection:{lg:'column',xs:'row'} }} >
                <Box flex={1} className="flex lg:flex-row flex-col" my={4}>
                  <TextField
                  
                    required
                    id="outlined-required"
                    label="نام"
                    fullWidth
                    sx={{margin:{lg:'0 1rem 0 0',xs:'1rem 0 0 0'},  "& .MuiInputBase-formControl":{borderRadius:'16px !important'}}}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="نام خانوادگی"
                    fullWidth
                    sx={{
                      margin:{lg:'0 0 0 1rem',xs:'1rem 0 0 0'}, 
                      "& .MuiInputBase-formControl":{borderRadius:'16px !important'}
                  }}
                  />
                </Box>
                <TextField
                  required
                  id="outlined-required"
                  label="ایمیل"
                  fullWidth
                  sx={{my:{lg:'1rem'},  "& .MuiInputBase-formControl":{borderRadius:'16px !important'}}}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="پیام"
                  fullWidth
                  sx={{my:'1rem',  "& .MuiInputBase-formControl":{borderRadius:'16px !important'}}}
                />
                <Button variant="outlined" className="px-8 py-6  text-xl font-bold    mb-6 w-1/3">ارسال</Button>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6} className="flex-col lg:flex-row lg:flex ">
                <div className="contact-image-box flex justify-center lg:w-1/2">
                    <Image src={contactImage} width={400} height={300} alt="contact"/>
                </div>
               <div className="flex flex-col lg:w-1/2">
               <div className="bg-gray-100 rounded-lg p-4 flex items-center my-2">
                    <div className="bg-blue-400 rounded-full me-4 w-16 h-16 flex justify-center items-center relative">
                        <EmailIcon sx={{color:'#065bd4' ,fontSize:'2rem'}}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">ایمیل</span>
                        <span className="text-sm">info@gmail.com</span>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center my-2">
                    <div className="bg-blue-400 rounded-full me-4 w-16 h-16 flex justify-center items-center relative">
                        <PhoneIcon sx={{color:'#065bd4' ,fontSize:'2rem'}}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">شماره تماس</span>
                        <span className="text-sm">099652365</span>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center my-2">
                    <div className="bg-blue-400 rounded-full me-4 w-16 h-16 flex justify-center items-center relative">
                        <HomeIcon sx={{color:'#065bd4' ,fontSize:'2rem'}}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-2xl">آدرس</span>
                        <span className="text-sm">تهران ایران </span>
                    </div>
                </div>
               </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <FooterCs />
    </>
  );
}

export default Contact;
