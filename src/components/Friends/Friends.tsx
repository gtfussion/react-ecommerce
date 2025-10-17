import { FieldArray, useFormikContext } from "formik";
import { FormikFormField } from "../Molecules/FormikFormField";
import { LoginModel } from "../../types/loginModel.ts";

export const Friends = () => {
  const { values } = useFormikContext<LoginModel>();

  return (
    <FieldArray
      name="friends"
      render={(arrayHelpers) => (
        <div>
          {values.friends && values.friends.length > 0 ? (
            values.friends.map((friend, index) => (
              <div key={index}>
                <FormikFormField
                  className={""}
                  name={`friends.${index}`}
                  label=""
                />
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => arrayHelpers.insert(index + 1, "")} // insert an empty string at a position
                >
                  +
                </button>
              </div>
            ))
          ) : (
            <button type="button" onClick={() => arrayHelpers.push("")}>
              {/* show this when user has removed all friends from the list */}
              Add a friend
            </button>
          )}

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      )}
    />
  );
};
