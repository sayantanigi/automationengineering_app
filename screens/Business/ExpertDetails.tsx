import { Text, Image, View, TouchableOpacity, Platform } from 'react-native'
import { Ionicons,FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { AntDesign,  } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import BusinessLayout from './BusinessLayout';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import RNLinearGradient from '../../components/RNLinearGradient';
import TextInput from "../../components/TextInput";
import { TouchableRipple } from 'react-native-paper';
export default function ExpertDetails() {
    const Navigation = useNavigation<any>()
    function gotoEditProfile() {
        Navigation.navigate('BusinessEditProfile')
    }
    const platform = Platform.OS
    return (
        <BusinessLayout title='Expert Details' isChildren={true}>
           
            <View>
            <View style={styles.productdwn}>
                 <Image source={require('../../assets/images/freelancers3.jpg')} style={styles.profilepro} />
             </View>
             <View>
                <Text style={styles.namecompany}>
                Arunaksha Sautya
                </Text>
             </View>
            <View style={styles.listinfo}>
             <Ionicons name="location"  style={styles.icmsection}/>
             <Text style={styles.listlcv}>
             Kolkata, West Bengal, India
            </Text>
           </View>
           <View style={styles.listinfo}>
             <Text style={styles.listlcv}>
             Member Since, 2023
            </Text>
           </View>
         
        </View>

    
    <View style={styles.marginfl} >
     <View style={styles.pdsection} >
        <View style={styles.aboutbusn} >
            <Text style={styles.aboutheadingpf}>About This Freelancer</Text>
            <Text style={styles.aboutparapf}>
            I have almost seven years of expertise as an UI/UX
            Designer. I've worked on projects with customers from
            all over the world, and I've earned a reputation for my
            attention to detail, ability to fulfil deadlines, and
            client-oriented approach.
              </Text>
            </View>
        </View>

{/* Jobs from Business Network start */}
      
{/* Jobs from Business Network end */}


{/* Education start */}
        <View style={styles.pdsection} >
            <Text style={styles.aboutheadingpf}>Education</Text>
            <View style={styles.jobsnetwork} >
                <Text style={styles.jobsnetworkheading} >Bachelor of Computer Application</Text>
               <View style={styles.sublistinfo}>
                <FontAwesome name="graduation-cap"  style={styles.icmsection}/>
                <Text style={styles.listlcv}>
                Amridge University
                </Text>
           </View>
           <View style={styles.sublistinfo}>
                <MaterialIcons name="date-range"  style={styles.icmsection}/>
                <Text style={styles.listlcv}>
                01 Jan 2018 - Jun 2023 
                </Text>
           </View>
           <View style={styles.sublistinfo}>
                <Ionicons name="document-text-sharp"  style={styles.icmsection}/>
                <Text style={styles.listlcvdoc}>
                My career started after graduating with a   ...
                </Text>
           </View>
            </View>
        </View>
{/* Education end */}


{/* Work & Experience start */}
<View style={styles.pdsection} >
            <Text style={styles.aboutheadingpf}>Work & Experience</Text>
            <View style={styles.jobsnetwork} >
                <Text style={styles.jobsnetworkheading} >UI/UX Developer</Text>
               <View style={styles.sublistinfo}>
                <FontAwesome name="graduation-cap"  style={styles.icmsection}/>
                <Text style={styles.listlcv}> IBM</Text>
           </View>
           <View style={styles.sublistinfo}>
                <MaterialIcons name="date-range"  style={styles.icmsection}/>
                <Text style={styles.listlcv}>01 Jan 2018 - Jun 2023 </Text>
           </View>
           <View style={styles.sublistinfo}>
                <Ionicons name="document-text-sharp"  style={styles.icmsection}/>
                <Text style={styles.listlcvdoc}>
                I joined the company as employee #1 and have designed most of the branding ...
                </Text>
           </View>
            </View>
        </View>
                   {/* <Text style={styles.listlcv}><Text style={styles.listinfosub}>10</Text> days ago</Text> */}

{/* Work & Experience end */}

{/* Professional skills start */}
<View style={styles.pdsection} >
        <View style={styles.aboutbusn} >
            <Text style={styles.aboutheadingpf}>Professional skills</Text>
            <Text style={styles.aboutparapf}>
                 User Interface Design, Wireframing, UI Prototyping, Information Architecture, User Research, Mockup, Agile, Collaboration
            </Text>
            </View>
        </View>
{/* Professional skills end */}

{/* Professional skills start */}
<View style={styles.pdsection} >
        <View style={styles.aboutbusn} >
            <Text style={styles.aboutheadingpf}>Candidate overview</Text>
            <View style={styles.sublistinfo}>
                <FontAwesome name="transgender"  style={styles.icmsection}/>
                <Text style={styles.listlcv}>
                Gender <Text style={styles.listinfosub}> Male</Text>
                </Text>
           </View>
            </View>
        </View>
{/* Professional skills end */}

{/* rating  */}
     <View style={styles.addfulsection}>
        <View style={styles.ratefeelans}>
        <Text style={styles.headingrate}>Rate This Expert</Text>
        <View style={styles.ratestart}>
        <TouchableOpacity activeOpacity={0.9}><AntDesign name="staro"  style={styles.icmseratingction}/></TouchableOpacity> 
        <TouchableOpacity activeOpacity={0.9}><AntDesign name="staro"  style={styles.icmseratingction}/></TouchableOpacity> 
         <TouchableOpacity activeOpacity={0.9}><AntDesign name="staro"  style={styles.icmseratingction}/></TouchableOpacity> 
         <TouchableOpacity activeOpacity={0.9}><AntDesign name="staro"  style={styles.icmseratingction}/></TouchableOpacity> 
         <TouchableOpacity activeOpacity={0.9}><AntDesign name="staro"  style={styles.icmseratingction}/></TouchableOpacity> 
         </View>
        </View>
       <View  style={styles.pgfull}>
                        <Text style={styles.titileop}>Enter subject *</Text>
                       <TextInput 
                          placeholder="Enter subject"
                      /> 
                      </View>

                      <View  style={styles.pgfull}>
                        <Text style={styles.titileop}>Enter Review</Text>
                      <TextInput
                          placeholder="Enter review"
                      /> 
                      </View>


                      <TouchableRipple style={styles.wdtg}>
                        <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                            <Text style={styles.buttontext} >Submit</Text>
                        </RNLinearGradient>
                    </TouchableRipple>
                      </View> 




        {/* Company Information start */}
        {/* <View style={styles.pdsectioncompany} >
            <Text style={styles.aboutheadingpf}>Company Information</Text>
            <View style={styles.companyinfo} >
            <View  style={styles.listinfocompany}>
             <AntDesign name="eye"  style={styles.icmsection}/>
             <Text style={styles.listlcv}>
             Views  <Text style={styles.listinfosub}>1677</Text>
            </Text>
           </View>
           <View  style={styles.listinfocompany}>
             <AntDesign name="eye"  style={styles.icmsection}/>
             <Text style={styles.listlcv}>
             Posted Jobs   <Text style={styles.listinfosub}>22</Text>
            </Text>
           </View>
           <View  style={styles.listinfocompany}>
             <AntDesign name="eye"  style={styles.icmsection}/>
             <Text style={styles.listlcv}>
             Location  <Text style={styles.listinfosub}>West bengal, india</Text>
            </Text>
           </View>
           <View  style={styles.listinfocompany}>
             <AntDesign name="eye"  style={styles.icmsection}/>
             <Text style={styles.listlcv}>
             Since  <Text style={styles.listinfosub}>2023</Text>
            </Text>
           </View>
            </View>
        </View> */}
        {/* Company Information ends */}

        </View>
    
        </BusinessLayout>

)
}
const styles = StyleSheet.create({
    productdwn:{
        padding:22,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        },
        headingrate:{
            color:'#1B52DF',
            fontWeight:'bold',
          textAlign:'center',
          fontSize:16,
        },
        ratestart:{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: "row",
          paddingTop:16,
          marginBottom:30,
        },
        wdtg: {
            width: '50%',
            marginLeft:'auto',
            marginRight:'auto',

        },
        aboutbusn:{
            marginTop:2,
        },
        listprgm:{
            color:'#222',
            fontSize:12,
        },
        icmseratingction:{
            color:'#909090',
            marginLeft:4,
            marginRight:4,
            fontSize:18,
        },
        submfga:{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: "row",
            marginBottom:16,
          },
          addfulsection:{
            // backgroundColor: '#fff',
            marginTop:30,
            paddingTop:30,
            borderTopLeftRadius:40,
            borderTopRightRadius:40,
            backgroundColor: '#fff',
           
           },
           ratefeelans:{

           },
          buttontext: {
            color: '#ffffff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 14,
          },
          marginfl:{

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
            shadowOpacity: 0.8,
            elevation: 4,
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
       
        pgfull:{
            marginLeft:16,
            width:'90%',
            marginBottom:20,
           },
           titileop:{
            paddingLeft:6,
            fontWeight:'bold',
            },
        jobsnetworkheading:{
            color:'#1B52DF',
            fontSize:13,
            marginBottom:0,
            fontWeight:'bold',
        },
   
        jobsnetwork:{
            shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
            shadowOpacity: 0.8,
            shadowOffset: { width: 1, height: 13 },
            elevation: 4,
            marginBottom: 0,
            backgroundColor: '#fff',
            padding:18,
            borderRadius:10,
            marginTop:8,
        },
        companyinfo:{
            marginBottom: 10,
            padding:0,
            borderRadius:10,
            marginTop:10,
        },

        pdsection:{
            padding:24,
            paddingBottom:0,
        },
        pdsectioncompany:{
            marginBottom:100,
            padding:24,
            paddingBottom:0,
        },
        aboutparapf:{
            fontSize:13,
            color:'#222',
            marginBottom:0,
            lineHeight:18,
        },
        aboutheadingpf:{
        fontSize:12,
        color:'#909090',
        marginBottom:4,
        },
        profilepro:{
            width:100,
            height:100,
            borderRadius:50,
            },
            mgt:{
                marginRight:10,
            },
            listlcv:{
                color:'#787878',
                fontSize:12,
            },
            listlcvdoc:{
                color:'#787878',
                fontSize:12,
                paddingRight:10,
                lineHeight:18,
            },
            profilemapbtn:{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: "row",
            },
            icmsection:{
                color:'#1B52DF',
                paddingTop:2,
                paddingRight:6,
            },
            namecompany:{
                  textAlign:'center',
                  fontSize:15,
                  fontWeight:'bold',
                  marginBottom:6,
            },
            listinfo:{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: "row",
                marginBottom:6,
            },
            listinfocompany:{
                marginBottom:6,
                justifyContent: 'flex-start',
                display: 'flex',
                flexDirection: "row",
            },
            sublistinfo:{
                justifyContent: 'flex-start',
                display: 'flex',
                flexDirection: "row",
                marginBottom:1,
                marginTop:6,
            },
            listinfosub:{
                color:'#1B52DF',
            },
            bgsec: {
                backgroundColor: '#F5F5FA',
                paddingBottom:0,
                height:'100%',
            },
            freelbtn: {
                shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
                shadowOpacity: 0.8,
                elevation: 4,
                backgroundColor : '#fff',
                shadowRadius: 50 ,
                marginTop: 18,
                marginBottom:0,
                width: '100%',
                padding: 10,
                paddingLeft:14,
                paddingRight:14,
                borderRadius: 50,
            },
            seeprofiletext:{
                color: '#1B52DF',
                textAlign: 'center',
                fontWeight: '500',
                fontSize:12,
            },
        
});
