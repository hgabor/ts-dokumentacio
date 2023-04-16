import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeeService {
  /**
   * Létehoz egy kávét a megadott paraméterekkel.
   *
   * @param createCoffeeDto A kávé adatai
   * @returns Az új kávé adatai
   */
  async create(createCoffeeDto: CreateCoffeeDto) {
    return 'This action adds a new coffee';
  }

  /**
   * Visszadja az adatbázisban szereplő összes kávé adatait.
   *
   * @returns A kávékból álló tömb
   */
  findAll() {
    return `This action returns all coffee`;
  }

  /**
   * Visszaadja a megadott ID-jű kávé adatait.
   *
   * @param id A kávé ID-je
   * @returns A kávé adatai
   */
  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  /**
   * Módosítja a megadott ID-jű kávé adatait.
   *
   * @param id A kávé ID-je
   * @param updateCoffeeDto A kávé adatai. Csak azok a mezők frissülnek, amely ebben az objektumban meg vannak adva.
   * @returns A kávé frissített adatai
   */
  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  /**
   * Törli a megadott ID-jű kávét.
   *
   * @param id A kávé ID-je
   */
  remove(id: number) {
    //return `This action removes a #${id} coffee`;
  }
}
