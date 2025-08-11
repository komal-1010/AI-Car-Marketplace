import { PrismaClient } from "./generated/prisma";

export const db=globalThis.prisma|| new PrismaClient();  
//when app reload every time it create instance
if (process.env.NODE_ENV=='production') {
  globalThis.prisma=db;
}