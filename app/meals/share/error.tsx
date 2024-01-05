"use client";
export default function MealsError({ error }: { error: Error }) {
  console.error(error);
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>Cound not share your recipe! Try again later.</p>
    </main>
  );
}
