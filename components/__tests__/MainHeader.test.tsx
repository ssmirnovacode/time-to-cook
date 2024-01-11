import { render, screen, waitFor } from "@testing-library/react";
import MainHeader from "../MainHeader/MainHeader";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
  afterAll(() => {
    window.innerWidth = 1400;
    fireEvent(window, new Event("resize"));
  });
  it("renders with home link and 2 navigation links", () => {
    // window.innerWidth = 500;
    // fireEvent(window, new Event("resize"));
    render(<MainHeader />);
    waitFor(() => {
      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(screen.getByRole("toggle navigation")).not.toBeInTheDocument();
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("navigation")).toBeInTheDocument();
      expect(screen.getAllByRole("link")).toHaveLength(3);
      expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });
  });

  it("renders burger for mobile and toggles drawer", () => {
    window.innerWidth = 450;
    fireEvent(window, new Event("resize"));
    render(<MainHeader />);
    waitFor(() => {
      const drawer = screen.getByRole("navigation panel");
      expect(drawer).not.toBeInTheDocument();
      const burger = screen.getByRole("toggle navigation");
      expect(burger).toBeInTheDocument();
      expect(screen.getAllByRole("link")).toHaveLength(1);
      userEvent.click(burger);
      expect(drawer).toBeInTheDocument();
      userEvent.click(burger);
      expect(drawer).not.toBeInTheDocument();
    });
  });
});
