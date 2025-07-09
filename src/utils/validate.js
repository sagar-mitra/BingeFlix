export const checkValidDataEmail = (email) => {
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) return "Please enter a valid email address.";

  return null;
};

export const checkValidDataPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isPasswordValid = passwordRegex.test(password);

  if (!isPasswordValid) return "Please enter a valid password.";

  return null;
};

export const checkValidDataName= (name) => {
   const nameRegex =  /^[a-zA-Z ]{2,40}$/

  const isNameValid = nameRegex.test(name);

  if (!isNameValid) return "Please enter a valid name.";

  return null;
};

