import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router";
import OnboardingPage from "../OnboardingPage";
import * as useAuthModule from "../../hooks/useAuth";

function mockAuth() {
  vi.spyOn(useAuthModule, "useAuth").mockReturnValue({
    user: null,
    session: null,
    loading: false,
    signIn: vi.fn().mockResolvedValue({ error: null }),
    signUp: vi.fn().mockResolvedValue({ error: null }),
    signOut: vi.fn().mockResolvedValue(undefined),
  });
}

function renderOnboarding() {
  return render(
    <MemoryRouter initialEntries={["/onboarding"]}>
      <OnboardingPage />
    </MemoryRouter>,
  );
}

describe("OnboardingPage", () => {
  it("renders the welcome screen first", () => {
    mockAuth();
    renderOnboarding();
    expect(screen.getByText("Karibu Wohlu!")).toBeInTheDocument();
    expect(screen.getByText("Welcome to Wohlu")).toBeInTheDocument();
  });

  it("shows progress dots", () => {
    mockAuth();
    renderOnboarding();
    expect(screen.getByLabelText("Step 1 of 3")).toBeInTheDocument();
  });

  it("shows skip button", () => {
    mockAuth();
    renderOnboarding();
    expect(screen.getByRole("button", { name: /skip/i })).toBeInTheDocument();
  });

  it("advances to co-learning guide on Next", () => {
    mockAuth();
    renderOnboarding();
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByText("How to learn together")).toBeInTheDocument();
  });

  it("advances to first greeting from co-learning guide", () => {
    mockAuth();
    renderOnboarding();
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByText("Your first phrase")).toBeInTheDocument();
    expect(screen.getByText("A jaraama")).toBeInTheDocument();
  });
});
