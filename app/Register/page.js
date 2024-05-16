"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import bg from "@/public/registerBg.jpg";
import { Layers } from "@mui/icons-material";
import LayoutCs from "../Components/LayoutCs";
import { logging } from "@/next.config";
import { useRouter } from "next/navigation";
import Register from "./Register";
import {
  Alert,
  Backdrop,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { log } from "next/dist/server/typescript/utils";

const api_url = "/api/register/rouute";
function Login() {
  const [open, setOpen] = React.useState(false);
  const [toastMessag, settoastMessag] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  const [isRegister, setIsRegister] = useState(false);

  //change form display
  const registerRun = () => {
    setIsRegister(true);
  };

  //Formic Config

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      password: Yup.string().required("اجباری"),
      email: Yup.string()
        .email("آدرس ایمیل وارد شده درست نمی باشد")
        .required("اجباری"),
    }),

    onSubmit: async (values) => {
      try {
        const api_req_options = {
          method: "POST",
          body: JSON.stringify(values),
        };

        const res = await fetch(
          `${process.env["NEXT_PUBLIC_BASE_URL"]}/api/login`,
          api_req_options
        );
        console.log(res);
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }

        const dataBack = await res.json();
        console.log(dataBack);
        if (dataBack.register === true) {
          settoastMessag({
            msg: "با موفقیت انجام شد",
            type: "success",
          });
          setOpen(true);
          setTimeout(() => {
            router.push("/dashboard");
          }, 3000);
        } else {
          console.error("Unexpected response from the server:", dataBack);
          settoastMessag({
            msg: "رمز عبور یا ایمیل شما اشتباه می باشد",
            type: "error",
          });
          setOpen(true);
        }
      } catch (error) {
        console.error("Error occurred during registration:", error);
      }
    },
  });
  return (
    <LayoutCs>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className=" flex justify-center items-center   pt-3 register-bg  min-h-screen">
        <div className="container  mx-auto py-4 lg:container flex-row items-center justify-center mt-8">
          <Grid
            container
            spacing={2}
            className="d-flex items-center justify-center m-auto"
          >
            {!isRegister ? (
              <Grid item sx={12} lg={6} display={"flex"}>
                <form
                  onSubmit={formik.handleSubmit}
                  className="lg:border-r-2 lg:border-b-0 lg:pr-4 pb-4 border-b-2 w-full"
                >
                  <label htmlFor="email" className="text-white text-1xl">
                    ایمیل
                  </label>

                  <input
                    className="bg-gray-200 mb-3 bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none text-white focus:border-purple-500"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.email}
                    </p>
                  ) : null}
                  <label htmlFor="lastName" className="text-white text-1xl">
                    پسورد{" "}
                  </label>

                  <input
                    className="bg-gray-200 mb-3 bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none text-white  focus:border-purple-500"
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.password}
                    </p>
                  ) : null}

                  <div className="flex justify-between">
                    <button
                      className="border-amber-600 hover:bg-yellow-400 text-white font-semibold  py-2 my-2 px-16 border   rounded"
                      type="submit"
                    >
                      {" "}
                      ورود
                    </button>
                    <button
                      className="border-0 bg-transparent text-white "
                      onClick={() => registerRun()}
                    >
                      {" "}
                      ثبت نام
                    </button>
                  </div>
                </form>
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
      <Stack spacing={2} sx={{ width: "100%" }} position={"absolute"}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={toastMessag.type}
            sx={{ width: "100%", padding: "1rem" }}
          >
            <Typography fontSize={"24"}> {toastMessag.msg}</Typography>
          </Alert>
        </Snackbar>
      </Stack>
    </LayoutCs>
  );
}

export default Login;
