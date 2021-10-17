import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateCharacterDto } from './create-character.dto';

export class UpdateCharacterDto extends PartialType(CreateCharacterDto) {
  @IsString()
  name?: string;
  @IsNumber()
  level?: number;
}
