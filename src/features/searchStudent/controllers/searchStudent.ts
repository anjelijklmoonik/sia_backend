// import { Context } from "hono";
// import * as searchStudent from "../services/searchStudent";

// export const searchStudentController = async (c: Context) => {
//   try {
//     const query = c.req.query("query");

//     if (!query) {
//       return c.json({ error: "Query tidak boleh kosong" }, 400);
//     }

//     const students = await searchStudent.searchStudent(query);

//     return c.json(students, 200);
//   } catch (error) {
//     console.error("❌ Error in searchStudentController:", error);
//     return c.json({ error: "Terjadi kesalahan internal" }, 500);
//   }
// };

import { Context } from "hono";
import * as searchStudent from "../services/searchStudent";

export const searchStudentController = async (c: Context) => {
  try {
    // Try both parameter names for backward compatibility
    const query = c.req.query("query") || c.req.query("noIndukSiswa");

    if (!query) {
      return c.json({ error: "Query tidak boleh kosong" }, 400);
    }

    const students = await searchStudent.searchStudent(query);

    return c.json(students, 200);
  } catch (error) {
    console.error("❌ Error in searchStudentController:", error);
    return c.json({ error: "Terjadi kesalahan internal" }, 500);
  }
};
