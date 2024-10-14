import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButtom';
import { StackNavigationState, useNavigation } from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack';
import { FootStackParamlist } from '../../../../App';
import useViewsModel from './viewsModel'
import { CustomTextInput } from '../../components/CustomTextInput';

import styles from './Styles'

export const HomeScreen = () => {

    const { email , password, onChange } = useViewsModel ();

    const navegation = useNavigation<StackNavigationProp<FootStackParamlist>>();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/licoreria.png')}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.logotext}>Licoreria</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>
                 <CustomTextInput
                  image={require('../../../../assets/inicioSeccion/email.png')}
                  placeholder='Correo Electronico'
                  keyboardType='email-address'
                  property='email'
                  onChangeText={onChange}
                  value={email}

                 />

                 <CustomTextInput
                  image={require('../../../../assets/inicioSeccion/password.png')}
                  placeholder='Contraseña'
                  keyboardType='default'
                  property='password'
                  onChangeText={onChange}
                  value={password}
                  secureTextEntry= {true}
                 />

               

                <View>
                    <RoundedButton
                        text='Entrar'
                        onPress={() => {
                            console.log('Email: ' + email);
                            console.log('Password: '   + password);
                            
                            
                        }} />


                </View>

                <View style={styles.formResgistro}>
                    <Text>No tiene cuenta?</Text>
                    <TouchableOpacity onPress={() => navegation.navigate('RegisterScreen')} >
                    <Text style={styles.textRegistro}>Registrate</Text>
                      
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

