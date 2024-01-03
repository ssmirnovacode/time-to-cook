import { sql } from "@/db";
import MealsGrid from "./MealsGrid";

const fetchMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await sql("select * from meals");
  return res.rows;
};
export default async function Meals() {
  const meals = await fetchMeals();

  return <MealsGrid meals={meals} />;
}
