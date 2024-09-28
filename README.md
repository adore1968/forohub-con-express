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

- `POST /api/usuarios/register`: Registro de nuevos usuarios.
- `POST /api/usuarios/login`: Inicio de sesión y obtención de token JWT.
- `GET /api/topicos`: Obtener todos los tópicos del foro.
- `POST /api/topicos`: Crear un nuevo tópico (requiere autenticación).
- `GET /api/topicos/:id`: Obtener un tópico específico por ID.
- `PUT /api/topicos/:id`: Actualizar un tópico existente (requiere autenticación).
- `DELETE /api/topicos/:id`: Eliminar un tópico (requiere autenticación).

## Consideraciones

- Las rutas protegidas por autenticación requieren un token JWT válido en los headers.
- Las contraseñas se cifran antes de ser almacenadas en la base de datos.
- Se realizaron validaciones exhaustivas en cada entrada de datos utilizando Zod para asegurar la integridad de la información.
