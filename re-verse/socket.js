import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  path: "/api/socket", // Match this path with the backend
  transports: ["websocket"], // Use WebSocket transport
});

socket.on("connect", () => {
  console.log("Connected to the server:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

export default socket;
