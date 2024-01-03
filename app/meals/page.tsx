import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "../components/Meals/MealsGrid";
import { sql } from "@/db";

const fetchMeals = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await sql("select * from meals");
  return res.rows;
};
export default async function MealsPage() {
  const meals = await fetchMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Fabulous burgers crafted{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Select your favourite burger and order it or cook it at home</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your best recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
