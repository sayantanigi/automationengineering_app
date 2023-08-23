import React from "react";
import {StyleSheet, Text, View, Image, Platform, ScrollView } from 'react-native';
import { AntDesign, EvilIcons, Feather, Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import RNLinearGradient from "../../components/RNLinearGradient";
import TouchableRipple from "../../components/TouchableRipple";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../../components/TextInput";
export default function ExpertRegister() {
    const Navigation = useNavigation<any>()
    function gotoLogin() {
        Navigation.navigate('LoginScreen')
    }
    return (
        <SafeAreaView style={styles.cardpages}>

            <StatusBar style={"auto"} backgroundColor="#f5f5fa" />
            <ScrollView style={styles.scxrkl}>
                <View style={styles.becnmtext}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logocardd}/>
                </View>
                <Text style={styles.welcometext}>Become an Expert</Text>
                <View style={styles.pgfull}>
                    <TextInput
                       
                        placeholder="Company Name"
                    />

                    <View style={styles.cricleiconb} >
                        <AntDesign name="user" style={styles.cricleitext} />
                    </View>
                </View>
                <View style={styles.pgfull}>
                    <TextInput 
                       
                        placeholder="Email Address"
                    />
                    <View style={styles.cricleiconb} >
                        <AntDesign name="mail" style={styles.cricleitext} />
                    </View>

                </View>
                <View style={styles.pgfull}>
                    <TextInput 
                        
                        placeholder="Legal Address"
                    />

                    <View style={styles.cricleiconb} >
                        <EvilIcons name="location" style={styles.cricleitext} />
                    </View>
                </View>
                <View style={styles.pgfull}>
                    <TextInput 
                        
                        placeholder="Password"

                    />
                    <View style={styles.cricleiconb} >
                        <Feather name="eye-off" style={styles.cricleitext} />
                    </View>
                </View>
                <View style={styles.pgfull}>
                    <TextInput 
                        placeholder="Confirm Password"
                    />

                    <View style={styles.cricleiconb} >
                        <Feather name="eye" style={styles.cricleitext} />
                    </View>
                </View>
                <View style={styles.crvbtext}>
                    <TouchableRipple onPress={gotoLogin} >

                        <RNLinearGradient
                            direction="column"
                            style={styles.crieleBtn}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                            <Entypo name="chevron-small-right" size={24} color="white" />

                        </RNLinearGradient>
                    </TouchableRipple>
                </View>
            </ScrollView>
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
    logocardd:{
        width:210,
        height:60,
    },
    scxrkl: {
        width: '100%',
        paddingTop: 50,
        paddingBottom: 10,
    },
    crvbtext: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 80,
    },
    becnmtext: {
        //    textAlign:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    cricleitext: {
        position: 'relative',
        textAlign: 'center',
        top: 3,
        fontSize: 18,
        color: "#1b52df",
    },
    becnmimg: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // display: 'flex',
        // flexDirection: "row",
        textAlign: 'center',
    },
    pgfull: {
        width:'90%',
        marginBottom:14,
        marginLeft:16,
    },
    logof: {
        marginBottom: 50,
    },
    logoaferbay: {
        width: 200,
        height: 'auto',
        position: 'relative',
    },
    crieleBtn: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#ff7e00',
        borderRadius: 100,
        textAlign: 'center',
        shadowColor: '#5A85F3',
        shadowOpacity: 1,
        elevation: 10,
        marginBottom:5,
    },

    welcometext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#686868',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 50,
    },

    downsection: {
        justifyContent: 'center',
        display: 'flex',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000',
    },


    forgot: {
        padding: 4,
        marginTop: 10,
        alignContent: 'center',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#1b52df',
    },
    cricleiconb: {
        fontSize: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 4,
        position: 'relative',
        backgroundColor: '#f5f5fa',
        width: 32,
        height: 32,
        borderRadius: 50,
        zIndex: 9,
        color: '#1b52df',
        marginHorizontal: 25,
        marginTop: -52,
        textAlign: 'center',
        paddingTop: 4,
        marginLeft: 'auto',
        marginRight: 20,
    },

    buttontext: {
        marginTop: 28,
        marginBottom: 20,
        alignItems: 'flex-end',
        backgroundColor: '#ff7e00',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '90%',
        padding: 14,
        borderRadius: 50,
    },
    signup: {
        marginTop: 10,
        textAlign: 'right',
        fontWeight: 'normal'
    },
    signuptxt: {
        marginTop: 10,
        fontSize: 15,
        alignContent: 'center',
        width: '100%',
        color: '#1b52df',
        textAlign: 'right',
        fontWeight: 'bold'
    }

});

