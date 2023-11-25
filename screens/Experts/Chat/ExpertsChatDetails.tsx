import React, { useEffect, useState } from 'react'
import { Image, ScrollView, View, Text, TouchableOpacity, Platform, Pressable } from 'react-native'
import { StyleSheet } from 'react-native';
import { FontAwesome, Ionicons, Fontisto } from '@expo/vector-icons';
import ExpertLayout from '../ExpertLayout';
import TextInput from "../../../components/TextInput";
import { useUser, usechatData } from '../../../stores/user';
import { BASE_URL } from '../../../Network/URL';
import { getChatinput, getUser, setChatInput } from '../../../stores/userAsync';
import { ChatList } from '../../../Network/HomeListApi';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
export default function ExpertsChatDetails() {
    const platform = Platform.OS
    const [chatdata, sechatData] = usechatData()
    const [user, setUser] = useUser()
    const [getChatlist, setChatlist] = useState(Array<ChatList>())
    const isSentByUser = useState(false);
    const isSentOtherUser = useState(false);

    useEffect(() => {
        (async () => {

            sechatData(await getChatinput())

            setUser(await getUser())

            let response = await fetch(BASE_URL + "showmessage_list", {
                method: "POST",
                body: JSON.stringify((chatdata)),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let json = await response.json()
            setChatlist(json.result)

            for (let i = 0; i < json.result.length; i++) {
                // console.log(location[i])
                if (json.result[i].userfrom_id === user?.userId) {
                    isSentByUser as any==true;

                 
                } else {
                   
                }
            }
            console.log(isSentByUser)


        })();

    }, [chatdata]);

    async function chatUserFunction() {

        {
            getChatlist?.map(function (item: ChatList, index: number) {
                return (

                    <View style={styles.messagedata}>
                        <View>
                            <Image source={{ uri: item.profilePic }} style={styles.chatimg} />
                        </View>
                        <View>
                            <View style={styles.messagedatatext}>
                                <Text style={styles.chattextcolorblack}>
                                    Hey, how's it going?
                                </Text>
                            </View>
                        </View>
                    </View>
                )
            })
        }



    }
    function chatOtherCustomer() {

        return (

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

        )
    }
    return (
        <ExpertLayout
            TabBarHidden
            title="Message"
            isChildren={true}
            disable={false}>
            <View style={styles.jobslistcard}>
                <View style={styles.companytitile}>
                    <View style={styles.serviceacctiveb}>
                        <Image source={{ uri: user?.profilePic }} style={styles.cardxi} />
                        <View style={styles.textsr}>
                            <Text style={styles.headingjobs}>
                                {user?.firstname + " " + user?.lastname}
                            </Text>
                        </View>
                        <View style={styles.arumansed}>
                            <TouchableOpacity activeOpacity={0.9}>
                                <View style={styles.cricleiconb}>
                                    <Ionicons name="call" style={styles.seccaall} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9}>
                                <View style={styles.cricleiconb}>
                                    <FontAwesome name="video-camera" style={styles.seccaall} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>


            {/* list chat Start */}
            <ScrollView style={styles.chatingdata} showsVerticalScrollIndicator={false}>




                <View style={styles.chatlistsection}>

                    {/* {isSentByUser && (

                        getChatlist?.map(function (item: ChatList, index: number) {
                            return (

                                <View style={styles.messagedata}>
                                    <View>
                                        <Image source={{ uri: item.profilePic }} style={styles.chatimg} />
                                    </View>
                                    <View>
                                        <View style={styles.messagedatatext}>
                                            <Text style={styles.chattextcolorblack}>
                                                {item.message}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })

                    )
                 
                    } */}



                    {isSentByUser ? (
                        getChatlist?.map(function (item: ChatList, index: number) {
                            return (
                                <View style={styles.messagedata}>
                                    <View>
                                        <Image source={{ uri: item.profilePic }} style={styles.chatimg} />
                                    </View>
                                    <View>
                                        <View style={styles.messagedatatext}>
                                            <Text style={styles.chattextcolorblack}>
                                                {item.message}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    ) : (
                        getChatlist?.map(function (item: ChatList, index: number) {
                            return (

                                <View style={styles.messagedatarrght}>
                                    <View>
                                        <View style={styles.messagedatatextright}>
                                            <Text style={styles.chattextcolor}>
                                                {item.message}
                                            </Text>
                                        </View>
                                    </View>
                                    <View >
                                        <Image source={{ uri: item.profilePic }} style={styles.chatimg} />
                                    </View>
                                </View>
                            )
                        })
                    )}








                    {/* {isSentOtherUser && (

                        getChatlist?.map(function (item: ChatList, index: number) {
                            return (

                                <View style={styles.messagedatarrght}>
                                    <View>
                                        <View style={styles.messagedatatextright}>
                                            <Text style={styles.chattextcolor}>
                                                {item.message}
                                            </Text>
                                        </View>
                                    </View>
                                    <View >
                                        <Image source={{ uri: item.profilePic }} style={styles.chatimg} />
                                    </View>
                                </View>
                            )
                        })

                    )} */}










                </View>

            </ScrollView>
            {/* <View style={styles.bgmessagesec}>
                <View style={styles.mesopt}>
                    <TextInput placeholder="Write your messages ..." />
                </View>
                <View>
                    <Pressable>
                        <View style={styles.linearGradientfilter} >
                            <Fontisto name="paper-plane" size={18} color="#1B52DF" />
                        </View>
                    </Pressable>
                </View>
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
    chatlistsection: {
        backgroundColor: '#fff',
        marginTop: 10,
        paddingBottom: 20,
        marginBottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // height:'100%'

    },
    mesopt: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        width: '80%',
    },
    chatingdata: {
        height: '100%',
    },
    bgmessagesec: {

        width: '100%',
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
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
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
    },
    chattextcolor: {
        color: '#fff',
        lineHeight: 20,
        fontFamily: "Inter-Medium",
    },
    chattextcolorblack: {
        color: '#222',
        lineHeight: 20,
        fontFamily: "Inter-Medium",
    },
    messagedatatext: {
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        borderTopLeftRadius: 0,
        padding: 14,
        marginBottom: 10,
        marginLeft: 10,
        maxWidth: '100%',
        marginRight: 25,
    },
    messagedatatextright: {
        backgroundColor: '#1B52DF',
        borderRadius: 20,
        borderTopRightRadius: 0,
        padding: 14,
        marginBottom: 0,
        marginRight: 5,
        marginLeft: 25,

    },
    messagedata: {
        padding: 30,
        paddingBottom: 0,
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: "row",
        // flexWrap:'wrap',
    },
    messagedatarrght: {
        padding: 30,
        paddingBottom: 0,
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
    linearGradientfilter: {
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowRadius: 50,
        //  shadowColor: 'rgba(0, 0, 0, 0.9)',
        borderWidth: 1,
        //  borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#fcfafa',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
    },
    chatimg: {
        width: 40,
        height: 40,
        borderRadius: 50,
        flexBasis: 70,
    },
    arumansed: {
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: "row",
        marginRight: 190,
    },
    seccaall: {
        color: '#1B52DF',
        textAlign: 'center',
        fontSize: 15,
    },
    parajobs: {
        color: '#909090',
        fontSize: 12,
        marginBottom: 4,
    },
    cricleiconb: {
        fontSize: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        // borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#f1f1f1',
        shadowOpacity: 0.8,
        elevation: 4,
        position: 'relative',
        backgroundColor: '#fff',
        width: 32,
        height: 32,
        borderRadius: 50,
        marginHorizontal: 25,
        textAlign: 'center',
        paddingTop: 8,
        marginLeft: 'auto',
        marginRight: 10
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
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
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
