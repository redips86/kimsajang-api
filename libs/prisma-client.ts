import { PrismaClient } from "@prisma/client";
import dateMiddleware from "../middleware/date.middleware";
import softreadMiddleware from "../middleware/softread.middleware";

declare global {
  // eslint-disable-next-line no-var
  var client: PrismaClient | undefined;
}

const prisma = global.client || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV === 'development') global.client = client;

dateMiddleware(prisma);
softreadMiddleware(prisma);
softreadMiddleware(prisma);

export default prisma;
