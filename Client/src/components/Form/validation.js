export default function Validation(input) {
  const error = {};
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /[0-9]/;

  if (!input.email) {
    error.email = "Ingresa un Email!";
  } else if (!regexEmail.test(input.email)) {
    error.email = "El Email debe ser válido!";
  } else if (input.email.length > 35) {
    error.email = "Debe contener menos de 35 caracteres!";
  }

  if (!input.password) {
    error.password = "Ingresa una contraseña!";
  } else if (!regexPassword.test(input.password)) {
    error.password = "Debe tener al menos un número!";
  } else if (input.password.length < 6 || input.password.length > 10) {
    error.password = "Debe tener entre 6 y 10 caracteres!";
  }

  return error;
}
