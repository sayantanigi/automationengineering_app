import React from 'react'
import { SafeAreaView,  ScrollView, View, Text, TouchableOpacity, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import ExpertLayout from '../ExpertLayout';
import RNLinearGradient from '../../../components/RNLinearGradient';

export default function AfterSubscription() {
  const platform = Platform.OS
  return (
    <ExpertLayout isChildren={true}>
        <View style={styles.aftersection}>
        <View style={[styles.headingactive]}>
             <Text style={[styles.texthedinbgactive]}> Active Plan </Text>
                 <Text style={[styles.textparatactive]}>
                 An Active Plan is a Plan where your departure
                    has been confirmed. Only one Plan can be
                    Active at a time.
                </Text>
             </View>
              <View style={styles.centerafter}>
               <CircularProgress
                        value={164}
                        radius={90}
                        duration={2000}
                        progressValueColor={'#1B52DF'}
                        maxValue={200}
                        title={'Days left'}
                        titleColor={'#1B52DF'}
                        titleStyle={{ fontWeight: 'bold', fontSize:18, }}
                        activeStrokeColor={"#1B52DF"}
                        inActiveStrokeColor={"#ddd"}
                        activeStrokeSecondaryColor={"#5A85F3"}
                        activeStrokeWidth={5}
                        inActiveStrokeWidth={5}
                        circleBackgroundColor={"#fff"}
                    />
               </View>
                <View style={styles.liniannualpack}> 
                <View style={styles.justwosection}>
                    <View>
                   
                    <RNLinearGradient style={styles.linearGradientactive}
                    direction="column"
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                     <View style={styles.viewdf}>
                      <Text style={styles.annualheading}>Annual Pack</Text>
                      <View style={styles.transectionx}>
                      <Text style={styles.trantext}>Transaction ID</Text>
                      <Text style={styles.transubtext}>sub_12368_Czfg</Text>
                      </View>
                       <View style={styles.fullsubheaing}>
                        <View style={styles.leftgh}>
                        <Text  style={styles.trantext} >
                             Subscription  Fee
                        </Text>
                        <Text style={styles.transubtext}>$2850.00</Text>
                        </View>
                        <View>
                        <Text style={styles.trantext}>
                        Payment Date
                        </Text>
                        <Text style={styles.transubtext}>$2850.00</Text>
                        </View>
                        </View>
                    </View>
                    </RNLinearGradient>
                    </View>
                        <View style={styles.exprsection}>
                        <Text style={styles.trantextexpiry}>Expiry Date</Text>
                        <View style={styles.exprft}>
                        <Text style={styles.datesec}>DEC</Text>
                        <Text style={styles.datesec}>22</Text>
                        <Text style={styles.datesec}>2024</Text>
                        </View>
                        </View>
                    </View>
                    </View>
                    <View style={styles.fullfreelan}>
                        <TouchableOpacity activeOpacity={0.9}>
                              <View style={styles.freelbtn} >
                              <Text style={styles.downloadinvtext}>
                                Download invoice
                                </Text>
                              </View>
                        </TouchableOpacity>
                        </View>
                      </View>
          </ExpertLayout>
)
}

const styles = StyleSheet.create({
    homesection: {
        backgroundColor: '#F5F5FA',
        height:'100%',
      },
      viewdf:{
         padding:10,
      },
      fullfreelan: {
        width: '60%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 0,
        marginBottom:Platform.OS === 'android' ? 40 :  60,
    },
    freelbtn: {
      shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 18,
        marginBottom: 0,
      
        width: '100%',
        padding: 14,
        borderRadius: 50,
      
    },
    downloadinvtext:{
      alignItems: 'flex-end',
      color: '#1B52DF',
      textAlign: 'center',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
      leftgh:{
      marginRight:4,
      },
      exprft:{
        paddingTop:10,
      },
      datesec:{
      fontSize:26,
      textAlign:'center',
      fontWeight:'700',
      color:'#1B52DFs',
      },
      justwosection:{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
      },
      exprsection:{
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        // marginBottom: 10,
        marginTop:22,
        backgroundColor: '#fff',
        marginRight: 5,
        marginLeft: 18,
        paddingTop:18,
        width: 100,
        height:170,
        borderRadius: 10,
      },
      trantext:{
color:'#ebebeb',
marginBottom:4,
fontSize:12,
maxWidth:100,
      },
      trantextexpiry:{
        color:'#909090',
        marginBottom:4,
        fontSize:12,
        textAlign:'center',
      },
      transectionx:{
marginBottom:6,
      },
      fullsubheaing:{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
      },
      transubtext:{
        color:'#fff',
        marginBottom:4,
        fontSize:14,
      },
      annualheading:{
color:'#fff',
fontSize:16,
fontWeight:'bold',
marginBottom:12,
      },
      aftersection:{
height:'100%',
      },
      liniannualpack:{
padding:20,
      },
      texthedinbgactive:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'left',
        color:'#1B52DF',
        marginBottom:6,
    },
    centerafter:{
marginLeft:'auto',
marginRight:'auto',
    },
    textparatactive:{
        fontSize:13,
        textAlign:'left',
        lineHeight:18,
        color:'#909090',
            },
            headingactive:{
        padding:20,
        paddingRight:20,
       paddingBottom:40,
        textAlign:'center',
         },

         linearGradientactive:{
            textAlign: 'center',
            fontWeight: "bold",
            // width: '100%',s
            padding: 12,
            paddingTop:18,
            borderRadius: 10,
            marginTop: 20,
            marginLeft:'auto',
            marginRight:'auto',
            marginBottom: 10,
            shadowOpacity: 1,
            
        },
});
