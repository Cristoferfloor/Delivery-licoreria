import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
import { RoundedButton } from '../../components/RoundedButtom';
import useViewModel from './viewsModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Syles'
export const RegisterScreen = () => {

    const { name, lastname, phone, email, password, confirmPassword, register, onChange } = useViewModel();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/licoreria.png')}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logo}
                />
                <Text style={styles.logotext}>SELECCIONA UNA IMAGEN</Text>
            </View>

            <View style={styles.form}>
                <ScrollView>


                    <Text style={styles.formText}>REGISTRARSE</Text>
                    <CustomTextInput
                        image={require('../../../../assets/register/user.png')}
                        placeholder="Nombres"
                        keyboardType='default'
                        property='name'
                        value={name}
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/register/my_user.png')}
                        placeholder="Apellidos"
                        keyboardType='default'
                        property='lastname'
                        value={lastname}
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/inicioSeccion/email.png')}
                        placeholder="Correo Electronico"
                        keyboardType='email-address'
                        property='email'
                        value={email}
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/register/phone.png')}
                        placeholder="Telefono"
                        keyboardType='numeric'
                        property='phone'
                        value={phone}
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/inicioSeccion/password.png')}
                        placeholder="Contraseña"
                        keyboardType='default'
                        secureTextEntry={true}
                        property='password'
                        value={password}
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../../../assets/register/confirm_password.png')}
                        placeholder="Confirmar Contraseña"
                        keyboardType='default'
                        secureTextEntry={true}
                        property='confirmPassword'
                        value={confirmPassword}
                        onChangeText={onChange}
                    />
                    <View>
                        <RoundedButton
                            text='Confirmar'
                            onPress={() => register()} />

                    </View>

                </ScrollView>
            </View>
        </View>
    );
}


