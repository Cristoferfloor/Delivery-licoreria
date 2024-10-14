import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'


interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {


    return (
        <View style={styles.formInput}>
            <Image
                source={image}
                style={styles.emailIcon}
            />
            <TextInput
                style={styles.inputText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={text => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    emailIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
    },
    inputText: {
        flex: 1,
        borderBottomWidth: 3,
        borderBottomColor: '#F5F5F5',
        marginLeft: 15,
    },
})
