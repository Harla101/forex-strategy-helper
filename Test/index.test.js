/**
 * @jest-environment jsdom
*/

import { render, screen } from "@testing-library/react";
import Home from '@pages/index'

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);

    const heading = screen.getByText(
      /Welcome to The Strategy Helper/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});