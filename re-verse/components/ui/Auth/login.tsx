"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/app/firebaseConfig";
import googleAuth from "@/components/ui/Auth/firebaseAuth";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import welcome from "@/public/images/welcome.png";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      // Redirect the user to the dashboard or home page after login
      window.location.href = "/after-sign"; 
    } catch (err: any) {
      console.error("Error signing in:", err);
      setError(err.message); // Display error to the user
    }
  };
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  async function google_auth(){
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    // Redirect to profile page (optional)
    window.location.href = "/after-sign";
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-700">
      <div className="max-w-md w-full mx-auto rounded md:rounded-2xl p-4 md:p-8 shadow-lg bg-white dark:bg-gray-800 border font-sans">
        <h2 className="font-semibold text-2xl text-gray-900 dark:text-gray-200">
          Welcome back to re<span className="font-bold text-amber-600">Verse</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 dark:text-blue-400 font-medium">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-md text-gray-900 dark:text-gray-200" htmlFor="email">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
              placeholder="someone@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-md text-gray-900 dark:text-gray-200" htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-300 dark:border-gray-600 p-2 rounded w-full outline-none focus:border-amber-500 focus:ring-4 ring-amber-300 dark:ring-gray-600"
              placeholder="••••••••"
            />
          </div>
          <div className="space-y-2">
            <input className="accent-amber-600 dark:accent-gray-800" type="checkbox" id="terms" />
            <label className="px-3 text-gray-900 dark:text-gray-200">I accept the terms and conditions</label>
          </div>
          <button className="bg-amber-500 text-white px-4 py-2 rounded w-full hover:bg-amber-600 transition duration-300" type="submit">
            Login &rarr;
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
      <div className="w-full md:w-[35rem] flex justify-center items-center">
        <Image src={welcome} alt="welcome back" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Login;
