import aj from"../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";


export const arcjetProtection = async (req, res, next) => {

    try {

      const decision = await aj.protect(req);
      if (decision.isDenied()) {
        if(decision.reason.isRateLimit()) {
          return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
        }else if(decision.reason.isBot()) {
          return res.status(403).json({ message: " Bot Access denied." });
        }else{
          return res.status(403).json({ message: "Access denied by security policy." });
        }
      }

      // check for spoofed bots
     if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({error:"Spoofed bot detected", message: "Malicious bot detected and blocked." });
     }
next();
}catch (error) {
  console.log("Arcjet Protection Error:", error);
  next();
} 
}

// import aj from "../lib/arcjet.js";
// import { isSpoofedBot } from "@arcjet/inspect";
// import { ENV } from "../lib/env.js";

// export const arcjetProtection = async (req, res, next) => {

//   // ✅ Skip Arcjet completely in development
//   if (ENV.NODE_ENV === "development") {
//     return next();
//   }

//   try {
//     const decision = await aj.protect(req);

//     if (decision.isDenied()) {
//       if (decision.reason.isRateLimit()) {
//         return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
//       } else if (decision.reason.isBot()) {
//         return res.status(403).json({ message: "Bot Access denied." });
//       } else {
//         return res.status(403).json({ message: "Access denied by security policy." });
//       }
//     }

//     // check for spoofed bots
//     if (decision.results.some(isSpoofedBot)) {
//       return res.status(403).json({
//         error: "Spoofed bot detected",
//         message: "Malicious bot detected and blocked."
//       });
//     }

//     next();

//   } catch (error) {
//     console.log("Arcjet Protection Error:", error);
//     next();
//   }
// };
