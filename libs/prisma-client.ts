import { PrismaClient } from '@prisma/client';
import * as dayjs from 'dayjs';
import { isPrimitive } from 'util';

declare global {
  // eslint-disable-next-line no-var
  var client: PrismaClient | undefined;
}

// UTC -> KST
function add9Hours(obj: Record<string, unknown>) {
  if (!obj) return;

  for (const key of Object.keys(obj)) {
    const val = obj[key];

    if (val instanceof Date) {
      obj[key] = dayjs(val).add(9, 'hour').toDate();
    } else if (!isPrimitive(val)) {
      add9Hours(val as any);
    }
  }
}

function prismaTimeMod<T>(value: T): T {
  if (value instanceof Date) {
    return dayjs(value).add(9, 'hour').toDate() as any;
  }

  if (isPrimitive(value)) {
    return value;
  }

  add9Hours(value as any);

  return value;
}

const prisma = global.client || new PrismaClient({ log: ['query'] });
prisma.$use(async (params, next) => {
  const result = await next(params);

  return prismaTimeMod(result);
});

if (process.env.NODE_ENV === 'development') global.client = client;

export default prisma;
