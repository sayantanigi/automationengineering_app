import { Image, SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Platform, FlatList } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Searchbar } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import ExpertLayout from '../ExpertLayout';
import { useUser } from '../../../stores/user';
import { getUser, setChatInput } from '../../../stores/userAsync';
import { BASE_URL } from '../../../Network/URL';
import { GetChatUser, GetUserlistbbyjobbid } from '../../../Network/HomeListApi';

export default function ExpertsChat() {
    const platform = Platform.OS
    const [searchQuery, setSearchQuery] = React.useState('');
    const[getUserdata,setUserdata]= useState(Array<GetChatUser>());
    const[getlistbbyjobbid,setlistbbyjobbid]= useState(Array<GetUserlistbbyjobbid>());

    const Navigation = useNavigation<any>()
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    const [user, setUser] = useUser()

    useEffect(() => {

        (async () => {
    
            setUser(await getUser())
          
            let response = await fetch(BASE_URL + "chatUser_list", {
                method: "POST",
                body: JSON.stringify({ user_id: String(user?.userId) as any}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let json = await response.json()
            setUserdata(json.result.get_user)
            setlistbbyjobbid(json.result.get_userlistbbyjobbid)
      })();
    
      }, []);
   async function gotoMessagesDetails(user_id:string,post_id:string) {
        Navigation.navigate('ExpertsChatDetails')
        await setChatInput({userf_id: user_id, post_id: post_id ,usert_id:user?.userId})
    }
    return (
        <ExpertLayout MessageTextBarHidden isChildren={true} disable={false}>
            <View style={styles.jobslistcard}>
                <View style={styles.companytitile}>

                {
                    getUserdata?.map(function (item: GetChatUser, index: number) {
                        return (
                            <View style={styles.serviceacctiveb}>
                        <Image source={{uri:item.profilePic}} style={styles.cardxi} />
                        <View style={styles.textsr}>
                            <Text style={styles.headingjobs} numberOfLines={2}>
                                {item.firstname+" "+item.lastname}
                            </Text>
                            <Text style={styles.parajobs}>
                                Expert
                            </Text>
                            <View style={styles.activestatus}>
                                <Text style={styles.activetext}>active</Text>
                            </View>
                        </View>
                    </View>

                        )
                    })
                    }

                </View>

                <View style={styles.searchbarmessagelist}>
                    <Searchbar
                        placeholderTextColor="#D6D6D6"
                        placeholder="Search by contacts and job ID"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{
                            backgroundColor: "#fff",
                            shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
                            shadowOpacity: 0.8,
                            shadowOffset: { width: 1, height: 13 },
                        }}
                        elevation={2}
                    />
                </View>



                <FlatList
                    data={getlistbbyjobbid}
                    renderItem={({ item }) => {
                        return <TouchableOpacity  onPress={() => gotoMessagesDetails(item.user_id, item.post_id)}  activeOpacity={0.9}>
                            <View style={styles.padf}>
                                <View style={styles.serviceflex}>
                                    <Image source={{uri:item.profilePic}} style={styles.chatxc} />
                                    <View style={styles.textsr}>
                                        <Text style={styles.headingjobs} numberOfLines={1}>
                                            {item.full_name}
                                        </Text>
                                        <Text style={styles.parajobs} numberOfLines={1}>
                                            {item.description}
                                        </Text>
                                        <Text style={styles.parajobs}>
                                            job ID <Text style={styles.jobtext}>{item.postjob_id}</Text>
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }} />



            </View>

        </ExpertLayout>


    )

}








const styles = StyleSheet.create({
    viewjobs: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        // alignItems: 'flex-end',
        color: '#1B52DF',
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 12,
        width: '90%',
        padding: 8,
        paddingLeft: 14,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    activestatus: {
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: "row",
        width: '100%',
        borderRadius: 10,
    },
    messagesscl: {
        // marginBottom:140,
        // height:'100%',
    },
    activetext: {
        textAlign: 'center',
        color: '#2CB14A',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        fontFamily: "Inter-Medium",
        backgroundColor: '#fff',
        padding: 6,

        paddingLeft: 24,
        paddingRight: 24,
        borderRadius: 10,
        marginTop: 0,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: Platform.OS === 'android' ? '#fff' : '#f1f1f1',

    },
    jobtext: {
        color: '#222',
        fontFamily: "Inter-Medium",
    },
    listofchat: {
        backgroundColor: '#fff',
        marginTop: 0,
        height: '100%',
        paddingBottom: 20,
        marginBottom: 170,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    messagesec: {
        backgroundColor: '#F5F5FA',
    },
    searchInput: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
    },
    searchbarmessagelist: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft:10,
        marginRight:10,
    },
    cardxi: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    chatxc: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: '#2CB14A',
        borderWidth: 2,
    },
    cricleiconbpd: {
        fontSize: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
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
    headingjobs: {
        fontSize: 14,
        color: '#1B52DF',
        fontWeight: '500',
        marginBottom: 4,
        fontFamily: "Inter-Medium",
    },
    parajobs: {
        color: '#909090',
        fontSize: 12,
        marginBottom: 4,
        fontFamily: "Inter-Medium",
    },
    cricleiconb: {
        fontSize: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        width: 22,
        height: 22,
        borderRadius: 50,
        color: '#1B52DF',
        // marginHorizontal: 45,
        marginLeft: 74,
        marginTop: -28,
        textAlign: 'center',
        paddingTop: 2,
    },
    textsr: {
        paddingTop: 4,
        paddingLeft: 16,
        paddingRight: 20,
        marginRight: 30,
    },
    viewjobsedit: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        color: '#909090',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        width: '95%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    viewjobsdelete: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
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
        // backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 0,
        // borderRadius: 10,
    },
    companytitile: {
        backgroundColor: '#fff',
        padding: 16,
        paddingBottom: 3,
        borderRadius: 10,
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
        padding: 10,
        paddingBottom: 0,
        borderRadius: 10,
        marginBottom: 0,

    },
    serviceflex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    serviceacctiveb: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 30,
    },

});
