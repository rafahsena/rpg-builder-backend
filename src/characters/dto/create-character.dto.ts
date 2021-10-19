import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from '../entities/Character.entity';

export class CreateCharacterDto extends User {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  level?: number;
}
