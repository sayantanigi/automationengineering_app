import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ViewStyle, TouchableOpacity, Platform } from 'react-native';
// import Logo from "../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function RegisterScreen() {
    const Navigation = useNavigation<any>()
    function gotoBecomeexpert() {
        Navigation.navigate('ExpertRegister')
    }
    function gotoBusiness() {
        Navigation.navigate('BusinessRegister')
    }

    return (
        <SafeAreaView style={styles.cardpages}>
            <StatusBar style={"auto"} backgroundColor="#f5f5fa" />
            <View>
                <Image source={require('../assets/images/logo.png')} style={styles.logocardd}/>
            </View>
            <Text style={styles.welcometext}>Create an Account</Text>
            <Text style={styles.hptu}>How are you planning to use Afrebay ? </Text>
            <Text style={styles.afrebaytext}>
                We'll streamline your account
                setup experience accordingly.
            </Text>

            <View style={styles.fullfreelan}>
                <TouchableOpacity onPress={gotoBecomeexpert} activeOpacity={0.9}>
                    <View style={styles.freelbtn}>
                        <Text style={styles.freelbtntext} >
                        Work as an Expert
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoBusiness} activeOpacity={0.9}>
                    <View style={styles.freelbtn}>
                        <Text style={styles.freelbtntext}>
                        Recruit as a Business
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardpages: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#f5f5fa',
    },
    hptu: {
        fontSize: 14,
        color: '#1b52df',
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '400',

    },
    logocardd:{
        width:210,
        height:60,
    },
    welcometext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#686868',
        marginTop: 40,
        marginBottom: 50,
        fontFamily:"Inter-Medium"
    },

    crieleBtn: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: 'center',
        shadowColor: 'rgb(255 83 0)',
        shadowOpacity: 1,
        elevation: 10,
    },
    fullfreelan: {
        width: '80%',
        marginTop: 10,

    },

    afrebaytext: {
        marginLeft: 20,
        marginRight: 20,
        fontSize: 14,
        fontWeight: 'normal',
        color: '#000',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        fontFamily:"Inter-Medium"
    },

    freelbtn: {
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#f5f5fa',
        shadowRadius: 50,
        marginTop: 18,
        marginBottom: 0,
        width: '100%',
        padding: 14,
        borderRadius: 50,
        textTransform: 'uppercase',
    },
    freelbtntext: {
        color: '#1b52df',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily:"Inter-Bold"
    },

});

