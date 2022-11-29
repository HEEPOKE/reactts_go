export default interface UserInterface {
  id?: any | null;
  username: string;
  password: string;
  email: string;
  role: number;
  successful: boolean,
  message: string
}
