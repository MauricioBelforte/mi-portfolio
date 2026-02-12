/* import fs from "fs/promises";
import path from "path"; */

export async function generarContexto(mensajeDelUsuario) {

    /* const rutaDatos = path.join(process.cwd(), "datos");
    
    
    
    
        // Cargamos trabajos.json
        let trabajos = [];
        try {
            const trabajosRaw = await fs.readFile(path.join(rutaDatos, "trabajos.json"), "utf-8");
            trabajos = JSON.parse(trabajosRaw);
        } catch (err) {
            console.error("Error al cargar trabajos.json:", err);
        }
    
    
    
        let perfil = {};
        try {
           const perfilRaw = await fs.readFile(path.join(rutaDatos, "sobremi.json"), "utf-8");
            perfil = JSON.parse(perfilRaw);
        } catch (err) {
            console.error("Error al cargar sobremi.json:", err);
        }
    
     */
    let trabajos = [
        {
            "titulo": "Asistente Virtual con IA",
            "descripcion": "Ecosistema de Chatbot IA Modular diseñado para una integración flexible. Backend serverless en Node.js (Vercel) compatible con Gemini, Llama, DeepSeek y Mistral.",
            "tecnologias": ["Node.js", "Express", "Vercel", "JavaScript", "Gemini", "Llama", "DeepSeek", "Mistral"],
            "enlace_web": "https://mauriciobelforte.github.io/mi-portfolio/",
            "enlace_codigo": "https://github.com/MauricioBelforte/chatbot-ecosystem"
        },
        {
            "titulo": "Toscanes",
            "descripcion": "Landing page para grupo de inversiones inmobiliarias. Desplegado en hosting profesional (Hostinger) con dominio personalizado.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "Hostinger"],
            "enlace_web": "https://toscanes.com.ar/",
            "enlace_codigo": null
        },
        {
            "titulo": "Estudio Jurídico",
            "descripcion": "Landing page para el Estudio Jurídico Launes & Asociados. Desplegado en GoDaddy con dominio personalizado.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "GoDaddy"],
            "enlace_web": "https://estudiolaunes.com.ar/",
            "enlace_codigo": "https://github.com/MauricioBelforte/web-estudio-juridico-desarrollo"
        },
        {
            "titulo": "Puertos Prime Meat",
            "descripcion": "Sitio web para venta de carnes con galería responsiva. Desplegado en Firebase Hosting con Cloudflare para CDN y SSL.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "Firebase", "Cloudflare"],
            "enlace_web": "https://mauriciobelforte.github.io/web-puertosprimemeat-desarrollo/",
            "enlace_codigo": "https://github.com/MauricioBelforte/web-puertosprimemeat-desarrollo"
        },
        {
            "titulo": "Tienda de Lencería",
            "descripcion": "E-commerce para marca de lencería con diseño elegante y botón flotante de WhatsApp.",
            "tecnologias": ["HTML", "CSS", "JavaScript"],
            "enlace_web": "https://mauriciobelforte.github.io/web-lenceria-arcangel-desarrollo/",
            "enlace_codigo": "https://github.com/MauricioBelforte/web-lenceria-arcangel-desarrollo"
        },
        {
            "titulo": "Radio Santa Barbara",
            "descripcion": "Web para emisora radial con galería rotativa, audio 24hs y animaciones CSS. Desplegado en Firebase Hosting.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "Firebase"],
            "enlace_web": "https://mauriciobelforte.github.io/radio-Santa-Barbara/",
            "enlace_codigo": "https://github.com/MauricioBelforte/radio-Santa-Barbara"
        },
        {
            "titulo": "Colimbeta",
            "descripcion": "App web para torneos de juegos de pelea. Lógica de marcadores y colas con manipulación del DOM.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "Git", "Github"],
            "enlace_web": "https://mauriciobelforte.github.io/proyecto-marcador-gana-sigue/",
            "enlace_codigo": "https://github.com/MauricioBelforte/proyecto-marcador-gana-sigue"
        },
        {
            "titulo": "TREX E-commerce",
            "descripcion": "E-commerce del curso Full-Stack Node.js (Codo a Codo 4.0). Carrusel y galería de imágenes con Bootstrap.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
            "enlace_web": "https://mauriciobelforte.github.io/Proyecto-CaC-Nodejs/",
            "enlace_codigo": "https://github.com/MauricioBelforte/Proyecto-CaC-Nodejs"
        },
        {
            "titulo": "API Rick and Morty",
            "descripcion": "Aplicación que consume la API de Rick and Morty usando fetch() y renderizado dinámico en cards responsivas.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "API REST"],
            "enlace_web": "https://mauriciobelforte.github.io/proyecto-API-RickandMorty/",
            "enlace_codigo": "https://github.com/MauricioBelforte/proyecto-API-RickandMorty"
        },
        {
            "titulo": "Web Personal",
            "descripcion": "Web personal para practicar cards responsivas con Flexbox. Desplegado en Firebase Hosting.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "Firebase", "Flexbox"],
            "enlace_web": "https://empleoonlinecripto.web.app/",
            "enlace_codigo": null
        },
        {
            "titulo": "Generador de contraseñas",
            "descripcion": "Generador de contraseñas seguras con validación de fuerza. JavaScript puro.",
            "tecnologias": ["HTML", "CSS", "JavaScript", "Git", "Github"],
            "enlace_web": "https://mauriciobelforte.github.io/InmersionDev-Generador-de-contrasenas-Clase1/",
            "enlace_codigo": "https://github.com/MauricioBelforte/InmersionDev-Generador-de-contrasenas-Clase1"
        }
    ];

    let perfil = {
        "nombre": "Mauricio Belforte",
        "edad": "36 años",
        "ubicacion": "Trelew, Chubut, Argentina",
        "profesion": "Desarrollador Web Full-Stack",
        "descripcion": "Es una persona emprendedora, con buenas relaciones interpersonales y apasionada por la tecnología. Busca afianzarse como Desarrollador Full-Stack. Cuenta con experiencia en docencia, soporte técnico y desarrollo web.",
        "tecnologias": ["HTML", "CSS", "JavaScript", "Node.js", "Express", "React.js", "SQL", "Python", "C# .NET", "Smalltalk", "Java", "Pascal", "Bootstrap", "Vercel", "Git", "GitHub", "Firebase", "EJS", "JSON"],
        "herramientas": ["Visual Studio Code", "Postman", "MySQL Workbench", "PostgreSQL", "Eclipse", "NetBeans", "Pharo", "SharpDevelop", "Corel Draw", "AutoCAD"],
        "softSkills": ["Colaboración en equipo", "Pensamiento estratégico", "Atención a los detalles", "Comunicación efectiva", "Empatía", "Adaptabilidad"],
        "idiomas": ["Español (Nativo)", "Inglés (B1+)"],
        "email": "mauriciobelforte@gmail.com",
        "telefono": "221 3030341",
        "linkedin": "https://www.linkedin.com/in/mauriciobelforte/",
        "github": "https://github.com/MauricioBelforte/"
    };

    const experienciaLaboral = [
        { puesto: "Front-End Developer Freelance", periodo: "2019 - presente", detalle: "Desarrollo de sitios Web utilizando HTML5, CSS y JavaScript. Diseño de Marca." },
        { puesto: "Fundador y Responsable de Marketing", lugar: "sorteosypromoslp", periodo: "2019 - 2023", detalle: "Asesoramiento en redes sociales para emprendimientos." },
        { puesto: "Instructor de Reparación de PC", lugar: "Facultad de Informática UNLP", periodo: "2018", detalle: "Desarrollo de material de estudio y dictado de clases." },
        { puesto: "Profesor de clases particulares", lugar: "La Plata", periodo: "2012 - 2017", detalle: "Dictado de clases de Matemáticas, Física y Algoritmos." },
        { puesto: "Operación técnica y edición de audio", lugar: "LRA 18 Radio Nacional Río Turbio", periodo: "2015 - 2016", detalle: "Manejo de equipo técnico y edición de audio (Studio One)." },
        { puesto: "Reparación de PC Freelance", periodo: "2013 - 2023", detalle: "Identificación y solución de problemas informáticos." }
    ];

    const formacion = [
        { titulo: "Analista Programador Universitario", institucion: "Facultad de Informática, UNPSJB", estado: "En curso" },
        { titulo: "Ingeniería Electrónica", institucion: "Facultad de Ingeniería, UNLP", estado: "Incompleto (3 años finalizados)" },
        { titulo: "Técnico en Equipos e Instalaciones Electromecánicas", institucion: "Escuela Industrial N°5 Río Turbio", periodo: "2004-2007" },
        { titulo: "Curso de Inteligencia Artificial (Digitalers)", institucion: "Telecom / Educacion.IT", periodo: "Mayo - Noviembre 2025", detalle: "Python, SQL, Machine Learning, Prompt Engineering." },
        { titulo: "Microsoft Certified: Azure Data Fundamentals (DP-900)", institucion: "Microsoft", periodo: "Marzo 2025" },
        { titulo: "Bootcamp Premium de Desarrollo Web Frontend", institucion: "CódigoFacilito", periodo: "Abril 2025" },
        { titulo: "Bootcamp de Bases de Datos en la nube con Azure", institucion: "CódigoFacilito", periodo: "Diciembre 2024" },
        { titulo: "Full-Stack Developer Node.js", institucion: "Programa Codo a Codo 4.0", periodo: "Septiembre 2024", detalle: "Node.js, Express, MySQL, Git." },
        { titulo: "Curso de React.js", institucion: "Platzi", periodo: "Septiembre 2024", detalle: "Hooks, componentes, estados." },
        { titulo: "Fundamentos de Scrum", institucion: "SoyLider.net", periodo: "Agosto 2024" },
        { titulo: "Cursos Interactivos (React, JS, SQL, CSS, Git)", institucion: "Desafío Latam", periodo: "2024" },
        { titulo: "Curso Front-End Developer", institucion: "Facultad de Informática UNLP", periodo: "2015" },
        { titulo: "Taller de Corel Draw", institucion: "UNLP", periodo: "2015" },
        { titulo: "Jornadas y Conferencias", institucion: "Varios", detalle: "Blockchain y Fintech (2018), CISL (2016), FLISOL (2016)." }
    ];

    // Cargamos sobremi.json
    const keywords = ["hola", "datos", "edad", "años", "vive", "ciudad", "Belforte", "ubicacion", "mail",
        "ciudad", "pais", "provincia", "dedica", "trabaja", "trabajo", "creo", "hacer", "hace", "bueno",
        "mauricio", "quién sos", "quién es", "sobre vos", "sobre él", "profesion",
        "quién es mauricio", "perfil de mauricio", "contacto", "contactar",
        "email", "linkedin", "github", "telefono", "celular"];

    const keywordsFormacion = [
        "formacion", "estudios", "estudia", "estudio", "academico", "carrera", "universidad", "tecnico", "electricidad", "electronica", "electricista",
        "técnico", "colegio", "escuela", "cursos", "capacitación", "recibio", "matematica", "fisica", "quimica",
        "educacion", "título", "certificado", "certificacion",
        "bootcamp", "fullstack", "codo a codo", "platzi", "react", "react.js", "alura",
        "desafío latam", "microsoft", "scrum", "mouredev", "curriculum"
    ];

    const keywordsExperiencia = ["experiencia", "laboral", "trayectoria", "puestos", "empleos", "trabajos anteriores", "antiguedad"];
    const keywordsSoftSkills = ["habilidades blandas", "soft skills", "fortalezas", "cualidades", "personalidad", "equipo", "comunicacion", "empatia"];
    const keywordsIdiomas = ["idioma", "ingles", "inglés", "español", "lenguas"];

    // lógica modular
    /*Este objetoTrabajo se lo declara aca para usar en el anteultimo else if, no tenia otra posibilidad por ahora */
    let objetoTrabajo;

    // Construimos un contexto a partir del mensaje del usuario
    let contexto = "";

    const mensajeDelUsuarioEnMinuscula = mensajeDelUsuario.toLowerCase();

    // 1. Experiencia Laboral (Prioridad si preguntan por trayectoria)
    if (keywordsExperiencia.some(k => mensajeDelUsuarioEnMinuscula.includes(k))) {
        contexto = "Experiencia Laboral:\n" + experienciaLaboral.map(e => `- ${e.puesto} (${e.periodo}) ${e.lugar ? 'en ' + e.lugar : ''}: ${e.detalle}`).join("\n");

        // 2. Sobre trabajos (Portfolio Projects)
    } else if (mensajeDelUsuarioEnMinuscula.includes("proyecto") || (mensajeDelUsuarioEnMinuscula.includes("trabajo") && !mensajeDelUsuarioEnMinuscula.includes("anterior"))) {
        /*map crea un arreglo de strings, y a ese arreglo se convierte en un solo string con join */
        contexto = trabajos.map(trabajo => `- ${trabajo.titulo}: ${trabajo.descripcion}`).join("\n");
        /* console.log(contexto); */

        // 3. Sobre tecnologías
    } else if (mensajeDelUsuarioEnMinuscula.includes("tecnolog") || mensajeDelUsuarioEnMinuscula.includes("stack") || mensajeDelUsuarioEnMinuscula.includes("lenguaje") || mensajeDelUsuarioEnMinuscula.includes("herramienta") || mensajeDelUsuarioEnMinuscula.includes("software")) {
        contexto = `
        Tecnologías y Lenguajes: ${perfil.tecnologias.join(", ")}
        Herramientas y Software: ${perfil.herramientas.join(", ")}
        `;
        /* console.log(contexto); */

    } else if (keywordsSoftSkills.some(k => mensajeDelUsuarioEnMinuscula.includes(k))) {
        contexto = `Habilidades Blandas (Soft Skills): ${perfil.softSkills.join(", ")}`;

    } else if (keywordsIdiomas.some(k => mensajeDelUsuarioEnMinuscula.includes(k))) {
        contexto = `Idiomas: ${perfil.idiomas.join(", ")}`;

        // Sobre Mauricio (nombre, experiencia, contacto, etc.)
    } else if (keywords.some(palabra => mensajeDelUsuarioEnMinuscula.toLowerCase().includes(palabra))) {
        contexto = `
        Nombre: ${perfil.nombre}
        Edad: ${perfil.edad}
        Ubicación: ${perfil.ubicacion}
        Profesión: ${perfil.profesion}
        Perfil: ${perfil.descripcion}
        Tecnologías: ${perfil.tecnologias.join(", ")}
        Idiomas: ${perfil.idiomas.join(", ")}
        Email: ${perfil.email}
        Teléfono: ${perfil.telefono}
        LinkedIn: ${perfil.linkedin}
        GitHub: ${perfil.github}
            `;
        /* console.log(contexto); */
    } else if (keywordsFormacion.some(k => mensajeDelUsuarioEnMinuscula.toLowerCase().includes(k))) {
        contexto = "Formación y Cursos:\n" + formacion.map(f => `• ${f.titulo} - ${f.institucion} (${f.periodo || f.estado}) ${f.detalle ? ': ' + f.detalle : ''}`).join("\n");
        /* console.log(contexto); */
    } else if ((objetoTrabajo = trabajos.find(trabajo => mensajeDelUsuarioEnMinuscula.includes(trabajo.titulo.toLowerCase())))) {
        contexto = `Trabajo: ${objetoTrabajo.titulo}\nTecnologías: ${objetoTrabajo.tecnologias.join(", ")}\nDescripción: ${objetoTrabajo.descripcion}`;

    } else {
        // 🧠 Último recurso: usar todo el contexto disponible

        const descripcion = perfil.descripcion || "No hay descripción disponible.";
        const tecnologias = perfil.tecnologias?.join(", ") || "Tecnologías no especificadas.";
        const herramientas = perfil.herramientas?.join(", ") || "";
        const softSkills = perfil.softSkills?.join(", ") || "";
        const contacto = `
Email: <a href="mailto:${perfil.email}">${perfil.email}</a><br>
LinkedIn: <a href="${perfil.linkedin}" target="_blank">${perfil.linkedin}</a><br>
Teléfono: ${perfil.telefono}<br>
`;

        const trabajosHtml = trabajos.map(trabajo => `
🧠 <b>${trabajo.titulo}</b><br>
${trabajo.descripcion}<br><br>
`).join("");

        const experienciaHtml = experienciaLaboral.map(e => `
💼 <b>${e.puesto}</b> (${e.periodo})<br>
${e.lugar ? e.lugar + '<br>' : ''}
${e.detalle}<br><br>
`).join("");

        const formacionHtml = formacion.map(f => `
🎓 <b>${f.titulo}</b><br>
${f.institucion} (${f.periodo || f.estado})<br>
`).join("");

        contexto = `
Sobre Mauricio Belforte:<br>
${descripcion}<br><br>

Tecnologías que utiliza:<br>
${tecnologias}<br><br>
Herramientas: ${herramientas}<br>
Habilidades Blandas: ${softSkills}<br>
Idiomas: ${perfil.idiomas.join(", ")}<br><br>

Información de contacto:<br>
${contacto}<br>

Proyectos destacados:<br>
${trabajosHtml}

Experiencia Laboral:<br>
${experienciaHtml}

Formación:<br>
${formacionHtml}
  `;
        console.log("ultimo contexto", contexto);
    }
    return contexto;
}