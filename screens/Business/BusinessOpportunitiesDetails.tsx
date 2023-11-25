import React from 'react'
import { View, Text, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TouchableRipple from "../../components/TouchableRipple";
import RNLinearGradient from '../../components/RNLinearGradient';
import ExpertLayout from './BusinessLayout';
import TextInput from "../../components/TextInput";
import Textarea from '../../components/Textarea';
export default function ExpertsOpportunitiesDetails() {
  const Navigation = useNavigation<any>()
  function gotoprofile() {
      Navigation.navigate('Profile')
  }
  return (
    <ExpertLayout title="Job Bid" isChildren={true}>
                <View style={styles.jobdet}>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Job Title</Text>
                    <Text style={styles.subparaheading}>Software Development Engineer</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Description</Text>
                    <Text style={styles.subpara}>I am looking for a Dash coin and master node based
                        cryptocurrency fork consultant to help me with the
                        setup and configuration of my personal project. I
                        require minimal involvement and would like general
                        consultation and advice on specific aspects of the
                        process. The ideal candidate should have experience
                        in cryptocurrency development and coding, as well as
                        expertise in the setup and configuration of master
                        nodes.</Text>
                        <Text style={styles.subpara}>I am looking for a Dash coin and master node based
                        cryptocurrency fork consultant to help me with the
                        setup and configuration of my personal project. I
                        require minimal involvement and would like general
                        consultation and advice on specific aspects of the
                        process. The ideal candidate should have experience
                        in cryptocurrency development and coding, as well as
                        expertise in the setup and configuration of master
                        nodes.</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Required key skills</Text>
                    <Text style={styles.subpara}>C++ Programming, Cryptocurrency, Bitcoin</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Application Deadline Date</Text>
                    <Text style={styles.subpara}>2023-12-31</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Categories</Text>
                    <Text style={styles.subpara}>Website Development</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Sub Categories</Text>
                    <Text style={styles.subpara}>eCommerce Websites</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Charges</Text>
                    <Text style={styles.subpara}>1000</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Duration</Text>
                    <Text style={styles.subpara}>7 Months</Text>
                </View>
                {/* <TouchableRipple style={styles.wdtg}>
                <RNLinearGradient
                    direction="column"
                    style={styles.linearGradient}
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                    <Text style={styles.buttontext} >Sumanta Dutta </Text>
                </RNLinearGradient>
            </TouchableRipple> */}
              <View style={styles.addfulsection}>

          
            
                <View  style={styles.pgfull}>
                <Text style={styles.titileop}>Bid Amount *</Text>
                
                <View style={styles.bidamout}>
                <View style={styles.textusd}>
                      <Text style={styles.textdolcolor}>USD ($)</Text>
                   </View>
                <View style={styles.experft}>
                <TextInput placeholder="Enter Bid Amount"/>
                </View>
                </View>

            </View>


                <View  style={styles.pgfull}>
                <Text style={styles.titileop}>Duration</Text>
                <TextInput
                    placeholder="Enter Duration"
                />
                </View>
                <View  style={styles.pgfull}>
                <Text style={styles.titileop}>Details</Text>
                <Textarea
                    placeholder="Enter Description"
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
                </View>
                </ExpertLayout>
          
     )
   }

   const styles = StyleSheet.create({
    homesection: {
        backgroundColor: '#F5F5FA',
        height:'100%',
      }, 
      subtitle:{
        color:'#909090',
        fontSize:12,
        marginBottom:4,
        fontFamily: "Inter-Medium",
      },
      submfga:{
        marginLeft:20,
        marginRight:20,
        },
      wdtg:{
        width:'60%',
        marginLeft:'auto',
        marginRight:'auto',
    },
    textdolcolor:{
        paddingTop:16,
        fontWeight:'600',
        color:'#D6D6D6',
        textAlign:'center',
      },
    textusd:{
        shadowColor: Platform.OS === 'android' ? '#F5F5FA' :  '#F5F5FA',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor : '#fff',
        shadowRadius: 50 ,
        marginTop: 8,
        marginBottom:0,
        width: 100,
        height:50,
        marginRight:10,
        paddingLeft:14,
        paddingRight:14,
        borderRadius: 50,
      },
    experft:{
width:'65%',
marginLeft:10,
    },
    bidamout:{
display:'flex',
flexDirection: "row",
alignItems: "center",
justifyContent:'flex-start',
    },
    rthta:{
        width:'50%',
        marginLeft:'auto',
        marginRight:'auto',
          },
    titileop:{
        paddingLeft:4,
        fontWeight:'bold',
        },
        pgfullbid:{
            width:'30%',
        },
    pgfull:{
        width:'100%',
        marginBottom:12,
        marginLeft:0,
       },
    addfulsection:{
        backgroundColor: '#F5F5FA',
        marginTop:0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        margin:0,
        padding:0,
        paddingTop:30,
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
        fontSize: 14,
        fontFamily: "Inter-Medium",
    },
      subpara:{
color:'#000',
fontSize:12, 
lineHeight:20,  
fontFamily: "Inter-Medium",
   },
   jobmargin:{
marginBottom:14,
   },
      subparaheading:{
        color:'#1B52DF',
        fontWeight:'500',
        fontSize:14,
        fontFamily: "Inter-Medium",
      },
      jobdet:{
padding:20,
      },
   });
