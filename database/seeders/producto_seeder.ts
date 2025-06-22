import Producto from '#models/producto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ProductoSeeder extends BaseSeeder {
  async run() {
    await Producto.createMany([
      {
        nombre: 'Labial Mate',
        descripcion: 'Color intenso',
        precio: 25000,
        stock: 50,
        categoriaId: 1, // Labiales
      },
      {
        nombre: 'Paleta de Sombras',
        descripcion: '12 tonos vibrantes.',
        precio: 60000,
        stock: 30,
        categoriaId: 2, // Sombras
      },
      {
        nombre: 'Base Líquida',
        descripcion: 'Cobertura media',
        precio: 45000,
        stock: 40,
        categoriaId: 3, // Bases
      },
      {
        nombre: 'Delineador Líquido',
        descripcion: 'Punta fina de alta precisión.',
        precio: 18000,
        stock: 60,
        categoriaId: 4, // Delineadores
      },
      {
        nombre: 'Labial Coral',
        descripcion: 'Color intenso',
        precio: 20000,
        stock: 50,
        categoriaId: 1, // Labiales
      },
      {
        nombre: 'Mascara',
        descripcion: 'A prueba de agua',
        precio: 32000,
        stock: 45,
        categoriaId: 5, // Máscaras
      },
      {
        nombre: 'Rubor en Crema',
        descripcion: 'Textura suave',
        precio: 22000,
        stock: 35,
        categoriaId: 6, // Rubores
      },
      {
        nombre: 'Corrector Líquido',
        descripcion: 'Alta cobertura',
        precio: 27000,
        stock: 25,
        categoriaId: 7, // Correctores
      },
      {
        nombre: 'Polvo Compacto',
        descripcion: 'Acabado mate',
        precio: 30000,
        stock: 40,
        categoriaId: 8, // Polvos
      },
      {
        nombre: 'Iluminador Líquido',
        descripcion: 'Brillo natural',
        precio: 35000,
        stock: 20,
        categoriaId: 9, // Iluminadores
      },
      {
        nombre: 'Labial Gloss',
        descripcion: 'Brillo intenso',
        precio: 21000,
        stock: 55,
        categoriaId: 1, // Labiales
      },
      {
        nombre: 'Sombras Nude ',
        descripcion: 'Paleta compacta ',
        precio: 40000,
        stock: 28,
        categoriaId: 2, // Sombras
      },
      {
        nombre: 'Base Líquida ',
        descripcion: 'Cobertura alta',
        precio: 47000,
        stock: 38,
        categoriaId: 3, // Bases
      },
      {
        nombre: 'Delineador en Gel',
        descripcion: 'Fácil de aplicar',
        precio: 19000,
        stock: 33,
        categoriaId: 4, // Delineadores
      },
      {
        nombre: 'Rubor Compacto',
        descripcion: 'Color vibrante',
        precio: 23000,
        stock: 37,
        categoriaId: 6, // Rubores
      },
      {
        nombre: 'Polvo Compacto',
        descripcion: 'Acabado natural',
        precio: 31000,
        stock: 42,
        categoriaId: 8, // Polvos
      },
    ])
  }
}
