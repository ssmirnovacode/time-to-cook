"use client";
export default function MealsError({ error }: { error: Error }) {
  console.error(error);
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>Failed to share the recipe</p>
    </main>
  );
}
