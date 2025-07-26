

export function copiarEmail(e) {
    
    const email = "mauriciobelforte@gmail.com";
    navigator.clipboard.writeText(email)
        .then(() => alert("¡Email copiado al portapapeles!"))
        .catch(err => console.error("Error al copiar:", err));
}

