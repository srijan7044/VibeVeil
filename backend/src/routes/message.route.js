import express from "express";
import{ getAllContacts, getMessagesByUserId,sendMessage,getChatPartners } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";


const router = express.Router();
//the order of middlewares is important here, arcjetProtection should be before protectRoute to ensure that the request is first checked for bot activity before verifying authentication. This way, we can block potential bots early on without unnecessarily processing authentication for them.
// Apply arcjetProtection and protectRoute middleware to all routes in this router
//this middleware will protect all the routes defined in this router, ensuring that only authenticated users can access them and also providing protection against bots using arcjetProtection.

router.use(arcjetProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id",  sendMessage);

export default router;
