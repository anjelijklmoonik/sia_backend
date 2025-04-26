// import { authenticate, authorizeAdmin } from "./../middleware/restrict";
// import { Hono } from "hono";
// import {
//   createAdminController,
//   updateAdminController,
//   deleteAdminController,
// } from "../features/admins/controllers/admin";

// const admin = new Hono();

// admin.post("/", authenticate, authorizeAdmin, createAdminController);
// admin.put("/:id", authenticate, authorizeAdmin, updateAdminController);
// admin.delete("/:id", authenticate, authorizeAdmin, deleteAdminController);

// export default admin;

import { Hono } from "hono";
import { authenticate, authorizeAdmin } from "../middleware/restrict"; // Auth middleware
import {
  createAdminController,
  updateAdminController,
  deleteAdminController,
} from "../features/admins/controllers/admin"; // Admin controllers
import { searchStudentController } from "../features/searchStudent/controllers/searchStudent"; // Search student controller

const adminRoute = new Hono();

// Admin routes (CRUD for admin)
adminRoute.post("/", authenticate, authorizeAdmin, createAdminController); // Create admin
adminRoute.put("/:id", authenticate, authorizeAdmin, updateAdminController); // Update admin
adminRoute.delete("/:id", authenticate, authorizeAdmin, deleteAdminController); // Delete admin

// Search student route (only accessible by admin)
adminRoute.get("/search-student", authenticate, authorizeAdmin, searchStudentController); // Search student

export default adminRoute;
