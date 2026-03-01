import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router";
import LoginPage from "../LoginPage";
import * as useAuthModule from "../../hooks/useAuth";

function renderLogin() {
  return render(
    <MemoryRouter initialEntries={["/login"]}>
      <LoginPage />
    </MemoryRouter>,
  );
}

describe("LoginPage", () => {
  it("renders heading and form fields", () => {
    vi.spyOn(useAuthModule, "useAuth").mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: vi.fn().mockResolvedValue({ error: null }),
      signUp: vi.fn().mockResolvedValue({ error: null }),
      signOut: vi.fn().mockResolvedValue(undefined),
    });

    renderLogin();

    expect(screen.getByText("Welcome back")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("shows error on failed sign-in", async () => {
    vi.spyOn(useAuthModule, "useAuth").mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: vi.fn().mockResolvedValue({ error: "Invalid credentials" }),
      signUp: vi.fn().mockResolvedValue({ error: null }),
      signOut: vi.fn().mockResolvedValue(undefined),
    });

    renderLogin();

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "bad@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Invalid email or password/),
      ).toBeInTheDocument();
    });
  });

  it("has a link to signup page", () => {
    vi.spyOn(useAuthModule, "useAuth").mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: vi.fn().mockResolvedValue({ error: null }),
      signUp: vi.fn().mockResolvedValue({ error: null }),
      signOut: vi.fn().mockResolvedValue(undefined),
    });

    renderLogin();
    expect(screen.getByRole("link", { name: /sign up/i })).toBeInTheDocument();
  });
});
