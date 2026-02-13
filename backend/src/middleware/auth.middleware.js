import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: "Unauthorize- no token provided " });

    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: "Unauthorized, invalid token" });
 
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();

  } catch (error) {
    console.log("Error in protectRoute middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  } 
};


// givwn code by chatgpt to check both cookie and header for token
// export const protectRoute = async (req, res, next) => {
//   try {
//     let token;

//     // 1️⃣ Check cookies
//     if (req.cookies.jwt) {
//       token = req.cookies.jwt;
//     }

//     // 2️⃣ Check Authorization header
//     if (!token && req.headers.authorization?.startsWith("Bearer")) {
//       token = req.headers.authorization.split(" ")[1];
//     }

//     if (!token)
//       return res.status(401).json({ message: "Unauthorized - no token provided" });

//     const decoded = jwt.verify(token, ENV.JWT_SECRET);

//     const user = await User.findById(decoded.userId).select("-password");
//     if (!user)
//       return res.status(404).json({ message: "User not found" });

//     req.user = user;
//     next();
//   } catch (error) {
//     console.log("Error in protectRoute middleware:", error);
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// };
