import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ViewStyle, TouchableOpacity, Platform, } from 'react-native';
// import Logo from "../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import { AntDesign, EvilIcons, Feather, Entypo } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import RNLinearGradient from "../components/RNLinearGradient";
import TouchableRipple from "../components/TouchableRipple";
import TextInput from "../components/TextInput";

export default function ForgotPassword() {
    const [passwordShow, setPasswordshow] = useState(false);
    function gotoLogin() {
        Navigation.navigate('LoginScreen')
    }
    const platform = Platform.OS
    const Navigation = useNavigation<any>()
    function gotoCreateaccount() {
        Navigation.navigate('Createaccount')
    }
  
    return (
        <SafeAreaView style={styles.cardpages}>
           <StatusBar />
            <View>
            <Image source={require('../assets/images/logo.png')} style={styles.logocardd}/>
            </View>
         
            <Text style={styles.welcometext}>Forgot Password</Text>
            <Text style={styles.afrebaytext}> 
               Please, enter your email address. You will receive a link to create a new password via email.
            </Text>
            <View style={styles.pgfull}>
            <TextInput 
                placeholder="Registered Email Address"
            />
            </View>
      
          <TouchableRipple style={styles.wdtg}>
                <RNLinearGradient
                    direction="column"
                    style={styles.linearGradient}
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                    <Text style={styles.buttontext} >Send</Text>
                </RNLinearGradient>
            </TouchableRipple>
          
            <View style={styles.downsection}>
                <Text style={styles.signup}>Don't have an account?
                </Text>
                <Text style={styles.signuptxt} onPress={gotoCreateaccount}>Sign Up</Text>
            
            </View>
         
            <View style={styles.crvbtext}>
                    <TouchableRipple onPress={gotoLogin} >

                        <RNLinearGradient
                            direction="column"
                            style={styles.crieleBtn}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                            <Entypo name="chevron-small-left" size={24} color="white" />

                        </RNLinearGradient>
                    </TouchableRipple>
                </View>
          
        </SafeAreaView>

    )
}


interface Styles {
    cardpages: ViewStyle;
    pgfull: ViewStyle;
    cricleiconb: ViewStyle;
    logof: ViewStyle;
    logoaferbay: ViewStyle;
    darkThemeText: ViewStyle;
    eyescreen: ViewStyle;
    welcometext: ViewStyle;
    downsection: ViewStyle;
    text: ViewStyle;
    textinput: ViewStyle;
    forgot: ViewStyle;
    linearGradient: ViewStyle;
    buttontext: ViewStyle;
    signup: ViewStyle;
    signuptxt: ViewStyle;
    afrebaytext: ViewStyle;
    crieleBtn: ViewStyle;

  }

const styles = StyleSheet.create({
    cardpages: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        backgroundColor:'#FEFDFD',

    },
    crvbtext: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 80,
    },
    pgfull: {
        width:'90%',
        marginBottom:14,
        marginLeft:0,
    },
    logocardd:{
        width:210,
        height:60,
    },
  
    wdtg: {
        width: '90%',
    },
    afrebaytext: {
        marginLeft:28,
        marginRight:28,
        fontSize: 14,
        fontWeight:'normal',
        color:'#000',
        marginTop:5,
        marginBottom:5,
        textAlign:'center',
        letterSpacing:1,
        },
        crieleBtn:{
            marginTop:30,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:50,
            height:50,
            borderRadius:50,
            textAlign:'center',
            shadowColor: 'rgba(0, 0, 0, 0.9)',
            shadowOpacity: 0.8,
            elevation: 4,
            backgroundColor : "#fff",
            shadowRadius: 50 ,
        },
    cricleiconb:{
        fontSize: 20, 
         shadowColor: 'rgba(0, 0, 0, 0.9)',
        shadowOpacity: 0.8,
        elevation: 4,
        position:'relative',
        backgroundColor:'#fff',
    width:32,height:32,
     borderRadius:50,
      zIndex:9,
       color: '#1B52DF', 
        marginHorizontal: 25,
         marginTop: -42,
          textAlign:'center',
           paddingTop:4,
            marginLeft: 'auto',
             marginRight:35 
    },

  
    eyescreen: {
        backgroundColor: '#ddd',
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        bottom: 20,
    },
    welcometext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#686868',
        marginTop: 40,
        marginBottom: 50,
    },

    downsection: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderTopColor:'#F5F5FA',
        borderTopWidth:1,
        width:300,
        marginTop:10,
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
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 15,
        color: '#1B52DF',
        letterSpacing:2,
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        borderRadius: 50,
        marginTop: 0,
        marginBottom: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
       fontSize:16,
       fontWeight:'bold',

    },
    signup: {
        marginTop: 10,
        fontWeight: 'normal',
        letterSpacing:2,
    },
    signuptxt: {
        letterSpacing:2,
        marginTop: 10,
        fontSize: 14,
        color: '#1B52DF',
        fontWeight: '400'
    }

});

