import ExpertLayout from "./ExpertLayout";
import { Dimensions, FlatList, Image, ImageBackground, ListRenderItemInfo, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colorPrimary, colorPrimarySecond } from "../../constants/color";
import { useHomeListData } from "../../Network/APIService";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { GetCareer, GetOurservice, GetPost, GetUser, HomeListRespose } from "../../Network/HomeListApi";
import RNLinearGradient from "../../components/RNLinearGradient";
import TouchableRipple from "../../components/TouchableRipple";
import ProgressBar from "../../components/ProgressBar";
import SnackBar from "../../components/SnackBar";
import { BASE_URL } from "../../Network/URL";
import { setUser } from "../../stores/userAsync";


export default function ExpertDashboard() {
    const platform = Platform.OS
    const homeData = useHomeListData()
    const Navigation = useNavigation<any>()
    const [alert, setAlert] = useState("")
    const [loading, setLoading] = useState(false)

    // useEffect(() => {

    //    datacheck()



    // }, []);

    // async function datacheck(){

    //     setLoading(true)
    //     let response = await fetch(BASE_URL + "home/home_list", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })

    //     let json = await response.json()
    //      JSON.stringify(json);
    //     let getdata=json.result

    //     console.log(getdata.get_post)
    //    setgetCurrentPost(getdata.get_post)

    //     setLoading(false)

    // }
    function gotoalljobs() {
        Navigation.navigate('SeeAllJobs')
    }

    function gotoallservices() {

        Navigation.navigate('SeeAllServices')
    }

    function gotoallcareertips() {
        Navigation.navigate('SeeAllCareerTips')
    }
    async function gotoCareerTipsDetails(careertip_id: any) {


        Navigation.navigate('CareerTips', { careertip_id })
    }
    function gotojobdetails(post_id:any) {
        Navigation.navigate('ExpertsOpportunitiesDetails',{post_id})
    }



    function JobListLayout({ item }: ListRenderItemInfo<GetPost>) {
        const image = item.user_image ? { uri: item.user_image } : require("../../assets/images/default.png")
        return (

            
            <TouchableOpacity accessible={true} onPress={() => gotojobdetails(item.id)} activeOpacity={1}>
                <View style={styles.jobCard} >
                    <Image
                        style={styles.jobImage}
                        resizeMode="cover"
                        source={image}
                    />
                    <View style={styles.jobTextBox}>
                        <Text
                            style={styles.jobTitle}
                            numberOfLines={1}>
                            {item.post_title}
                        </Text>
                        <Text style={styles.jobBy}>
                            By {item.company_name}
                        </Text>
                        <Text
                            style={styles.jobDetails}
                            numberOfLines={2}>
                            {item.description?.replace(/(<([^>]+)>)/gi, "")}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }



    //     const image = item.profilePic ? { uri: item.profilePic } : require("../../assets/images/default.png")
    //     return (
    //         <View style={styles.vendorCard}>
    //             <View style={styles.vendorAvatar}>
    //                 <View style={{ width: 100, flexGrow: 1 }}>
    //                     <Text style={[styles.jobTitle]}>{item.companyname}</Text>
    //                     <Text style={[styles.jobBy]}>{item.address}</Text>
    //                 </View>
    //                 <Text></Text>
    //                 <Image
    //                     style={styles.vendorProfile}
    //                     resizeMode="cover"
    //                     source={image}
    //                 />
    //             </View>
    //             <Text numberOfLines={6}>{item.short_bio}</Text>

    //             <View style={{ marginTop: "auto", flexDirection: "row", gap: 7, justifyContent: "space-between" }}>
    //                 <Pressable style={{ width: '48%' }}>
    //                     <RNLinearGradient
    //                         direction="column"
    //                         style={styles.linearGradient}
    //                         colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
    //                         <Text style={styles.buttontext} >View Profile</Text>
    //                     </RNLinearGradient>
    //                 </Pressable>
    //                 <Pressable style={{ width: '48%' }}>
    //                     <ImageBackground
    //                         style={styles.buttonLight}
    //                         resizeMode="stretch"
    //                         source={require("../../assets/shadows/button.png")}>
    //                         <Text style={styles.textPrimary}>Job Posts</Text>
    //                     </ImageBackground>
    //                 </Pressable>
    //             </View>
    //         </View>

    //     )
    // }

    // Services list
    function serviceListLayout({ item }: ListRenderItemInfo<GetOurservice>) {
        // const image = item.icon ? { uri: item.icon } : require("../../assets/images/default.png")
        return (
            <View style={styles.scrollViewservice}>
                <View style={styles.serviceflex}>
                    <Image source={{ uri: item.icon }} style={styles.serviceimg} resizeMode='cover' />

                    <View style={styles.textsr}>
                        {/* <Text style={styles.titleservice} numberOfLines={1}>Website Development</Text> */}
                        <Text style={styles.dec} numberOfLines={5}>{item.description?.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
                    </View>
                </View>
            </View>

        )
    }
    // Service list end


    // career list
    function quickcareertripLayout({ item }: ListRenderItemInfo<GetCareer>) {
        const image = item.image ? { uri: item.image } : require("../../assets/images/default.png")
        return (
            <View style={styles.scrollViewCareer}>
                <View>
                    <Image source={image} style={styles.Careerimg} resizeMode='cover' />
                    <View style={styles.textcr}>
                        <Text style={styles.titlecrp} numberOfLines={2}>{item.title} </Text>
                        {/* <Text style={styles.textb}>May 29,2023 | <Text style={styles.textcomment}>10 Comments</Text></Text> */}
                        <Text style={styles.deccareer} numberOfLines={4}>{item.description?.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
                    </View>
                </View>

                <TouchableRipple style={styles.wdtg} onPress={() => gotoCareerTipsDetails(item.id)} >
                    <RNLinearGradient
                        direction="column"
                        style={styles.linearGradient}
                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                        <Text style={styles.buttontext} >Read More</Text>
                    </RNLinearGradient>
                </TouchableRipple>
            </View>


        )
    }
    // Service list end

    return (
        <ExpertLayout MessageTextBarHidden isChildren={true} disable={false}>
            <View style={styles.bdyhome}>
                <View
                    style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>
                        AES Opportunities
                    </Text>
                    <Pressable style={styles.buttonSmall} onPress={gotoalljobs}>
                        <Text style={styles.buttonSmallText}>View All</Text>
                    </Pressable>
                </View>
                <Text style={styles.subTitle}>
                    Look for the latest jobs and projects posted on
                    the portal.
                </Text>
            </View>
            <View>
                <View>
                    <FlatList
                        contentContainerStyle={{ paddingHorizontal: 6 }}
                        overScrollMode="never"
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={homeData.data?.get_post ?? []}
                        keyExtractor={item => item.id}
                        renderItem={JobListLayout}
                    />
                </View>
            </View>



            {/* service list */}
            <View style={styles.bdyhome}>
                <View
                    style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>
                        Our Services
                    </Text>
                    <Pressable style={styles.buttonSmall} onPress={gotoallservices}>
                        <Text style={styles.buttonSmallText}>View All</Text>
                    </Pressable>
                </View>
                <Text style={styles.subTitle}>
                    The marketplace for the most eligible
                    freelancers and vendors. Find the latest jobs in
                    the industry globally.
                </Text>
            </View>
            <View>
                <View>
                    <FlatList

                        contentContainerStyle={{ paddingHorizontal: 6 }}
                        overScrollMode="never"
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={homeData.data?.get_ourservice ?? []}
                        keyExtractor={item => item.id}
                        renderItem={serviceListLayout}
                    />
                </View>
            </View>
            {/* Services list end */}


            {/* Quick Carrer Trip */}
            <View style={styles.bdyhome}>
                <View
                    style={styles.sectionHead}>
                    <Text style={styles.sectionTitle}>
                        Quick Career Tips
                    </Text>
                    <Pressable style={styles.buttonSmall} onPress={gotoallcareertips}>
                        <Text style={styles.buttonSmallText}>View All</Text>
                    </Pressable>
                </View>
                <Text style={styles.subTitle}>
                    Review the latest updates and information's in the industry.
                </Text>
            </View>
            <View >
                <View>
                    <FlatList
                        contentContainerStyle={{ paddingHorizontal: 6 }}
                        overScrollMode="never"
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={homeData.data?.get_career ?? []}
                        keyExtractor={item => item.id}
                        renderItem={quickcareertripLayout}
                    />
                </View>
            </View>
            {/* Services list end */}



            {/* <View
                style={styles.sectionHead}>
                <Text style={styles.sectionTitle}>
                    Available Afrebay Vendors
                </Text>

                <Pressable style={styles.buttonSmall}>
                    <Text style={styles.buttonSmallText}>View All</Text>
                </Pressable>

            </View>
            <Text style={styles.subTitle}>
                Find the most eligible vendors within the
                portal.
            </Text>
            <View style={{ maxHeight: 380, overflow: "visible" }}>
                <View>
                    <FlatList
                        style={{ height: 500 }}
                        contentContainerStyle={{ paddingHorizontal: 6 }}
                        overScrollMode="never"
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={homeData.data?.get_users ?? []}
                        keyExtractor={item => item.userId}
                        renderItem={vendorListLayout}
                    />
                </View>
            </View> */}
            <ProgressBar loading={loading} />

            <SnackBar alert={alert} setAlert={setAlert} type="LONG" />

        </ExpertLayout>

    )
}
const styles = StyleSheet.create({
    sectionHead: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    sectionTitle: {
        fontFamily: "Inter-Bold",
        color: 'hsl(0, 0%, 0%)',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonSmall: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 100,
        color: '#1B52DF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 10,
        width: 80,
        padding: 4,
        borderRadius: 50,
        textTransform: 'uppercase',

    },
    wdtg: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonSmallText: {
        fontFamily: "Inter-Medium",
        color: colorPrimary,
        textAlign: 'center',
        fontSize: 12,
    },
    bdyhome: {
        padding: 20,
    },
    subTitle: {
        fontFamily: "Inter-Medium",
        color: 'rgba(0,0,0,0.5)',
        marginTop: 8,
        lineHeight: 18,
        letterSpacing: 0.8,
        fontSize: 13,
        // fontWeight: '400',

    },
    scrollViewservice: {
        width: Dimensions.get('window').width - 36,
        flexDirection: 'row',
        // padding: 10,
        marginBottom: 20,
        borderRadius: 20,
        marginRight: 12,
        marginLeft: 12,
        maxHeight: 140,

        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        backgroundColor: "#f5f5fa",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 4,

    },
    //     pddmht:{
    // padding:10,
    // margin:40,
    //     },
    serviceflex: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    serviceimg: {
        height: 140,
        width: 140,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    textsr: {
        paddingTop: 12,
        paddingLeft: 0,
        paddingBottom: 20,
        paddingRight: 20,
        width: 160,
    },
    titleservice: {
        fontWeight: 'bold',
        color: '#1B52DF',
        fontSize: 14,
        marginBottom: 8,
        fontFamily: "Inter-Medium",
    },
    dec: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        color: '(0°,0%,0%)',
        fontFamily: "Inter-Medium",
    },
    deccareer: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        color: '(0°,0%,0%)',
        fontFamily: "Inter-Medium",
    },

    jobCard: {
        width: Dimensions.get('window').width - 36,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 20,

        marginBottom: 10,
        maxHeight: 103,
        marginRight: 12,
        marginLeft: 12,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        backgroundColor: "#f5f5fa",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 4,
    },
    jobImage: {
        width: 80,
        height: 80,
        aspectRatio: 1,
        borderRadius: 15,
        marginRight: 10
    },
    jobTextBox: {
        width: 100,
        flexGrow: 1
    },
    jobTitle: {
        fontSize: 12,
        marginBottom: 4,
        fontFamily: "Inter-Bold",
        color: colorPrimary
    },
    jobBy: {
        color: "#909090",
        fontSize: 12,
        fontFamily: "Inter-Medium",
        marginBottom: 7
    },
    jobDetails: {
        fontFamily: "Inter-Medium",
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
    },
    vendorCard: {
        width: Dimensions.get('window').width - 36,
        padding: 10,
        borderRadius: 20,
        marginVertical: 14,
        maxHeight: 300,
        marginRight: 6,
        shadowColor: "rgb(62, 62, 104)",
        backgroundColor: "#f5f5fa",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,


    },
    vendorAvatar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    vendorProfile: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    linearGradient: {
        width: '100%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: "Inter-Bold"
    },
    buttonLight: {
        width: '100%',
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    textPrimary: {
        color: colorPrimary,
        fontFamily: "Inter-Bold"
    },

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
    },
    textb: {
        color: '#909090',
        fontSize: 10,
        marginBottom: 6,
    },
    textcomment: {
        color: '#1B52DF',
        fontSize: 10,
        marginBottom: 6,
    },
})