import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router";
import SignupPage from "../SignupPage";
import * as useAuthModule from "../../hooks/useAuth";

function renderSignup() {
  return render(
    <MemoryRouter initialEntries={["/signup"]}>
      <SignupPage />
    </MemoryRouter>,
  );
}

describe("SignupPage", () => {
  it("renders heading and form fields", () => {
    vi.spyOn(useAuthModule, "useAuth").mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: vi.fn().mockResolvedValue({ error: null }),
      signUp: vi.fn().mockResolvedValue({ error: null }),
      signOut: vi.fn().mockResolvedValue(undefined),
    });

    renderSignup();

    expect(screen.getByText("Create your account")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm password")).toBeInTheDocument();
  });

  it("shows error when passwords do not match", async () => {
    vi.spyOn(useAuthModule, "useAuth").mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: vi.fn().mockResolvedValue({ error: null }),
      signUp: vi.fn().mockResolvedValue({ error: null }),
      signOut: vi.fn().mockResolvedValue(undefined),
    });

    renderSignup();

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Confirm password"), {
      target: { value: "different123" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /create account/i }));

    await waitFor(() => {
      expect(screen.getByText(/Passwords do not match/)).toBeInTheDocument();
    });
  });

  it("shows privacy commitment after successful signup", async () => {
    vi.spyOn(useAuthModule, "useAuth").mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: vi.fn().mockResolvedValue({ error: null }),
      signUp: vi.fn().mockResolvedValue({ error: null }),
      signOut: vi.fn().mockResolvedValue(undefined),
    });

    renderSignup();

    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Confirm password"), {
      target: { value: "password123" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /create account/i }));

    await waitFor(() => {
      expect(
        screen.getByText("Our promise to your family"),
      ).toBeInTheDocument();
    });
  });
});
