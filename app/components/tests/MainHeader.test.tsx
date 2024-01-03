import { render, screen } from "@testing-library/react";
import MainHeader from "../MainHeader/MainHeader";

jest.mock("../../../assets/logo.png", () => ({
  src: "/logo.png",
}));
jest.mock("next/navigation", () => ({
  usePathname() {
    return "/example";
  },
}));
describe("<MainHeader />", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("renders with home link and 2 navigation links", () => {
    render(<MainHeader />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(3);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
