import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import LandingPage from "./pages/LandingPage";

function renderLanding() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <LandingPage />
    </MemoryRouter>,
  );
}

describe("LandingPage", () => {
  it("renders the app name", () => {
    renderLanding();
    const elements = screen.getAllByText("Wohlu");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the hero headline", () => {
    renderLanding();
    expect(
      screen.getByText(/Teach your children the Pular/),
    ).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    renderLanding();
    expect(screen.getByText("Join the Waitlist")).toBeInTheDocument();
  });

  it("renders the waitlist form section", () => {
    renderLanding();
    expect(
      screen.getByText("Be the first to know"),
    ).toBeInTheDocument();
  });

  it("renders the footer with copyright", () => {
    renderLanding();
    expect(
      screen.getByText(/Improve So LLC/),
    ).toBeInTheDocument();
  });
});
