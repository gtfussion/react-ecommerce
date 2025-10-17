import { Field, FieldArray, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { FormikFormField } from "../components/Molecules/FormikFormField";
import { loginLocally } from "../services/loginService";
import { useUserStore } from "../store/UserStore";
import { LoginSchema } from "../validationSchemas/Login";
import { Friends } from "../components/Friends/Friends";
import { LoginModel } from "../types/loginModel";

export const Login = () => {
  const setSessionId = useUserStore((state) => state.setSessionId);
  const nav = useNavigate();

  const handleLogin = (
    { email, password }: LoginModel,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const user = loginLocally({ email: email, password: password });

    setTimeout(() => {
      setSubmitting(false);
      if (user) {
        setSessionId(user.token);
        nav("/");
      }
    }, 2000);
  };

  return (
    <div className="p-6">
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: "",
          password: "",
          friends: ["jared", "ian", "brent"],
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleLogin(values, setSubmitting);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikFormField className={""} label="Email" name="email" />
            <FormikFormField
              className={""}
              label="Password"
              name="password"
              type="password"
            />
            <hr />
            {/* <Interest /> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-black rounded-2xl px-4 py-2 flex justify-center"
            >
              {isSubmitting ? "Login in" : "Login"}
            </button>
            <Friends />
          </Form>
        )}
      </Formik>
    </div>
  );
};
