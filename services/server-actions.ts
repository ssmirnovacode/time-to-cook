"use server";

import { saveMeal } from "@/services/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {
  "use server";

  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  // TODO add validation
  for (const value in Object.values(meal)) {
    if (!value) throw new Error("Invalid form submitted. Empty fields present");
  }

  const result = await saveMeal(meal);

  if (result) {
    revalidatePath("/meals");
    redirect("/meals");
  } else {
    // TODO show error
  }
}
