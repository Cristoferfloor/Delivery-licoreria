import { ResponsiveAPIDelivey } from "../../Data/sources/remote/models/ResponsiveApiDelivey";
import { User } from "../entities/User";

export interface AuthRepository {

    register(user: User): Promise<ResponsiveAPIDelivey>
}