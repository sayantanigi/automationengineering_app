import React, { useEffect, useState } from "react";
import { StyleSheet, Text,  View, Image, ViewStyle, TouchableOpacity, Platform, } from 'react-native';
// import Logo from "../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import RNLinearGradient from "../components/RNLinearGradient";
import TouchableRipple from "../components/TouchableRipple";
import TextInput from "../components/TextInput";
import SnackBar from "../components/SnackBar";
import ProgressBar from "../components/ProgressBar";
import { BASE_URL } from "../Network/URL";
import { setUser } from "../stores/userAsync";

export interface LoginData {
   status: string
  result: LoginResult
  subscription: string
  userType: string
  profile: string
  }
  export interface LoginResult {
    userId: string
    companyname: string
    firstname: string
    lastname: string
    username: any
    email: string
    mobile: string
    dob: any
    password: string
    profilePic: string
    userType: string
    serviceType: any
    created: string
    modified: string
    status: string
    email_verified: string
    address: string
    latitude: string
    longitude: string
    zip: string
    resume: string
    additional_image: string
    short_bio: string
    video: string
    gender: string
    experience: string
    qualification: string
    skills: string
    oauth_provider: string
    oauth_uid: string
    view_count: string
    foundedyear: string
    teamsize: string
  }
  
interface userValue {
    email: string,
    password: string,

}
export default function LoginScreen() {
    const [alert, setAlert] = useState("")
    const [loading, setLoading] = useState(false)
    const [passwordShow, setPasswordshow] = useState(false);
    const Navigation = useNavigation<any>()
    const [errors, setErrors] = useState<any>({})

    
    const [formData, setFormData] = useState<userValue>({
        email: "",
        password: ""
    })
    function handleValueChange(value: string, key: string) {
        setFormData({ ...formData, [key]: value })
    }
    function gotoCreateaccount() {
        Navigation.navigate('RegisterScreen')
    }
    function gotoForgotPassword() {
        Navigation.navigate('ForgotPasswordScreen')
    }

   

   async function gotoHome() {
    

    if(formData.email.length===0){
        setAlert("Enter valid email")
    }
    else if(formData.password.length===0){
        setAlert("Enter valid password")
    }
    else{
        setLoading(true)
        let response = await fetch(BASE_URL + "login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let json = await response.json()
        setLoading(false)
        
       
           
           if(json.userType==="1"){
            Navigation.navigate('ExpertDashboard')
            await setUser({userType: json.result.userType, userId: json.result.userId, firstname: json.result.firstname, lastname: json.result.lastname,email: json.result.email,profilePic: json.result.profilePic})

           }
           else if(json.userType==="2"){
            Navigation.navigate('BusinessDashboard')
            await setUser({userType: json.result.user_type, userId: json.result.userId, firstname: json.result.firstname, lastname: json.result.lastname,email: json.result.email,profilePic: json.result.profilePic})

           }
           else{
            setAlert("Invalid inputs")
           }
           
           
    }
  
   // setLoading(true)
      //  Navigation.navigate('ExpertDashboard')
    }
    function gotoExpertDashboard() {
        Navigation.navigate('BusinessDashboard')
    }
    return (
        <SafeAreaView style={styles.cardpages}>
            <StatusBar backgroundColor="#f5f5fa" />
            <View>
                {/* <Image source={Logo} /> */}
                <Image source={require('../assets/images/logo.png')} style={styles.logocardd}/>
            </View>
            <Text style={styles.welcometext}>Welcome Back</Text>

            {/* <TextInput style={styles.textinput}
                textContentType="username"
                keyboardType="email-address"
                placeholder="Email Addresss"
            /> */}

            <View style={styles.pgfull}>
            <TextInput
            onChangeText={(text) => handleValueChange(text, "email")}
             placeholder="Email Addresss"/>
            </View>

            <View style={styles.pgfull}>
            <TextInput 
            placeholder="Password"
            onChangeText={(text) => handleValueChange(text, "password")}
            secureTextEntry={!passwordShow}
            
            />
           </View>

            <View style={styles.pgfullpassword}>
                {/* <TextInput style={styles.textinput}
                    textContentType="password"
                    placeholder="Password"
                    secureTextEntry={!passwordShow}
                /> */}
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={function () { setPasswordshow(!passwordShow) }}
                >

                    <View style={styles.cricleiconb}
                       >
                        <FontAwesome
                             pointerEvents="none"
                             onPress={function () { setPasswordshow(!passwordShow) }}
                            name={passwordShow ? "eye-slash" : "eye"}
                            style={styles.cricleitext}
                        ></FontAwesome>
                    </View>
                </TouchableOpacity>
            </View>
            
            <TouchableRipple onPress={gotoHome} style={styles.wdtg}>
                <RNLinearGradient
                    direction="column"
                    style={styles.linearGradient}
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                    <Text style={styles.buttontext} >Log In</Text>
                </RNLinearGradient>
            </TouchableRipple>
            {/* <TouchableRipple onPress={gotoExpertDashboard} style={styles.wdtg}>
                <RNLinearGradient
                    direction="column"
                    style={styles.linearGradient}
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                    <Text style={styles.buttontext} >Log In With Business</Text>
                </RNLinearGradient>
            </TouchableRipple> */}

            <View style={styles.downsection}>
                <Text style={styles.signup}>Don't have an account?
                </Text>
                <TouchableOpacity onPress={gotoCreateaccount} activeOpacity={0.9}>
                    <Text style={styles.signuptxt}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={gotoForgotPassword} activeOpacity={0.9}>
                <Text style={styles.forgot} >Forgot password?</Text>
            </TouchableOpacity>
            <ProgressBar loading={loading} />

            <SnackBar alert={alert} setAlert={setAlert} type="LONG" />
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
    pgfull:{
        width:'90%',
        marginBottom:12,
        marginLeft:0,
       },
       pgfullpassword:{
width:'100%',
       },
    wdtg: {
        width: '90%',
    },
    logocardd:{
        width:210,
        height:60,
    },
    cricleiconb: {
        fontSize: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        backgroundColor: '#f5f5fa',
        width: 32, 
        height: 32, 
        borderRadius: 50,
        position:'relative',
        zIndex: 9,
        marginHorizontal: 25,
        marginTop: -66,
        textAlign: 'center',
        marginLeft: "auto",
        marginRight: 35
    },
    cricleitext: {
        position: 'relative',
        textAlign: 'center',
        top: 7,
        fontSize: 18,
        color: '#1b52df',
    },

    logof: {
        marginBottom: 200,
    },
    logoaferbay: {
        width: 200,
        height: 'auto',
        position: 'relative',
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
        fontFamily: "Inter-Bold"
    },
    downsection: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        borderTopColor: '#F5F5FA',
        borderTopWidth: 1,
        width: 300,
        marginTop: 10,
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
        fontWeight: '400',
        fontSize: 14,
        color: '#1b52df',
        fontFamily: "Inter-Medium"
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        borderRadius: 50,
        marginTop: 8,
        marginBottom: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    signup: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: "Inter-Medium"
    },
    signuptxt: {
        marginTop: 10,
        fontSize: 14,
        color: '#1b52df',
        fontWeight: '400',
        fontFamily: "Inter-Medium"
    }

});

