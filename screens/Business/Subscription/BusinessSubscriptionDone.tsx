import React from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';
import RNLinearGradient from '../../../components/RNLinearGradient';
import ExpertLayout from '../BusinessLayout';

export default function ExpertSubscriptionDone() {
    const Navigation = useNavigation<any>()
    function gotoeditprofile() {
        Navigation.navigate('BusinessEditProfile')
    }

    function gotoafterSubscription() {
        Navigation.navigate('AfterExpertSubscription')
    }
    const platform = Platform.OS
    return (
        <SafeAreaView style={styles.homesection}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.thankstext}>
                    <Text style={styles.thankstexthj}>Thanks!</Text>
                </View>
                <View style={styles.flbtg}>
                    <TouchableRipple >
                   <RNLinearGradient style={styles.crieleBtn}
                    direction="column"
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                   <Octicons name="check" size={28} color="white" />
                  </RNLinearGradient>
                </TouchableRipple>
                    <View style={styles.thheading}>
                        <Text style={styles.textsub}> Thank You For The Subscription.
                        </Text>
                        <Text style={styles.textsubpara}>Your subscription information will be displayed under the subscription menu.s</Text>
                    </View>
                    <View style={styles.fullfreelan}>
                        <TouchableOpacity  style={styles.mgta}  activeOpacity={0.9}>
                           <View style={styles.freelbtn} >
                            <Text style={styles.freelbtntext}>
                                Download Invoice
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={gotoeditprofile} activeOpacity={0.9}>
                            <RNLinearGradient
                         direction="column"
                        style={styles.linearGradient}
                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                      <Text style={styles.buttontext} >Update Your Profile</Text>
                       </RNLinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    crieleBtn: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 100,
        textAlign: 'center',
        // elevation: 10,
    },
    homesection: {
        backgroundColor: '#F5F5FA',
      },
    textsubpara: {
        color: '#909090',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 20,
        fontWeight: 'normal',
    },
    mgta:{
marginBottom:10,
    },
    thheading:{
paddingTop:20,
    },
    flbtg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5FA',
        padding: 30,
        paddingBottom:90,
        paddingTop: 60,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    thankstexthj: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
    },
    // wdtg: {
    //     width: '90%',
    // },
    thankstext: {
        minHeight: 320,
        paddingTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B52DF',
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
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
    fullfreelan: {
        width: '80%',
        marginTop: 10,

    },

    textsub: {
    color: '#222',
    fontWeight: '700',
    fontSize:16,
    textAlign:'center',
    marginBottom:12,
},

    freelbtn: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 18,
        marginBottom: 0,
        width: '100%',
        padding: 14,
        borderRadius: 50,
        textTransform: 'uppercase',
    },
    freelbtntext:{
        color: '#1B52DF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
