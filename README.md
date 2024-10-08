# DazLabs - Prueba Técnica - Server

## Descripción del Proyecto

Este proyecto es un [challenge](https://github.com/Cris3h/Dazlabs-server)  para **DazLabs** que consiste en la creación de un [servidor](https://dazlabs-server.onrender.com/products) que implementa métodos CRUD (Crear, Leer, Actualizar y Eliminar) utilizando **Node.js** y **TypeScript**. El servidor se conecta a una base de datos **MongoDB** y permite realizar las siguientes operaciones:

- **POST**: Crear un nuevo objeto.
- **PATCH**: Actualizar un objeto existente.
- **GET**: Obtener una lista de productos.
- **GET /:id**: Obtener un producto especifico 
- **DELETE**: Eliminar un objeto existente.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Express**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.
- **Axios**: Promesa para hacer peticiones HTTP.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.
- **Swagger**: [Documentación](https://dazlabs-server.onrender.com/documentation) de la API.

## Instrucciones para Ejecutar el Backend

### Prerrequisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (version 14 o superior)
- [MongoDB](https://www.mongodb.com/) (local o un servicio en la nube como MongoDB Atlas)

### Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/dazlabs---prueba-tecnica---server.git
   cd dazlabs---prueba-tecnica---server

2. **Instala las dependencias**:

   ```bash
   npm install

### Configuración de Variables de Entorno:

1. **Crea un archivo .env en la raiz del proyecto y configura las siguientes variables:

   ```bash
   PORT=<el que más te guste>
   NODE_ENV=development <para el uso de morgan>
   MONGO_URI=<URI de tu base de mongoDB>
   DEPLOY_SERVER_URL=<localhost / url de tu servidor>

### Ejecucion de la app.

1. **iniciar el servidor en modo desarrollo**:
  
   ```bash
   npm run dev
   ```

### Documentación.
1. **La documentación estará en en la ruta `/documentation`**

        ```bash
        http://localhost:<tu-puerto>/documentation
        ```

## Autor

[Cristian Treachi](https://github.com/Cris3h)