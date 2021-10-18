import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  name: string;
  @IsOptional()
  @IsNumber()
  level?: number;
}
