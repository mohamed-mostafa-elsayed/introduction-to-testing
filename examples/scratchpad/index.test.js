import { test, expect, vi } from 'vitest';

const spyLog = vi.spyOn(console, 'log');

const spyRandom = vi.spyOn(Math, "random").mockImplementation(() => 0.5);

test('a super simple test', () => {
  console.log("hello world");

  expect(spyLog).toHaveBeenCalled();
  expect(spyLog).toHaveBeenCalledWith('hello world');
  expect(spyLog).toBeCalledTimes(1);
  expect(spyLog).toHaveBeenCalledOnce();
});


test('simple mock', () => {
  const random = Math.random();

  expect(random).toBe(0.5);
});