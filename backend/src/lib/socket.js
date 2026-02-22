import{Server} from "socket.io";
import http from "http";
import express from "express";
import{ENV} from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.Auth.Middleware.js";


const app = express()
const server = http.createServer(app)


const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://vibeveil-git-main-kushs-projects-1c4830b0.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// apply authentication middleware to all socket connections
io.use(socketAuthMiddleware);

//we will use this function to check if the user is online or offline
export function getReceiverSocketId( userId){
  return userSocketMap[userId]
}



//this is for storing online users
const userSocketMap={}//{userId:socketId}
io.on("connection", (socket)=>{
  console.log("A User connected", socket.user.fullName)

 const userId = socket.user._id.toString()
  userSocketMap[userId]=socket.id


  // io.emit() is used to send events to all connected clients
  io.emit("getOnlineUsers",Object.keys(userSocketMap));

  //with socket.on we listen for events from clients
  socket.on("disconnect",()=>{
    console.log("A user disconnected",socket.user.fullName);
    delete userSocketMap[userId]
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
  })

  socket.on("typing", ({ receiverId }) => {
  const receiverSocketId = userSocketMap[receiverId];

  if (receiverSocketId) {
    io.to(receiverSocketId).emit("userTyping", {
      senderId: socket.user._id.toString(),
      senderName: socket.user.fullName,
    });
  }
});

socket.on("stopTyping", ({ receiverId }) => {
  const receiverSocketId = userSocketMap[receiverId];

  if (receiverSocketId) {
    io.to(receiverSocketId).emit("userStoppedTyping", {
      senderId: socket.user._id.toString(),
    });
  }
});


});

export{io,app,server};