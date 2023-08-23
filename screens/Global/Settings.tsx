import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import ExpertLayout from '../Experts/ExpertLayout';

export default function Settings() {
    const platform = Platform.OS
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const Navigation = useNavigation<any>()
    function gotoChangepassword() {
        Navigation.navigate('ChangePassword')
    }
    return (

        <ExpertLayout title="Settings" isChildren={true}>
                <View style={styles.headingnotification}>
                    <Text style={styles.paranotification}>Notifications</Text>
                </View>

                <View  style={styles.notisectioncard}>
                    <View style={styles.cricleiconb}>
                        <MaterialCommunityIcons name="email" style={styles.seccaall}/>
                    </View>
                    <View style={styles.mailsection}>
                        <Text  style={styles.headingnotifi}> Email Notifications</Text>
                        <Text style={styles.pbnotifi}>Job post, job bid & other activates</Text>
                    </View>
                    <View style={styles.fillk}>
                    <Switch  trackColor={{true: '#1B52DF', false: 'grey'}} thumbColor='#fff' value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>
                <View  style={styles.notisectioncard}>
                    <View style={styles.cricleiconb}>
                        <FontAwesome5 name="paper-plane" style={styles.seccaall}/>
                    </View>
                    <View style={styles.mailsection}>
                        <Text  style={styles.headingnotifi}>Push Notifications</Text>
                        <Text style={styles.pbnotifi}>Job post, job bid & other activates</Text>
                    </View>
                    <View style={styles.fillk}>
                    <Switch  trackColor={{true: '#1B52DF', false: 'grey'}} thumbColor='#fff'  value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>
                {/*Security part  */}
                <View style={styles.headingnotification}>
                    <Text style={styles.paranotification}>Security</Text>
                </View>

                <View  style={styles.notisectioncard}>
                    <View style={styles.cricleiconb}>
                        <MaterialIcons name="touch-app" style={styles.seccaall}/>
                    </View>
                    <View style={styles.mailsection}>
                        <Text  style={styles.headingnotifi}>Sign In With Touch ID</Text>
                        <Text style={styles.pbnotifi}>Use touch ID to protect your login</Text>
                    </View>
                    <View style={styles.fillk}>
                    <Switch  trackColor={{true: '#1B52DF', false: 'grey'}} thumbColor='#fff'  value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>
                <TouchableOpacity onPress={gotoChangepassword} activeOpacity={0.9}>
                <View  style={styles.notisectioncard}  >
                    <View style={styles.cricleiconb}>
                        <FontAwesome name="lock" style={styles.seccaall}/>
                    </View>
                    <View style={styles.mailsection}>
                        <Text  style={styles.headingnotifi}>Change Password</Text>
                        <Text style={styles.pbnotifi}>Change your password</Text>
                    </View>
                    <View style={styles.fillk}>
                    <MaterialIcons name="arrow-forward-ios" style={styles.passd}/>
                    </View>
                </View>
                </TouchableOpacity>

                <View style={styles.notisectioncard}>
                    <View style={styles.cricleiconb}>
                        <Ionicons name="location-sharp" style={styles.seccaall}/>
                    </View>
                    <View style={styles.mailsection}>
                        <Text  style={styles.headingnotifi}>Turn Your Location</Text>
                        <Text style={styles.pbnotifi}>Alert for nearby jobs</Text>
                    </View>
                    <View style={styles.fillk}>
                    <Switch  trackColor={{true: '#1B52DF', false: 'grey'}} thumbColor='#fff'  value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>

                <View style={styles.headingnotification}>
                    <Text style={styles.paranotification}>Others</Text>
                </View>

                <View style={styles.notisectioncard}>
                    <View style={styles.cricleiconb}>
                        <FontAwesome name="th-list" style={styles.seccaall}/>
                    </View>
                    <View style={styles.mailsection}>
                        <Text  style={styles.headingnotifi}>UI/UX work scope</Text>
                        <Text style={styles.pbnotifi}>App ui/ux research materials</Text>
                    </View>
                    <View style={styles.fillk}>
                    <MaterialIcons name="arrow-forward-ios" style={styles.passd}/>
                    </View>
                </View>
                <View style={styles.ada}>
                   <Text style={styles.versionssec}>Automation Engineering Services version 1.1.0 </Text> 
                </View>
         </ExpertLayout>
                )
            }
            
   const styles = StyleSheet.create({
   homesection: {
         backgroundColor: '#F5F5FA',
         height:'100%',
       
       }, 
       headingnotification:{
        padding:20,
        paddingBottom:0,
       },
       ada:{
paddingTop:30,
marginBottom:Platform.OS === 'android' ? 20 :  30,
       },
       versionssec:{
        textAlign:'center',
        color:'#909090',
      },
       headingnotifi:{
        fontWeight:'400',
        fontSize:15,
       },
     
       fillk:{
        position:'absolute',
        right:0,
        marginRight:10,
       },
    
       pbnotifi:{
        color:'#909090',
        fontSize:10,
       },
       mailsection:{
// width:'75%',
       },
       notisectioncard:{
        display: 'flex',
        flexDirection: 'row',
       justifyContent:'flex-start',
      margin:20,
     marginBottom:0,
     paddingBottom:20,
     borderBottomColor:'#ddd',
     borderBottomWidth:1,
       },
       paranotification:{
        color:'#1B52DF',
        fontSize:16,
        fontWeight:'bold',
       },
       seccaall:{
        color: '#1B52DF', 
        textAlign:'center',
        fontSize:16,
    },

    passd:{
        color: '#1B52DF', 
        textAlign:'center',
        fontSize:16,
        paddingTop:10,
    },
    cricleiconb:{
        fontSize: 20, 
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
          backgroundColor:'#fff',
           width:35,
           height:35,
            borderRadius:10, 
          textAlign:'center',
           paddingTop:8,
             marginRight:10 
    },
 });
