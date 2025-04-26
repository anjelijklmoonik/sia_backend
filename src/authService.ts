import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import prisma from "./database";
import { sign } from "hono/jwt";

// --- Service function ---
// Fungsi login untuk validasi user dan role
const loginService = async (
  username: string,
  password: string,
  expectedRole: "ADMIN" | "STUDENT" | "PARENT"
) => {
  const user = await prisma.users.findUnique({ where: { username } });

  if (!user) throw new Error("User tidak ditemukan");
  if (user.role !== expectedRole) throw new Error("Role tidak sesuai");

  const isValid = await Bun.password.verify(password, user.password, "bcrypt");
  if (!isValid) throw new Error("Password salah");

  const token = await sign(
    { userId: user.id, role: user.role },
    "verysecretkey"
  );

  return {
    token,
    userId: user.id,
    role: user.role,
  };
};

// --- Route Hono ---
const auth = new Hono().basePath("/auth");

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  expectedRole: z.enum(["ADMIN", "STUDENT", "PARENT"]),
});

// Endpoint login
auth.post("/login", zValidator("json", loginSchema), async (c) => {
  try {
    const { username, password, expectedRole } = c.req.valid("json");
    const result = await loginService(username, password, expectedRole);
    return c.json({ message: "Login berhasil", ...result }, 200);
  } catch (error: any) {
    return c.json({ error: error.message }, 400);
  }
});

// // --- New Endpoint for Searching Students ---
// const searchStudentSchema = z.object({
//   query: z.string().min(1), // Nama atau NISN untuk pencarian
// });

// auth.get("/search-student", zValidator("query", searchStudentSchema), async (c) => {
//   try {
//     const { query } = c.req.valid("query");

//     // Mencari siswa berdasarkan nama atau NISN
//     const students = await prisma.studentProfil.findMany({
//       where: {
//         OR: [
//           { nama: { contains: query, mode: "insensitive" } },
//           { id: { contains: query } },
//         ],
//       },
//     });

//     return c.json(students, 200);
//   } catch (error: any) {
//     return c.json({ error: error.message }, 500);
//   }
// });

// export default auth;


export default auth;
