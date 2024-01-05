import styles from "./page.module.css";
import { saveMeal } from "@/services/meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import ImagePicker from "@/components/ImagePicker/ImagePicker";
import MealFormSubmit from "@/components/Meals/MealFormSubmit";
import { validateShareMeal } from "@/helpers/validateShareMeal";

export default function ShareMealPage() {
  // can be moved to separate file to be used in a client component
  async function shareMeal(formData: FormData) {
    "use server";

    const { values, errors } = validateShareMeal(formData);

    console.log("values", values);
    console.log("errors", errors);
    return;

    // const result = await saveMeal(values);

    // if (result) {
    //   revalidatePath("/meals");
    //   redirect("/meals");
    // } else {
    //   // TODO show error
    // }
  }

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
            ></textarea>
          </p>
          <ImagePicker label={"Your image"} name="image" />
          <p className={styles.actions}>
            <MealFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
