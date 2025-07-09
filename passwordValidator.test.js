const passwordValidator = require("./passwordValidator");

test('should return "Weak" for passwords with less than 8 characters', () => {
  expect(passwordValidator("12345")).toBe("Weak");
});

test('should return "Medium" for passwords with at least 8 characters but no uppercase letter', () => {
  expect(passwordValidator("password123")).toBe("Medium");
});

test('should return "Strong" for passwords with at least 8 characters, one uppercase letter, and one number', () => {
  expect(passwordValidator("Password123")).toBe("Strong");
});

// edge cases

test('should return "Password cannot be empty" for an empty string', () => {
  expect(passwordValidator("")).toBe("Password cannot be empty");
});

test("should throw an error for null or undefined input", () => {
  expect(() => passwordValidator(null)).toThrow(
    "Password cannot be null or undefined"
  );
  expect(() => passwordValidator(undefined)).toThrow(
    "Password cannot be null or undefined"
  );
});
