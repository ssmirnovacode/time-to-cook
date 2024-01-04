"use client";
import ImagePicker from "@/app/components/ImagePicker/ImagePicker";
import { saveMeal } from "@/app/services/meals";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import MealFormSubmit from "@/app/components/Meals/MealFormSubmit";
import { useFormState } from "react-dom";
import { shareMeal } from "@/app/services/actions";

export default function ShareMealPage() {
  // TODO resolve TS error with shareMEal
  const [state, formAction] = useFormState(shareMeal as any, { message: null });

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label={"Your image"} name="image" />
          {state.message && <p style={{ color: "red" }}>{state.message}</p>}
          <p className={styles.actions}>
            <MealFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
