import { Hono } from "hono";
import { searchStudentController } from "../features/searchStudent/controllers/searchStudent";
import { authenticate, authorizeAdmin } from "../middleware/restrict";

const searchStudentRoute = new Hono();

searchStudentRoute.get("/search-student", authenticate, authorizeAdmin, searchStudentController);

export default searchStudentRoute;
