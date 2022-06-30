import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export default async function encrypt(str: string) {
  return await bcrypt.hash(str, saltOrRounds);
}
