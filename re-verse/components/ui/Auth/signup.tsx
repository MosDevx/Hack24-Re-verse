"use client";
import React, { useState, FormEvent } from "react";
import { FaGoogle } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "@/app/firebaseConfig"; // Adjust import based on your project structure
import googleAuth from "@/components/ui/Auth/firebaseAuth"; // Adjust import based on your project structure
import Loadinggif from "@/public/images/signup.jpg";
import Image from "next/image";
import Link from "next/link";
import {DateInput} from "@nextui-org/date-input"

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Initialize Firebase app
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", userCredential.user);
      window.location.href = "/Profile"; // Redirect on successful signup
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      setError(error.message);
    }
  };

  const google_auth = () => {
    googleAuth(); // Calls Google sign-in function
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-700">
      <div className="max-w-md w-full mx-auto rounded md:rounded-2xl p-4 md:p-8 shadow-lg bg-white dark:bg-gray-800 border font-sans">
        <h2 className="font-semibold text-2xl text-gray-900 dark:text-gray-200">
          Welcome <span className="font-bold text-amber-600">Champion</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 dark:text-blue-400 font-medium">
            Log in
          </a>
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="space-y-2 flex flex-col md:flex-row  gap-4  align-middle items-center  ">
            <div className="flex flex-col gap-2 pt-2 w-full md:w-1/2">
              <label htmlFor="f_name" className="block text-md text-white">First Name</label>
              <input
                type="text"
                value={password} //Dan should implement the correct state for this input
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="confirmPassword" className="block text-md text-white">Last Name</label>
              <input
                type="password"
                value={confirmPassword} //Dan should implement the correct state for this input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="space-y-2 flex flex-col md:flex-row  gap-4  align-middle items-center  ">
            <div className="flex flex-col gap-2 pt-2 w-full md:w-1/2">
              <label htmlFor="password" className="block text-md text-white">Date of Birth</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
                placeholder="mm/dd/yyyy"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="confirmPassword" className="block text-md text-white">Gender</label>
              <input
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
                placeholder=""
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-md text-white" htmlFor="email">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
              placeholder="someone@example.com"
            />
          </div>
          <div className="space-y-2 flex flex-col md:flex-row  gap-4  align-middle items-center  ">
            <div className="flex flex-col gap-2 pt-2 w-full md:w-1/2">
              <label htmlFor="password" className="block text-md text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
                placeholder="••••••••"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="confirmPassword" className="block text-md text-white">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div className="space-y-2">
            <input className="accent-amber-600 dark:accent-gray-800" type="checkbox" id="terms" />
            <label className="px-3 text-white">I accept the terms and conditions</label>
          </div>
          <Link href={"/after-sign"}>
            <button
              className="bg-amber-500 text-white px-4 py-2 rounded w-full hover:bg-amber-600 transition duration-300"
              type="submit"
            >
              Sign up &rarr;
            </button>
          </Link>
          {error && <p className="text-red-500">{error}</p>}
          <div className="text-center mt-6">
            <h4 className="mb-3">----------- <span>OR</span> ------------</h4>
            <div className="group flex bg-gray-600 items-center justify-center gap-3 py-2 rounded hover:bg-gray-700 transition duration-300">
              <FaGoogle className="text-white group-hover:text-amber-500" />
              <button type="button" onClick={google_auth} className="text-white group-hover:text-amber-500">
                Continue with Google
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image src={Loadinggif} alt="Loading" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Signup;
