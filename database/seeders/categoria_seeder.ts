import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CategoriaSeeder extends BaseSeeder {
  async run() {
    await Categoria.createMany([
      { nombre: 'Labiales' },
      { nombre: 'Sombras' },
      { nombre: 'Bases' },
      { nombre: 'Delineadores' },
      { nombre: 'Máscaras' },
      { nombre: 'Rubores' },
      { nombre: 'Correctores' },
      { nombre: 'Polvos' },
      { nombre: 'Iluminadores' },
    ])
  }
}
