import { Dimensions, Image, StyleSheet, Text, View, useColorScheme, Platform } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Slideproduct, slidesx } from "../../constants/slides";
import { FC, useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import RNLinearGradient from "../../components/RNLinearGradient";
import ExpertLayout from "./ExpertLayout";
import TextInput from "../../components/TextInput";
import Textarea from "../../components/Textarea";
import { API_URLS } from "../../Network/URL";
import { PostData, ProdDetail, ProdImage } from "../../Network/HomeListApi";
import HTML from 'react-native-render-html';
import { TouchableRipple } from "react-native-paper";
import SnackBar from "../../components/SnackBar";
export interface userValue {
  p_id: string
  p_name: string
  name: string
  email: string
  details: string
}

const platform = Platform.OS
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 5 / 4);

const ProductDetails = () => {
  const route = useRoute();
  const [alert, setAlert] = useState("")
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const carouselRef = useRef<Carousel<Slideproduct>>(null);
  const colorScheme = useColorScheme();
  const Navigation = useNavigation<any>()
  const [getProdDetail, setProdDetail] = useState(Array<ProdDetail>())
  const [getProdImage, setProdImage] = useState(Array<ProdImage>())
  const [formData, setFormData] = useState<userValue>({
    p_id: "",
    p_name: "",
    name: "",
    email: "",
    details: "",
  })
  useEffect(() => {
    let producId = route.params;
    (async () => {
      let response = await fetch(API_URLS.getProductdetails, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ prod_id: producId })
      })

      let payload = await response.json()
      setProdDetail(payload.result.prod_details)
      setProdImage(payload.result.prod_images)

    })();


  }, [route.params]);
  function handleValueChange(value: string, key: string) {
    setFormData({ ...formData, [key]: value })
  }

  async function submitdata() {

    let response = await fetch(API_URLS.getProductContact, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ ...formData, p_id: route.params, p_name: getProdDetail[0].prod_name })
    })

    let payload = await response.json()
    
    if (payload.status === "success") {
      setAlert(payload.result)
      
    }

  }

  const renderItem: FC<{
    item: ProdImage;
  }> = ({ item }): JSX.Element => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.prod_image }} style={styles.imgonboarding} />
      </View>
    );
  };
  return (
    <ExpertLayout MessageTextBarHidden title="Product Details" isChildren={true} disable={false}>
      <View style={styles.container}>
        <View style={styles.slidetop}>
          <Carousel
            autoplay={true}
            loop={true}
            scrollEnabled={true}
            ref={carouselRef}
            data={slidesx}
            renderItem={renderItem}
            scrollAnimationDuration={1000}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index: number) => setActiveSlide(index)}
          />
        </View>

        {
          getProdDetail?.map(function (item: ProdDetail, index: number) {
            return (

              <View style={styles.productdetails}>
                <Text style={styles.productdetailsheading}><HTML source={{ html: item.prod_name }} /></Text>
                <Text style={styles.productpara}>vendor <Text style={styles.vercom}>Vendor's Company</Text></Text>
                <Text style={styles.productpx}><HTML source={{ html: item.prod_description }} /></Text>
              </View>
            )
          })}




        <View style={styles.pgfull}>
          <Text style={styles.titileop}> Name *</Text>
          <TextInput
            placeholder="Enter name"
            onChangeText={(text) => handleValueChange(text, "name")}
          />
        </View>

        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Email *</Text>
          <TextInput
            placeholder="Enter name"
            onChangeText={(text) => handleValueChange(text, "email")}
          />
        </View>

        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Details</Text>
          <Textarea
            placeholder="Enter comments"
            onChangeText={(text) => handleValueChange(text, "details")}
          />
        </View>
        <TouchableRipple onPress={submitdata}>
          <View style={styles.submfga}>

            <RNLinearGradient
              direction="column"
              style={styles.linearGradient}
              colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
              <Text style={styles.buttontext} >Submit</Text>
            </RNLinearGradient>

          </View>
        </TouchableRipple>
      </View>
      <SnackBar alert={alert} setAlert={setAlert} type="LONG" />
    </ExpertLayout>

  );
};

const styles = StyleSheet.create({
  productpx: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
  vercom: {
    color: '#1B52DF',
  },

  slidetop: {
    marginTop: 20,
    marginBottom: 20,
  },
  productpara: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'center',
    color: '#909090',
  },
  productdetails: {
    padding: 20,
  },
  productdetailsheading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  camerabg: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 50,
    left: 200,
    marginTop: 8,
    shadowColor: '#5A85F3',
    shadowOpacity: 1,
    elevation: 10,
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
  submfga: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  buttontext: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titileop: {
    paddingLeft: 6,
    fontWeight: 'bold',
  },
  homesection: {
    backgroundColor: '#F5F5FA',
  },
  bgimgsection: {
    marginBottom: 10,
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
    borderWidth: 1,
    // borderColor:'#ebebeb',
    borderColor: Platform.OS === 'android' ? '#fff' : '#ebebeb',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 2, 0)',
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
    // textAlignVertical: 'top',
    borderWidth: 1,
    // borderColor:'#ebebeb',
    borderColor: Platform.OS === 'android' ? '#fff' : '#ebebeb',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 2, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
  },
  pgfull: {
    width: '90%',
    marginBottom: 12,
    marginLeft: 15,
  },
  addfulsection: {
    backgroundColor: '#F5F5FA',
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin: 0,
    padding: 0,
  },
  productdwn: {
    padding: 22,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
  },
  productheading: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
    color: '#fff',
    paddingTop: 120,
    position: 'relative',
    zIndex: 1,
  },
  profilepro: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5FA',
  },
  textContainer: {
    justifyContent: 'center',
    display: 'flex',
  },
  themeTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
    color: '#1B52DF',
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  imgonboarding: {
    width: 190,
    height: 240,
    resizeMode: 'contain',
  },
  themeTextpara: {
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 16,
    fontWeight: "normal",
    color: '#000',
    lineHeight: 28,
  },
  slide: {
    marginLeft: -20,
    marginRight: 0,
    // marginTop:100,
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 32,
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
  text: {
    fontSize: 16,
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
    justifyContent: 'flex-end',
    marginTop: 50,
    borderRadius: 100,
    marginBottom: 20,
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
    shadowOpacity: 0.8,
    elevation: 4,
  },
  buttonskip: {
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOpacity: 0.8,
    elevation: 4,
    color: "#AEAEAE",
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    width: '30%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginEnd: 20,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 100,
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
    borderRadius: 50,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOpacity: 0.8,
    elevation: 4,

  },

});
export default ProductDetails;
