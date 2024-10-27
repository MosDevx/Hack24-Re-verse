"use client";
import React from "react";
import { Label } from "@/components/ui/Auth/label";
import { Input } from "@/components/ui/Auth/input";
import { cn } from "@/lib/utils";
import googleAuth from "@/components/ui/Auth/firebaseAuth"
import { IconBrandFacebook,   IconBrandGoogle,   IconBrandApple,} from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app"
import firebaseConfig from "@/app/firebaseConfig"

export function Signup() {

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [confirmPassword, setConfirmPassword]= useState("");
  const [error ,setError] =useState<string |null>(null);
  const app =initializeApp(firebaseConfig)
  const auth = getAuth(app);

  const handleSubmit =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    if(password !== confirmPassword){
      setError("Passwords do not match");
      return;
    }
    try{
      const userCredential =await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);

      // Automatically sign in the user
      const user = userCredential.user;
      if (user) {
        console.log('User signed in:', user);
        // Redirect or navigate to dashboard after login
        window.location.href= "/Profile"
      }
    }catch(error: any){
      console.error("Error signing up:", error.message);
      setError(error.message);
    };

  };

  function google_auth(){
    googleAuth()
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to  re<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600">-Verse</span>
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 inline-block">
        Already have an account?
      </p>
      <a
        href="/login"
        className="text-blue-600 dark:text-blue-400 text-sm font-medium"> Login
      </a>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={(e) => setEmail(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setPassword(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="accountpassword">Confirm Password</Label>
          <Input
            id="comfirm password"
            placeholder="••••••••"
            type="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}

          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Facebook
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={google_auth}
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandApple className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Apple
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
