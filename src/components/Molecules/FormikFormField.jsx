import { ErrorMessage, Field } from "formik";
import React from "react";

export const FormikFormField = ({ label, className, ...rest }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <label>{label}</label>
      <Field
        className={`p-4 bg-slate-100 rounded-3xl text-black ${className} `}
        {...rest}
      />
      <ErrorMessage className="text-red-400" name={rest.name} />
    </div>
  );
};
