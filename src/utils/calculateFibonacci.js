export const calculateFibonacci = (input) => {
  if (input < 2) return input;
  return calculateFibonacci(input - 1) + calculateFibonacci(input - 2);
};
