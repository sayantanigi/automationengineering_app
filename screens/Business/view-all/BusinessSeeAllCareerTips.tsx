import { Image, ScrollView, Dimensions, SafeAreaView, View, TouchableOpacity, Platform } from "react-native"
import { StyleSheet, Text} from 'react-native';
import { careersec } from "../../../constants/slides";
import { useNavigation } from "@react-navigation/native";
import TouchableRipple from "../../../components/TouchableRipple";
import RNLinearGradient from "../../../components/RNLinearGradient";
import BusinessLayout from "../BusinessLayout";
export default function SeeAllCareerTips() {
    const Navigation = useNavigation<any>()
    function gotoCareerTips() {
        Navigation.navigate('BusinessCareerTips')
    }
    const platform = Platform.OS
    return (
     
        <BusinessLayout title="All Career Tips" isChildren={true}>
                <View style={styles.carimg}>
                    {careersec.map((item, index) => {
                        return <View style={styles.scrollViewCareer} key={index}>
                            <View>
                            <Image source={item.image} style={styles.Careerimg} resizeMode='cover' />
                         
                            <View style={styles.textcr}>
                                <Text style={styles.titlecrp} numberOfLines={2}>{item.title}</Text>
                                <Text style={styles.textb}>{item.text} | <Text style={styles.textcomment}>{item.comment}</Text></Text>
                                <Text style={styles.deccareer} numberOfLines={4}>{item.dec}</Text>
                            </View>
                            </View>
                            <TouchableRipple onPress={gotoCareerTips} style={styles.wdtbtn}>
                                    <RNLinearGradient
                                        direction="column"
                                        style={styles.linearGradient}
                                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                                        <Text style={styles.buttontext} >Read More </Text>
                                    </RNLinearGradient>
                                </TouchableRipple>
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
    viewreadmore:{
        justifyContent:'center',
        display: 'flex',
        flexDirection: "row",
    },
    btnview: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: "Inter-Medium",
    },
    wdtbtn:{
        width:'50%',
        marginLeft:'auto',
        marginRight:'auto',
            },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
        fontFamily: "Inter-Medium",
    },
    carimg:{
      margin:0,
      marginBottom:40,
      padding:20,

    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        borderRadius: 50,
        marginTop: 28,
        marginBottom: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    deccareer: {
        fontSize: 12,
        lineHeight: 18,
        // fontWeight: '400',
        color: '000000',
        fontFamily: "Inter-Medium",
    },
    textb: {
        color: '#909090',
        fontSize: 10,
        marginBottom: 6,
        fontFamily: "Inter-Medium",
    },
    textcomment:{
        color: '#1B52DF',
        fontSize: 10,
        marginBottom: 6,
    },
    Careerimg:{
        height: 160,
        width: '100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    scrollViewCareer:{
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        marginBottom: 14,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    titlecrp:{
        fontWeight: 'bold',
        color: '#1B52DF',
        fontSize: 14,
        marginBottom:8,
        fontFamily: "Inter-Medium",
    },
    textcr:{
        paddingTop:16,
        paddingLeft:16,
        paddingBottom:0,
        paddingRight:20,
    },
});
