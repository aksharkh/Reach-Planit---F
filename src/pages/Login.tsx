import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input, Divider } from "antd";
import type { LoginData } from "../types/auth";
import { IoCalendarSharp } from "react-icons/io5";
import { GoogleLogin } from "@react-oauth/google";
import AppleSignIn from "../components/AppleSignIn";

import Imgslider from "../components/ImageSlider"
import { LiaSignInAltSolid } from "react-icons/lia";
//  import Img from "../assets/wallpaperflare.jpg";
const Login = () => {
  const navigate = useNavigate();
  const { login, googleLogin, appleLogin } = useContext(AuthContext);
  const [form] = Form.useForm<LoginData>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);

    try {
      const res = await login({
        email: values.email,
        password: values.password,
      });
      console.log(res);
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data || "Login failed");
    }
    setLoading(false);
  };

  return (
    // <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
    //   {/* LEFT / TOP SECTION */}
    //   <div className="w-full h-45 md:h-auto md:flex md:w-1/2 bg-linear-to-r from-pink-600 to-purple-600 items-center justify-center text-white p-6 md:rounded-r-3xl rounded-b-3xl">
    //     <div className="text-center">
    //       <div
    //         className="w-12 h-12 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-3xl
    //                     flex items-center justify-center mx-auto mb-2 shadow-xl border-white/30"
    //       >
    //         <div className="w-8 h-8 md:w-16 md:h-16 rounded-full border border-white bg-linear-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
    //           <IoCalendarSharp className="w-4 h-4 md:w-10 md:h-10 text-white" />
    //         </div>
    //       </div>
    //       <h1 className="text-3xl md:text-5xl font-bold mb-2">PLANIT</h1>
    //       <p className="text-sm md:text-xl opacity-90 font-light">
    //         Your smart event planning companion
    //       </p>
    //     </div>
    //   </div>

    //   {/* RIGHT / BOTTOM SECTION */}
    //   <div className=" w-full md:w-1/2 flex flex-col items-center justify-center  md:pt-0 md:p-12 relative rounded-l-2xl">
    //     <div className="w-full overflow-hidden p-6">
    //       <div className="md:mb-8 text-center md:text-left">
    //         <h2 className="text-3xl font-bold text-gray-800 mb-2">
    //           Welcome Back
    //         </h2>
    //         <p className="text-gray-500 text-sm">
    //           Sign in to continue planning amazing events
    //         </p>
    //       </div>

    // <Form
    //   layout="vertical"
    //   form={form}
    //   onFinish={handleSubmit}
    //   size="middle"
    //   requiredMark={false}
    // >
    //   <Form.Item
    //     name="email"
    //     label={
    //       <span className="font-medium text-gray-700 ml-1">Email</span>
    //     }
    //     rules={[{ required: true, message: "Please enter your email!" }]}
    //   >
    //     <Input
    //       placeholder="Enter email "
    //       className="rounded-xl bg-gray-50 border-gray-200 hover:border-purple-400 focus:border-purple-500 py-3"
    //     />
    //   </Form.Item>

    //   <Form.Item
    //     name="password"
    //     label={
    //       <span className="font-medium text-gray-700 ml-1">Password</span>
    //     }
    //     rules={[
    //       { required: true, message: "Please enter your password!" },
    //     ]}
    //   >
    //     <Input.Password
    //       placeholder="Enter password"
    //       className="rounded-xl bg-gray-50 border-gray-200 hover:border-purple-400 focus:border-purple-500 py-3"
    //     />
    //   </Form.Item>

    //   <div className="mt-8">
    //     <Button
    //       htmlType="submit"
    //       loading={loading}
    //       block
    //       style={{
    //         backgroundImage:
    //           "linear-gradient(90deg, #db2777 0%, #2563eb 100%)",
    //         color: "#fff",
    //         border: "none",
    //       }}
    //       className="h-12 rounded-xl text-lg font-semibold hover:opacity-90 shadow-lg"
    //     >
    //       Log In
    //     </Button>
    //   </div>

    //   <div className="mt-8">
    //     <div className="relative flex py-2 items-center">
    //       <div className="grow border-t border-gray-200"></div>
    //       <span className="shrink-0 mx-4 text-gray-400 text-sm">
    //         Or continue with
    //       </span>
    //       <div className="grow border-t border-gray-200"></div>
    //     </div>

    //     <div className="flex gap-4 mt-4">
    //       <GoogleLogin
    //         onSuccess={async (credentialResponse) => {
    //           try {
    //             const idToken = credentialResponse.credential;

    //             if (!idToken) {
    //               alert("Google login failed: No ID Token");
    //               return;
    //             }

    //             await googleLogin(idToken);

    //             navigate("/dashboard");
    //           } catch (e) {
    //             console.error(e);
    //             alert("Google login failed");
    //           }
    //         }}
    //         onError={() => {
    //           alert("Google Login Failed");
    //         }}
    //       />

    //       <AppleSignIn
    //         onSuccess={async (identityToken) => {
    //           try {
    //             if (!identityToken) {
    //               alert("Apple login failed: No ID Token");
    //               return;
    //             }

    //             await appleLogin(identityToken);
    //             navigate("/dashboard");
    //           } catch (e) {
    //             console.error(e);
    //             alert("Apple login failed");
    //           }
    //         }}
    //         onError={() => {
    //           alert("Apple Login Failed");
    //         }}
    //       />
    //     </div>
    //   </div>

    //   <p className="text-center mt-8 text-gray-600">
    //     Don't have an account?{" "}
    //     <span
    //       className="text-pink-500 font-semibold cursor-pointer hover:underline"
    //       onClick={() => navigate("/signup")}
    //     >
    //       Sign up
    //     </span>
    //   </p>
    // </Form>
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen w-screen overflow-hidden flex flex-row">

    {/* Left: form */}
    <div className="flex flex-col justify-center items-center w-2/5 h-full overflow-hidden px-6">
      <div className="flex flex-col items-center w-full max-w-[300px]">

        <button
          type="button"
          aria-label="Planit"
          className="shadow-xl rounded-2xl bg-zinc-800 w-[50px] h-[44px] flex justify-center items-center"
        >
          <LiaSignInAltSolid className="text-white w-[26px] h-[26px]" />
        </button>

        <p className="font-bold text-[18px] text-center mt-3">
          Good to see you again
        </p>
        <p className="text-gray-400 text-[12px] text-center mt-1 mb-3">
          Please enter your details to continue
        </p>

        <div
          className="flex justify-center items-center gap-[12px] w-full mb-1"
          style={{ transform: "scale(0.85)", transformOrigin: "center" }}
        >
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const idToken = credentialResponse.credential;
                if (!idToken) { alert("Google login failed: No ID Token"); return; }
                await googleLogin(idToken);
                navigate("/dashboard");
              } catch (e) {
                console.error(e);
                alert("Google login failed");
              }
            }}
            onError={() => alert("Google Login Failed")}
          />
          <AppleSignIn
            onSuccess={async (identityToken) => {
              try {
                if (!identityToken) { alert("Apple login failed: No ID Token"); return; }
                await appleLogin(identityToken);
                navigate("/dashboard");
              } catch (e) {
                console.error(e);
                alert("Apple login failed");
              }
            }}
            onError={() => alert("Apple Login Failed")}
          />
        </div>

        <Divider style={{ borderColor: "gray", margin: "8px 0" }}>or</Divider>

        <div className="w-full">
          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            size="small"
            requiredMark={false}
          >
            <Form.Item
              name="email"
              label={<span className="font-medium text-gray-700 text-[12px]">Email</span>}
              rules={[
                { required: true, message: "Please enter your email." },
                { type: "email", message: "Please enter a valid email address." },
              ]}
              style={{ marginBottom: 6 }}
            >
              <Input
                placeholder="Enter email"
                autoComplete="email"
                className="rounded-lg bg-gray-50 border-gray-200 py-1"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="font-medium text-gray-700 text-[12px]">Password</span>}
              rules={[
                { required: true, message: "Please enter your password." },
                { min: 8, message: "Password must be at least 8 characters." },
              ]}
              style={{ marginBottom: 6 }}
            >
              <Input.Password
                placeholder="Enter password"
                autoComplete="current-password"
                className="rounded-lg bg-gray-50 border-gray-200 py-1"
              />
            </Form.Item>

            <div className="mt-3">
              <Button
                htmlType="submit"
                loading={loading}
                block
                style={{ backgroundColor: "black", color: "#fff", border: "none" }}
                className="h-9 rounded-xl text-sm font-semibold hover:opacity-90 shadow-lg"
              >
                Log In
              </Button>
            </div>

            <p className="text-center text-[12px] mt-3 text-zinc-600">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="text-black font-bold cursor-pointer hover:underline bg-transparent border-none p-0"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </p>
          </Form>
        </div>

      </div>
    </div>

    {/* Right: carousel */}
    <div className="hidden lg:flex w-3/5 h-full justify-center items-center px-8">
      <div className="w-full h-[550px]">
      <Imgslider />
      </div>
    </div>

  </div>
  );
};

export default Login;
