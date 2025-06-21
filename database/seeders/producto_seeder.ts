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
      {
        nombre: 'Labial Mate naranja',
        descripcion: 'Color intenso, menor duracion.',
        precio: 20000,
        stock: 50,
        categoriaId: 1, // Labiales
      },
      {
        nombre: 'Mascara de Pestañas Volumen',
        descripcion: 'A prueba de agua, efecto volumen.',
        precio: 32000,
        stock: 45,
        categoriaId: 5, // Máscaras
      },
      {
        nombre: 'Rubor Compacto Rosa',
        descripcion: 'Textura suave, fácil de difuminar.',
        precio: 22000,
        stock: 35,
        categoriaId: 6, // Rubores
      },
      {
        nombre: 'Corrector Líquido Beige',
        descripcion: 'Alta cobertura para ojeras.',
        precio: 27000,
        stock: 25,
        categoriaId: 7, // Correctores
      },
      {
        nombre: 'Polvo Compacto Translucido',
        descripcion: 'Acabado mate, controla brillo.',
        precio: 30000,
        stock: 40,
        categoriaId: 8, // Polvos
      },
      {
        nombre: 'Iluminador Líquido Dorado',
        descripcion: 'Brillo natural para el rostro.',
        precio: 35000,
        stock: 20,
        categoriaId: 9, // Iluminadores
      },
      {
        nombre: 'Labial Gloss Transparente',
        descripcion: 'Brillo intenso, no pegajoso.',
        precio: 21000,
        stock: 55,
        categoriaId: 1, // Labiales
      },
      {
        nombre: 'Sombras Nude 6 tonos',
        descripcion: 'Paleta compacta para uso diario.',
        precio: 40000,
        stock: 28,
        categoriaId: 2, // Sombras
      },
      {
        nombre: 'Base Líquida Tono Medio',
        descripcion: 'Cobertura alta, acabado mate.',
        precio: 47000,
        stock: 38,
        categoriaId: 3, // Bases
      },
      {
        nombre: 'Delineador en Gel Marrón',
        descripcion: 'Fácil de aplicar, larga duración.',
        precio: 19000,
        stock: 33,
        categoriaId: 4, // Delineadores
      },
      {
        nombre: 'Rubor Compacto Coral',
        descripcion: 'Color vibrante, textura sedosa.',
        precio: 23000,
        stock: 37,
        categoriaId: 6, // Rubores
      },
      {
        nombre: 'Polvo Compacto Beige',
        descripcion: 'Acabado natural, controla grasa.',
        precio: 31000,
        stock: 42,
        categoriaId: 8, // Polvos
      },
    ])
  }
}
