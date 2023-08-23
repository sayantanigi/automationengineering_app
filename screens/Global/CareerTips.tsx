import React from 'react'
import { SafeAreaView, ImageBackground, Image,ScrollView, View, Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../assets/images/cr1.jpg"
import ExpertLayout from '../Experts/ExpertLayout';

export default function CareerTips() {
  return (
    <ExpertLayout title="Career Tips" isChildren={true}>
              <View style={styles.bgimgsection}>
                 <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                 <Text style={styles.productheading}>How generative AI will transform your work</Text>
                 <View style={styles.textcr}>
                  <Text style={styles.textb}>June 29.2023 | <Text style={styles.textcomment}>2k Comments</Text></Text>
                 </View>
                 <View style={styles.overlay} />
                  </ImageBackground> 
                  </View>
                  <View style={styles.ovlabout}>
                        <Text style={styles.paraabt}>What you're about to read is not written by ChatGPT.</Text>
                            <Text  style={styles.paraabt}>
                            According to our research across 22 job categories
                            such as 'Business and Financial Operations' and
                            'Management,' we found that Large Language Models
                            (LLMs), the backbone of applications such as ChatGPT
                            , will impact every single category, ranging from 9% of
                            a workday at the low end to 63% at the high end.
                            </Text>
                            <Text  style={styles.paraabt}>
                            Forty percent of working hours across industries canbe impacted.
                            </Text>
                            <Text  style={styles.paraabt}>
                            Let that sink in.
                            </Text>
                            <Text  style={styles.paraabt}>
                            Welcome to the era of generative AI.
                            </Text>
                            <Text style={styles.abtsec}>How will work be reinvented?</Text>
                            <Text  style={styles.paraabt}>
                            Every role in every enterprise has the potential to be
                            reinvented, as humans working with AI co-pilots
                            becomes the norm, dramatically amplifying what
                            people can achieve.
                            </Text>
                            <Text style={styles.abtsec}>Revisions and Errata</Text>
                            <Text  style={styles.paraabt}>
                            You may only use the Website for lawful purposes
                            when seeking employment or help with your career,
                            when purchasing training courses or when recruiting
                            staff. You must not under any circumstances seek to
                            undermine the security of the Website or any
                            information submitted to or available through it. In
                            particular, but without limitation, you must not seek
                            to access, alter or delete any information to which
                            you do not have authorized access, seek to overload
                            the system via spamming or flooding, take any
                            action or use any device, routine or software to
                            crash, delay, damage or otherwise interfere with the
                            operation of the Website or attempt to decipher,
                            disassemble or modify any of the software, coding
                            or information comprised in the Website.
                            </Text>

                            <Text style={styles.abtsec}>Site terms of use modifications</Text>
                            <Text  style={styles.paraabt}>
                            Far much that one rank beheld bluebird after outside
                            ignobly allegedly more when oh arrogantly vehement
                            irresistibly fussy penguin insect additionally wow
                            absolutely crud meretriciously hastily Dalmatian a
                            glowered inset one echidna cassowary some parrot
                            and much as goodness some froze the sullen much
                            connected bat wonderfully on instantaneously. Far
                            much that one rank beheld bluebird after outside
                            ignobly allegedly more when oh arrogantly vehement
                            irresistibly fussy penguin insect additionally.
                     </Text>
                  </View>
                  <View>
              </View>
         </ExpertLayout>  
  )
}

const styles = StyleSheet.create({
    imagex: {
      height:230,
      width:'100%',
  },
  textb: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 6,
},
textcomment:{
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
  titlecrp:{
    fontWeight: 'bold',
    color: '#1B52DF',
    fontSize: 14,
    marginBottom:8,
},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  
  },
  textcr:{
    paddingTop:6,
    paddingLeft:16,
    paddingBottom:0,
    paddingRight:20,
    position:'relative',
    zIndex:1,
},
  pprotext:{
textAlign:'center',
lineHeight:18,
fontSize:13,
paddingLeft:12,
paddingRight:12,
  },
  selltextc:{
  paddingTop:10,

  },
  sellheading:{
fontWeight:'bold',
fontSize:18,
textAlign:'center',
marginBottom:6,
  },
  aboutdwn:{
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
lineHeight:18,
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
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    width: '100%',
    padding: 0,
    paddingTop:40,
    paddingBottom:40,
    borderRadius: 0,
    marginTop: 8,

  
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
   textAlign:'left',
   fontWeight:'700',
   fontSize:22,
   color:'#fff',
   paddingTop:100,
   paddingHorizontal:20,
   position:'relative',
   zIndex:1,
  },
  profilepro:{
  width:100,
  height:100,
  borderRadius:50
  },
  
  });
  