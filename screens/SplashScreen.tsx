import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image } from "react-native"
import { useFonts } from "expo-font"
import React from "react"
import { useNavigation } from "@react-navigation/native";
export default function SplashScreen() {
    const navigation = useNavigation<any>()

    const [loaded] = useFonts({
        "fa-light": require("../assets/fonts/fa-light-300.ttf"),
        "fa-regular": require("../assets/fonts/fa-regular-400.ttf"),
        "fa-solid": require("../assets/fonts/fa-solid-900.ttf"),
        "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
        "Inter-Medium": require('../assets/fonts/Inter-Medium.ttf'),
        "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf")
    })

    React.useEffect(() => {
        if (loaded) {
            navigation.replace("OnboardingScreen")
        }
    }, [loaded])

    return (
        <SafeAreaView
            style={styles.container}>
            <StatusBar
                style="light"
                backgroundColor={"#D3DCF1"} />
            <Image
                style={styles.image}
                source={require("../assets/logo.png")}
                resizeMode="contain"
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3DCF1",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: '100%',
        maxWidth: 250,
        height: 80
    }
})