import { StyleSheet } from "react-native";

const Homestyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        bottom: '10%',
    },
    form: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    inputText: {
        flex: 1,
        borderBottomWidth: 3,
        borderBottomColor: '#F5F5F5',
        marginLeft: 15,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '25%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logotext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
    },
    emailIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    formResgistro: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textRegistro: {
        fontStyle: 'italic',
        color: 'orange',
        textDecorationLine: 'underline',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    }
})

export default Homestyles; 