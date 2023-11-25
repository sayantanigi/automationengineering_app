import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme, Platform } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Slide, slides } from "../../../constants/slides";
import { FC, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import RNLinearGradient from "../../../components/RNLinearGradient";
import ExpertLayout from "../BusinessLayout";
const { width } = Dimensions.get("window");
export default function BusinessSubscription() {
    const platform = Platform.OS
    // const { width } = Dimensions.get("window");
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const carouselRef = useRef<Carousel<Slide>>(null);
    const colorScheme = useColorScheme();
    const Navigation = useNavigation<any>()
    function gotosubscriptiondone() {
        Navigation.navigate('BusinessSubscriptionDone')
    }
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const renderItem: FC<{
    item: Slide;
    }> = ({ item }): JSX.Element => {
    return (
        
            <View style={styles.sufgh}>
                <RNLinearGradient 
                 direction="column"
                 style={styles.linearGradientview} 
                   colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']}>
                    <View style={styles.textContainer}>
                    <Text style={[styles.themeTextStyle]}> Free Subscription</Text>
                    <Text style={[styles.themeTextpara]}> Trial Pack</Text>
                    <Text style={[styles.themeTextStyle]}>7 Days</Text>
                    <Text style={[styles.themeTextpara]}>$0.00</Text>
                    <View style={[styles.subdata]}>
                    <View style={[styles.plancricle]}></View>
                    <Text style={[styles.planlist]}>  This plan is only good for seven days</Text>
                    </View>
                    <View style={[styles.subsunc]}>
                    <View style={[styles.plancricle]}></View>
                    <Text style={[styles.planlist]}> All functionalities will be enabled</Text>
                    </View>
                    <TouchableOpacity onPress={gotosubscriptiondone} activeOpacity={0.9}>
                        <View style={styles.freelbtn}>
                        <Text style={styles.freelbtnchoose}>
                        Choose
                        </Text>
                        </View>
                      </TouchableOpacity> 
                    </View>
                  </RNLinearGradient>
                </View>

    );
};

return (
        <ExpertLayout title="Subscription" isChildren={true}>   
       <View style={[styles.heading]}>
             <Text  style={[styles.texthedinbg]}> Grab The Latest AES Expert Gigs Today!</Text>
                 <Text style={[styles.textparat]}>
                  Find the most appropriate freelancers for your job from a verity of resources and global workforce.
                </Text>
        </View>
        <Carousel
            ref={carouselRef}
            data={slides}
            renderItem={renderItem}
            scrollAnimationDuration={1000}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index: number) => setActiveSlide(index)}
        />  
        <View style={[styles.sdcvbwqe]}>
             <Pagination
                    dotsLength={slides.length}
                    activeDotIndex={activeSlide}
                    dotStyle={styles.dotStyle}
                    inactiveDotOpacity={0.8}
                    inactiveDotScale={0.6}
                    />
              </View>
              </ExpertLayout>
);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5FA',
    },
    textContainer: {
        justifyContent: 'center',
        display: 'flex',
        paddingTop:20,
    },
    homesection: {
        backgroundColor: '#F5F5FA',
      },
      sufgh:{
        height:'100%',
      },
      sdcvbwqe:{
// marginBottom:110,
      },
    textparat:{
fontSize:13,
textAlign:'center',
lineHeight:18,
    },
    heading:{
   padding:30,
   textAlign:'center',
    },
    texthedinbg:{
        fontSize:20,
        fontWeight:'700',
        textAlign:'center',
        color:'#1B52DF',
        paddingLeft:50,
        paddingRight:50,
        marginBottom:10,
    },
    subdata:{
    paddingTop:30,
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: "row",
    paddingLeft:20,
    paddingRight:30,
    marginBottom:12,

    },
    freelbtn: {
        backgroundColor : '#fff',
        shadowRadius: 50 ,
        marginTop: 18,
        marginBottom:20,
        width: '70%',
        marginLeft:'auto',
        marginRight:'auto',
       
        padding: 14,
        borderRadius: 50,
        textTransform:'uppercase',
    
    },
    freelbtnchoose:{
        color: '#222',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:14,
    },
    subsunc:{
paddingBottom:30,
justifyContent: 'flex-start',
display: 'flex',
flexDirection: "row",
paddingLeft:20,
paddingRight:30,
    },
    plancricle:{
width:14,
height:14,
backgroundColor:'#fff',
borderRadius:50,
marginTop:4,
    },
    planlist:{
        padding:2,
        textAlign:'left',
        fontSize:13,
        color:'#fff',
        lineHeight:22,
    },
    themeTextStyle: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 2,
        color: 'rgba(255, 255, 255, 0.50)',
        marginBottom: 20,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    linearGradientview:{
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        padding: 0,
        borderRadius: 40,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom: 10,
        height:'100%',
    },
    imgonboarding: {
        width: 124,
        height: 124,
        marginBottom: 100,
    },
    themeTextpara: {
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 22,
        fontWeight: "700",
        color: '#fff',
        lineHeight: 28,
    },
    slide: {
        backgroundColor:'#FEFDFD',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        width: Dimensions.get("window").width,
    },

  
    lightThemeText: {
        color: '#242c40',
    },
 
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 16,
        marginRight: 16,
        textAlign: 'left',
    },
  
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    skipintro: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent:'flex-end',
        marginTop: 50,
        borderRadius: 100,
        marginBottom:20,
    },
    button: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginEnd: 16,
        marginBottom: 40,
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
        shadowColor: 'rgba(0, 0, 0, 0.9)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        elevation: 4,
    },
   
    buttonText: {
        color: '#1B52DF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paginationContainer: {
        paddingTop: 8,
        paddingBottom: 16,
        justifyContent: 'flex-start',
    },
    dotStyle: {
        width: 18,
        height: 18,
        borderRadius: 10,
        marginHorizontal: 8,
        backgroundColor: '#fff',
        // backgroundColor: Platform.OS === 'android' ? '#fff' :  '#ddd',
        // shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2,
        borderWidth: 1,
        // borderColor: "hsla(0,0%,100%,0.01)"

    },
});
