import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
    return (
        <View style={style.container}>
           <Image source={require('../assets/images/Logo.png')}/>
            <Text style={style.text}>Login</Text>
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
    text: {
        color: "black",
    }
})