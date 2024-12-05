import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { AppRouterContextProviderMock } from "@/mocks/app-router-context-provider-mock";
import Home from "./page";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    route: "/pages/dashboard",
  }),
}));

describe("Login Form", () => {
  it("render page login", () => {
    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Home />
      </AppRouterContextProviderMock>
    );

    const heading = screen.getByRole("heading", { level: 1 });
    const emailField = screen.getByPlaceholderText("Email");
    const passwordField = screen.getByPlaceholderText("Senha");
    const handleLogin = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(handleLogin).toBeInTheDocument();
  });

  it("verifica se os campos estão preenchidos quando o botão é clicado", () => {
    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Home />
      </AppRouterContextProviderMock>
    );

    const emailField = screen.getByPlaceholderText("Email");
    const passwordField = screen.getByPlaceholderText("Senha");
    const handleLogin = screen.getByRole("button");

    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.click(handleLogin);

    expect(emailField).toHaveValue("test@example.com");
    expect(passwordField).toHaveValue("password123");
  });
});
