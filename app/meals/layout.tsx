import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All recipes",
  description: "Browse all the delicious recipes",
};
export default function MealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p></p>
      {children}
    </>
  );
}
