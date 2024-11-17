import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("Initializing Socket.IO...");

    const io = new Server(res.socket.server, {
      path: "/api/socket", // Matches the frontend path
      transports: ["websocket"], // Ensures WebSocket transport is used
      cors: {
        origin: "http://localhost:3000", // Allow requests from frontend
        methods: ["GET", "POST"],
      },
    });

    // When a user connects to the WebSocket server
    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      // Respond when a user sends a 'ping' message
      socket.on("ping", () => {
        console.log("Received ping from", socket.id);
        socket.emit("pong", "Pong message from server!");
      });

      // Handle disconnect event
      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });

    // Save the Socket.IO instance to avoid re-initialization
    res.socket.server.io = io;
  } else {
    console.log("Socket.IO server already initialized");
  }

  // End the HTTP request without sending any response body
  res.end();
}
