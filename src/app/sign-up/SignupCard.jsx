"use client";

import Link from "next/link";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "@/utils/firebase.utils";
import { useForm } from "react-hook-form";
import InputRegister from "@/components/InputRegister";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { displayName, email, confirmPassword, password } = data;

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        await createUserDocumentFromAuth(user, { displayName });
      }

      alert("Sign Up and LogIn was successfully done!");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("This email is invalid!");
          break;
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters");
          break;
        default:
          console.log("user creation encountered an error", error);
          break;
      }
    }
  };

  return (
    <>
      <div className="flex min-h-[80.5vh] items-center justify-center bg-transparent" >
        <div className="flex flex-col gap-8 max-w-lg mx-auto pb-3 px-6 mt-[1.5rem]">
          <div className="flex flex-col items-center">

            <div className='text-lg text-center text-gray-600' >
              Sign up with your email and password
            </div>
            <div className='text-lg text-center text-gray-600' >
              to enjoy all of our cool features ✌️
              <div className='text-lg text-gray-600' >
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 max-w-[500px] mt-8 p-5 border-solid border-2 border-sky-500"
              >
                <div className="flex flex-col text-left gap-4  p-4">
                  <InputRegister
                    lable="Display Name"
                    register={register}
                    errors={errors}
                    type="text"
                    name="displayName"
                  />
                  <InputRegister
                    lable="Email address"
                    register={register}
                    errors={errors}
                    type="email"
                    name="email"
                  />
                  <div className="flex gap-3 text-left">
                    <div>
                      <label>Password</label>
                      <div className="w-full flex item-center ">
                        <input
                          className="form_input flex-none"
                          {...register("password", {
                            required: true,
                            minLength: 3,
                          })}
                          type={showPassword ? "text" : "password"}
                        />
                        <div className="flex relative">
                          <input className="w-full mt-1" />
                          <button
                            className='ghost  absolute top-5 left-[-2rem]'
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </button>
                          {errors.name?.type == "required" && (
                            <p>This fild must be fill out.</p>
                          )}
                          {errors.name?.type == "minLength" && (
                            <p>The name must be at least 3 characters.</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label>Confirm Password</label>
                      <div className="w-full flex item-center ">
                        <input
                          className="form_input flex-none"
                          {...register("confirmPassword", {
                            required: true,
                            minLength: 3,
                          })}
                          type={showPassword ? "text" : "password"}
                        />
                        <div className="flex  relative">
                          <input className="w-full flex-1 mt-1" />
                          <button
                            className="ghost flex-none absolute top-5 left-[-2rem]"
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </button>

                          {errors.name?.type == "required" && (
                            <p>This fild must be fill out.</p>
                          )}
                          {errors.name?.type == "minLength" && (
                            <p>The name must be at least 3 characters.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-10 pt-2">
                    <button
                      type="submit"
                      className="flex-1 px-5 py-2.5 text-md bg-violet-500 rounded-lg text-white"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="pt-6" >
                    <div className="text-center">
                      Already a user?{" "}
                      <Link href="/sign-in" className="text-blue-400">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
