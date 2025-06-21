# Dansoft Backend

Este proyecto es una API backend construida con [AdonisJS](https://adonisjs.com/) para la gestión de productos, categorías y ventas de maquillaje.

## Requisitos

- Node.js 18+
- npm o yarn
- MySQL o MariaDB

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone <URL-del-repositorio>
   cd dansoft-backend
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   # o
   yarn install
   ```

3. **Configura el entorno:**
   - Copia el archivo `.env.example` a `.env` y ajusta las variables de conexión a la base de datos.

   ```sh
   cp .env.example .env
   ```

4. **Crea la base de datos:**
   - Crea una base de datos en tu gestor (por ejemplo, `maquillaje`).

5. **Ejecuta las migraciones:**
   ```sh
   node ace migration:run
   ```

6. **Carga los seeders (datos de ejemplo):**
   ```sh
   node ace db:seed
   ```

7. **Inicia el servidor:**
   ```sh
   node ace serve --watch
   ```

8. **Accede a la API:**
   - Por defecto estará disponible en: [http://localhost:3333](http://localhost:3333)

## Endpoints principales

- `/productos` CRUD de productos
- `/categorias` CRUD de categorías
- `/ventas` CRUD de ventas

## Notas

- Asegúrate de tener las tablas y relaciones correctamente migradas antes de cargar los seeders.
- Puedes modificar los seeders para agregar más datos de prueba.

---

¡Listo! Ahora puedes comenzar a desarrollar o consumir la API.
