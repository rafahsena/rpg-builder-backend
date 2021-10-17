import { IsNumber, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  name: string;
  @IsNumber()
  level?: number;
}
