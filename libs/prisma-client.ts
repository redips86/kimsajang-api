import { PrismaClient } from "@prisma/client";
import dateMiddleware from "../middleware/date.middleware";

declare global {
  // eslint-disable-next-line no-var
  var client: PrismaClient | undefined;
}

const prisma = global.client || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV === 'development') global.client = client;

dateMiddleware(prisma);

export default prisma;
