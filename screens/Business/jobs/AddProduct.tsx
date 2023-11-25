import React from 'react'
import { SafeAreaView, ImageBackground, Image, ScrollView, View, Text, Platform } from 'react-native'

import { StyleSheet } from 'react-native';
import Background from "../../../assets/images/about.png"
import RNLinearGradient from '../../../components/RNLinearGradient';
import BusinessLayout from '../BusinessLayout';
import { Feather } from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';
import TextInput from "../../../components/TextInput";
import Textarea from '../../../components/Textarea';

export default function BusinessAbout() {
  return (

    <BusinessLayout title="Add Product" isChildren={true}>
     <SafeAreaView style={styles.homesection}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bgimgsection}>
          <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
            <Text style={styles.productheading}>ADD PRODUCT</Text>
            <View style={styles.overlay} />
          </ImageBackground>
        </View>

        <View style={styles.addfulsection}>
          <View style={styles.productdwn}>
            <Image source={require('../../../assets/images/freelancers2.jpg')} style={styles.profilepro} />
            {/* <LinearGradient style={styles.camerabg} colors={['#0E3795', '#5A85F3']}>
              <Feather name="camera" size={18} color="#fff" />
            </LinearGradient> */}

         <View >
           <RNLinearGradient direction="column"  style={styles.camerabg}
             colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
            <Feather name="camera" size={18} color="#fff" style={styles.cameraicon}/>
           </RNLinearGradient>
           </View>
          </View>
          <View style={styles.pgfull}>
            <Text style={styles.titileop}>Product Names *</Text>
            <TextInput
              placeholder="Enter your product name"
            />
          </View>
          <View style={styles.pgfull}>
            <Text style={styles.titileop}>Product Description</Text>
            <Textarea
              placeholder="Enter your product name"
            />
          </View>
          <View style={styles.submfga}>
          <TouchableRipple style={styles.wdtg}>
                        <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                            <Text style={styles.buttontext} >Submit</Text>
                        </RNLinearGradient>
            </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </BusinessLayout>
              
  )
}
const styles = StyleSheet.create({
    imagex: {
      height: 230,
      width: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  
    },
    wdtg: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cameraicon:{
textAlign:'center',
paddingTop:10,
    },

    camerabg: {
      color: '#ffffff',
      width: 40,
      height: 40,
      position: 'absolute',
      bottom: 10,
      textAlign:'center',
      borderRadius:50,
    //   paddingTop:10,
      left: -30,
    //   shadowColor: '#5A85F3',
    //   shadowOpacity: 1,
    //   elevation: 10,
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
    submfga: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: "row",
      marginBottom: 60,
    },
    buttontext: {
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
    titileop: {
      paddingLeft: 6,
      fontWeight: 'bold',
    },
    homesection: {
      backgroundColor: '#F5F5FA',
    },
    bgimgsection: {
      marginBottom: 10,
    },
    textinput: {
      marginTop: 10,
      backgroundColor: '#fff',
      marginLeft: 20,
      marginRight: 20,
      paddingStart: 5,
      width: '90%',
      height: 50,
      borderRadius: 50,
      paddingLeft: 20,
      paddingRight: 20,
         // textAlignVertical: 'top',
         borderWidth:1,
         // borderColor:'#ebebeb',
         borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
         shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
      shadowOpacity: 0.8,
      elevation: 4,
    },
    textinputarea: {
      marginTop: 10,
      backgroundColor: '#fff',
      marginLeft: 20,
      marginRight: 20,
      paddingStart: 5,
      width: '90%',
      paddingTop: 14,
      height: 100,
      borderRadius: 20,
      paddingLeft: 20,
      paddingRight: 20,
      textAlignVertical: 'top',
          // textAlignVertical: 'top',
          borderWidth:1,
          // borderColor:'#ebebeb',
          borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
          shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
      shadowOpacity: 0.8,
      elevation: 4,
    },
    pgfull: {
      width: '90%',
      marginBottom: 20,
      marginLeft:20,
    },
    addfulsection: {
      backgroundColor: '#F5F5FA',
      marginTop: -40,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      margin: 0,
      padding: 0,
    },
    productdwn: {
      padding: 22,
      justifyContent: 'center',
      display: 'flex',
      flexDirection: "row",
    },
    productheading: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 25,
      color: '#fff',
      paddingTop: 120,
      position: 'relative',
      zIndex: 1,
    },
    profilepro: {
      width: 100,
      height: 100,
      borderRadius: 50
    },
  
  });
  