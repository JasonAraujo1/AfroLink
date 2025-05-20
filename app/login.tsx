import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View style={style.container}>
            <Image source={require('../assets/images/Logo.png')} />
            <Text>fitConect</Text>
            <View>
                <input placeholder='E-mail' />
                <input placeholder='Senha' />
                <button>Entrar</button>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text>Ja possui conta?</Text>
                <Link style={style.link} href="">Fazer login</Link>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    link: {
        color: 'blue',

    }

})