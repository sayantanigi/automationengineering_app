import React from 'react'
import { SafeAreaView, ImageBackground, Image,ScrollView, View, Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native';
import Background from "../../assets/images/terms-condition.png"
import ExpertLayout from '../Experts/ExpertLayout';
export default function TermsCondition() {
  return (
    <ExpertLayout title="Terms Condition" isChildren={true}>
              <View style={styles.bgimgsection}>
                 <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                 <Text style={styles.productheading}>TERMS & CONDITION</Text>
                 <View style={styles.overlay} />
                  </ImageBackground> 
                  </View>
                  <View style={styles.ovlabout}>
                        <Text style={styles.abtsec}>Last updated: January 24, 2023</Text>
                        <Text style={styles.paraabt}>This Terms Condition includes important information
                            about your personal data and we encourage you to
                            read it carefully.</Text>
                            <Text  style={styles.paraabt}>
                            By accessing this web site, you are agreeing to be
                        bound by these web site Terms and Conditions of Use,
                        all applicable laws and regulations, and agree that you
                        are responsible for compliance with any applicable
                        local laws. If you do not agree with any of these terms,
                        you are prohibited from using or accessing this site.
                        The materials contained in this web site are protected
                        by applicable copyright and trade mark law.
                                                    </Text>

                            <Text style={styles.abtsec}>Limitation</Text>
                            <Text  style={styles.paraabt}>
                            Whilst we try to ensure that the standard of the
                            Website remains high and to maintain the continuity
                            of it, the internet is not an inherently stable medium,
                            and errors, omissions, interruptions of service and
                            delays may occur at any time. We do not accept any
                            liability arising from any such errors, omissions,
                            interruptions or delays or any ongoing obligation or
                            responsibility to operate the Website (or any
                            particular part of it) or to provide the service offered
                            on the Website. We may vary the specification of
                            this site from time to time without notice.  
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  
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
  