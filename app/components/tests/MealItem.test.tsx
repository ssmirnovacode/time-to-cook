import { render, screen } from "@testing-library/react";
import MealItem from "../Meals/MealItem";

const PROPS = {
  id: "123",
  title: "Burger",
  slug: "burger",
  image: "https://imgs.com/burger.jpeg",
  summary: "Amazing",
  creator: "Svetlana",
};

describe("<MealItem />", () => {
  it("renders with required props", () => {
    render(<MealItem {...PROPS} />);
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toHaveTextContent(PROPS.title);
  });
});
