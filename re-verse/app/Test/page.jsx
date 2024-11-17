"use client";

import React, { useEffect } from "react";
import {io} from "socket.io-client";

const TestSocket = () => {
  useEffect(()=>{
    const socket = io("http://localhost:3001")

  },[])
 
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold">Check console for WebSocket logs!</h1>
    </div>
  );
};

export default TestSocket;
