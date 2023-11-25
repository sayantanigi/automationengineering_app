import React from 'react'
import { SafeAreaView, ImageBackground, ScrollView, View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
// import Background from "../../../assets/images/Shape2.png"
// import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import TouchableRipple from "../../../components/TouchableRipple";
import RNLinearGradient from '../../../components/RNLinearGradient';

export default function JobBids() {
    // console.log("MY JOPBS")
    const Navigation = useNavigation<any>()
    function gotojobdetails() {
        Navigation.navigate('Job-Details')
    }
    function gotopostjobs() {
        Navigation.navigate('PostJobs')
    }
    function gotoalljobs() {
        Navigation.navigate('SeeAllJobs')
    }

    const platform = Platform.OS
    return (
        <SafeAreaView style={styles.bgsec}>
            <ScrollView>
                <View style={styles.smaligt}>
                    <Text style={styles.bidheading}>
                       Place a bid for one of our jobs
                    </Text>
                    <Text style={styles.bidparat}>
                    begin by submitting a bid for one of our jobs under
                        the area titled <Text style={styles.aljobs}>“All Jobs.”</Text>
                    </Text>
                    <TouchableRipple style={styles.wdtg} onPress={gotoalljobs}>
                    <RNLinearGradient
                    direction="column"
                    style={styles.linearGradient}
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                    <Text style={styles.buttontext} >Start Here</Text>
                 </RNLinearGradient>
                  </TouchableRipple>
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
    aljobs:{
       color:'#1B52DF',
    },
    wdtg: {
        width: '50%',
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: "Inter-Medium",
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        borderRadius: 50,
        marginTop: 28,
        marginBottom: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    smaligt:{
        paddingTop:200,
        display:'flex',
        alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'center',
        padding:20,
        textAlign:'center',
    },
    bidparat:{
        color:'#909090',
        fontSize:12,
        lineHeight:20,
        fontFamily: "Inter-Medium",
        textAlign:'center',
    },
    bidheading:{
        fontFamily: "Inter-Medium",
        fontSize:18,
        fontWeight:'600',
        color:'#000',
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
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
      
        width: '95%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    viewjobsedittext:{
        color: '#909090',
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

    },
    imagex: {
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
        justifyContent: 'center',
        position: 'relative',
        bottom: 5,
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
});
