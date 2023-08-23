import React from 'react'
import { SafeAreaView, ImageBackground, ScrollView, View, Text, TouchableOpacity,Image, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../../assets/images/Shape2.png"
// import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function JobReviewed() {
    // console.log("MY JOPBS")
    const Navigation = useNavigation<any>()
    function gotobusinessdetails() {
        Navigation.navigate('BusinessDetails')
    }
    function gotopostjobs() {
        Navigation.navigate('PostJobs')
    }
    const platform = Platform.OS
    return (
        <SafeAreaView style={styles.bgsec}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.fullsectionjoblisst}>
                <View style={styles.jobslistcard}>
                    <View style={styles.padf}>
                        <View style={styles.serviceflex}>
                            <Image source={require('../../../assets/images/flx1.png')} style={styles.cardxi} />
                      
                            <View style={styles.textsr}>
                                <Text style={styles.headingjobs} numberOfLines={1}>
                                Expert Shopify Redesign
                                </Text>
                                <Text style={styles.parajobs}>
                                    Bid amount ($)  <Text style={styles.comoncl}>$20500.00</Text>
                                </Text>
                                <Text style={styles.parajobs}>
                                    Date  <Text style={styles.comoncl}>21 jun 2023</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                        <View style={styles.optionviewsection}>
                            <View style={styles.srdf}>
                                <Text style={styles.srdpending}>Selected</Text>
                            </View>
                            <View style={styles.srdf}>
                            <TouchableOpacity onPress={gotobusinessdetails} activeOpacity={0.9}>
                                <View style={styles.viewjobsedit}>
                                <Text style={styles.viewjobsedittext}>
                                Business Details
                                </Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.jobslistcard}>
                    <View style={styles.padf}>
                        <View style={styles.serviceflex}>
                            <Image source={require('../../../assets/images/freelancers3.jpg')} style={styles.cardxi} />
                            <View style={styles.textsr}>
                                <Text style={styles.headingjobs}>
                                    make a offline POS software
                                </Text>
                                <Text style={styles.parajobs}>
                                    Bid amount ($)  <Text style={styles.comoncl}>$20500.00</Text>
                                </Text>
                                <Text style={styles.parajobs}>
                                    Date  <Text style={styles.comoncl}>21 jun 2023</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                    <View style={styles.optionviewsection}>
                            <View style={styles.srdf}>
                                <Text style={styles.srdpending}>Selected</Text>
                            </View>
                            <View style={styles.srdf}>
                            <TouchableOpacity onPress={gotobusinessdetails} activeOpacity={0.9}>
                                <View style={styles.viewjobsedit}>
                                <Text style={styles.viewjobsedittext}>
                                Business Details
                                </Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.jobslistcard}>
                    <View style={styles.padf}>
                        <View style={styles.serviceflex}>
                            <Image source={require('../../../assets/images/freelancers4.jpg')} style={styles.cardxi} />
                            <View style={styles.textsr}>
                                <Text style={styles.headingjobs}>
                                Make a offline pOS software
                                </Text>
                                <Text style={styles.parajobs}>
                                    Bid amount ($)  <Text style={styles.comoncl}>$20500.00</Text>
                                </Text>
                                <Text style={styles.parajobs}>
                                    Date  <Text style={styles.comoncl}>21 jun 2023</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.pargrup}>
                            <Text style={styles.pendingsection}>In publishing and graphic design, Lorem ipsum is a
                                    placeholder text commonly used to demonstrate the
                                    visual form of a document or a typeface without
                                    relying on meaningful content.</Text>
                        </View>
                    </View>
                    <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                    <View style={styles.optionviewsection}>
                            <View style={styles.srdf}>
                                <Text style={styles.srdpending}>Selected</Text>
                            </View>
                            <View style={styles.srdf}>
                            <TouchableOpacity onPress={gotobusinessdetails} activeOpacity={0.9}>
                                <View style={styles.viewjobsedit}>
                                <Text style={styles.viewjobsedittext}>
                                Business Details
                                </Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    viewjobs: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
      
        width: '90%',
        padding: 8,
        paddingLeft: 14,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
   
    pargrup:{
paddingTop:10,
    },
    srdpending:{
        paddingTop:6,
        fontWeight:'600',
textAlign:'center',
fontSize:14,
color:'#2CB14A',

    },
    cricleitext:{
        position: 'relative',
        textAlign:'center',
        top:0,
        fontSize:18,
        color: "#1B52DF",
      },
    viewjobstext:{
  color: '#1B52DF',
  textAlign: 'left',
  fontWeight: '500',
  fontSize: 12,
    },
 
    cardxi: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    cricleiconbpd: {
        fontSize: 20,
        shadowColor: 'rgba(0, 0, 0, 0.9)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        width: 22,
        height: 22,
        borderRadius: 50,
        color: '#1B52DF',
        // marginHorizontal: 45,
        marginLeft: 78,
        marginTop: -52,
        textAlign: 'center',
        paddingTop: 2,
      
    },
    cricleiconb: {
        fontSize: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        width: 22,
        height: 22,
        borderRadius: 50,
        color: '#1B52DF',
        // marginHorizontal: 45,
        marginLeft: 74,
        marginTop: -50,
        textAlign: 'center',
        paddingTop: 2,
   
    },
    textsr: {
        paddingTop: 4,
        paddingLeft: 16,
        paddingRight: 20,
    },
    viewjobsedit: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
      
        width: '100%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    viewjobsedittext:{
        color: '#1B52DF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
    },
    viewjobsdelete: {
        shadowColor: 'rgba(0, 0, 0, 0.9)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        color: '#FE0000',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
        width: '90%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    padf: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 50,
        marginBottom:0,

    },
    imagex: {
        // width:330,
        marginBottom: 0,
        marginTop: 0,
        padding: 18,
    },
    srdf: {
        width: '42%',
    },

    bgsec: {
        backgroundColor: '#F5F5FA',
    },
    fullsectionjoblisst: {
marginBottom:120,
    },
    comoncl: {
        color: '#222',
    },
    optionviewsection: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        position: 'relative',
        bottom: 5,
        marginRight:20,
    },
    jobslistcard: {
        padding: 20,
        paddingBottom: 0,
        borderRadius: 10,
        marginBottom: 0,

    },
    serviceflex: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    headingjobs: {
        fontSize: 14,
        color: '#1B52DF',
        fontWeight: '500',
        marginBottom: 4,
        width:210,
    },
    parajobs: {
        color: '#909090',
        fontSize: 12,
        marginBottom: 4,
    },
    pendingsection:{
    fontSize:12,
    lineHeight:18,
        },
});