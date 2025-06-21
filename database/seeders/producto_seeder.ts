import Producto from '#models/producto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ProductoSeeder extends BaseSeeder {
  async run() {
    await Producto.createMany([
      {
        nombre: 'Labial Mate Rojo',
        descripcion: 'Color intenso, larga duración.',
        precio: 25000,
        stock: 50,
        categoriaId: 1, // Labiales
      },
      {
        nombre: 'Paleta de Sombras Neon',
        descripcion: '12 tonos vibrantes.',
        precio: 60000,
        stock: 30,
        categoriaId: 2, // Sombras
      },
      {
        nombre: 'Base Líquida Tono Claro',
        descripcion: 'Cobertura media con acabado natural.',
        precio: 45000,
        stock: 40,
        categoriaId: 3, // Bases
      },
      {
        nombre: 'Delineador Líquido Negro',
        descripcion: 'Punta fina de alta precisión.',
        precio: 18000,
        stock: 60,
        categoriaId: 4, // Delineadores
      },
    ])
  }
}
