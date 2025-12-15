# Portfolio Web Full-Stack de Mauricio Belforte

¡Bienvenido al repositorio de mi portfolio personal! Este proyecto no es solo una galería de mi trabajo, sino una aplicación full-stack funcional que demuestra mis habilidades en desarrollo frontend, arquitectura backend y la integración de servicios de inteligencia artificial.

**➡️ [Ver el portfolio en vivo](https://mauriciobelforte.github.io/mi-portfolio/) ⬅️**

## ✨ Características Principales

*   **Diseño Responsivo:** Totalmente adaptable a dispositivos móviles y de escritorio, utilizando CSS moderno (Flexbox).
*   **Proyectos Detallados:** Una sección de proyectos que describe la tecnología y los conceptos detrás de cada uno.
*   **Asistente Virtual con IA:** Un chatbot interactivo (¡probalo en la esquina inferior derecha del sitio!) que puede responder preguntas sobre mis proyectos, habilidades y experiencia.

## 🛠️ Arquitectura y Stack Tecnológico

Este portfolio está construido con una arquitectura desacoplada, separando el frontend de los servicios de backend.

### Frontend

*   **Tecnologías:** HTML5, CSS3, JavaScript (ES6+ Modules).
*   **Librerías/Frameworks:** Ninguno. Se utilizó JavaScript puro (Vanilla JS) para la manipulación del DOM, eventos y peticiones `fetch` a la API del chatbot.
*   **Despliegue:** Alojado como un sitio estático en **GitHub Pages**.

### Backend (Asistente Virtual)

El chatbot es impulsado por un motor de IA modular e independiente que forma parte de un ecosistema más grande.

*   **Nombre del Proyecto:** `motor-ia-backend`
*   **Tecnologías:** **Node.js**
*   **Arquitectura:** **Serverless Functions** desplegadas en **Vercel**.
*   **Funcionalidad:**
    *   Provee una API REST (`/api/motor-ia`) que el frontend consume.
    *   Es compatible con múltiples modelos de IA (Gemini, Llama, Mistral, etc.).
    *   Implementa una lógica de *fallback* para garantizar la disponibilidad si un proveedor de IA falla.
*   **Repositorio del Ecosistema:** Ver el código del Ecosistema Chatbot.


