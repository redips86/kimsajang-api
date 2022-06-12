import { PrismaClient } from '@prisma/client';
import dateMiddleware from '../middleware/date.middleware';
import softReadMiddleware from '../middleware/soft-read.middleware';

declare global {
  // eslint-disable-next-line no-var
  var client: PrismaClient | undefined;
}

const prisma = global.client || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV === 'development') global.client = client;

dateMiddleware(prisma);
softReadMiddleware(prisma);
softReadMiddleware(prisma);

export default prisma;
