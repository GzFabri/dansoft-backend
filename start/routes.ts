/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ProductosController = () => import('#controllers/productos_controller')
const CategoriasController = () => import('#controllers/categorias_controller')
const VentasController = () => import('#controllers/ventas_controller')

// Listar todos los productos
router.get('/productos', [ProductosController, 'index'])

// Crear un producto
router.post('/productos', [ProductosController, 'store'])

// Ver un producto por ID
router.get('/productos/:id', [ProductosController, 'show'])

// Actualizar un producto por ID
router.put('/productos/:id', [ProductosController, 'update'])

// Eliminar un producto por ID
router.delete('/productos/:id', [ProductosController, 'destroy'])

// Listar todas las categorías
router.get('/categorias', [CategoriasController, 'index'])

// Crear una categoría
router.post('/categorias', [CategoriasController, 'store'])

// Ver una categoría por ID
router.get('/categorias/:id', [CategoriasController, 'show'])

// Actualizar una categoría por ID
router.put('/categorias/:id', [CategoriasController, 'update'])

// Eliminar una categoría por ID
router.delete('/categorias/:id', [CategoriasController, 'destroy'])

// --- Rutas para ventas ---
router.get('/ventas', [VentasController, 'index']) // Listar todas las ventas
router.post('/ventas', [VentasController, 'store']) // Crear una venta
router.get('/ventas/:id', [VentasController, 'show']) // Ver una venta por ID
router.put('/ventas/:id', [VentasController, 'update']) // Actualizar una venta por ID
router.delete('/ventas/:id', [VentasController, 'destroy']) // Eliminar una venta
