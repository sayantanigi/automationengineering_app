import { Text, Image, View, TouchableOpacity, ScrollView, TextInput, Platform, Dimensions, FlatList } from 'react-native'
import { AntDesign, Ionicons, } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ExpertLayout from './ExpertLayout';
import RNLinearGradient from '../../components/RNLinearGradient';
import TouchableRipple from "../../components/TouchableRipple";
import React, { useEffect, useState } from 'react';
import { getPostdetails } from '../../Network/APIService';
import { BASE_URL } from '../../Network/URL';
import { CountPost, ProdList, UserBusiness, UserGetPost } from '../../Network/HomeListApi';
import HTML from 'react-native-render-html';
import { setLocation } from '../../stores/userAsync';
export interface userValue {
    user_id: string

}
export default function BusinessDetails() {
    const platform = Platform.OS
    const [getUserBusiness, setUserBusiness] = useState(Array<UserBusiness>());
    const [getUserGetPost, setUserGetPost] = useState(Array<UserGetPost>());
    const [getProdList, setProdList] = useState(Array<ProdList>());
    const [getCount, setCount] = useState(Array<CountPost>());
    const route = useRoute();
    const Navigation = useNavigation<any>()
    const [formData, setFormData] = useState<userValue>({
        user_id: "",

    })
    function gotoeditprofile() {
        Navigation.navigate('EditProfile')
    }
    function gotoproductdetails(id: any) {
        Navigation.navigate('ProductDetails', id)
    }
    async function goTomapView(lat: any, long: any) {
        await setLocation({ latitude: lat, longitude: long })
        Navigation.navigate('MapViewdetails')

    }

    useEffect(() => {
        (async () => {


            let response = await fetch(BASE_URL + "Home/vendor_details", {
                method: "POST",
                body: JSON.stringify(({ ...formData, user_id: String(route.params) as any })),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let json = await response.json()
            setUserBusiness(json.result.userdata)
            setUserGetPost(json.result.get_post)
            setProdList(json.result.prod_list)
            setCount(json.result.count_post)

        })();

    }, [route.params]);

    return (

        <ExpertLayout MessageTextBarHidden title="Business Details" isChildren={true} disable={false}>
            <View>
                <View style={styles.productdwn}>

                    {
                        getUserBusiness?.map(function (item: UserBusiness, index: number) {
                            return (
                                <Image source={{ uri: item.profilePic }} style={styles.profilepro} />

                            )
                        })
                    }

                </View>

                {
                    getUserBusiness?.map(function (item: UserBusiness, index: number) {
                        return (
                            <View>
                                <Text style={styles.namecompany}>

                                    {item.companyname}
                                </Text>
                            </View>

                        )
                    })
                }
                {
                    getUserBusiness?.map(function (item: UserBusiness, index: number) {
                        return (
                            <View style={styles.listinfo}>
                                <Ionicons name="location" style={styles.icmsection} />
                                <Text style={styles.listlcv}>
                                    <HTML source={{ html: item.address }} />
                                </Text>
                            </View>
                        )
                    })
                }
                {
                    getCount?.map(function (item: CountPost, index: number) {
                        return (
                            <View style={styles.listinfo}>
                                <Ionicons name="document-text-sharp" style={styles.icmsection} />
                                <Text style={styles.listlcv}>
                                    Applications

                                </Text>
                                <Text style={styles.listinfosub}>{item.total}</Text>
                            </View>

                        )
                    })
                }
                {
                    getUserBusiness?.map(function (item: UserBusiness, index: number) {
                        return (
                            <View style={styles.listinfo}>
                                <AntDesign name="eye" style={styles.icmsection} />
                                <Text style={styles.listlcv}>
                                    Views  <Text style={styles.listinfosub}>{item.view_count}</Text>
                                </Text>
                            </View>
                        )
                    })
                }

            </View>

            {/*  see on map */}

            {
                getUserBusiness?.map(function (item: UserBusiness, index: number) {
                    return (
                        <View style={styles.profilemapbtn}>
                            <TouchableOpacity onPress={() => goTomapView(item.latitude, item.longitude)} style={styles.mgt} >
                                <View style={styles.freelbtn}>
                                    <Text style={styles.seeprofiletext}>
                                        See on map
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }



            {/* see on map end */}
            <View style={styles.marginfl} >
                <View style={styles.pdsection} >
                    <View style={styles.aboutbusn} >
                        <Text style={styles.aboutheadingpf}>About Business Network</Text>

                        {
                            getUserBusiness?.map(function (item: UserBusiness, index: number) {
                                return (
                                    <Text style={styles.aboutparapf}>

                                        <HTML source={{ html: item.short_bio }} />
                                    </Text>

                                )
                            })
                        }


                    </View>
                </View>

                {/* Jobs from Business Network start */}
                <View style={styles.pdsection} >
                    <Text style={styles.aboutheadingpddf}>Jobs from Business Network</Text>
                    <View style={styles.busnetgh} >


                        <FlatList
                            contentContainerStyle={{ paddingHorizontal: 6 }}
                            //  overScrollMode="never"
                            //  bounces={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            pagingEnabled={true}

                            data={getUserGetPost}
                            renderItem={({ item }) => {
                                return <View style={styles.jobsnetwork} >
                                    <View style={styles.jobfavicon} >
                                        <AntDesign name="hearto" style={styles.jobvbn}></AntDesign>
                                    </View>
                                    <Text style={styles.jobsnetworkheading} >

                                        <HTML source={{ html: item.post_title }} />

                                    </Text>
                                    <Text style={styles.listprgm}>


                                        <HTML source={{ html: item.description }} />

                                    </Text>
                                    <View style={styles.sublistinfo}>
                                        <Ionicons name="location" style={styles.icmsection} />
                                        <Text style={styles.listlcv}>
                                            <HTML source={{ html: item.complete_address }} />
                                        </Text>
                                    </View>
                                    <Text style={styles.listlcv}><Text style={styles.listinfosub}>{item.duration}</Text> days ago</Text>
                                </View>
                            }





                            }
                        />
                    </View>




                </View>
                {/* Jobs from Business Network end */}
                {/* Company Information start */}
                {/* <View style={styles.pdsectioncompany} >

                    <Text style={styles.aboutheadingpf}>Company Information</Text>
                    <View style={styles.companyinfo} >
                        <View style={styles.listinfocompany}>
                            <AntDesign name="eye" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                                Views  <Text style={styles.listinfosub}>1677</Text>
                            </Text>
                        </View>
                        <View style={styles.listinfocompany}>
                            <AntDesign name="eye" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                                Posted Jobs   <Text style={styles.listinfosub}>22</Text>
                            </Text>
                        </View>
                        <View style={styles.listinfocompany}>
                            <AntDesign name="eye" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                                Location  <Text style={styles.listinfosub}>West bengal, india</Text>
                            </Text>
                        </View>
                        <View style={styles.listinfocompany}>
                            <AntDesign name="eye" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                                Since  <Text style={styles.listinfosub}>2023</Text>
                            </Text>
                        </View>
                    </View>
                </View> */}
                {/* Company Information ends */}
                <View style={styles.pdtheader}>
                    <Text style={styles.pdheadertext}>
                        Product
                    </Text>
                </View>

                <FlatList
                    contentContainerStyle={{ paddingHorizontal: 6 }}
                    overScrollMode="never"
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={getProdList}
                    renderItem={({ item }) => {
                        return <View style={styles.scrollViewCareer}>
                            <View>
                                <Image source={{ uri: item.prod_image }} style={styles.Careerimg} resizeMode='cover' />
                                <View style={styles.textcr}>
                                    <Text style={styles.titlecrp} numberOfLines={2}> <HTML source={{ html: item.prod_name }} /> </Text>
                                    <Text style={styles.deccareer} numberOfLines={4}><HTML source={{ html: item.prod_description }} /></Text>
                                </View>
                            </View>

                            <TouchableRipple onPress={() => gotoproductdetails(item.id)} style={styles.wdtg}>
                                <RNLinearGradient
                                    direction="column"
                                    style={styles.linearGradient}
                                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                                    <Text style={styles.buttontext} >Contact Seller</Text>
                                </RNLinearGradient>
                            </TouchableRipple>
                        </View>

                    }} />
            </View>
        </ExpertLayout>
    )
}

const styles = StyleSheet.create({


    scrollViewCareer: {
        width: Dimensions.get('window').width - 36,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        paddingBottom: 20,
        marginBottom: 40,
        backgroundColor: '#fff',
        marginRight: 12,
        marginLeft: 12,
        borderRadius: 10,
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 4,
    },
    busnetgh: {
        marginRight: 0,
    },
    jobvbn: {
        textAlign: 'center',
        color: '#1B52DF',
    },
    jobfavicon: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 30,
        height: 30,
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        marginRight: 14,
        marginTop: 14,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 4,
    },
    pdheadertext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#909090',
    },
    pdtheader: {
        paddingLeft: 20,
    },
    wdtg: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    deccareer: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        color: '(0°,0%,0%)',
        textAlign: 'center',
    },

    Careerimg: {
        height: 160,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textcr: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 20,
        paddingRight: 20,
    },
    titlecrp: {
        fontWeight: 'bold',
        color: '#1B52DF',
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'center',
    },
    textb: {
        color: '#909090',
        fontSize: 10,
        marginBottom: 6,
    },
    productdwn: {
        padding: 22,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
    },
    headingrate: {
        color: '#1B52DF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    ratestart: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        paddingTop: 16,
        marginBottom: 30,
    },
    aboutbusn: {
        marginTop: 10,
        marginLeft: 20,
        paddingTop: 20,

    },
    listprgm: {
        color: '#222',
        fontSize: 12,
    },
    icmseratingction: {
        color: '#909090',
        marginLeft: 4,
        marginRight: 4,
        fontSize: 18,
    },
    submfga: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        marginBottom: 16,
    },
    addfulsection: {
        // backgroundColor: '#fff',
        marginTop: 30,
        paddingTop: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',

    },
    ratefeelans: {

    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    marginfl: {

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
        paddingLeft: 20,
        paddingRight: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
    },
    textinputarea: {
        marginTop: 10,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        paddingStart: 5,
        width: '90%',
        paddingTop: 14,
        height: 100,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        textAlignVertical: 'top',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
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

    pgfull: {
        width: '100%',
        marginBottom: 20,
    },
    titileop: {
        paddingLeft: 26,
        fontWeight: 'bold',
    },
    jobsnetworkheading: {
        color: '#1B52DF',
        fontSize: 13,
        marginBottom: 0,
        fontWeight: 'bold',
    },

    jobsnetwork: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 10,
        marginTop: 8,
        marginRight: 12,
        marginLeft: 12,
        // marginRight:20,
        width: Dimensions.get('window').width - 36,
    },
    companyinfo: {
        marginBottom: 10,
        padding: 0,
        borderRadius: 10,
        marginTop: 10,
    },

    pdsection: {
        // padding:24,
        // margin:20,
        paddingBottom: 0,
    },
    pdsectioncompany: {
        marginBottom: 20,
        padding: 24,
        paddingBottom: 0,
    },
    aboutparapf: {
        fontSize: 13,
        color: '#222',
        marginBottom: 20,
        lineHeight: 18,
    },
    aboutheadingpf: {
        fontSize: 12,
        color: '#909090',
        marginBottom: 4,
    },

    aboutheadingpddf: {
        fontSize: 12,
        color: '#909090',
        marginBottom: 4,
        marginLeft: 20,
    },
    profilepro: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    mgt: {
        marginRight: 'auto',
        marginLeft: 'auto',

    },
    listlcv: {
        color: '#787878',
        fontSize: 12,
    },
    listlcvdoc: {
        color: '#787878',
        fontSize: 12,
        paddingRight: 10,
        lineHeight: 18,
    },
    profilemapbtn: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
    },
    icmsection: {
        color: '#1B52DF',
        paddingTop: 2,
        paddingRight: 6,
    },
    namecompany: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    listinfo: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        marginBottom: 6,
    },
    listinfocompany: {
        marginBottom: 6,
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: "row",
    },
    sublistinfo: {
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: "row",
        marginBottom: 1,
        marginTop: 6,
    },
    listinfosub: {
        color: '#1B52DF',
    },
    bgsec: {
        backgroundColor: '#F5F5FA',
        paddingBottom: 0,
        height: '100%',
    },
    freelbtn: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 10,

        marginBottom: 0,
        width: '100%',
        padding: 10,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 50,
    },
    seeprofiletext: {
        color: '#1B52DF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
    },

});
