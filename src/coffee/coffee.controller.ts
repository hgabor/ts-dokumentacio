import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post()
  @ApiOperation({ description: 'Létrehoz egy új kávét' })
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Get()
  @ApiOperation({ description: 'Listázza az összes kávét' })
  findAll() {
    return this.coffeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Visszaadja a megadott kávé adatait',
  })
  @ApiParam({
    name: 'id',
    description: 'A kávé azonosítója',
  })
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(+id);
  }

  @ApiOperation({
    description: 'Módosítja a megadott kávé adatait',
  })
  @ApiParam({
    name: 'id',
    description: 'A kávé azonosítója',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(+id, updateCoffeeDto);
  }

  @ApiOperation({
    description: 'Törli a megadott kávét',
  })
  @ApiParam({
    name: 'id',
    description: 'A kávé azonosítója',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(+id);
  }
}
