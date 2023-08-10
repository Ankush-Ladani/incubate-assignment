import { render } from "@testing-library/react";
import Header from "../Header";

test("Logo should be rendered on Homepage", () => {
  const header = render(<Header />);

  const logo = header.getByTestId("dummyLogo");

  expect(logo.src).toBe("https://blog.incubyte.co/images/logo.png");
});
