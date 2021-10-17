import { Character, Prisma } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CharacterCreateInput): Promise<Character> {
    return this.prisma.character.create({ data });
  }

  async findAll(where: Prisma.CharacterWhereInput) {
    return this.prisma.character.findMany({ where });
  }

  async findOne(where: Prisma.CharacterWhereUniqueInput) {
    const character = await this.prisma.character.findUnique({ where });
    if (!character) {
      throw new NotFoundException();
    }
    return character;
  }

  async update(
    where: Prisma.CharacterWhereUniqueInput,
    data: Prisma.CharacterUpdateInput,
  ) {
    const character = await this.prisma.character.update({ where, data });
    if (!character) {
      throw new NotFoundException();
    }
    return character;
  }

  async remove(where: Prisma.CharacterWhereUniqueInput) {
    const character = await this.prisma.character.delete({ where });
    if (!character) {
      throw new NotFoundException();
    }
    return character;
  }
}
