import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import auth from "./authService";
import prisma from "./database";

// --- New Endpoint for Searching Students ---
const searchStudentSchema = z.object({
    query: z.string().min(1), // Input dari user: bisa nama atau nisn
  });
  
  auth.get('/admin/search-student', zValidator("query", searchStudentSchema), async (c) => {
    try {
      const { query } = c.req.valid("query");
  
      // Coba parse query ke integer untuk mencari berdasarkan NISN jika valid
      const parsedNisn = Number(query);
      const isNisnValid = !isNaN(parsedNisn);
  
      const students = await prisma.studentProfil.findMany({
        where: {
          OR: [
            { nama: { contains: query, mode: "insensitive" } }, // Pencarian berdasarkan nama
            ...(isNisnValid ? [{ id: parsedNisn }] : []), // Pencarian berdasarkan NISN jika valid
          ],
        },
      });
  
      return c.json(students, 200);
    } catch (error: any) {
      return c.json({ error: error.message }, 500);
    }
  });
  