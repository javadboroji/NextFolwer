import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import bg from "@/public/registerBg.jpg";
import { Layers } from "@mui/icons-material";
import LayoutCs from "../Components/LayoutCs";
import { logging } from "@/next.config";
import { useRouter } from "next/navigation";

function LoginForm({registerRun}) {
    const router= useRouter()
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
        if (dataBack.login === true) {
            router.push("/dashboard");

        } else {

          // settoastMessag({
          //   msg: "رمز عبور یا ایمیل شما اشتباه می باشد",
          //   type: "error",
          // });
          //setOpen(true);
        }
      } catch (error) {
        console.error("Error occurred during registration:", error);
      }
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="lg:border-l-2 lg:border-b-0 lg:pl-4 pb-4 border-b-2 w-full"
      >
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
    </>
  );
}

export default LoginForm;
