import { render, screen } from "@testing-library/react";
import MealsGrid from "../Meals/MealsGrid";

const MEALS = [
  {
    id: "123",
    title: "Burger",
    slug: "burger",
    image: "https://imgs.com/burger.jpeg",
    summary: "Amazing",
    creator: "Svetlana",
    creator_email: "svetlana@mail.com",
    instructions: "Just cook it",
  },
  {
    id: "1235",
    title: "Burger2",
    slug: "burger2",
    image: "https://imgs.com/burger2.jpeg",
    summary: "Amazing burger2",
    creator: "Svetlana",
    creator_email: "svetlana@mail.com",
    instructions: "Just cook it again",
  },
];
describe("<MealsGrid />", () => {
  it("renders no items with no meals provided", () => {
    render(<MealsGrid meals={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("renders with meals list provided", () => {
    render(<MealsGrid meals={MEALS} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(2);
  });
});
