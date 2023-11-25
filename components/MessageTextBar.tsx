import { View, StyleSheet, TextInput, Pressable, Platform } from "react-native";
import { Fontisto } from '@expo/vector-icons';

export default function MessageTextBar() {
    const platform = Platform.OS

    return (
        <View style={styles.bgmessagesec}>
            <View style={styles.mesopt}>
                <TextInput
                    style={styles.InputStyle}
                    placeholder="Write your messages ..."
                />
            </View>
            <Pressable style={styles.SendBtn}>
                <View style={styles.linearGradientfilter} >
                    <Fontisto name="paper-plane" size={18} color="#1B52DF" />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bgmessagesec: {
        width: '100%',
        backgroundColor: '#1B52DF',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mesopt: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        height: 50,
        width: '80%',
    },
    InputStyle: {
        verticalAlign: 'middle',
        marginTop: 10,
    },
    SendBtn: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    linearGradientfilter: {
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowRadius: 50,
        //  shadowColor: 'rgba(0, 0, 0, 0.9)',
        borderWidth: 1,
        //  borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#fcfafa',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
    },
})