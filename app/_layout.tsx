import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
      <Tabs.Screen name='login' options={{ title: 'Login' }} />
    </Stack>
  )
}
