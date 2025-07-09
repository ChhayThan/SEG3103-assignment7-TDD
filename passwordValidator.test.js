const passwordValidator = require("./passwordValidator");

// Cycle 1: Test for password length
test('should return "Weak" for passwords with less than 8 characters', () => {
  expect(passwordValidator("12345")).toBe("Weak");
});

// Cycle 2: Test for an uppercase letter
test('should return "Medium" for passwords with at least 8 characters but no uppercase letter', () => {
  expect(passwordValidator("password")).toBe("Medium");
});

// Cycle 3: Test for a number
test('should return "Medium" for passwords with an uppercase letter but no number', () => {
  expect(passwordValidator("Password")).toBe("Medium");
});

// Cycle 4: Test for a special character
test('should return "Medium" for passwords with an uppercase letter and a number but no special character', () => {
  expect(passwordValidator("Password123")).toBe("Medium");
});

test('should return "Strong" for passwords with all criteria met', () => {
  expect(passwordValidator("Str0ngP@ss!")).toBe("Strong");
});

// Cycle 5: Test for common passwords
test('should return "Weak" if the password contains a known common password', () => {
  // This password would otherwise be strong but contains "password"
  expect(passwordValidator("MyPassword123!")).toBe("Weak");
});

// Edge Case Tests
test('should return "Weak" for an empty string', () => {
  expect(passwordValidator("")).toBe("Weak");
});

test("should throw an error for null or undefined input", () => {
  expect(() => passwordValidator(null)).toThrow(
    "Password cannot be null or undefined"
  );
  expect(() => passwordValidator(undefined)).toThrow(
    "Password cannot be null or undefined"
  );
});
