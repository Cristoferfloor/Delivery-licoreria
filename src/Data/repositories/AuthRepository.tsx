import { AxiosError } from "axios";
import { User } from "../../Domian/entities/User";
import { AuthRepository } from "../../Domian/repositories/AuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponsiveAPIDelivey } from '../sources/remote/models/ResponsiveApiDelivey';

export class AuthRepositoryImpli implements AuthRepository {
    async register(user: User) : Promise<ResponsiveAPIDelivey> {
        try {

            const responsive = await ApiDelivery.post<ResponsiveAPIDelivey>('users/create', user);
            return Promise.resolve(responsive.data);

        } catch (error) {

            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError :  ResponsiveAPIDelivey= JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }
    }
}
