import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Pressable, Alert, Platform } from 'react-native'
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { Checkbox, Searchbar } from 'react-native-paper';
import RNLinearGradient from '../../../components/RNLinearGradient';
import TouchableRipple from "../../../components/TouchableRipple";
import BusinessLayout from '../BusinessLayout';

export default function SeeAllJobs() {
    const Navigation = useNavigation<any>()
    const [searchQuery, setSearchQuery] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const platform = Platform.OS
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    const [modalVisible, setModalVisible] = useState(false);
  
    function gotojobdetails() {
        Navigation.navigate('BusinessOpportunitiesDetails')
    }
    return (

        <BusinessLayout title="All Opportunities" isChildren={true}>
                <View style={styles.fullsectionjoblisst}>
                    <View style={styles.jobslistcard}>
                        <View style={styles.padf}>
                            <View style={styles.serviceflex}>
                                    <Image source={require('../../../assets/images/cm1.jpg')} style={styles.cardxi} />
                                <View style={styles.textsr}>
                                    <Text style={styles.headingjobs} numberOfLines={4}>
                                        Software Development Engineer  Software Development Engineer Software Development Engineers
                                    </Text>
                                 
                                    <Text style={styles.parasded}>
                                        Web Development / .NET
                                    </Text>
                                    <View style={styles.listinfo}>
                                        <Ionicons name="location" style={styles.icmsection} />
                                        <Text style={styles.listlcv}>
                                            Kolkata, West Bengal, India
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.webn}>
                                
                                <Text style={styles.jobdis}>
                                    We need someone to build for us offline POS software. It
                                    should be white marked and should be able to be
                                    customized for our different clients. It should be for multi
                                    usable, like for retails/super shops, etc.
                                </Text>
                               
                                 <TouchableRipple  style={styles.wdtbtn} onPress={gotojobdetails}>
                                    <RNLinearGradient
                                        direction="column"
                                        style={styles.linearGradient}
                                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                                       <Text style={styles.buttontext} >Bid Now</Text>
                                    </RNLinearGradient>
                                </TouchableRipple>
                            </View>
                        </View>
                    </View>

                    <View style={styles.jobslistcard}>
                        <View style={styles.padf}>
                            <View style={styles.serviceflex}>
                                <Image source={require('../../../assets/images/cm2.jpg')} style={styles.cardxi} />
                                <View style={styles.textsr}>
                                    <Text style={styles.headingjobs} numberOfLines={1}>
                                        Software Development Engineer  Software Development Engineer Software Development Engineers
                                    </Text>
                                 

                                    <Text style={styles.parasded}>
                                        Web Development / .NET
                                    </Text>
                                    <View style={styles.listinfo}>
                                        <Ionicons name="location" style={styles.icmsection} />
                                        <Text style={styles.listlcv}>
                                            Kolkata, West Bengal, India
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.webn}>
                                <Text style={styles.jobdis}>
                                    We need someone to build for us offline POS software. It
                                    should be white marked and should be able to be
                                    customized for our different clients. It should be for multi
                                    usable, like for retails/super shops, etc.
                                </Text>
                                <TouchableRipple style={styles.wdtbtn} onPress={gotojobdetails}>
                                    <RNLinearGradient
                                        direction="column"
                                        style={styles.linearGradient}
                                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                                        <Text style={styles.buttontext} >Bid Now</Text>
                                    </RNLinearGradient>
                                </TouchableRipple>
                            </View>
                        </View>
                    </View>
                    <View style={styles.jobslistcard}>
                        <View style={styles.padf}>
                            <View style={styles.serviceflex}>
                                <Image source={require('../../../assets/images/cm2.jpg')} style={styles.cardxi} />
                                <View style={styles.textsr}>
                                    <Text style={styles.headingjobs} numberOfLines={1}>
                                        Software Development Engineer  Software Development Engineer Software Development Engineers
                                    </Text>
                                 
                                    <Text style={styles.parasded}>
                                        Web Development / .NET
                                    </Text>
                                    <View style={styles.listinfo}>
                                        <Ionicons name="location" style={styles.icmsection} />
                                        <Text style={styles.listlcv}>
                                            Kolkata, West Bengal, India
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.webn}>
                                <Text style={styles.jobdis}>
                                    We need someone to build for us offline POS software. It
                                    should be white marked and should be able to be
                                    customized for our different clients. It should be for multi
                                    usable, like for retails/super shops, etc.
                                </Text>
                                <TouchableRipple style={styles.wdtbtn} onPress={gotojobdetails}>
                                    <RNLinearGradient
                                        direction="column"
                                        style={styles.linearGradient}
                                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                                        <Text style={styles.buttontext} >Bid Now</Text>
                                    </RNLinearGradient>
                                </TouchableRipple>
                            </View>
                        </View>
                    </View>
                    <View style={styles.jobslistcard}>
                        <View style={styles.padf}>
                            <View style={styles.serviceflex}>
                                <Image source={require('../../../assets/images/cm2.jpg')} style={styles.cardxi} />
                                <View style={styles.textsr}>
                                    <Text style={styles.headingjobs} numberOfLines={1}>
                                        Software Development Engineer  Software Development Engineer Software Development Engineers
                                    </Text>
                                

                                    <Text style={styles.parasded}>
                                        Web Development / .NET
                                    </Text>
                                    <View style={styles.listinfo}>
                                        <Ionicons name="location" style={styles.icmsection} />
                                        <Text style={styles.listlcv}>
                                            Kolkata, West Bengal, India
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.webn}>
                                <Text style={styles.jobdis}>
                                    We need someone to build for us offline POS software. It
                                    should be white marked and should be able to be
                                    customized for our different clients. It should be for multi
                                    usable, like for retails/super shops, etc.
                                </Text>
                                <TouchableRipple style={styles.wdtbtn} onPress={gotojobdetails}>
                                    <RNLinearGradient
                                        direction="column"
                                        style={styles.linearGradient}
                                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                                        <Text style={styles.buttontext} >Bid Now</Text>
                                    </RNLinearGradient>
                                </TouchableRipple>
                            </View>
                        </View>
                    </View>
                </View>
         
{/* Modal view */}

            <Modal isVisible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.filterva}>
                            <Text style={styles.modalfilter}>Filters And Sort</Text>
                        </View>
                        <View style={styles.searchbarmessagelist}>
                        <Searchbar
                            placeholderTextColor="#D6D6D6"
                            placeholder="Search keywords"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            
                            style={{
                                backgroundColor: "#fff",
                                shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
                                shadowOpacity: 0.8,
                                shadowOffset: { width: 1, height: 13 },
                                height:55,
                                padding:0,
                            }}
                            elevation={2}
                          
                        />
                    </View>

                    {/* Filter body section */}

                        <View style={styles.submarinsection}>
                        <View style={styles.catgh}>
                            <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.catagprylistbtnactive} >
                            <Text>
                              Category
                            </Text>
                            </View>
                            </TouchableOpacity>

                             <TouchableOpacity  activeOpacity={0.9}>
                             <View style={styles.catagprylistbtn}>
                             <Text>
                              Country
                            </Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.9}>
                                <View style={styles.catagprylistbtn}>
                            <Text>
                            Last activity
                            </Text>
                            </View>
                            </TouchableOpacity>
                            </View>

                            <View style={styles.selkl}>
                            <ScrollView style={styles.opklad} showsVerticalScrollIndicator={false}>
                               <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>Web development</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>Ios Development</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>Web design</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>Mobile development</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>.NET</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>CRE loaded</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>Data integration</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                 color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                    />
                                    <Text style={styles.checkboxtext}>MariaDB</Text>
                                </View>
                                <View style={styles.checkboxContainer}>
                                <Checkbox
                                    color="#1B52DF"
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                    setChecked(!checked);
                                    }}
                                 
                                    />
                                    <Text style={styles.checkboxtext}>Mobile app testing</Text>
                                </View>
                                </ScrollView>
                            </View>
                        </View>

                    {/*Filter body section end  */}

                {/* filter bottom section */}
                    <View style={styles.allbtnsedc}>
                    <View style={styles.widtg}>
                        <TouchableOpacity  activeOpacity={0.9}>
                            <Text style={styles.freelbtn}>Reset All</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.widtg}>
                        <TouchableRipple>
                                    <RNLinearGradient
                                        direction="column"
                                        style={styles.linearGradient}
                                        colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                                        <Text style={styles.buttontext} >Apply </Text>
                                    </RNLinearGradient>
                                </TouchableRipple>
                        </View>
                     
                        <View style={styles.widtg}>
                        <Pressable  onPress={() => setModalVisible(!modalVisible)}>
                         <View style={styles.linearGradientfiltermodal} >
                        <AntDesign name="closecircle" size={22} color="#1B52DF" />
                         </View>
                       </Pressable>
                       </View>
                       </View>
                       {/* filter bottom section  End*/}
                    </View>
                </View>
            </Modal>
           {/* Modal view */}

           <View style={styles.fixedjobbtn}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <View style={styles.linearGradientfilter} >
                        <Fontisto name="filter" size={22} color="#1B52DF" />
                    </View>
                </Pressable>
            </View>
           
            </BusinessLayout>
        
    )
}


const styles = StyleSheet.create({
    viewjobs: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        color: '#1B52DF',
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 12,
        width: '90%',
        padding: 8,
        paddingLeft: 14,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    opklad:{
        height:Platform.OS === 'android' ? 320 :  260,
    
    },
    checkboxtext:{
fontSize:12,
marginTop:6,
    },
    selkl:{
marginLeft:-20,
    },
    submarinsection:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    catgh:{
        width:'50%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      checkbox: {
        alignSelf: 'center',
      },
    widtg:{
width:'38%',
    },
    freelbtn: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor : '#fff',
        shadowRadius: 50 ,
        marginLeft:14,
        textAlign:'center',
        marginBottom:0,
        color: '#C5C5C5',
        fontWeight: '500',
        width: '80%',
        fontSize:12,
        padding: 14,
        borderRadius: 50,
    },
    catagprylistbtn:{
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor : '#fff',
        shadowRadius: 10,
        textAlign:'center',
        marginBottom:14,
        color: '#C5C5C5',
        fontWeight: '500',
        width: '80%',
        fontSize:12,
        padding: 14,
        borderRadius: 10,
    
    },
    allbtnsedc:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position:'absolute',
        bottom:0,
        borderTopWidth:1,
        paddingTop:20,
        borderTopColor:'#f1f1f1',
    },
    filterva:{
      borderBottomColor:'#f1f1f1',
      borderBottomWidth:1,
        paddingBottom:14,
    },
    buttontext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttontextapply:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    fixedjobbtn: {
        position: 'absolute',
        bottom: 30,
        right: 0,
        marginRight: 30,
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '100%',
        borderRadius: 50,
        marginTop: 0,
        marginBottom: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    wdtbtn:{
width:'60%',
marginLeft:'auto',
marginRight:'auto',
    },
    linearGradientapply:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: "500",
        width: '80%',
        padding: 14,
        borderRadius: 50,
        marginBottom: 20,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 1,
        elevation: 10,
    },
    linearGradientfilter: {
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowRadius: 50,
        // shadowColor: 'rgba(0, 0, 0, 0.9)',
        borderWidth:1,
        // borderColor:'#ebebeb',s
        borderColor:Platform.OS === 'android' ? '#fff' :  '#fcfafa',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
    },
    linearGradientfiltermodal:{
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowRadius: 50,
        shadowColor: 'rgba(0, 0, 0, 0.9)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
        marginBottom:5,
    position:'relative',
    bottom:0,
    left:10,
    },
    
    listinfo: {
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: "row",
        marginBottom: 6,
    },
    webn: {
        paddingLeft: 4,
        paddingRight: 4,
    },
    jobdis: {
        color: '#000',
        fontSize: 12,
        lineHeight: 18,
        marginBottom:20,
        fontFamily: "Inter-Medium",
    },
    parasded: {
        color: '#222',
        marginBottom: 4,
        fontSize: 12,
        fontFamily: "Inter-Medium",
    },
    icmsection: {
        color: '#1B52DF',
        paddingTop: 2,
        paddingRight: 6,
        fontFamily: "Inter-Medium",
    },
    cardxi: {
        width: 75,
        height: 75,
        borderRadius: 10,
    },
    cricleiconbpd: {
        fontSize: 20,
        shadowColor: 'rgba(0, 0, 0, 0.9)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        width: 22,
        height: 22,
        borderRadius: 50,
        color: '#1B52DF',
        marginLeft: 78,
        marginTop: -52,
        textAlign: 'center',
        paddingTop: 2,
    },
    cricleiconb: {
        fontSize: 20,
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        width: 22,
        height: 22,
        borderRadius: 50,
        color: '#1B52DF',
        marginLeft: 74,
        marginTop: -28,
        textAlign: 'center',
        paddingTop: 2,
    },
    textsr: {
        paddingTop: 4,
        paddingLeft: 16,
        paddingRight: 20,
    },
    viewjobsedit: {
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        color: '#909090',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        width: '95%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    viewjobsdelete: {
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        color: '#FE0000',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
        width: '90%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    padf: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 50,
        paddingBottom: 8,
    },
    imagex: {
        marginBottom: 0,
        marginTop: 0,
        padding: 18,
    },
    srdf: {
        width: '42%',
    },

    bgsec: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#F5F5FA',
    },
    fullsectionjoblisst: {
        marginBottom: 60,
        padding:20,
    },
    listlcv: {
        color: '#787878',
        fontSize: 12,
    },
    comoncl: {
        color: '#222',
    },
    optionviewsection: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        position: 'relative',
        bottom: 5,
    },
    jobslistcard: {
        padding: 0,
        paddingBottom: 0,
        borderRadius: 10,
        marginBottom: 20,
        margin:0,

    },
    serviceflex: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        marginBottom: 7,
        justifyContent: 'space-between',
    },
    headingjobs: {
        fontSize: 14,
        color: '#1B52DF',
        fontWeight: '600',
        marginBottom: 4,
        paddingRight: 40,
        width: 230,
    },
    parajobs: {
        color: '#909090',
        fontSize: 12,
        marginBottom: 4,
    },


    // modal css

    centeredView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 22,
        textAlign: 'left',
    },
    modalView: {
        width: '100%',
        height: '85%',
        position: 'absolute',
        bottom: -6,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        textAlign: 'left',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
   
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    modalText: {
        marginBottom: 15,
    },
    modalheader: {
        textAlign: 'left',
    },
    modalfilter: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    searchbarmessagelist: {
        marginTop: 20,
        marginBottom:20,
        width:'100%',
    },
    catagprylistbtnactive:{
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor : '#fff',
        shadowRadius: 10,
        textAlign:'center',
        marginBottom:14,
        color: '#1B52DF',
        fontWeight: '500',
        width: '80%',
        fontSize:12,
        padding: 14,
        borderRadius: 10,
    },
});
