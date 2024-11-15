// lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as typeof global & {
  prismaGlobal?: PrismaClient;
};

export const prisma = globalForPrisma.prismaGlobal || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prismaGlobal = prisma;
}
