export default function Validation (input){
    const error = {};
    const regexEmail = /\s+@\s+\.\s+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)){
        error.email = "El Email debe ser válido!"
    }
    if(!input.email){
        error.email= "Ingresa un Email!"
    }
    if(input.email.length > 35){
        error.email = "Debe contener menos de 35 caracteres!"
    }
    if(regexPassword.test(input.password)){
        error.password = "Debe tener al menos un numero!"
    }
    if(input.password.length < 6 || input.password.length > 10){
        error.password = "Debe tener entre 6 y 10 caracteres!0"
    }
    return error;
}