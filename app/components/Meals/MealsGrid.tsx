import { Meal } from "@/app/types";
import styles from "./MealsGrid.module.css";
import MealItem from "./MealItem";

type MealsGridProps = {
  meals: Meal[];
};
export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
