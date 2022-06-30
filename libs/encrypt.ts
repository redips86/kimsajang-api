import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function encrypt(str: string) {
  return await bcrypt.hash(str, saltOrRounds);
}

export async function compare(value: string, hashed: string) {
  return await bcrypt.compare(value, hashed);
}
