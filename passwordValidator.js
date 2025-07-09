function passwordValidator(password) {
  if (password === null || password === undefined) {
    throw new Error("Password cannot be null or undefined");
  }

  const commonPasswords = ["mypassword123!"];
  if (
    commonPasswords.some((common) => password.toLowerCase().includes(common))
  ) {
    return "Weak";
  }

  const isLongEnough = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  if (!isLongEnough | !hasUpperCase) {
    return "Weak";
  }

  if (hasUpperCase && hasNumber && hasSpecialChar) {
    return "Strong";
  }

  return "Medium";
}

module.exports = passwordValidator;
