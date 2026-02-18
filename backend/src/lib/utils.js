import jwt from "jsonwebtoken";
import {ENV} from "./env.js"

export const generateToken = (userID, res) => {
  const { JWT_SECRET } = ENV;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  //create a token with the userID as payload and set it as an HTTP-only cookie
  const token = jwt.sign({ userID:userID}, JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true,//prevent xss attacks :cross-site scripting attacks
    sameSite: "strict",//csrf attack prevention :cross-site request forgery attacks
     secure: ENV.NODE_ENV === "development" ? false : true, // Set secure flag based on environment
  });
  return token;
};
//http;localhost
//https://vibeveil.com