import React, { useEffect, useState } from 'react'
import { SafeAreaView, ImageBackground, Image, ScrollView, View, Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import ExpertLayout from '../ExpertLayout';
import { useRoute } from '@react-navigation/native';
import { getUser, setUser } from '../../../stores/userAsync';
import { GetCareer, useCategory, useUser } from '../../../stores/user';
import { useCarrerDetails } from '../../../Network/APIService';
import HTML from 'react-native-render-html';

export default function CareerTips(data: any) {

  const route = useRoute();

  const [user, setUser] = useUser()
  const [eduGetCareerlist, setGetCareerList] = useState(Array<GetCareer>());
  const cat_id = 'careertip_id';

  useEffect(() => {
    (async () => {
      let categorydetails = await useCarrerDetails(JSON.stringify(route.params))
      setGetCareerList(categorydetails)
    })();

  }, [route.params]);




  return (
    <ExpertLayout MessageTextBarHidden title="Career Tips" isChildren={true} disable={false}>
      {

        eduGetCareerlist?.map(function (item: GetCareer, index: number) {
          return (


            <View style={styles.bgimgsection}>
              <ImageBackground source={{ uri: item.image }} resizeMode="cover" style={styles.imagex}>
                <Text style={styles.productheading}>{item.title}</Text>
                <View style={styles.textcr}>
                  <Text style={styles.textb}>{item.created_date} | <Text style={styles.textcomment}>2k Comments</Text></Text>
                </View>
                <View style={styles.overlay} />
              </ImageBackground>
            </View>




          )
        })
      }

      {

        eduGetCareerlist?.map(function (item: GetCareer, index: number) {
          return (


            <View style={styles.ovlabout}>
              <HTML source={{ html: item.description }} />

            </View>




          )
        })
      }


      <View>
      </View>
    </ExpertLayout>
  )
}

const styles = StyleSheet.create({
  imagex: {
    height: 230,
    width: '100%',
  },
  textb: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 6,
  },
  textcomment: {
    color: '#1B52DF',
    fontSize: 10,
    marginBottom: 6,
  },
  deccareer: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '(0°,0%,0%)',
  },
  titlecrp: {
    fontWeight: 'bold',
    color: '#1B52DF',
    fontSize: 14,
    marginBottom: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  textcr: {
    paddingTop: 6,
    paddingLeft: 16,
    paddingBottom: 0,
    paddingRight: 20,
    position: 'relative',
    zIndex: 1,
  },
  pprotext: {
    textAlign: 'center',
    lineHeight: 18,
    fontSize: 13,
    paddingLeft: 12,
    paddingRight: 12,
  },
  selltextc: {
    paddingTop: 10,

  },
  sellheading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 6,
  },
  aboutdwn: {
    marginBottom: 10,
    backgroundColor: '#fff54',
    marginRight: 5,
    marginLeft: 18,
    padding: 36,
    paddingLeft: 35,
    paddingRight: 20,
    width: 300,
    borderRadius: 10,
  },
  dlabout: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  abntlist: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  ovlabout: {
    backgroundColor: '#F5F5FA',
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin: 0,
    padding: 20,
    paddingTop: 30,

  },
  abtsec: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  paraabt: {
    fontSize: 13,
    marginBottom: 12,
    lineHeight: 18,
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
    padding: 0,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 0,
    marginTop: 8,


  },
  submfga: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
    marginBottom: 160,
  },
  buttontext: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titileop: {
    paddingLeft: 26,
    fontWeight: 'bold',
  },
  homesection: {
    height: '100%',
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
    shadowColor: 'rgba(0, 0, 0, 0.9)',
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
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOpacity: 0.8,
    elevation: 4,
  },
  pgfull: {
    width: '100%',
    marginBottom: 20,
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
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 22,
    color: '#fff',
    paddingTop: 100,
    paddingHorizontal: 20,
    position: 'relative',
    zIndex: 1,
  },
  profilepro: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

});
