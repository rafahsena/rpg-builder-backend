import { Prisma } from '@prisma/client';

export class User implements Prisma.CharacterCreateInput {
  name: string;
  level?: number;
}
