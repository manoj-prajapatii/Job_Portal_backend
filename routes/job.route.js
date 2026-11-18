import express from "express"; 
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {postJob , getAllJobs, getJobById, getAdminJobs } from "../controllers/job.controller.js";
const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get/allJob").get(isAuthenticated, getAllJobs);
router.route("/get/:id").post(isAuthenticated, getJobById);
router.route("/get/adminJobs").get(isAuthenticated, getAdminJobs);

export default router;