import { Image, ScrollView, Dimensions, SafeAreaView, View, Platform } from "react-native"
import { StyleSheet, Text} from 'react-native';
import {   servicessec } from "../../../constants/slides";
import BusinessLayout from "../BusinessLayout";
const { width } = Dimensions.get("window");
export default function ListFreelancers() {
    const platform = Platform.OS
    return (
      
        <BusinessLayout title="All Services" isChildren={true}>
            <View style={styles.paddg}>
                    {servicessec.map((item, index) => {
                        return  <View style={styles.scrollViewservice} key={index}>
                            <View style={styles.serviceflex}>
                            <Image source={item.image} style={styles.serviceimg} resizeMode='cover' />
                         
                            <View style={styles.textsr}>
                                <Text style={styles.titleservice}>{item.title}</Text>
                                <Text style={styles.dec}>{item.dec}</Text>
                            </View>
                            </View>
                            </View>
                      })}
                       </View>
                </BusinessLayout>
        
)
}

const styles = StyleSheet.create({
    homesection: {
        backgroundColor: '#F5F5FA',
        height:'100%',
      }, 
      serviceimg: {
        height: 160,
        width: 140,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    titleservice:{
        fontWeight: 'bold',
        color: '#1B52DF',
        fontSize: 12,
        marginBottom:8,
        fontFamily: "Inter-Medium",
    },
        paddg:{
        margin:0,
        marginBottom:30,
        padding:20,
        },
    dec: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        color: '(0°,0%,0%)',
        fontFamily: "Inter-Medium",
    },
    textsr:{
        paddingTop:16,
        paddingLeft:0,
        paddingBottom:20,
        paddingRight:20,
        width:160,
            },
      scrollViewservice: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        marginBottom: 14,
        backgroundColor: '#fff',
        // marginRight: 5,
        // marginLeft: 18,
        // width: 300,
        borderRadius: 10,
      
    },
    serviceflex:{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});
