import React from "react";
import { TextInput } from "../TextInput";

export const FormField = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <label>{label}</label>
      <TextInput {...rest} />
    </div>
  );
};
