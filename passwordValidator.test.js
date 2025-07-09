const passwordValidator = require("./passwordValidator");

// Cycle 1: Test for password length
test('should return "Weak" for passwords with 8 or less characters', () => {
  expect(passwordValidator("12345678")).toBe("Weak");
});

// Cycle 2: Test for long password with only one property
test('should return "Weak" for long passwords with only one other property (e.g., one uppercase letter) and return "Medium" for long passwords with two other property', () => {
  expect(passwordValidator("Justupper")).toBe("Weak");
  expect(passwordValidator("UpperWith1")).toBe("Medium");
});

// Cycle 3: Test for "Medium" strength
test('should return "Medium" for long passwords with two other properties (e.g., uppercase and number)', () => {
  expect(passwordValidator("UpperWith1")).toBe("Medium");
  expect(passwordValidator("UpperWith@")).toBe("Medium");
  expect(passwordValidator("lowerwith@1")).toBe("Medium");
});

// Cycle 4: Test for "Strong" strength
test('should return "Strong" for passwords that meet all criteria', () => {
  expect(passwordValidator("StrongPassword@123")).toBe("Strong");
});

// Cycle 5: Test for edge cases
test("should throw an error for null or undefined input", () => {
  expect(() => passwordValidator(null)).toThrow(
    "Password cannot be null or undefined"
  );
  expect(() => passwordValidator(undefined)).toThrow(
    "Password cannot be null or undefined"
  );
});
