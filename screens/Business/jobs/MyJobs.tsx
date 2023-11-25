import React, { useEffect, useState } from 'react'
import { SafeAreaView, ImageBackground, ScrollView, View, Text, TouchableOpacity, Image, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../../assets/images/Shape2.png"
// import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';
import RNLinearGradient from '../../../components/RNLinearGradient';
import { API_URLS } from '../../../Network/URL';
import { getUser, setUser } from '../../../stores/userAsync';
import { useUser } from '../../../stores/user';
import { MyJobsList } from '../../../Network/HomeListApi';

export default function BusinessMyJobs() {
    const [user, setUser] = useUser()
    const [getjobDetail, setjobDetail] = useState(Array<MyJobsList>())

    const Navigation = useNavigation<any>()
    function gotobusinessdetails() {
        Navigation.navigate('BusinessDetails')
    }
    function gotopostjobs() {
        Navigation.navigate('PostJobs')
    }
    const platform = Platform.OS


    useEffect(() => {
        (async () => {
            setUser(await getUser())
            let response = await fetch(API_URLS.getBusinessMyjobs, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: (JSON.stringify({ user_id: user?.userId }))

            })

            let payload = await response.json()
            // console.log(payload.result)
            setjobDetail(payload.result.reverse())




            //setProfiledata()
        })();

    }, []);



    return (
        <SafeAreaView style={styles.bgsec}>
            <ScrollView style={styles.scrkl} showsVerticalScrollIndicator={false}>
                <View style={styles.fullsectionjoblisst}>

                    {
                        getjobDetail?.map(function (item: MyJobsList, index: number) {
                            return (

                                <View style={styles.jobslistcard}>
                                    <View style={styles.padf}>
                                        <Text style={styles.headingjobs} numberOfLines={2}>
                                          {item.post_title}
                                        </Text>
                                        <Text style={styles.parajobs}>
                                            Duration <Text style={styles.comoncl}>{item.duration}</Text>
                                        </Text>
                                        <Text style={styles.parajobs}>
                                            deadline <Text style={styles.comoncl}>{item.appli_deadeline}</Text>
                                        </Text>
                                        <Text style={styles.parajobs}>
                                            Remuneration ($) <Text style={styles.comoncl}>{item.charges}</Text>
                                        </Text>
                                    </View>

                                    <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                                        <View style={styles.optionviewsection}>
                                            <View style={styles.srdf}>
                                                <TouchableOpacity activeOpacity={0.9}>
                                                    <View style={styles.viewjobs}>
                                                        <Text style={styles.viewjobstext}>
                                                            View
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={styles.srdf}>
                                                <View style={styles.viewjobsedit}>
                                                    <Text style={styles.viewjobsedittext}>
                                                        Edit
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.srdf}>
                                                <View style={styles.viewjobsdelete}>
                                                    <Text style={styles.viewjobsdeletetext}>
                                                        Delete
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            )
                        })
                    }


                   
                </View>
            </ScrollView>

            <View style={styles.fixedjobbtn}>
                <TouchableRipple onTouchStart={gotopostjobs} style={styles.wdtg}>
                    <RNLinearGradient
                        direction="column"
                        style={styles.linearGradient}
                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                        <Text style={styles.buttontext} >Post Jobs</Text>
                    </RNLinearGradient>
                </TouchableRipple>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    viewjobs: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        // borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#ebebeb',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'center',
        width: '80%',
        padding: 8,
        paddingLeft: 14,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    wdtg: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        alignItems: "center",
    },
    btngh: {
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",

    },
    fixedjobbtn: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    viewjobsdeletetext: {
        fontSize: 12,
        color: '#FE0000',
        textAlign: 'center',
        fontWeight: '500',
    },
    pargrup: {
        paddingTop: 10,
    },
    srdpending: {
        paddingTop: 6,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 14,
        color: '#2CB14A',

    },
    scrkl: {
        height: '100%',
    },
    cricleitext: {
        position: 'relative',
        textAlign: 'center',
        top: 0,
        fontSize: 18,
        color: "#1B52DF",
    },
    viewjobstext: {
        color: '#1B52DF',
        textAlign: 'center',
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
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
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
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        borderWidth: 1,
        // borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#ebebeb',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,

        width: '80%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    viewjobsedittext: {
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
        width: '80%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    padf: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 50,
        marginBottom: 0,

    },
    imagex: {
        // width:330,
        marginBottom: 0,
        marginTop: 0,
        padding: 18,
    },
    srdf: {
        width: '35%',
    },

    bgsec: {
        backgroundColor: '#F5F5FA',
    },
    fullsectionjoblisst: {
        marginBottom: 120,
    },
    comoncl: {
        color: '#222',
    },
    optionviewsection: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        bottom: 5, left: 10,
        marginRight: 20,
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
        width: 210,
        fontFamily: "Inter-Medium",
    },
    parajobs: {
        color: '#909090',
        fontSize: 12,
        marginBottom: 4,
        fontFamily: "Inter-Medium",
    },
    pendingsection: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: "Inter-Medium",
    },
});