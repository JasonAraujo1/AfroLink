import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Login() {
    return (
        <View style={style.container}>
            <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 100 }} />
            <View>
                <TextInput placeholder='E-mail' />
                <TextInput placeholder='Senha' />
                <Button title="Entrar" />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text>Não possui conta?</Text>
                <Link style={style.link} href="/register">Fazer Cadastro</Link>
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