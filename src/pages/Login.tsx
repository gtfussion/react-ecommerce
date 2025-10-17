import { LoginForm } from "../components/Login/Login";
import { SignUpForm } from "../components/Login/Signup";
import { useLoginStore } from "../store/LoginStore";

export const Login = () => {
  const isLogin = useLoginStore((state) => state.isLogin);

  return (
    <div
      className={`relative shadow-[0_0_40px_10px_rgba(217,119,6,0.4)]  max-w-5xl mx-auto mt-[8rem]  min-h-[550px] max-h-[550px] h-full border-2 border-amber-600 bg-linear-to-br ${
        !isLogin ? "from-amber-700 to-black" : "from-black to-amber-700"
      } rounded-md p-8 overflow-hidden transition-all duration-700 ease-in-out`}
    >
      <div
        className={`absolute transition-all duration-700 ease-in-out top-0  w-[200%] h-[200%] bg-black   
          ${
            isLogin
              ? "-left-[920px]  rotate-[50deg]"
              : "-right-[920px] rotate-[-50deg]"
          }
        `}
      ></div>

      {/* Login Form */}
      <div
        className={`absolute w-full h-full transition-all duration-700 ease-in-out
      ${
        isLogin
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-[50px] pointer-events-none"
      }
    `}
      >
        <LoginForm />
      </div>

      {/* Sign Up Form */}
      <div
        className={`absolute w-full h-full transition-all duration-700 ease-in-out
      ${
        !isLogin
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-[50px] pointer-events-none"
      }
    `}
      >
        <SignUpForm />
      </div>
    </div>
  );
};
