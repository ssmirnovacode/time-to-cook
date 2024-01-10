import styles from "./page.module.css";
import Meals from "@/components/Meals/Meals";
import ButtonLink from "@/components/common/ButtonLink";
// import { Suspense } from "react";

// import LoadingMeals from "./LoadingMeals";

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Fabulous dishes crafted{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Select your favourite meal and cook it at home</p>
        <p className={styles.cta}>
          <ButtonLink endpoint="/meals/share" label="Share your best recipe" />
        </p>
      </header>
      <main className={styles.main}>
        {/* <Suspense fallback={<LoadingMeals />}> */}
        <Meals />
        {/* </Suspense> */}
      </main>
    </>
  );
}
