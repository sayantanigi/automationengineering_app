import { ImageBackground, StyleSheet, TextInput as TextInputBase, TextInputProps } from "react-native";
import { colorPrimary } from "../constants/color";


interface TextInput extends TextInputProps {
    placeholder?: string;
    value?: string;
    secureTextEntry?: boolean;
    onChangeText?: (val: string) => void;
    editable?:boolean
    

}
export default function TextInput(props: TextInput) {
    return (
        <ImageBackground
            style={styles.inputWrapper}
            resizeMode="stretch"
            source={require("../assets/shadows/input.png")}>
            <TextInputBase
                {...props}
                cursorColor={colorPrimary}
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                
                placeholderTextColor={"#D6D6D6"}

            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: 50,
        marginVertical: 12,
    },
    input: {
        paddingLeft: 20,
        flexGrow: 1,
        height: '100%',
        fontFamily: "Inter-Medium",
        padding: 0,
        lineHeight: 30,
        fontSize: 16,
        color: "#686868"
    }

})