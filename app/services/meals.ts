import fs from "node:fs";
import { sql } from "@/db";
import { SharedMeal } from "../types";
import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meal: SharedMeal) {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  const imagePath = `/images/${fileName}`;

  const res = await sql(
    "insert into meals (slug, title, image, summary, instructions, creator, creator_email) values ($1, $2, $3, $4, $5, $6, $7) returning *",
    [
      slug,
      meal.title,
      imagePath,
      meal.summary,
      instructions,
      meal.creator,
      meal.creator_email,
    ]
  );

  console.log("saved meal", res.rows[0]);

  return res.rows[0];
}
