"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import LayoutCs from "../Components/LayoutCs";
import Register from "./Register";
import LoginForm from './LoginForm'


function Login() {
  const [isRegister, setIsRegister] = useState(false);
  //change form display
  const registerRun = () => {
    setIsRegister(true);
  };

  return (
    <LayoutCs>
      <div className=" flex justify-center items-center   pt-3 register-bg  min-h-screen">
        <div className="container  mx-auto py-4 lg:container flex-row items-center justify-center mt-8">
          <Grid
            container
            spacing={2}
            className="d-flex items-center justify-center m-auto"
          >
            {!isRegister ? (
              <Grid item sx={12} lg={4} display={"flex"}>
                {/* /*================================ Login Form ==============================*/}
                <LoginForm registerRun={registerRun}/>
                
                
              </Grid>
            ) : (
              //Register Form display
              <Register setIsRegister={setIsRegister} />
            )}

            <Grid item sx={12} lg={4} display={"flex"}>
              <h1 className="text-white text-5xl">
                {" "}
                سایت <span className="text-yellow-400"> گل</span>
              </h1>
            </Grid>
          </Grid>
        </div>
      </div>
    </LayoutCs>
  );
}

export default Login;
