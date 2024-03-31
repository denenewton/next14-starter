"use client";


import { signInAuthUserWithEmailAndPassword } from "@/utils/firebase.utils";
import InputRegister from "./InputRegister";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      push("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto flex min-h-[80.5vh] items-start" >
        <div className="w-full flex flex-col gap-8  pb-3 px-6 mt-[1.5rem] mx-auto  bg-transparent">
          <div className="flex flex-col items-center">
            <div className='text-lg text-center text-gray-600' >
              to your account today
            </div>
            <div className='text-lg text-center text-gray-600' >
              to enjoy all of our cool <Link href='#' className="text-blue-400">features</Link>{" "}
              ✌️
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 max-w-[500px]  p-5 border-solid border-2 border-sky-500"
          >
            <div className='flex flex-col gap-2 p-4'>
              <InputRegister
                lable="Email address"
                register={register}
                errors={errors}
                type="email"
                name="email"
              />
              <InputRegister
                lable="Password"
                register={register}
                errors={errors}
                type="password"
                name="password"
              />
              <div className="flex flex-col gap-10">
                <div
                  className="flex gap-2"
                >
                  <input type="checkbox" name="remember-me" id="" /> Remember me
                  <Link href='#' className="text-blue-400" >Forgot password?</Link>
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 mb-2 text-md bg-violet-500 rounded-lg text-white"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}
