import jwt from "jsonwebtoken";
import User from"../models/User.js";
import { ENV } from "../lib/env.js";

export const socketAuthMiddleware=async(socket,next)=>{
  try{
    //extract tocken from http-only cookies
    const token = socket.handshake.headers.cookie
    ?.split("; ")
    .find((row)=>row.startsWith("jwt="))
    ?.split("=")[1];
if(!token){
  console.log("Socket conection rejected: No token provided");
  return next(new Error("Unauthorized - No Token provided"));
}
//verify the Token
const decoded = jwt.verify(token,ENV.JWT_SECRET);
if(!decoded){
  console.log("socket connection rejected:Invalid token");
  return next (new Error ("Unauthorized - Invalid Token"))
}
//find the user from db
const user = await User.findById(decoded.userId).select("-password");

//temporary addon by chat gpt
// console.log("Decoded:", decoded);
// console.log("Decoded payload:", decoded);
// console.log("Searching user with ID:", decoded.userID);



if (!user){
  console.log("socket connection rejected:User not found");
  return next(new Error("User not found"));
}

//attach user info to socket
socket.user=user;
socket.userId=user._id.toString()

console.log(`socket authenticated for user: ${user.fullName}(${user._id})`);


next()
  }catch(error){

    console.log("Error in socket authentication:",error.message);
    next(new Error("Unauthorized-Authentication failed"));


  }

}
