import { Router } from "express";
import { sendContactEmail } from "../controllers/contact";

const router = Router()

router.post('/contact', sendContactEmail)

export default router