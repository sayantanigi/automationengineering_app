import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Platform, ScrollView, Modal, Pressable, ListRenderItemInfo, FlatList } from 'react-native';
import { AntDesign, EvilIcons, FontAwesome, Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import RNLinearGradient from "../../components/RNLinearGradient";
import TouchableRipple from "../../components/TouchableRipple";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInput from "../../components/TextInput";
import { SearchbarEditable } from "../../components/SearchBar";
import { BASE_URL, autoCompleteUrl, autocompleteDetails, googleApiKey } from "../../Network/URL";
import AutoComplete from "../../components/AutoComplete";

import { colorPrimary } from "../../constants/color";
import ProgressBar from "../../components/ProgressBar";
import SnackBar from "../../components/SnackBar";
interface userValue {
    user_type: number
    first_name: string
    last_name: string
    email: string
    location: string
    longitude: string
    latitude: string
    password: string
    company_name: string
   
}
export interface Coords {
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
}
interface option {
    value: string,
    label: string,
}
interface Location {
    formatted_address: string
}
export default function BusinessRegister() {
    const [currentAddress, setCurrentaddress] = useState(null);
    const [height, setheight] = useState<number | string>("auto")
    const [alert, setAlert] = useState("")
    const [loading, setLoading] = useState(false)
    const [passwordShow, setPasswordshow] = useState(false);
    const [placeid, setPlaceId] = useState(null);
    const [isSearchOpen, setisSearchOpen] = useState(false)
    
    const [location, setLocation] = useState<Location[]>([])
    const Navigation = useNavigation<any>()
    const [selected, setSelected] = useState<option | null>(null)
    const [formData, setFormData] = useState<userValue>({
        "user_type": 2,
        "first_name": "",
        "last_name": "",
        "email": "",
        "location": "",
        "longitude": "",
        "latitude": "",
        "password": "",
        "company_name": ""
       
        
       
    })
    
    function handleValueChange(value: string, key: string) {
        setFormData({ ...formData, [key]: value })
    }

    async function gotoLogin() {

       
        if (formData.email.length === 0) {
            setAlert("Enter valid email")
        }
        else if (formData.password.length === 0) {
            setAlert("Enter valid password")
        }
        if (formData.first_name.length === 0) {
            setAlert("Enter First name")
        }
        if (formData.last_name.length === 0) {
            setAlert("Enter last name")
        }
        
        else {
            setLoading(true)
            let response = await fetch(BASE_URL + "registration", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            let json = await response.json()
            setLoading(false)



            if (json.status === "success") {

                Navigation.navigate('LoginScreen')
                // await setUser({userType: json.result.user_type, userId: json.result.userId, firstname: json.result.firstname, lastname: json.result.lastname,email: json.result.email,profilePic: json.result.profilePic})

            }

        }



    }

    function handleSearch() {
        setisSearchOpen(true)
    }
    async function handleLocationSearch(text: string) {


        let url = `${autoCompleteUrl}?input="${text.trim()}"&key=${googleApiKey}`
        let response = await fetch(url)
        let json = await response.json()
        setLocation(json.predictions)
       // console.log(json)

    }
    function createLocationOptions(location: any[]) {
        let resArray = []
        for (let i = 0; i < location.length; i++) {
           // console.log(location[i])
            resArray.push({ value: String(i), label: location[i].description, label1: location[i].place_id})
        }

        // console.log(resArray)
        return resArray
    }
    async function handleSelectLocation(data:any) {

        
       

             
            let response = await fetch(`${autocompleteDetails}?placeid=${data}&key=${googleApiKey}`)
            let payload = await response.json()
            
            let { lat, lng } = payload.result.geometry.location;

            setFormData({
                ...formData,
                 longitude: String(payload.result.geometry.location.lng),
                 latitude:  String(payload.result.geometry.location.lat),
                 location: String(payload.result.formatted_address),

            })

            
            // SetLocationDetails({ latitude: lat, longitude: lng, address })
        

    }

    function AutoCompleteLayout({ item }: ListRenderItemInfo<{
         label: number; value: string ,label1:number
}>) {
        return (
            <TouchableRipple
                onPress={() => {
                    console.log(item.label)
                   // setPlaceId:String(item.label1)
                      setFormData({
                        ...formData,
                       location: String(item.label)

                    })
                    handleSelectLocation(String(item.label1))
                    setisSearchOpen(false)
                }}
                ripple_color={'rgba(0,0,0,0.2)'}
                style={styles.listItem}>
                <Text style={styles.listTitle}>{item.label}</Text>

            </TouchableRipple>
        )
    }
    return (
        <SafeAreaView style={styles.cardpages}>

            <StatusBar style={"auto"} backgroundColor="#f5f5fa" />
            <ScrollView style={styles.scxrkl}>
             <View style={styles.becnmtext}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logocardd} />
                </View>
                <Text style={styles.welcometext}>Become an Expert</Text>
                <View style={styles.pgfull}>
                    <TextInput

                        placeholder="First Name"
                        onChangeText={(text) => handleValueChange(text, "first_name")}
                    />

                    <View style={styles.cricleiconb} >
                        <AntDesign name="user" style={styles.cricleitext} />
                    </View>
                </View>
                <View style={styles.pgfull}>
                    <TextInput
                        onChangeText={(text) => handleValueChange(text, "last_name")}
                        placeholder="Last Name"
                    />

                    <View style={styles.cricleiconb} >
                        <AntDesign name="user" style={styles.cricleitext} />
                    </View>
                </View>
                <View style={styles.pgfull}>
                    <TextInput
                        onChangeText={(text) => handleValueChange(text, "email")}
                        placeholder="Email Address"
                    />
                    <View style={styles.cricleiconb} >
                        <AntDesign name="mail" style={styles.cricleitext} />
                    </View>

                </View>
                <Pressable
                    onPress={handleSearch} style={styles.pgfull}>
                    <TextInput
                        editable={false}
                        placeholder="Legal Address"
                        value={formData.location.slice(0, 40)}
                        onChangeText={(text) => handleValueChange(text, "location")}/>

                    <View style={styles.cricleiconb} >
                        <EvilIcons name="location" style={styles.cricleitext} />
                    </View>
                </Pressable>
                <View style={styles.pgfull}>
                    <TextInput
                        onChangeText={(text) => handleValueChange(text, "password")}
                        placeholder="Password"
                        secureTextEntry={!passwordShow}
                    />
                    <View style={styles.cricleiconb} >
                        <FontAwesome
                            pointerEvents="none"
                            onPress={function () { setPasswordshow(!passwordShow) }}
                            name={passwordShow ? "eye-slash" : "eye"}
                            style={styles.cricleitext}
                        ></FontAwesome>
                    </View>
                </View>
                <View style={styles.pgfull}>
                    <TextInput
                    
                    //onChangeText={(text) => handleValueChange(text, "conpassword")}
                        placeholder="Confirm Password"
                        secureTextEntry={!passwordShow}
                    />

                    <View style={styles.cricleiconb} >
                        <FontAwesome
                            pointerEvents="none"
                            onPress={function () { setPasswordshow(!passwordShow) }}
                            name={passwordShow ? "eye-slash" : "eye"}
                            style={styles.cricleitext}
                        ></FontAwesome>
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
            <Modal
                animationType='slide'
                onRequestClose={() => setisSearchOpen(false)}
                visible={isSearchOpen}>
                <View style={styles.searchPopup} >

                    <SearchbarEditable
                        onBackButtonPress={() => setisSearchOpen(false)}
                        onChangeText={handleLocationSearch}
                        label={currentAddress as any}
                    // onSelect={handleSelectLocation}
                    />

                    <FlatList
                        style={{ flex: 1 }}
                        data={createLocationOptions(location)}
                        keyExtractor={item => item.value}
                        renderItem={AutoCompleteLayout}
                        
                    />



                </View>
            </Modal>

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
    logocardd: {
        width: 210,
        height: 60,
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
        width: '90%',
        marginBottom: 14,
        marginLeft: 16,
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
        marginBottom: 5,
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
    },
    searchWrapper: {
        padding: 8,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    searchPopup: {
        padding: 8,
        flex: 1
    },
    locationWrap: {
        flex: 1,
        backgroundColor: '#f5f5fa',
        padding: 12
    },
    locationInput: {
        flexDirection: "row",
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: colorPrimary,
        borderRadius: 5,
        alignItems: "center",
        paddingHorizontal: 6,
        backgroundColor: "hsla(25.21,97.33%,55.88%,0.08)",
        fontFamily: "Inter-Medium",
        marginBottom: 10
    },
    listItem: {
        width: '100%',
        padding: 4,
        paddingVertical: 10
    },
    listTitle: {
        fontSize: 13,
        fontFamily: "Inter-Bold",
        marginBottom: 4
    }

});

