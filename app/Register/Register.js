"use client";
import { Alert, Grid, Slide, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import { useRouter } from "next/navigation";
import React from "react";

function Register({ setIsRegister }) {
  const router = useRouter();
  /**------------------------------------------------------------------------
   *                           Toast Setting
   *------------------------------------------------------------------------**/
  function TransitionUp(props) {

    return <Slide {...props} direction="up" />;
  }
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const loginRun = () => {
    setIsRegister(false);
  };
  //Formic Config

  const formik = useFormik({
    initialValues: {
      userName: "",

      email: "",

      password: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string()

        .max(15, "حداکثر باید 15 کارکتر باشد")

        .required("اجباری"),


      email: Yup.string().email("ایمیل واردشده درست نمی باشد").required("اجباری"),
      password: Yup.string().required(" اجباری"),
    }),

    onSubmit: async (values) => {
      try {
        const api_req_options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
         },
          body: JSON.stringify(values),
        };

        const res = await fetch("http://localhost:3001/users", api_req_options);
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }

        const dataBack = await res.json();
        
        if (dataBack.register === true) {
          setOpen(true);
          router.push("/dashboard");
        } else {
          console.error("Unexpected response from the server:", dataBack);
          setOpen(true);
        }
      } catch (error) {
        console.error("Error occurred during registration:", error);
      }
    },
  });
  return (
   <>
     <Grid item sx={12} lg={6} display={"flex"}>
       <form
           onSubmit={formik.handleSubmit}
           className="lg:border-l-2 lg:border-b-0 lg:pl-4 pb-4 border-b-2 w-full"
       >
         <label htmlFor="userName" className="text-white text-1xl">
          نام 
         </label>

         <input
             className="bg-gray-200 mb-3 bg-transparent text-white appearance-none border-2 border-gray-200 rounded w-full rounded-lg py-4 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
             id="userName"
             name="userName"
             type="text"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.userName}
         />

         {formik.touched.userName && formik.errors.userName ? (
             <p className="text-red-500 text-xs italic">
               {formik.errors.userName}
             </p>
         ) : null}


         {formik.touched.lastName && formik.errors.lastName ? (
             <p className="text-red-500 text-xs italic">
               {formik.errors.lastName}
             </p>
         ) : null}

         <label htmlFor="email" className="text-white text-1xl">
          ایمیل
         </label>

         <input
             className="bg-gray-200 mb-3 bg-transparent appearance-none border-2 border-gray-200 rounded w-full rounded-lg py-4 px-4 text-gray-700 leading-tight focus:outline-none text-white focus:border-purple-500"
             id="email"
             name="email"
             type="email"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email}
         />

         {formik.touched.email && formik.errors.email ? (
             <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
         ) : null}
         <label htmlFor="lastName" className="text-white text-1xl">
           پسورد{" "}
         </label>

         <input
             className="bg-gray-200 mb-3 bg-transparent appearance-none border-2 border-gray-200 rounded w-full rounded-lg py-4 px-4 text-gray-700 leading-tight focus:outline-none text-white  focus:border-purple-500"
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
               className="border-amber-600 hover:bg-yellow-400 text-white font-semibold rounded-lg py-4 my-2 px-16 border   rounded"
               type="submit"
           >
             {" "}
             ثبت  نام
           </button>
           <button
               className="border-0 bg-transparent text-white "
               onClick={() => loginRun()}
           >
             {" "}
             ورود
           </button>
         </div>
       </form>
     </Grid>

     <Stack spacing={2} sx={{ width: '100%' }} position={'absolute'}>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          ثبت نام با موفقیت انجام شد
         </Alert>
       </Snackbar>

     </Stack>
   </>
  );
}

export default Register;
