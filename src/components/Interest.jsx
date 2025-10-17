import React from "react";
import { FormikFormField } from "./Molecules/FormikFormField";
import { useFormikContext } from "formik";

export const Interest = () => {
  const { errors } = useFormikContext();
  console.log(errors);
  return (
    <div>
      <FormikFormField label="Hobby" name="intrest.hobby" type="text" />
      <FormikFormField label="Gamgs" name="intrest.hobby" type="text" />
      <FormikFormField label="Dancing" name="intrest.hobby" type="text" />
      <FormikFormField label="Racing" name="intrest.hobby" type="text" />
    </div>
  );
};
