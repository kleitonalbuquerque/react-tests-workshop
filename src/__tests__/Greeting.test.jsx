import { render, screen } from "@testing-library/react";
import { Greeting } from "../components/Greeting";
import { test, expect } from "@jest/globals";

test("exibe a saudação com o nome", () => {
  render(<Greeting name="Kleiton" />);
  expect(screen.getByText("Olá, Kleiton!")).toBeInTheDocument();
});
