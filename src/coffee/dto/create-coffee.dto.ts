import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'A kávé megnevezése. Az adatbázisban egyedinek kell lennie, és nem lehet üres.',
    type: 'string',
  })
  name: string;

  @IsBoolean()
  @ApiProperty({
    description: 'A kávé koffeinmentes-e.',
    type: 'boolean',
  })
  decaf: boolean;
}
