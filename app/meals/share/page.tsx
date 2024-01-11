import styles from "./page.module.css";
import ImagePicker from "@/components/ImagePicker/ImagePicker";
import MealFormSubmit from "@/components/Meals/MealFormSubmit";
import { shareMeal } from "@/services/server-actions";

export default function ShareMealPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <div>Or any other meal you feel needs sharing!</div>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </div>
          <ImagePicker label={"Your image"} name="image" />
          <div className={styles.actions}>
            <MealFormSubmit />
          </div>
        </form>
      </main>
    </>
  );
}
