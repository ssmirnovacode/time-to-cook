"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text: string | null) {
  return !text || !text.trim();
}

export async function shareMeal(
  prevState: { message: string | null },
  formData: FormData
) {
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    !meal.image.size
  ) {
    return {
      message: "Invalid input",
    };
  }

  const result = await saveMeal(meal);

  if (result) {
    redirect("/meals");
  } else {
    return;
    // TODO show error
  }
}
