// user data type
interface AuthInitailStateType {
    logedInUser: UserType | null;
    tokenCheck: boolean;
  }

interface SignInDataType {
    email : string,
    password : string,
}
interface SignupDataType {
    email : string,
    password : string,
    username : string,
}

interface ResetPasswordType {
    email : string,
    token : string,
    password : string,
}

interface AddressType {
    Country : string,
    StreetAddress : string,
    StateOrProvince : string
    ZIPorPostalCode : number,
    }
    
interface UserType {
    name ?: string,
    token ? : string,
    email ? : string,
    password ?: string,
    role ?: string,
    phone ?: number,
    address ?: AddressType,
    }

interface ErrorType {
    message : string,
    }

// auth endpoint return data type 
// interface CreateUserType {
//     token : string,
// }
// interface CheckUserType {
//     token : string,
// }
// interface GetUserType {
//     role : string,
// }
// interface ForgotPasswordRequestType {
//     success : string,
// }
// interface ResetPasswordType {
//     token : string,
// }
// interface GetUserType {
//     role : string,
// }
