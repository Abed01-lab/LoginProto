import { users } from "./data";

export function authenticateCreate(email: string, password: string) {
  for (const user of users) if (user.email === email) return false;
  users.push({ email, password });
  return true;
}

export function authenticateLogin(email: string, password: string) {
  for (const user of users)
    if (user.email === email && user.password === password) return true;
  return false;
}
