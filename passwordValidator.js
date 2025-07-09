function passwordValidator(password) {
  if (password === null || password === undefined) {
    throw new Error("Password cannot be null or undefined");
  } else if (password.length === 0) {
    return "Password cannot be empty";
  }

  const isLongEnough = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (!isLongEnough) {
    return "Weak";
  }

  if (hasUpperCase && hasNumber) {
    return "Strong";
  }

  return "Medium";
}

module.exports = passwordValidator;
