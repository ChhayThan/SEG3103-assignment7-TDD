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
