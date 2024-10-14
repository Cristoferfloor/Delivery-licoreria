import React, { useState } from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domian/useCases/auth/registerAuth';




export const RegisterviewsModel = () => {

    const [values, setValue] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const onChange = (property: string, value: any) => {


        setValue({ ...values, [property]: value })

    }

    const register = async () => {

        const response = await RegisterAuthUseCase(values);
        console.log('Result: ' + JSON.stringify(response));


    }
    return {
        ...values,
        onChange,
        register

    }
}

export default RegisterviewsModel; 
