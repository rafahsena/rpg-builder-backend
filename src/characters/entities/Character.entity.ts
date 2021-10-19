import { Prisma } from '@prisma/client';

export class User implements Prisma.CharacterUncheckedCreateInput {
  id?: number;
  name: string;
  level?: number;
}
