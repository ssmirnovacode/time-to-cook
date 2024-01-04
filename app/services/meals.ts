import { sql } from "@/db";

export const fetchMeals = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  //throw new Error("Loading meals failed");
  const res = await sql("select * from meals");
  return res.rows;
};

export async function getMeal(slug: string) {
  const res = await sql("select * from meals where slug = $1", [slug]);
  return res.rows[0];
}
