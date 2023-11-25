import { Pressable, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { colorPrimary, colorPrimarySecond } from "../constants/color";
import RNLinearGradient from "./RNLinearGradient";
import TouchableRipple from "./TouchableRipple";


interface ButtonPrimary extends TouchableOpacityProps {
    textStyle?: StyleProp<TextStyle>;

}
export default function ButtonPrimary(props: ButtonPrimary) {
    return (
        <TouchableRipple
            {...props}
            style={[styles.button, props.style]}>
            <RNLinearGradient
                style={{ width: '100%', height: '100%', justifyContent: "center", alignItems: 'center' }}
                colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']}
                direction="column">
                <Text style={[styles.text, props.textStyle]}>
                    {props.children}
                </Text>
                
            </RNLinearGradient>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 70,
        backgroundColor: colorPrimary,
        marginTop: 30,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 6,

        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    text: {
        fontSize: 16,
        fontFamily: "Inter-Bold",
        color: '#fff',
        textTransform: 'uppercase'
    }
})