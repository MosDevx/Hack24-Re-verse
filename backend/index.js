const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow your frontend
    methods: ["GET", "POST"],
  },
});

// Maintain a queue of waiting players
let waitingPlayer = null;
let queries = null;

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Handle player searching for a match
  socket.on("find-match", () => {
    if (waitingPlayer) {
      // If another player is waiting, pair them
      const opponent = waitingPlayer;
      waitingPlayer = null;

      // Notify both players of the match
      socket.emit("match-found", { opponent: opponent.id });
      opponent.emit("match-found", { opponent: socket.id });

      console.log(`Matched ${socket.id} with ${opponent.id}`);
    } else {
      // Add this player to the queue
      waitingPlayer = socket;
      console.log("Waiting for another player:", socket.id);
    }
  });

  socket.on("questions", (questions) => {
    console.log("Received questions from client:", questions);
    const queries = questions;
    console.log("Received questions from client:", queries[0]);
    // Save or process the questions as needed
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    if (waitingPlayer === socket) {
      waitingPlayer = null; // Remove from queue if disconnected
    }
  });
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
