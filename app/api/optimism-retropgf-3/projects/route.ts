import { ProjectsResponse } from "@/types/api/RetroPGF3";
import { Pool } from "pg";

export const revalidate = 60 * 5; // 5 minutes

const pool = new Pool({
  connectionString: process.env.FUN_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM rpgf3_projects");
    const data = result.rows;

    return Response.json({ projects: data });
  } catch (error) {
    return Response.json({ error });
  }
}
