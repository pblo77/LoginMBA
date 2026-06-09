# Authentication Module - MetaVerseBiz Amplify (`LoginMBA`)

Este repositorio contiene el módulo dedicado de autenticación y control de acceso de usuarios para la plataforma **MBA (MetaVerseBiz Amplify)**. El proyecto implementa una interfaz de inicio de sesión (*Login*) y registro segura, responsiva y con validaciones dinámicas del lado del cliente.

---

## 🛠️ Tecnologías y Características

* **Maquetación & Estilos:** HTML5 y CSS3 con enfoque moderno (UI limpia y futurista alineada a la estética del Metaverso.
* **Lógica de Validación:** JavaScript (Validación de formatos de correo, contraseñas seguras y manejo de estados de error en tiempo real).
* **Experiencia de Usuario (UX):** Animaciones fluidas en campos de texto, manejo visual de cargas (*spinners*) y control de visibilidad de contraseñas.
* **Estructura Escalable:** Código preparado para la integración directa con proveedores de identidad (IdP) o backends de autenticación (como AWS Cognito, Firebase Auth o servicios basados en JWT).

---

## 🔐 Seguridad y Validaciones Implementadas

1. **Sanitización Inicial:** Prevención de envíos de formularios vacíos o con datos erróneos mediante deshabilitación dinámica de botones.
2. **Criterios de Contraseña:** Validación visual en tiempo real para asegurar que los usuarios cumplan con los requisitos mínimos de seguridad (mayúsculas, números y caracteres especiales).
3. **Manejo de Errores Semántico:** Inserción dinámica de mensajes de alerta accesibles en el DOM sin alterar el flujo visual de la aplicación.
