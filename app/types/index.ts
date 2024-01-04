export type Meal = {
  id: string;
  title: string;
  slug: string;
  image: string;
  instructions: string;
  summary: string;
  creator: string;
  creator_email: string;
};

export type SharedMeal = {
  title: string;
  image: File;
  instructions: string;
  summary: string;
  creator: string;
  creator_email: string;
};
