import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  if(email=='hector@hotmail.com' || email=='direccion_academica@personitas.edu.pe' ||
     email=='segundo_grado@personitas.edu.pe' )
    {
      try {
    
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    
        // Close the login modal
        const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
        modal.hide();
    
        // reset the form
        signInForm.reset();
    
        // show welcome message
        showMessage("Bienvenido:" + userCredentials.user.email);
        window.location.href = '/alumnos.html';
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          showMessage("Password Incorrecto", "error")
        } else if (error.code === 'auth/user-not-found') {
          showMessage("Usuario Incorrecto", "error")
        } else {
          showMessage("Something went wrong", "error")
        }
      }      
    }

  else{
    showMessage("Usted no tiene permisos para ingresar","error");
  }  
});
