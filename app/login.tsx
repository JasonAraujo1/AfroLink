import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { fetchApiUsers } from '../app/services/fetchApi';



export default function Login() {
    const [userInputEmail, setUserInputEmail ] = useState('')
    const [userInputSenha, setUserInputSenha ] = useState('')

    const router = useRouter()

    async function handleLogin() {
        const data = await fetchApiUsers()
        const userFound = data.find(user => user.email === userInputEmail && user.senha === userInputSenha)
        if (userFound) {
            router.push('/')
        }
        
    }


    return (
        <View style={style.container}>
            <Image source={require('../assets/images/logo.png')} style={{ width: 100, height: 100 }} />
            <View>
                <TextInput placeholder='E-mail' onChangeText ={setUserInputEmail} />
                <TextInput placeholder='Senha' onChangeText ={setUserInputSenha} />
                <Button onPress={handleLogin} title="Entrar" />
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