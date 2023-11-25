import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import TouchableRipple from "../../components/TouchableRipple";
import RNLinearGradient from '../../components/RNLinearGradient';
import ExpertLayout from './ExpertLayout';
import TextInput from "../../components/TextInput";
import Textarea from '../../components/Textarea';
import { getPostdetails } from '../../Network/APIService';
import { GetCareer, PostData } from '../../Network/HomeListApi';
import { useUser } from '../../stores/user';
import { getUser } from '../../stores/userAsync';
import { BASE_URL } from '../../Network/URL';
import SnackBar from '../../components/SnackBar';


export interface userValue {
    postjob_id: string
    user_id: string
    bid_amount: string
    currency: string
    duration: string
    description: string
  }
  export interface ProjectId {
    post_id: string
  }
export default function ExpertsOpportunitiesDetails() {
    const route = useRoute();
    const [user, setUser] = useUser()
    const [eduGetCareerlist, setGetCareerList] = useState<PostData>();
    const Navigation = useNavigation<any>()
    const[getpostid, setPostid]=useState<ProjectId>();
    const [alert, setAlert] = useState("")
    const id = (route.params) as any;
    const [formData, setFormData] = useState<userValue>({
        postjob_id: "",
        user_id: "",
        bid_amount: "",
        currency: "USD ($)",
        duration: "",
        description: "",
        })
    useEffect(() => {
     (async () => {
            let categorydetails = await getPostdetails(JSON.stringify(route.params))
            console.log(categorydetails)
            setGetCareerList(categorydetails)
            setUser(await getUser())
            setPostid(id)
           
        })();

    }, [route.params]);
   

    function gotoprofile() {
        Navigation.navigate('Profile')
    }
   
    function handleValueChange(value: string, key: string) {
        setFormData({ ...formData, [key]: value })
    }
    async function submitData(){
        let response = await fetch(BASE_URL + "save_postbid", {
            method: "POST",
            body: JSON.stringify({...formData , user_id: String(user?.userId)as any, postjob_id: String(getpostid?.post_id)}),
           headers: {
                'Content-Type': 'application/json'
            }
        })

        let json = await response.json()
        if(json.status==="success"){

            setAlert(json.result)
        } else {
            setAlert(json.result)

        }
    }

    return (
        <ExpertLayout MessageTextBarHidden title="Job Bid" isChildren={true} disable={false}>
            <View style={styles.jobdet}>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Job Title</Text>

                    <Text style={styles.subparaheading}>{eduGetCareerlist?.post_title}</Text>
                 </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Description</Text>
                    <Text style={styles.subpara}>{eduGetCareerlist?.description}</Text>
                    
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Required key skills</Text>
                    <Text style={styles.subpara}>{eduGetCareerlist?.required_key_skills}</Text>
                </View>

                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Application Deadline Date</Text>
                    <Text style={styles.subpara}>{eduGetCareerlist?.appli_deadeline}</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Categories</Text>
                    <Text style={styles.subpara}>{eduGetCareerlist?.category_name}</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Sub Categories</Text>
                    <Text style={styles.subpara}>{eduGetCareerlist?.sub_category_name}</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Charges</Text>
                    <Text style={styles.subpara}>{eduGetCareerlist?.charges}</Text>
                </View>
                <View style={styles.jobmargin}>
                    <Text style={styles.subtitle}>Duration</Text>
                    <Text style={styles.subpara}>{eduGetCareerlist?.duration}</Text>
                </View>

                <View style={styles.addfulsection}>



                    <View style={styles.pgfull}>
                        <Text style={styles.titileop}>Bid Amount *</Text>

                        <View style={styles.bidamout}>
                            <View style={styles.pgfullbid}>
                                <TextInput placeholder="USD" />
                            </View>
                            <View style={styles.experft}>
                                <TextInput placeholder="Enter Bid Amount" 
                                keyboardType = 'numeric'
                                onChangeText={(text) => handleValueChange(text, "bid_amount")}
                                />
                            </View>
                        </View>

                    </View>


                    <View style={styles.pgfull}>
                        <Text style={styles.titileop}>Duration</Text>
                        <TextInput
                            placeholder="Enter Duration"
                            onChangeText={(text) => handleValueChange(text, "duration")}
                        />
                    </View>
                    <View style={styles.pgfull}>
                        <Text style={styles.titileop}>Details</Text>
                        <Textarea
                        onChangeText={(text) => handleValueChange(text, "description")}
                            placeholder="Enter Description"
                        />
                    </View>

                    <TouchableRipple onPress={submitData}style={styles.rthta}>
                        <RNLinearGradient
                            direction="column"
                            style={styles.linearGradient}
                            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                            <Text style={styles.buttontext} >Submit</Text>
                        </RNLinearGradient>
                    </TouchableRipple>

                </View>
            </View>
            <SnackBar alert={alert} setAlert={setAlert} type="LONG" />
        </ExpertLayout>

    )
}

const styles = StyleSheet.create({
    homesection: {
        backgroundColor: '#F5F5FA',
        height: '100%',
    },
    subtitle: {
        color: '#909090',
        fontSize: 12,
        marginBottom: 4,
        fontFamily: "Inter-Medium",
    },
    submfga: {
        marginLeft: 20,
        marginRight: 20,
    },
    wdtg: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    experft: {
        width: '65%',
        marginLeft: 10,
    },
    bidamout: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    rthta: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    titileop: {
        paddingLeft: 4,
        fontWeight: 'bold',
    },
    pgfullbid: {
        width: '30%',
    },
    pgfull: {
        width: '100%',
        marginBottom: 12,
        marginLeft: 0,
    },
    addfulsection: {
        backgroundColor: '#F5F5FA',
        marginTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        margin: 0,
        padding: 0,
        paddingTop: 30,
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    subpara: {
        color: '#000',
        fontSize: 12,
        lineHeight: 20,
        fontFamily: "Inter-Medium",
    },
    jobmargin: {
        marginBottom: 14,
    },
    subparaheading: {
        color: '#1B52DF',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: "Inter-Medium",
    },
    jobdet: {
        padding: 20,
    },
});
