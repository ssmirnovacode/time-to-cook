import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/app/services/meals";
import { Meal } from "@/app/types";
import { notFound } from "next/navigation";

export default async function MealDetailsPage({
  params: { slug = "" },
}: {
  params: { slug: string };
}) {
  const meal: Meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  let { title, image, summary, creator, creator_email, instructions } =
    meal || {};
  instructions = instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} fill alt={title} />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
      </main>
    </>
  );
}
