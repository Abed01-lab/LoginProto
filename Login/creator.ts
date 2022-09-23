import { users } from "./data";
import { authenticateCreate } from "./authenticator";

export function createUser(email: string, password: string) {
  if (authenticateCreate(email, password)) return true;
  return false;
}
