import { useState } from "react";
import { FormField } from "../components/Molecules/FormField";
import { TextInput } from "../components/TextInput";
import { loginLocally } from "../services/loginService";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {
    loginLocally({ email: email, password: password });
  };

  return (
    <div className="p-6">
      <FormField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="Password"
        value={password}
        type="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full text-white bg-black rounded-2xl px-4 py-2 flex justify-center"
      >
        Login
      </button>
    </div>
  );
};
