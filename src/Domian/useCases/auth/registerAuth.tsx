import { AuthRepositoryImpli } from "../../../Data/repositories/AuthRepository"
import { User } from "../../entities/User"


const {register } =new AuthRepositoryImpli();

export const RegisterAuthUseCase = async (user : User) =>{

    return await register(user);

}