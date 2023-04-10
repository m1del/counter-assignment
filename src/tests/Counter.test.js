// import necessary react testing library helpers here
import { fireEvent, render, screen } from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const message = screen.getByRole('heading');
  expect(message).toBeInTheDocument();
  expect(message).toHaveTextContent('Counter');
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const count = screen.getByTestId('count');
  const btn = screen.getByText('+');
  fireEvent.click(btn);
  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const count = screen.getByTestId('count');
  const btn = screen.getByText('-');
  fireEvent.click(btn);
  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent('-1');
});
