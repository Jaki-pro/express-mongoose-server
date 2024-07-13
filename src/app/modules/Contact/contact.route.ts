import { Router } from "express";
import catchAsync from "../../utils/catchAsync";
import { Contact } from "./contact.model";
import sendResponse from "../../utils/sendResponse";
import { sendEmail } from "../../utils/sendEmail";

const router = Router();

router.post(
  "/send-message",
  catchAsync(async (req, res) => {
    // const result = await Contact.create(req.body);
    const { name, email, message } = req.body;
    const html = `name: ${name} & message: ${message}`;
    sendEmail(email, html);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Message sent successfully",
      data: [],
    });
  })
);
export const ContactRoutes = router;
