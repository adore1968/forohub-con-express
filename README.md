# Practicando Express.js: Challenge Foro Hub

Mi objetivo con este challenge fue implementar una API REST con las siguientes funcionalidades:

- API con rutas implementadas siguiendo las mejores prácticas del modelo REST.
- Validaciones realizadas según las reglas de negocio.
- Implementación de una base de datos relacional para la persistencia de la información.
- Servicio de autenticación/autorización para restringir el acceso a la información.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Express.js**: Framework para la construcción de aplicaciones web y APIs.
- **MySQL**: Base de datos relacional utilizada para la persistencia de datos.
- **jsonwebtoken**: Implementación de autenticación y autorización mediante JWT.
- **bcrypt**: Cifrado de contraseñas para mayor seguridad.
- **Zod**: Librería para la validación de datos y manejo de esquemas.
- **Morgan**: Middleware para el registro de peticiones HTTP en el servidor.

## Endpoints principales

- `POST /api/auth/register`: Registro de nuevos usuarios.
- `POST /api/auth/login`: Inicio de sesión y obtención de token JWT.
- `GET /api/posts`: Obtener todos los posts del foro.
- `POST /api/posts`: Crear un nuevo post (requiere autenticación).
- `GET /api/posts/:id`: Obtener un post específico por ID.
- `PUT /api/posts/:id`: Actualizar un post existente (requiere autenticación).
- `DELETE /api/posts/:id`: Eliminar un post (requiere autenticación).

## Consideraciones

- Las rutas protegidas por autenticación requieren un token JWT válido en los headers.
- Las contraseñas se cifran antes de ser almacenadas en la base de datos.
- Se realizaron validaciones exhaustivas en cada entrada de datos utilizando Zod para asegurar la integridad de la información.
