import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService, PrismaService],
  imports: [PrismaService],
})
export class CharactersModule {}
