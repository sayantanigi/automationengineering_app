import { Platform, Pressable, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { colorPrimary } from "../constants/color";
import { ReactElement } from "react";
interface ButtonLight extends TouchableOpacityProps {
    textStyle?: StyleProp<TextStyle>;
    children?: string | ReactElement

}
export default function ButtonLight(props: ButtonLight) {
    return (
        <TouchableOpacity
            {...props}
            activeOpacity={1}
            style={[styles.button, props.style]}>
            <Text style={[styles.text, props.textStyle]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 70,
        backgroundColor: '#f7f7fa',
        marginTop: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Platform.OS === 'android' ? '#fff' : '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 6,

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: "Inter-Bold",
        color: colorPrimary,
        textTransform: 'uppercase'
    }
})