import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  it('renders with an initial count of 0', () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter-count");

    expect(counter).toHaveTextContent("0");
    expect(counter.textContent).toBe("0");

  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    render(<Counter />);


    const decrementBtn  = screen.getByRole('button', { name: /decrement/i });
    const resetBtn  = screen.getByRole('button', { name: /reset/i });

    expect(decrementBtn).toBeDisabled();
    expect(resetBtn).toBeDisabled();

  });

  it('displays "days" when the count is 0', () => {
    render(<Counter />);

    const days = screen.getByTestId("counter-unit");

    expect(days).toHaveTextContent("days");
  });

  it(
    'increments the count when the "Increment" button is clicked', async () => {
      render(<Counter />);

      await act(async () => {
        await userEvent.click(screen.getByRole('button', { name: /increment/i }));
      });

      expect(screen.getByTestId("counter-count")).toHaveTextContent("1");
    },
  );

  it('displays "day" when the count is 1', async () => {
    render(<Counter />);

    const days = screen.getByTestId("counter-unit");

    await userEvent.click(screen.getByRole('button', { name: /increment/i }));


    expect(days).toHaveTextContent("day");

  });

  it(
    'decrements the count when the "Decrement" button is clicked', async () => {
      render(<Counter initialCount={1} />);

      const counter = screen.getByTestId("counter-count");
      const decrementBtn = screen.getByRole('button', { name: /decrement/i });

      expect(decrementBtn).not.toBeDisabled();

      await act(async () => {
        await userEvent.click(decrementBtn);
      });

      expect(decrementBtn).toBeDisabled();


      expect(counter).toHaveTextContent("0");



    },
  );

  it('does not allow decrementing below 0', async () => {
    render(<Counter initialCount={0} />);

    const counter = screen.getByTestId("counter-count");
    const decrementBtn = screen.getByRole('button', { name: /decrement/i });


    expect(decrementBtn).toBeDisabled();


    await act(async () => {
      await userEvent.click(decrementBtn);
    });

    expect(counter).toHaveTextContent("0");

  });

  it(
    'resets the count when the "Reset" button is clicked',
    async () => {
      render(<Counter initialCount={10} />);

      const counter = screen.getByTestId("counter-count");

      await act(async () => {
        await userEvent.click(screen.getByRole('button', { name: /reset/i }));
      });

      expect(counter).toHaveTextContent("0");

    },
  );

  it('updates the document title based on the count', async () => {
    render(<Counter />);

    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: /increment/i }));
    });

    expect(document.title).toEqual(expect.stringContaining("1"));

  });
});
