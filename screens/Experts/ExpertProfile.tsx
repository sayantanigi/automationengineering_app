import { Text, Image, View, TouchableOpacity, Platform, useAnimatedValue } from 'react-native'
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import ExpertLayout from './ExpertLayout';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useUser } from '../../stores/user';
import { getUser } from '../../stores/userAsync';
import { useEducationPost, useWorkList, userseProfile } from '../../Network/APIService';
import { EducationList, Userinfo, WorkList } from '../../Network/HomeListApi';
interface userValue {
    user_id: string
    

}
export default function ExpertProfile() {
    const [user, setUser] = useUser()
    const homeData = userseProfile('')
    const [profiledata, setProfiledata] = useState<Userinfo | null>(null)
    const [educationlist, setEducationList] = useState<EducationList | null>(null)
    const [worklist, setWorkList] = useState<WorkList | null>(null)
    const [formData, setFormData] = useState<userValue>({
        user_id: ""
       
    })
  
    useEffect(() => {
        (async () => {

            setUser(await getUser())
            let userId = user?.userId;
            let userdata =await  userseProfile(JSON.stringify({user_id: userId}))
          
             setProfiledata(userdata[0])

            let educationListdata  = await useEducationPost(JSON.stringify({user_id: userId}))
            setEducationList(educationListdata[0])
            
            let workdata=  await useWorkList(JSON.stringify({user_id: userId}))
            setWorkList(workdata[0])
             //setProfiledata()
        })();

    }, []);


    const Navigation = useNavigation<any>()
    function gotoEditProfile() {
        Navigation.navigate('ExpertEditProfile')
    }
    const platform = Platform.OS
    return (
        <ExpertLayout MessageTextBarHidden isChildren={true} disable={false}>
            <View>
                <View style={styles.productdwn}>
                    <Image source={{uri: profiledata?.profilePic}} style={styles.profilepro} />
                </View>
                <View>
                    <Text style={styles.namecompany}>
                        {profiledata?.firstname+" "+profiledata?.lastname}
                    </Text>
                </View>
                <View style={styles.listinfo}>
                    <Ionicons name="location" style={styles.icmsection} />
                    <Text style={styles.listlcv}>
                       {profiledata?.address}
                    </Text>
                </View>
            </View>

            <View style={styles.profilemapbtn}  >
                <TouchableOpacity onPress={gotoEditProfile} activeOpacity={0.9}>
                    <View style={styles.freelbtn}>
                        <Text style={styles.seeprofiletext}>
                            Edit Your Profile
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>


            {/* see on map end */}
            <View style={styles.marginfl} >
                <View style={styles.pdsection} >
                    <View style={styles.aboutbusn} >
                        <Text style={styles.aboutheadingpf}>About this Expert</Text>
                        <Text style={styles.aboutparapf}>
                            {profiledata?.short_bio}
                        </Text>
                    </View>
                </View>

                {/* Jobs from Business Network end */}


                {/* Education start */}
                <View style={styles.pdsection} >
                    <Text style={styles.aboutheadingpf}>Education</Text>
                    <View style={styles.jobsnetwork} >
                        <Text style={styles.jobsnetworkheading} >{educationlist?.education}</Text>
                        <View style={styles.sublistinfo}>
                            <FontAwesome name="graduation-cap" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                               {educationlist?.college_name}
                            </Text>
                        </View>
                        <View style={styles.sublistinfo}>
                            <MaterialIcons name="date-range" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                               {educationlist?.passing_of_year}
                            </Text>
                        </View>
                        <View style={styles.sublistinfo}>
                            <Ionicons name="document-text-sharp" style={styles.icmsection} />
                            <Text style={styles.listlcvdoc}>
                               {educationlist?.description}
                            </Text>
                        </View>
                    </View>
                </View>
                {/* Education end */}


                {/* Work & Experience start */}
                <View style={styles.pdsection} >
                    <Text style={styles.aboutheadingpf}>Work & Experience</Text>
                    <View style={styles.jobsnetwork} >
                        <Text style={styles.jobsnetworkheading} >{worklist?.designation}</Text>
                        <View style={styles.sublistinfo}>
                            <FontAwesome name="graduation-cap" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                               {worklist?.company_name}
                            </Text>
                        </View>
                        <View style={styles.sublistinfo}>
                            <MaterialIcons name="date-range" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                                {worklist?.to_date}
                            </Text>
                        </View>
                        <View style={styles.sublistinfo}>
                            <Ionicons name="document-text-sharp" style={styles.icmsection} />
                            <Text style={styles.listlcvdoc}>
                                {worklist?.description}
                                </Text>
                        </View>
                    </View>
                </View>
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
                {/* <View style={styles.pdsection} >
                    <View style={styles.aboutbusn} >
                        <Text style={styles.aboutheadingpf}>Candidate overview</Text>
                        <View style={styles.sublistinfo}>
                            <FontAwesome name="transgender" style={styles.icmsection} />
                            <Text style={styles.listlcv}>
                                Gender <Text style={styles.listinfosub}> Male</Text>
                            </Text>
                        </View>
                    </View>
                </View> */}
                {/* Professional skills end */}

            </View>
        </ExpertLayout>
    )
}

const styles = StyleSheet.create({
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
        marginTop: 2,
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
        // marginBottom:100,
        marginBottom: Platform.OS === 'android' ? 40 : 100,
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
        marginBottom: 40,
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
        borderWidth: 1,
        // borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#f1f1f1',
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
        borderWidth: 1,
        // borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#f1f1f1',
        shadowOpacity: 0.8,
        elevation: 4,
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '40%',
        padding: 14,
        borderRadius: 50,
        marginTop: 8,
        shadowColor: '#5A85F3',
        shadowOpacity: 1,
        elevation: 10,

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
        marginBottom: 0,
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 10,
        marginTop: 8,
    },
    companyinfo: {
        marginBottom: 10,
        padding: 0,
        borderRadius: 10,
        marginTop: 10,
    },

    pdsection: {
        padding: 18,
        paddingBottom: 0,
        // marginBottom:40,
    },
    aboutparapf: {
        fontSize: 13,
        color: '#222',
        marginBottom: 0,
        lineHeight: 22,

        fontFamily: "Inter-Medium",
    },
    aboutheadingpf: {
        fontSize: 12,
        color: '#909090',
        fontFamily: "Inter-Medium",
        marginBottom: 4,
        lineHeight: 26,
    },
    profilepro: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    mgt: {
        marginRight: 10,
    },
    listlcv: {
        color: '#787878',
        fontSize: 12,
        fontFamily: "Inter-Medium",
    },
    listlcvdoc: {
        color: '#787878',
        fontSize: 12,
        paddingRight: 10,
        lineHeight: 18,
        fontFamily: "Inter-Medium",
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

        fontFamily: "Inter-Medium",
    },
    namecompany: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 6,
        fontFamily: "Inter-Medium",
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
        paddingBottom: 100,
    },
    freelbtn: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 10,
        marginBottom: 0,
        color: '#1B52DF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        width: '100%',
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 50,
    },
    seeprofiletext: {
        color: '#1B52DF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,

    },

});
