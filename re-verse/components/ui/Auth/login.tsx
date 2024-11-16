"use client";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/app/firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";

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
    <div className="max-w-md w-full mx-auto mt-4 rounded md:rounded-2xl p-4 md:p-8 shadow bg-white dark:bg-black mt-15 border font-mono">
      <h2 className="font-semibold px-4 text-lg">
        Welcome back to re<span className="font-bold bg-clip-text text-amber-600">Verse</span>
      </h2>
      <p className="text-neutral-500 text-sm max-w-sm mt-2 inline-block pl-4 pr-1">
        Don't have an account?
      </p>
      <a href="/signup" className="text-blue-600 dark:text-blue-400 text-sm font-medium">
        Sign up
      </a>
      <form className="container mx-auto bg-white dark:bg-black text-slate-300 p-4 space-y-5 rounded-md shadow-md" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-md" id="required">
            Email address
          </label>
          <input
            type="email"
            className="border-2 border-purple-200 dark:border-slate-400 p-2 rounded placeholder-purple-500 dark:placeholder-slate-500 caret-purple-500 dark:caret-slate-500 outline-none focus:border-purple-400 dark:focus:border-slate-500 focus:ring-4 ring-purple-300 dark:ring-slate-500 w-full"
            placeholder="someone@example.com"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label id="password" className="block text-md">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="border-2 border-purple-300 dark:border-slate-400 p-2 rounded w-full outline-none focus:border-purple-400 dark:focus:border-slate-500 focus:ring-4 ring-purple-300 dark:ring-slate-500 caret-purple-500 dark:caret-slate-500 placeholder-purple-500 dark:placeholder-slate-600"
            placeholder="••••••••"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <input className="accent-purple-600 dark:accent-slate-800" type="checkbox" id="terms" />
          <label className="px-3">I accept the terms and conditions</label>
        </div>
        <button className="dark:bg-slate-50 text-slate-800 px-2 py-1 rounded w-full hover:bg-slate-700 hover:text-slate-100" type="submit">
          Login &rarr;
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      </form>
      <div className="text-center">
          <h4 className="mb-3 text-white">----------- <span>OR</span> -----------</h4>
          <div className="group flex bg-slate-600 items-center justify-center gap-3 py-1 rounded hover:bg-slate-700">
            <FaGoogle className="group-hover:text-amber-500" />
            <button type="button" className="group-hover:text-amber-500 font-bold" onClick={google_auth}>
              Continue with Google
            </button>
          </div>
        </div>
    </div>
  );
};

export default Login;
