import { Text, Image, View, TouchableOpacity, Platform, ImageBackground, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { colorPrimary, colorPrimarySecond } from "../../constants/color";

import { AntDesign,  } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import BusinessLayout from './BusinessLayout';
import { TouchableRipple } from 'react-native-paper';
import RNLinearGradient from '../../components/RNLinearGradient';

export default function BusinessProfile() {
    const Navigation = useNavigation<any>()
    function gotoEditProfile() {
        Navigation.navigate('BusinessEditProfile')
    }
    function gotoExpertDetails() {
        Navigation.navigate('ExpertDetails')
    }
    
    const platform = Platform.OS
    return (
        <BusinessLayout title="List Of Experts" isChildren={true}>
          <View style={styles.jobslistcard}>
                <View style={styles.scrollViewavaliv}>
                    <View style={styles.companydetail}>
                        <View>
                        <Text style={styles.titlevc}  numberOfLines={1}>Arunaksha Sautya </Text>
                        <Text style={styles.textb} numberOfLines={1}>Kolkata, West Bengal, India </Text>
                        </View>
                        <View style={styles.companydetailimg}>
                            <Image source={require('../../assets/images/freelancers3.jpg')} style={styles.companywd} />
                        </View>
                    </View>
                    <Text style={styles.dec}>Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip
                        Suspendisse molestie diam posuere, pharetra dolor nec, die
                        dapibus orci. Aliquam turpis mauris, accumsan metus non,
                        laoreet commodo diam.</Text>

                    <View style={{ marginTop: 12, flexDirection: "row", gap: 7, justifyContent: "space-between",  }}>
                        <Pressable style={{ width: '48%' }} onPress={gotoExpertDetails}>
                        <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']}>
                            <Text style={styles.buttontext} >View Profile</Text>
                        </RNLinearGradient>
                        </Pressable>
                          <Pressable style={{ width: '48%' }}>
                            <ImageBackground
                            style={styles.buttonLight}
                            resizeMode="stretch"
                            source={require("../../assets/shadows/button.png")}>
                            <Text style={styles.textPrimary}>Post Job 2</Text>
                          </ImageBackground>
                          </Pressable>
                       </View>
                </View>

                <View style={styles.scrollViewavaliv}>
                    <View style={styles.companydetail}>
                       <View>
                        <Text style={styles.titlevc}  numberOfLines={1}>Arunaksha Sautya</Text>
                        <Text style={styles.textb} numberOfLines={1}>Kolkata, West Bengal, India</Text>
                        </View>
                        <View style={styles.companydetailimg}>
                            <Image source={require('../../assets/images/freelancers3.jpg')} style={styles.companywd} />
                        </View>
                    </View>
                    <Text style={styles.dec}>Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip
                        Suspendisse molestie diam posuere, pharetra dolor nec, die
                        dapibus orci. Aliquam turpis mauris, accumsan metus non,
                        laoreet commodo diam.</Text>
                        <View style={{ marginTop: 12, flexDirection: "row", gap: 7, justifyContent: "space-between" }}>
                        <Pressable style={{ width: '48%' }} >
                        <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']}>
                            <Text style={styles.buttontext} onPress={gotoExpertDetails}>View Profile</Text>
                        </RNLinearGradient>
                        </Pressable>
                          <Pressable style={{ width: '48%' }}>
                            <ImageBackground
                            style={styles.buttonLight}
                            resizeMode="stretch"
                            source={require("../../assets/shadows/button.png")}>
                            <Text style={styles.textPrimary}>Post Job 2</Text>
                          </ImageBackground>
                          </Pressable>
                       </View>
                </View>

                <View style={styles.scrollViewavaliv}>
                    <View style={styles.companydetail}>
                    <View>
                        <Text style={styles.titlevc} numberOfLines={1}>Arunaksha Sautya</Text>
                        <Text style={styles.textb} numberOfLines={1}>Kolkata, West Bengal, India</Text>
                        </View>
                        <View style={styles.companydetailimg}>
                            <Image source={require('../../assets/images/freelancers3.jpg')} style={styles.companywd} />
                        </View>
                    </View>
                    <Text style={styles.dec}>Lorem ipsum dolor sit amet, consectetur adipiscin elit. turip
                        Suspendisse molestie diam posuere, pharetra dolor nec, die
                        dapibus orci. Aliquam turpis mauris, accumsan metus non,
                        laoreet commodo diam.</Text>
                       
                        <View style={{ marginTop: 12, flexDirection: "row", gap: 7, justifyContent: "space-between" }}>
                        <Pressable style={{ width: '48%' }}>
                        <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']}>
                            <Text style={styles.buttontext} onPress={gotoExpertDetails}>View Profile</Text>
                        </RNLinearGradient>
                        </Pressable>
                          <Pressable style={{ width: '48%' }}>
                            <ImageBackground
                            style={styles.buttonLight}
                            resizeMode="stretch"
                            source={require("../../assets/shadows/button.png")}>
                            <Text style={styles.textPrimary}>Post Job 2</Text>
                          </ImageBackground>
                          </Pressable>
                       </View>

                </View>
              </View>
        </BusinessLayout>

)
}

const styles = StyleSheet.create({
    scrollViewavaliv: {
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        marginBottom: 14,
        backgroundColor: '#fff',
        marginRight: 5,
        paddingBottom: 0,
        padding: 20,
        paddingRight: 20,
        borderRadius: 10,
    },
    textPrimary: {
        color: colorPrimary,
        fontFamily: "Inter-Bold"
    },
    buttonLight: {
        width: '100%',
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        marginTop:8,
    },
    linearGradientfilter:{
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

    fixedjobbtn:{
        position:'absolute',
        bottom:30,
        right:0,
        marginRight:30,
    },
    homesection: {
        backgroundColor: '#F5F5FA',
        height:'100%',
      }, 
    jobpostbtn: {
        color: 'hsl(222, 83%, 32%)',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },
    companywd: {
        width: 70,
        borderRadius: 50,
        height: 70,
    },
    jobslistcard: {
        padding: 20,
        paddingBottom: 0,
        borderRadius: 10,
        marginBottom: 0,

    },
  
    btnview: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: 120,
        borderRadius: 50,
        marginTop: 8,
        marginBottom: 20,
        height: 42,
        justifyContent: "center",
        alignItems: "center"
    },
    viewprofile: {
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: "row",
    },
    dec: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        color: '000000',
        fontFamily: "Inter-Medium",
    },
    companydetail: {
        marginLeft: 0,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // alignItems:'stretch',
    },
    companydetailimg: {
        marginTop: 0,
        marginBottom: 12,
    },
    titlevc: {
        fontWeight: 'bold',
        color: 'hsl(222, 83%, 32%)',
        fontSize: 16,
        marginBottom: 6,
        // width:100,
        fontFamily: "Inter-Medium",
        whiteSpace: 'pre-line',
        
    },
    textb: {
        color: '#909090',
        fontSize: 10,
        marginBottom: 6,
        width:150,
        fontFamily: "Inter-Medium",
    },
    // modal css
    submarinsection:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 22,
        textAlign: 'left',
    },
    modalView: {
        width: '100%',
        height: '85%',
        position: 'absolute',
        bottom: -6,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        textAlign: 'left',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
    },
    modalheader: {
        textAlign: 'left',
    },
    modalfilter: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    searchbarmessagelist: {
        marginTop: 20,
        marginBottom:0,
        width:'100%',
    },

    filterva:{
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
          paddingBottom:14,
      },
      catgh:{
        width:'50%',
    },
    linearGradientfiltermodal:{
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowRadius: 50,
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        marginBottom:5,
    position:'relative',
    bottom:10,
    },
    widtg:{
        width:'38%',
            },
            linearGradientapply:{
                color: '#ffffff',
                textAlign: 'center',
                fontWeight: "500",
                width: '80%',
                padding: 14,
                borderRadius: 50,
                marginBottom: 20,
                shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
                shadowOpacity: 1,
                elevation: 10,
            },
          
            buttontext: {
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 14,
            },
            freelbtn: {
                shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
                shadowOpacity: 0.8,
                elevation: 4,
                backgroundColor : '#fff',
                shadowRadius: 50 ,
                marginLeft:14,
              
                marginBottom:0,
              
                width: '80%',
                fontSize:12,
                padding: 14,
                borderRadius: 50,
            },
            freelbtntext:{
                textAlign:'center',
                color: '#C5C5C5',
                fontWeight: '500',
            },
            pgfull:{
                width:'100%',
                marginBottom:30,
               },
            allbtnsedc:{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                position:'absolute',
                bottom:0,
                borderTopWidth:1,
                paddingTop:20,
                borderTopColor:'#f1f1f1',
            },
            checkboxtext:{
                fontSize:12,
                marginTop:6,
                    },
                    checkboxContainer: {
                        flexDirection: 'row',
                        marginBottom: 10,
                      },
                      selkl:{
                        marginLeft:-20,
                            },
                            catagprylistbtn:{
                                borderWidth:1,
                                borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
                                shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
                                shadowOpacity: 0.8,
                                elevation: 4,
                                backgroundColor : '#fff',
                                shadowRadius: 10,
                                textAlign:'center',
                                marginBottom:14,
                                color: '#C5C5C5',
                                fontWeight: '500',
                                width: '80%',
                                fontSize:12,
                                padding: 14,
                                borderRadius: 10,
                            },
                            catagprylistbtnactive:{
                                borderWidth:1,
                                borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
                                shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
                                shadowOpacity: 0.8,
                                elevation: 4,
                                backgroundColor : '#fff',
                                shadowRadius: 10,
                                textAlign:'center',
                                marginBottom:14,
                                color: '#FE7E00',
                                fontWeight: '500',
                                width: '80%',
                                fontSize:12,
                                padding: 14,
                                borderRadius: 10,
                            },
                            opklad:{
                                height:Platform.OS === 'android' ? 260 :  220,
                            },
                            textinput: {
                                marginTop: 10,
                                backgroundColor: '#fff',
                                // marginLeft: 20,
                                // marginRight: 20,
                                paddingStart: 5,
                                width: '100%',
                                height: 50,
                                borderRadius: 50,
                                paddingLeft:20,
                                paddingRight:10,
                                fontSize:15,
                                borderWidth:1,
                                borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
                                shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
                                shadowOpacity: 0.8,
                                elevation: 4,
                               
                            },
                            cricleiconb:{
                                fontSize: 20, 
                                 position:'relative',
                                  backgroundColor:'#fff',
                                   width:32,
                                   height:32,
                                    borderRadius:50, 
                                   zIndex:9,
                                    color: '#D6D6D6', 
                                marginHorizontal: 25,
                                 marginTop: -42,
                                  textAlign:'center',
                                   paddingTop:4,
                                    marginLeft: 'auto',
                                     marginRight:15 
                            },
});