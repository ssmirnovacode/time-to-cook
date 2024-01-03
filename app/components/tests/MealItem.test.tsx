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
  it("renders with default props", () => {
    render(
      <MealItem
        id={""}
        title={""}
        slug={""}
        image={""}
        summary={""}
        creator={""}
      />
    );
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
  it("renders with required props", () => {
    render(<MealItem {...PROPS} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      PROPS.title
    );
    expect(screen.getByAltText(PROPS.title)).toBeInTheDocument();
    expect(screen.getByText(`by ${PROPS.creator}`)).toBeInTheDocument();
    expect(screen.getByText(PROPS.summary)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/meals/${PROPS.slug}`
    );
  });
});
