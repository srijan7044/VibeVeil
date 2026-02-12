import jwt from "jsonwebtoken";

export const generateToken = (userID, res) => {
  //create a token with the userID as payload and set it as an HTTP-only cookie
  const token = jwt.sign({ userID}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true,//prevent xss attacks :cross-site scripting attacks
    sameSite: "strict",//csrf attack prevention :cross-site request forgery attacks
     secure: process.env.NODE_ENV === "development" ? false : true, // Set secure flag based on environment
  });
  return token;
};
//http;localhost
//https://vibeveil.com