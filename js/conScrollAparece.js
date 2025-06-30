export function activarScrollReveal(selector) {
    //Recibe como parametro un selector CSS .fade-in
    //y aplica un efecto de aparición a los elementos que coincidan con ese selector al hacer scroll
    //Los elementos aparecerán cuando estén al 85% de la altura de la ventana del navegador
    const elementos = document.querySelectorAll(selector);
    // Selecciona todos los elementos que coinciden con el selector
    // y los almacena en la variable "elementos"
    
    // Verifica si hay elementos que coinciden con el selector
  const mostrarElemento = () => {
    // Si no hay elementos, no hace nada
    elementos.forEach(elemento => {
        // Si el elemento ya tiene la clase "visible", no hace nada
        // Verifica si el elemento está visible en la ventana del navegador
      const rect = elemento.getBoundingClientRect();

        // Si el elemento está en la ventana del navegador, se le agrega la clase "visible"
      if (rect.top <= window.innerHeight * 0.85) {
        // Agrega la clase "visible" al elemento
        elemento.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", mostrarElemento);
  window.addEventListener("load", mostrarElemento);
}