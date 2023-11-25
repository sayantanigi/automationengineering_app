import React from 'react'
import { SafeAreaView, ImageBackground, Image, ScrollView, View, Text, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../../assets/images/changepassword.png"
import ExpertLayout from '../ExpertLayout';
import TouchableRipple from "../../../components/TouchableRipple";
import RNLinearGradient from '../../../components/RNLinearGradient';
import TextInput from "../../../components/TextInput";

export default function ChangePassword() {
  const platform = Platform.OS
  return (

    <ExpertLayout MessageTextBarHidden title="Change Password" isChildren={true} disable={false}>
        <View style={styles.bgimgsection}>
          <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
            <Text style={styles.productheading}>Change Password</Text>
            <View style={styles.overlay} />
          </ImageBackground>
        </View>

        <View style={styles.addfulsection}>
          <View style={styles.pgfull}>
            <Text style={styles.titileop}>Current Password *</Text>
            <TextInput 
              placeholder="Enter your current password"
            />
          </View>
          <View style={styles.pgfull}>
            <Text style={styles.titileop}>New Password *</Text>
            <TextInput
              placeholder="Enter your new password"
            />
          </View>
          <View style={styles.pgfull}>
            <Text style={styles.titileop}>Repeat Password *</Text>
            <TextInput 
            
              placeholder="Enter your repeat password"
            />
          </View>
         
        
              <TouchableRipple style={styles.rthta}>
                 <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                     <Text style={styles.buttontext} >Submit</Text>
                </RNLinearGradient>
                </TouchableRipple>
         
        </View>
</ExpertLayout>

   
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
  rthta:{
width:'50%',
marginLeft:'auto',
marginRight:'auto',
  },
  camerabg: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 50,
    left: 200,
    marginTop: 8,
    borderWidth:1,
    // borderColor:'#ebebeb',
    borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
    shadowOpacity: 1,
    elevation: 10,
  },
  linearGradient: {
    color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        marginLeft:'auto',
        marginRight:'auto',
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
    borderWidth:1,
    // borderColor:'#ebebeb',
    borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
  },
  pgfull: {
    width:'90%',
    marginBottom:12,
    marginLeft:14,
  },
  addfulsection: {
    backgroundColor: '#F5F5FA',
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin: 0,
    padding: 0,
    paddingTop:30,
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
    fontFamily: "Inter-Medium",
  },
  profilepro: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

});
