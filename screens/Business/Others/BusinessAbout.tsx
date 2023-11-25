import React from 'react'
import { SafeAreaView, ImageBackground, Image,ScrollView, View, Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../../assets/images/about.png"
import RNLinearGradient from '../../../components/RNLinearGradient';
import BusinessLayout from '../BusinessLayout';

export default function BusinessAbout() {
  return (

    <BusinessLayout title="About Us" isChildren={true}>
              <View style={styles.bgimgsection}>
                 <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                 <Text style={styles.productheading}>ABOUT USss</Text>
                 <View style={styles.overlay} />
                  </ImageBackground> 
                  </View>
                  <View style={styles.ovlabout}>
                        <Text style={styles.abtsec}>What We Are s</Text>
                        <Text style={styles.paraabt}>At Automation Engineering, we understand the unique challenges that
                            small businesses face when it comes to establishing
                            an online presence. That's why we offer a range of
                            affordable web design and digital marketing solutions
                            that are tailored to meet the specific needs of
                            small-scale businesses. We work closely with our
                            clients to develop customized strategies that help
                            them increase their visibility and attract more
                            customers.</Text>
                            <Text  style={styles.paraabt}>
                            For larger-scale businesses, we offer a range of
                            comprehensive solutions that can help them stay
                            ahead of the competition. Our team of experts has
                            experience working with businesses of all sizes and
                            can help develop a strategy that aligns with your
                            business goals and objectives.
                            </Text>

                            <Text style={styles.abtsec}>Mission</Text>
                            <Text  style={styles.paraabt}>
                               At Automation Engineering, our mission is to help businesses of all
                               sizes establish a strong and effective online presence
                                    through our innovative web development solutions. We
                                    aim to deliver customized and high-quality digital
                                    products that meet the specific needs of each client,
                                    while also providing excellent customer service and
                                    support.    
                            </Text>

                            <Text style={styles.abtsec}>Vision</Text>
                            <Text  style={styles.paraabt}>
                            Our vision at Automation Engineering is to become a leading web
                            development company that is recognized for our
                            expertise, innovation, and commitment to client
                            success. We strive to empower businesses with the
                            tools and solutions they need to thrive in the digital
                            age, while also fostering a collaborative and
                            growth-oriented company culture that values
                            creativity, integrity, and excellence. 
                            </Text>
                  </View>
                  <View>
                  <RNLinearGradient 
                  style={styles.linearGradient}  
                  direction="column"
                  colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                   
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  pagingEnabled={true} scrollEnabled={true} decelerationRate={0} snapToAlignment='center' scrollEventThrottle={16}>
                     <View style={styles.aboutdwn}>
                     <View style={styles.dlabout}>
                         <Image source={require('../../../assets/images/dell.png')} style={styles.abntlist} />
                      </View>
                      <View style={styles.selltextc}>
                      <Text style={styles.sellheading}>
                        Dell India
                      </Text>
                      <Text style={styles.pprotext}>In promotion and advertising, a
                          testimonial or show consists of a
                          person's written or spoken statement
                          extolling the virtue of a product.</Text>
                       </View>
                       </View>
                       <View style={styles.aboutdwn}>
                     <View style={styles.dlabout}>
                         <Image source={require('../../../assets/images/nestle.jpg')} style={styles.abntlist} />
                      </View>
                      <View style={styles.selltextc}>
                      <Text style={styles.sellheading}>
                       Nestle
                      </Text>
                      <Text style={styles.pprotext}>In promotion and advertising, a
                          testimonial or show consists of a
                          person's written or spoken statement
                          extolling the virtue of a product.</Text>
                       </View>
                       </View>
                       <View style={styles.aboutdwn}>
                     <View style={styles.dlabout}>
                         <Image source={require('../../../assets/images/frdex.webp')} style={styles.abntlist} />
                      </View>
                      <View style={styles.selltextc}>
                      <Text style={styles.sellheading}>
                       FedEx Corporation
                      </Text>
                      <Text style={styles.pprotext}>In promotion and advertising, a
                          testimonial or show consists of a
                          person's written or spoken statement
                          extolling the virtue of a product.</Text>
                       </View>
                       </View>
                      </ScrollView>

                  </RNLinearGradient>
                  </View>

                  </BusinessLayout>
          
  )
}


const styles = StyleSheet.create({
    imagex: {
      height:230,
      width:'100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  
  },
  pprotext:{
textAlign:'center',
lineHeight:20,
fontSize:13,
paddingLeft:12,
paddingRight:12,
fontFamily: "Inter-Medium",
  },
  selltextc:{
  paddingTop:10,

  },
  sellheading:{
fontWeight:'bold',
fontFamily: "Inter-Medium",
fontSize:18,
textAlign:'center',
marginBottom:6,
  },
  aboutdwn:{
    marginTop:40,
    marginBottom: 40,
    backgroundColor: '#fff',
    marginRight: 5,
    marginLeft: 18,
    padding: 36,
    paddingLeft: 35,
    paddingRight: 20,
    width: 300,
    borderRadius: 10,
  },
  dlabout:{
marginLeft:'auto',
marginRight:'auto',
  },
  abntlist:{
width:60,
height:60,
borderRadius:50,
  },
  ovlabout:{
    backgroundColor: '#F5F5FA',
    marginTop:-40,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    margin:0,
    padding:20,
    paddingTop:30,
    
  },
  abtsec:{
    fontSize:14,
    fontWeight:'bold',
    color:'#000',
    marginBottom:12,
},
paraabt:{
fontSize:13,
marginBottom:12,
lineHeight:20,
fontFamily: "Inter-Medium",
},
  camerabg:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    width: 40,
    height:40,
    position:'absolute',
    bottom:20,
    paddingTop:10,
    paddingLeft:10,
    borderRadius: 50,
    left:200,
    marginTop: 8,
    shadowColor: '#5A85F3',
    shadowOpacity: 1,
    elevation: 10,
  },
  linearGradient: {
    width: '100%',
  },
  submfga:{
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
    marginBottom:160,
  },
  buttontext: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  titileop:{
  paddingLeft:26,
  fontWeight:'bold',
  },
  homesection: {
    height:'100%',
    backgroundColor: '#F5F5FA',
  }, 
  bgimgsection:{
  marginBottom:10,
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
    paddingLeft:20,
    paddingRight:20,
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOpacity: 0.8,
    elevation: 4,
  },
  textinputarea:{
    marginTop: 10,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    paddingStart: 5,
    width: '90%',
    paddingTop:14,
    height: 100,
    borderRadius: 20,
    paddingLeft:20,
    paddingRight:20,
    textAlignVertical: 'top',
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOpacity: 0.8,
    elevation: 4,
  },
  pgfull:{
    width:'100%',
    marginBottom:20,
   },
   addfulsection:{
    backgroundColor: '#F5F5FA',
    marginTop:-40,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    margin:0,
    padding:0,
   },
  productdwn:{
  padding:22,
  justifyContent: 'center',
  display: 'flex',
  flexDirection: "row",
  },
  productheading: {
   textAlign:'center',
   fontWeight:'700',
   fontSize:25,
   color:'#fff',
   paddingTop:120,
   position:'relative',
   zIndex:1,
  },
  profilepro:{
  width:100,
  height:100,
  borderRadius:50
  },
  
  });
  