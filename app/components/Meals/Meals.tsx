import MealsGrid from "./MealsGrid";
import { fetchMeals } from "@/app/services/meals";

export default async function Meals() {
  const meals = await fetchMeals();

  return <MealsGrid meals={meals} />;
}
