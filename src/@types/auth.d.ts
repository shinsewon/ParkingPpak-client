export {};

declare global {
  type LoginRequest = {
    email: string;
    password: string;
  };

  type RegisterRequest = {
    name: string;
    email: string;
    password: string;
  };
}
