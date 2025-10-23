import { render, screen, waitFor } from "@testing-library/react";
import { Joke } from "../components/Joke";
import { beforeEach, afterEach, test, expect } from "@jest/globals";
import { jest } from "@jest/globals";

beforeEach(() => {
  globalThis.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ value: "Chuck Norris testou esse código." }),
    })
  );
});

afterEach(() => {
  globalThis.fetch.mockRestore();
});

test("exibe a piada após carregar", async () => {
  render(<Joke />);
  expect(screen.getByText("Carregando piada...")).toBeInTheDocument();

  await waitFor(() =>
    expect(
      screen.getByText("Chuck Norris testou esse código.")
    ).toBeInTheDocument()
  );
});
