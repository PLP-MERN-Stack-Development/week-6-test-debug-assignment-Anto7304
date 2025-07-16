// Sample unit test for a server utility function
const sum = (a, b) => a + b;

describe('sum utility', () => {
  it('should add two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
  });
}); 