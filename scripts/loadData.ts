import { getClient } from "@/db";
import { dummyMeals } from "./dummyMeals";

async function loadData() {
  const client = await getClient();
  console.log(client);
  await client.connect();

  try {
    await client.query("begin");

    for (let i = 0; i < dummyMeals.length; i++) {
      const {
        slug,
        title,
        image,
        summary,
        instructions,
        creator,
        creator_email,
      } = dummyMeals[i];
      await client.query(
        "insert into public.meals (slug, title, image, summary, instructions, creator, creator_email) values ($1, $2, $3, $4, $5, $6, $7)",
        [slug, title, image, summary, instructions, creator, creator_email]
      );
    }

    const meals = await client.query("select id from public.meals limit 2");
    console.log(meals);

    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    await client.end();
  }
}

console.log(`Executing load-fake-data. Generating meals`);

loadData();
