import bcrypt from "bcrypt";

async function hasher(password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
}

export async function comparePasswords(
  password: string,
  hashedComparePassword: string
) {
  const hashedPassword = await hasher(password);

  if (hashedPassword === hashedComparePassword) {
    return true;
  }

  return false;
}
