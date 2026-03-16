import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input, Divider } from "antd";
import type { LoginData } from "../types/auth";
import { IoCalendarSharp } from "react-icons/io5";
import { GoogleLogin } from "@react-oauth/google";
import AppleSignIn from "../components/AppleSignIn";

import Imgslider from "../components/ImageSlider"

// import ImageCarousel from "../components/ImageCarousel";
// import { SLIDES, CAROUSEL_DURATION } from "../constants/carousel";

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
    <div className="min-h-screen w-screen overflow-hidden flex flex-col lg:flex-row">

      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 min-h-screen px-6 py-10 sm:px-10">
    <div className="flex flex-col justify-center items-center w-full max-w-[600px]">
    {/* <div className="flex flex-col justify-center items-center w-full max-w-[400px]"> */}
      <button
        type="button"
        aria-label="Planit"
        className="shadow-xl rounded-2xl bg-zinc-800 w-[64px] h-[56px] sm:w-[80px] sm:h-[70px] flex justify-center items-center"
      >
        <LiaSignInAltSolid className="text-white w-[36px] h-[36px] sm:w-[45px] sm:h-[45px]" />
      </button>

      <div className="flex flex-col justify-center items-center pt-[20px]">
        <p className="font-bold text-[22px] sm:text-[25px] text-center">
          Good to see you again
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pt-[15px]">
        <p className="text-neutral-400 text-[15px] sm:text-[18px] text-center">
          Please enter your details to continue
        </p>
      </div>

      <div className="flex justify-center items-center pt-[35px]  gap-[25px]">
        <div className="flex gap-4 mt-4 justify-center items-center">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const idToken = credentialResponse.credential;

                if (!idToken) {
                  alert("Google login failed: No ID Token");
                  return;
                }

                await googleLogin(idToken);
                navigate("/dashboard");
              } catch (e) {
                console.error(e);
                alert("Google login failed");
              }
            }}
            onError={() => {
              alert("Google Login Failed");
            }}
          />
        </div>
        <div className="flex gap-4 mt-4 justify-center items-center">
          <AppleSignIn
            onSuccess={async (identityToken) => {
              try {
                if (!identityToken) {
                  alert("Apple login failed: No ID Token");
                  return;
                }

                await appleLogin(identityToken);
                navigate("/dashboard");
              } catch (e) {
                console.error(e);
                alert("Apple login failed");
              }
            }}
            onError={() => {
              alert("Apple Login Failed");
            }}
          />
        </div>
      </div>

      <Divider style={{ borderColor: "gray" }}>or</Divider>

      <div className="w-full mt-[12px]">
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          size="middle"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            label={
              <span className="text-[18px] sm:text-[20px] font-medium text-gray-700 ml-1">
                Email
              </span>
            }
            rules={[
              { required: true, message: "Please enter your email." },
              {
                type: "email",
                message: "Please enter a valid email address.",
              },
            ]}
          >
            <Input
              placeholder="Enter email"
              autoComplete="email"
              style={{ width: "100%", height: "55px", fontSize: "18px" }}
              className="rounded-xl"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <span className="text-[18px] sm:text-[18px] font-medium text-gray-700 ml-1">
                Password
              </span>
            }
            rules={[
              { required: true, message: "Please enter your password." },
              {
                min: 8,
                message: "Password must be at least 8 characters.",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter password"
              autoComplete="current-password"
              style={{ width: "100%", height: "55px", fontSize: "18px" }}
              className="rounded-xl"
            />
          </Form.Item>

          <div className="mt-8">
            <Button
              htmlType="submit"
              loading={loading}
              block
              style={{
                backgroundColor: "black",
                color: "#fff",
                border: "none",
                fontSize: "18px",
                width: "100%",
                height: "50px",
              }}
              className="rounded-xl text-lg font-semibold hover:opacity-90 shadow-lg"
            >
              Log In
            </Button>
          </div>

          <p className="text-center mt-8 text-zinc-600">
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
<div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-4">

  <div className="w-[1000vh] max-w-[900px] h-[90vh]">
    <Imgslider />
  </div>

</div>
  </div>
  );
};

export default Login;
