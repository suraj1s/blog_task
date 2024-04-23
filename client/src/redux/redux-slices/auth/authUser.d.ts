// user data type
interface AuthInitailStateType {
  logedInUser: UserType | null;
  tokenCheck: boolean;
}

interface SignInDataType {
  email: string;
  password: string;
}
interface SignupDataType {
  email: string;
  password: string;
  username: string;
}

interface UserType {
  username?: string;
  email?: string;
  phone?: number;
}

interface ErrorType {
  message: string;
}