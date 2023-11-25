import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ImageBackground, ScrollView, View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../../assets/images/Shape2.png";
import { useNavigation } from '@react-navigation/native';
import { PendingReviewdList } from '../../../Network/HomeListApi';
import { useUser } from '../../../stores/user';
import { getUser } from '../../../stores/userAsync';
import { BASE_URL } from '../../../Network/URL';

export default function ListBids() {
    // console.log("MY JOPBS")
    const [getPendingreviewList, setgetPendingreviewList] = useState(Array<PendingReviewdList>());
    const [user, setUser] = useUser()
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
    useEffect(() => {
        (async () => {

            setUser(await getUser())

            let response = await fetch(BASE_URL + "jobbid", {
                method: "POST",
                body: JSON.stringify({ ...FormData, user_id: String(user?.userId) as any, user_type: String(user?.userType) }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let json = await response.json()


            if (json.status === "success") {

                const shortListed = "Pending";
                const filteredData = [];


                for (const item of json.result) {
                    if (item.bidding_status === shortListed) {
                        // If the status matches, add the item to the filteredData array
                        filteredData.push(item);
                    }
                }

                setgetPendingreviewList(filteredData)



            } else {


            }

        })();

    }, [user]);
    const platform = Platform.OS
    return (
        <SafeAreaView style={styles.bgsec}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.fullsectionjoblisst}>

                {
                    getPendingreviewList?.map(function (item: PendingReviewdList, index: number) {
                        return (
                            

                            <View style={styles.jobslistcard}>
                            <View style={styles.padf}>
                                <View style={styles.serviceflex}>
                                    <Image source={{uri:item.profilePic}} style={styles.cardxi} />
                                    <View style={styles.textsr}>
                                        <Text style={styles.headingjobs} numberOfLines={1}>
                                            {item.post_title}
                                        </Text>
                                        <Text style={styles.parajobs}>
                                            Bid amount ($)  <Text style={styles.comoncl}>{item.bid_amount}</Text>
                                        </Text>
                                        <Text style={styles.parajobs}>
                                            Date  <Text style={styles.comoncl}>{item.created_date}</Text>
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.cardfw}>
                                    <Text style={styles.cardfwtext}>
                                    {item.description}
                                    </Text>
                                </View>
                            </View>
                            <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                                <View style={styles.optionviewsection}>
                                  
                                  <View>
                                  {/* <Text>
                                    options={options}
                                  </Text> */}
                                
                                  </View>
                                  <View style={styles.srdf}>
                                    <TouchableOpacity onPress={gotojobdetails} activeOpacity={0.9}>
                                        <View style={styles.viewjobsedit}>
                                        <Text style={styles.viewjobsedittext}>
                                            Pending
                                        </Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.srdf}>
                                       <TouchableOpacity onPress={gotojobdetails} activeOpacity={0.9}>
                                        <View style={styles.viewjobsedit}>
                                        <Text style={styles.viewjobsedittext}>
                                            View
                                        </Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        )
                    })
}



                   
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
    cardfw:{
paddingTop:10,
    },
    cardfwtext:{
lineHeight:18,
fontSize:13,
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
        // width:330,
        marginBottom: 0,
        marginTop: 0,
        padding: 18,
    },
    srdf: {
        width: '40%',
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
