import { PrismaClient } from '@prisma/client';
import dateKstMw from '../prisma/date-kst-mw';
import softReadMw from '../prisma/soft-read-mw';

declare global {
  // eslint-disable-next-line no-var
  var client: PrismaClient | undefined;
}

const prisma = global.client || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV === 'development') global.client = client;

dateKstMw(prisma);
softReadMw(prisma);
softReadMw(prisma);

export default prisma;
