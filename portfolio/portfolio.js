import { copiarEmail } from './copiarEmail.js';

// Importar la función para activar ScrollReveal
import { activarScrollReveal } from "./conScrollAparece.js";


// Agregar un evento al botón de copiar email
// para que llame a la función copiarEmail al hacer clic
document.getElementById("copiarEmail").addEventListener("click", copiarEmail);




// Activar ScrollReveal para elementos con la clase "fade-in"
// Esto hará que los elementos con esa clase aparezcan con un efecto de desvanecimiento al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  // Le paso la clase .fade-in como parámetro 
  activarScrollReveal(".fade-in");
});
