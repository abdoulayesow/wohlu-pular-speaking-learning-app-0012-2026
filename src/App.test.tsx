import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the app name", () => {
    render(<App />);
    const elements = screen.getAllByText("Wohlu");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the hero headline", () => {
    render(<App />);
    expect(
      screen.getByText(/Teach your children the Pular/),
    ).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<App />);
    expect(screen.getByText("Join the Waitlist")).toBeInTheDocument();
  });

  it("renders the waitlist form section", () => {
    render(<App />);
    expect(
      screen.getByText("Be the first to know"),
    ).toBeInTheDocument();
  });

  it("renders the footer with copyright", () => {
    render(<App />);
    expect(
      screen.getByText(/Improve So LLC/),
    ).toBeInTheDocument();
  });
});
