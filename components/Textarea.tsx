import { ImageBackground, StyleSheet, TextInput as TextAreaBase } from "react-native";
import { colorPrimary } from "../constants/color";


interface Textarea {
    placeholder?: string;
    value?: string;
    onChangeText?: (val: string) => void;

}
export default function Textarea(props: Textarea) {
    return (
        <ImageBackground
            style={styles.inputWrapper}
            resizeMode="stretch"
            source={require("../assets/shadows/Input-area.png")}>
            <TextAreaBase
                cursorColor={colorPrimary}
                style={styles.inputarea}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholderTextColor={"#D6D6D6"}
                multiline
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: 110,
        marginVertical: 12,
    },
    inputarea: {
        paddingLeft:20,
        // minHeight:100,
        paddingTop:10,
        fontFamily: "Inter-Medium",
        paddingHorizontal: 7,
        fontSize: 16,
        color: "#686868"
    }

})