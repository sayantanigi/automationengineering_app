import React from 'react'
import {  Image, ScrollView, View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import ExpertLayout from '../ExpertLayout';

export default function ExpertsChatDetails() {
    const platform = Platform.OS
    return (
        <ExpertLayout title="Message" isChildren={true}>
                <View style={styles.jobslistcard}>
                    <View style={styles.companytitile}>
                        <View style={styles.serviceacctiveb}>
                            <Image source={require('../../../assets/images/flx1.png')} style={styles.cardxi} />
                            <View style={styles.textsr}>
                                <Text style={styles.headingjobs}>
                                    Arunaksha Sautya
                                </Text>
                            </View>
                            <View style={styles.arumansed}>
                            <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.cricleiconb}>
                                <Ionicons name="call" style={styles.seccaall}/>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.cricleiconb}>
                                <FontAwesome name="video-camera" style={styles.seccaall}/>
                            </View>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
             
            
                    {/* list chat Start */}
                    <ScrollView style={styles.chatingdata} showsVerticalScrollIndicator={false}>
                        <View style={styles.chatlistsection}>
                            <View style={styles.messagedata}>  
                              <View>
                                 <Image source={require('../../../assets/images/freelancers3.jpg')} style={styles.chatimg} />
                                 </View>
                                  <View>
                                    <View style={styles.messagedatatext}>
                                        <Text style={styles.chattextcolorblack}>
                                        Hey, how's it going?
                                        </Text>
                                    </View>
                                    </View>
                               </View>

                               <View style={styles.messagedatarrght}>
                                  <View>
                                    <View style={styles.messagedatatextright}>
                                        <Text style={styles.chattextcolor}>
                                        Hey! I'm doing well, thanks. How about you?
                                        </Text>
                                    </View>
                                    </View>
                                    <View >
                                    <Image source={require('../../../assets/images/freelancers4.jpg')} style={styles.chatimg} />
                                    </View>
                               </View>

                               <View style={styles.messagedata}>
                               <View >
                                 <Image source={require('../../../assets/images/freelancers3.jpg')} style={styles.chatimg} />
                                 </View>
                                  <View>
                                    <View style={styles.messagedatatext}>
                                        <Text style={styles.chattextcolorblack}>
                                        I'm good too, just been busy with work lately. It feels like there's always something to do.
                                        I'm good too, just been busy with work lately. It feels like there's always something to do.
                                        I'm good too, just been busy with work lately. It feels like there's always something to do.
                                     </Text>
                                    </View>
                                    </View>
                               </View>

                               <View style={styles.messagedatarrght}>
                                  <View>
                                    <View style={styles.messagedatatextright}>
                                        <Text style={styles.chattextcolor}>
                                        I can totally relate. Work has been quite demanding for me as well. Sometimes it feels like there aren't enough hours in a day to get everything done.
                                        </Text>
                                    </View>
                                    </View>
                                    <View >
                                    <Image source={require('../../../assets/images/freelancers4.jpg')} style={styles.chatimg} />
                                    </View>
                               </View>
                               <View style={styles.messagedata}>
                               <View>
                                 <Image source={require('../../../assets/images/freelancers3.jpg')} style={styles.chatimg} />
                                 </View>
                                  <View>
                                    <View style={styles.messagedatatext}>
                                        <Text style={styles.chattextcolorblack}>
                                        Absolutely! I've been trying to find some work-life balance, but it's been a challenge. How do you manage to handle it?
                                        </Text>
                                    </View>
                                    </View>
                               </View>
                            </View>
                         
                        </ScrollView>
{/*                    
                        <View style={styles.bgha}>
           <TextInput style={styles.textinput}
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="write your messages ..." />
      </View> */}
                     
                    {/* list chat End */}
              
    
         </ExpertLayout>

    )
}

const styles = StyleSheet.create({
    homesection: {
        backgroundColor: '#F5F5FA',
    },
    headingjobs: {
        fontSize: 14,
        color: '#1B52DF',
        fontWeight: '500',
    },
    chatlistsection:{
        backgroundColor:'#fff',
        marginTop:10,
        paddingBottom:20,
        marginBottom:0,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        // height:'100%'

    },
    chatingdata:{
  height:'100%',
    },
    textinput: {
        backgroundColor: '#fff',
        paddingRight: 20,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingStart: 20,
        width: '90%',
        height: 50,
        borderRadius: 50,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        shadowOffset : { width: 1, height: 13},
        elevation: 4,
    },
    chattextcolor:{
color:'#fff',
lineHeight:20,
    },
    chattextcolorblack:{
        color:'#222',
        lineHeight:20,
    },
    messagedatatext:{
backgroundColor:'#E0E0E0',
borderRadius:20,
borderTopLeftRadius:0,
padding:14,
marginBottom:10,
marginLeft:10,
maxWidth:'100%',
marginRight:25,
},
messagedatatextright:{
    backgroundColor:'#1B52DF',
    borderRadius:20,
    borderTopRightRadius:0,
    padding:14,
    marginBottom:0,
    marginRight:5,
marginLeft:25,

},
    messagedata:{
padding:30,
paddingBottom:0,
justifyContent: 'flex-start',
display: 'flex',
flexDirection: "row",
// flexWrap:'wrap',
    },
    messagedatarrght:{
        padding:30,
        paddingBottom:0,
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: "row",
        // flexWrap:'wrap',s
    },
    cardxi: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    chatimg:{
        width: 40,
        height: 40,
        borderRadius: 50,
        flexBasis:70,
  },
    arumansed:{
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: "row",
        marginRight:190,
    },
    seccaall:{
        color: '#1B52DF', 
        textAlign:'center',
        fontSize:15,
    },
    parajobs: {
        color: '#909090',
        fontSize: 12,
        marginBottom: 4,
    },
    cricleiconb:{
        fontSize: 20, 
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0.1)',
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#f1f1f1',
        shadowOpacity: 0.8,
        elevation: 4,
         position:'relative',
          backgroundColor:'#fff',
           width:32,
           height:32,
            borderRadius:50, 
        marginHorizontal: 25,
          textAlign:'center',
           paddingTop:8,
            marginLeft: 'auto',
             marginRight:10 
    },
    textsr: {
        paddingLeft: 16,
        paddingRight: 20,
        marginRight: 30,
    },
    serviceacctiveb: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 30,
        alignItems: 'center'
    },
    companytitile: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
    },
    jobslistcard: {
        padding: 20,
        paddingBottom: 20,
        borderRadius: 10,
        marginBottom: 0,

    },
});
