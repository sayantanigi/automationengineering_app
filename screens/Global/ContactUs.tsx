import React from 'react'
import { SafeAreaView, ImageBackground, Image,ScrollView, View, Text, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../assets/images/contact1.png"
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import ExpertLayout from '../Experts/ExpertLayout';
import TouchableRipple from "../../components/TouchableRipple";
import RNLinearGradient from '../../components/RNLinearGradient';
import TextInput from "../../components/TextInput";
import Textarea from '../../components/Textarea';

export default function ContactUs() {
  const platform = Platform.OS
  return (
    <ExpertLayout title="Contact Us" isChildren={true}>
                <View style={styles.bgimgsection}>
                 <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                 <Text style={styles.productheading}>CONTACT US</Text>
                 <View style={styles.overlay} />
                  </ImageBackground> 
                  </View>
                  
                    <View style={styles.addfulsection}>

                      <View  style={styles.pgfull}>
                        <Text style={styles.titileop}>Full Name *</Text>
                        <TextInput
                            placeholder="Enter Full Name"
                        />
                      </View>


                      <View  style={styles.pgfull}>
                        <Text style={styles.titileop}>Email</Text>
                        <TextInput
                            placeholder="Enter Email"
                        />
                      </View>
                      <View  style={styles.pgfull}>
                        <Text style={styles.titileop}>Subject</Text>
                        <TextInput
                            placeholder="Enter Subject"
                        />
                      </View>
                      <View  style={styles.pgfull}>
                        <Text style={styles.titileop}>Message</Text>
                        <Textarea
                            placeholder="Enter Message"
                        />
                      </View>

                      <View style={styles.submfga}>
                      <TouchableRipple>
                        <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                            <Text style={styles.buttontext} >Submit</Text>
                        </RNLinearGradient>
                    </TouchableRipple>
                      </View>
                      
                      <View style={styles.marfg}>
                      <View style={styles.listlocation}>
                      <View style={styles.kllocation}>
                      <Ionicons name="location-sharp"  size={22} color={'#1B52DF'} />
                      </View>
                      <View style={styles.locside}>
                      <Text style={styles.locdheading}>Location</Text>
                      <Text  style={styles.locpat}  numberOfLines={2}>208 Rue Saint Barts Youngsville, LA 705920 </Text>
                      </View>
                      </View>


                      <View style={styles.listlocation}>
                      <View style={styles.kllocation}>
                      <MaterialIcons name="call" size={22} color={'#1B52DF'}  />
                      </View>
                      <View style={styles.locside}>
                      <Text style={styles.locdheading}>Phone</Text>
                      <Text style={styles.locpat}  numberOfLines={2}>+91 9856-456-859 </Text>
                      </View>
                      </View>

                      <View style={styles.listlocation}>
                      <View style={styles.kllocation}>
                       <MaterialCommunityIcons name="email" size={22} color={'#1B52DF'} />
                      </View>
                      <View style={styles.locside}>
                      <Text style={styles.locdheading}>Email</Text>
                      <Text style={styles.locpat}  numberOfLines={2}>automationengineeringservices.com</Text>
                      </View>
                      </View>
                      </View>
                      </View>
         </ExpertLayout>
  )
}

const styles = StyleSheet.create({
  imagex: {
    height:230,
    width:'100%',
},
overlay: {
  ...StyleSheet.absoluteFillObject,
  height: "100%",
  width: "100%",
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
marfg:{
marginBottom:60,
},
locpat:{
width:200,
color:'#909090',
fontSize:13,
lineHeight:18,
},
locside:{
paddingLeft:14,
paddingTop:10,
},
locdheading:{
fontWeight:'bold',
fontSize:14,
marginBottom:4,
},
listlocation:{
  borderWidth:1,
  // borderColor:'#ebebeb',
  borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
  shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
    backgroundColor : '#fff',
    marginTop: 18,
    marginBottom:0,
    color: '#1B52DF',
    textAlign: 'center',
    padding: 14,
    borderRadius: 10,
    margin:20,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: "row",
    textTransform:'uppercase',
},
kllocation:{
    width:60,
    height:60,
    borderWidth:1,
    // borderColor:'#ebebeb',
    borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor : '#fff',
},
camerabg:{
  color: '#fff',
  textAlign: 'center',
  fontWeight: "bold",
  width: 40,
  height:40,
  position:'absolute',
  bottom:20,
  paddingTop:10,
  paddingLeft:10,
  borderRadius: 50,
  left:200,
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
        borderRadius: 50,
        marginTop: 8,
        marginBottom: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center"

},
submfga:{
marginLeft:20,
marginRight:20,
},
buttontext: {
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 16,
},
titileop:{
paddingLeft:4,
fontWeight:'bold',
},
homesection: {
  backgroundColor: '#F5F5FA',
  height:'100%',
}, 
bgimgsection:{
marginBottom:10,
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
  paddingLeft:20,
  paddingRight:20,
  shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
  borderWidth:1,
  borderColor:Platform.OS === 'android' ? '#fff' :  '#f1f1f1',
  shadowOpacity: 0.8,
  elevation: 4,
},
textinputarea:{
  marginTop: 10,
  backgroundColor: '#fff',
  marginLeft: 20,
  marginRight: 20,
  paddingStart: 5,
  width: '90%',
  paddingTop:14,
  height: 100,
  borderRadius: 20,
  paddingLeft:20,
  paddingRight:20,
  textAlignVertical: 'top',
  shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
  borderWidth:1,
  borderColor:Platform.OS === 'android' ? '#fff' :  '#f1f1f1',
  shadowOpacity: 0.8,
  elevation: 4,
},
pgfull:{
  width:'85%',
  marginBottom:12,
  marginLeft:20,
 },
 addfulsection:{
  backgroundColor: '#F5F5FA',
  marginTop:-40,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  margin:0,
  padding:0,
  paddingTop:30,
 },
productdwn:{
padding:22,
justifyContent: 'center',
display: 'flex',
flexDirection: "row",
},
productheading: {
 textAlign:'center',
 fontWeight:'700',
 fontSize:25,
 color:'#fff',
 paddingTop:120,
 position:'relative',
 zIndex:1,
},
profilepro:{
width:100,
height:100,
borderRadius:50
},

});
