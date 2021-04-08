import { calculateFibonacci } from './calculateFibonacci';

describe('Fibonacci Sequence', () => {
  it('returns the correct values for initial elements', () => {
    expect(calculateFibonacci(0)).toBe(0);
    expect(calculateFibonacci(1)).toBe(1);
  });
  it('returns correct values for different arguments', () => {
    expect(calculateFibonacci(5)).toBe(5);
    expect(calculateFibonacci(6)).toBe(8);
    expect(calculateFibonacci(10)).toBe(55);
  });
});
