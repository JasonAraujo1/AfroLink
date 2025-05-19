import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
        <View>
            <Text> Page Not Found</Text>
            <Link href="/" style={styles.button}>Go to Home Screen</Link>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'blue',
    },
})