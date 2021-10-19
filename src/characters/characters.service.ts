import { Character, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntityNotFoundError } from 'src/exceptions/EntityNotFound';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CharacterCreateInput): Promise<Character> {
    return this.prisma.character.create({ data });
  }

  async findAll() {
    return this.prisma.character.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prisma.character.findUnique({ where: { id } });
    } catch (e) {
      throw new EntityNotFoundError('This character does not exists.');
    }
  }

  async update(id: number, data: Prisma.CharacterUpdateInput) {
    try {
      return await this.prisma.character.update({
        where: { id },
        data,
      });
    } catch (e) {
      throw new EntityNotFoundError('This character does not exists.');
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.character.delete({ where: { id } });
    } catch (e) {
      throw new EntityNotFoundError('This character does not exists.');
    }
  }
}
