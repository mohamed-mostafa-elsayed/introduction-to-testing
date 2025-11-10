import { vi, describe, it, expect, afterEach, beforeEach } from 'vitest';

vi.useFakeTimers();

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime("2024-02-22");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call callback after delay', () => {

    const callback = vi.fn();

    delay(callback);
    vi.advanceTimersByTime(2000);

    expect(callback).toHaveBeenCalled();

  });
});
