/**
 * Evaluates the strength of a password based on a set of criteria.
 *
 * The strength is determined by the following rules:
 * - Must be longer than 8 characters.
 * - Must contain at least one uppercase letter.
 * - Must contain at least one number.
 * - Must contain at least one special character (!@#$%^&*).
 *
 * Strength Levels:
 * - "Strong": Meets all 4 criteria.
 * - "Medium": Meets the length requirement and 2 of the other 3 criteria.
 * - "Weak": Fails the length requirement or meets 1 or fewer of the other criteria.
 *
 * @param {string | null | undefined} password The password string to validate.
 * @returns {string} The strength of the password: "Weak", "Medium", or "Strong".
 * @throws {Error} Throws an error if the password is null or undefined.
 */

function passwordValidator(password) {
  if (password === null || password === undefined) {
    throw new Error("Password cannot be null or undefined");
  }

  if (password.length <= 8) {
    return "Weak";
  }

  const conditions = [
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[!@#$%^&*]/.test(password),
  ];

  const score = conditions.filter(Boolean).length;

  if (score <= 1) return "Weak";
  if (score === 2) return "Medium";
  if (score === 3) return "Strong";
}

module.exports = passwordValidator;
