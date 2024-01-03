import { render, screen } from "@testing-library/react";
import NavLink from "../MainHeader/NavLink";

jest.mock("next/navigation", () => ({
  usePathname() {
    return "/example";
  },
}));

describe("<NavLink />", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders with default class", () => {
    render(<NavLink href="/home">Home</NavLink>);
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).not.toHaveClass("active");
  });

  it("renders with active class", () => {
    render(<NavLink href="/example">Example</NavLink>);
    expect(screen.getByRole("link")).toHaveClass("active");
  });
});
