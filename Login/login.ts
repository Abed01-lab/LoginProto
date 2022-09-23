import { authenticateLogin } from "./authenticator";
export function login(email: string, password: string) {
  if (authenticateLogin(email, password)) {
    return true;
  }
  return false;
}
