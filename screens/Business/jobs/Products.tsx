import React, { useState } from 'react'
import { SafeAreaView, ImageBackground, ScrollView, View, Text,Modal, TouchableOpacity, Platform, Image, Pressable} from 'react-native'
import { StyleSheet } from 'react-native';
// import Modal from "react-native-modal";
import Background from "../../../assets/images/Shape2.png"
// import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colorPrimary } from '../../../constants/color';
import { FontAwesome, AntDesign, Foundation } from "@expo/vector-icons";
import { TouchableRipple } from 'react-native-paper';
import RNLinearGradient from '../../../components/RNLinearGradient';

export default function Products() {
    // console.log("MY JOPBS")
    const [open, setOpen] = React.useState(false)
    const Navigation = useNavigation<any>()
    // function gotojobdetails() {
    //     Navigation.navigate('Job-Details')
    // }
    function gotoAddProduct() {
        Navigation.navigate('AddProduct')
    }
    function gotoProductdetails() {
        Navigation.navigate('BusinessProductDetails')
    }

    const [modalVisible, setModalVisible] = useState(false);
    const platform = Platform.OS
    return (
        
        <SafeAreaView style={styles.bgsec}>
        <ScrollView style={styles.scrkl} showsVerticalScrollIndicator={false}>
            <View style={styles.fullsectionjoblisst}>
                <View style={styles.jobslistcard}>
                    <View style={styles.padf}>
                        <Text style={styles.headingjobs} numberOfLines={1}>
                            Demo Product   Demo Product  Demo Product  Demo Product
                        </Text>
                        <Text style={styles.parajobs}>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content.
                        </Text>
                    </View>
                    <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                        <View style={styles.optionviewsection}>
                            <View style={styles.srdf}>
                            <TouchableOpacity onPress={gotoProductdetails}  activeOpacity={0.9}>
                               <View style={styles.viewjobs}>
                                <Text style={styles.viewjobstext}>
                                    View
                                </Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                         
                            <View style={styles.srdf}>
                            <View style={styles.viewjobsedit}>
                                <Text style={styles.viewjobsedittext}>
                                    Edit
                                </Text>
                                </View>
                            </View>
                            <View style={styles.srdf}>
                            <View style={styles.viewjobsdelete}>
                                <Text style={styles.viewjobsdeletetext}>
                                    Delete
                                </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.jobslistcard}>
                    <View style={styles.padf}>
                        <Text style={styles.headingjobs}>
                            Demo Product
                        </Text>
                        <Text style={styles.parajobs}>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content.
                        </Text>
                    </View>
                    <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                    <View style={styles.optionviewsection}>
                            <View style={styles.srdf}>
                            <TouchableOpacity  activeOpacity={0.9}>
                               <View style={styles.viewjobs}>
                                <Text style={styles.viewjobstext}>
                                    View
                                </Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                         
                            <View style={styles.srdf}>
                            <View style={styles.viewjobsedit}>
                                <Text style={styles.viewjobsedittext}>
                                    Edit
                                </Text>
                                </View>
                            </View>
                            <View style={styles.srdf}>
                            <View style={styles.viewjobsdelete}>
                                <Text style={styles.viewjobsdeletetext}>
                                    Delete
                                </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.jobslistcard}>
                    <View style={styles.padf}>
                        <Text style={styles.headingjobs}>
                            Demo Product
                        </Text>
                        <Text style={styles.parajobs}>
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content.
                        </Text>
                    </View>
                    <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
                      <View style={styles.optionviewsection}>
                            <View style={styles.srdf}>
                            <TouchableOpacity  activeOpacity={0.9}>
                               <View style={styles.viewjobs}>
                                <Text style={styles.viewjobstext}>
                                    View
                                </Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                         
                            <View style={styles.srdf}>
                            <View style={styles.viewjobsedit}>
                                <Text style={styles.viewjobsedittext}>
                                    Edit
                                </Text>
                                </View>
                            </View>
                            <View style={styles.srdf}>
                            <View style={styles.viewjobsdelete}>
                                <Text style={styles.viewjobsdeletetext}>
                                    Delete
                                </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
       
        <View style={styles.fixedjobbtn}>
        <TouchableRipple onTouchStart={gotoAddProduct} style={styles.wdtg}>
                <RNLinearGradient
                    direction="column"
                    style={styles.linearGradient}
                    colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                    <Text style={styles.buttontext} >Add Product</Text>
                </RNLinearGradient>
            </TouchableRipple>
        </View>
   
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewjobs: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        width: '90%',
        padding: 8,
        borderRadius: 50,
        textTransform:'capitalize',
    },
    viewjobstext:{
        fontSize:12,
        fontWeight: '500',
        color: '#1B52DF',
        textAlign: 'center',
    },
 
    scrkl:{
        // flex:1,
        height:'100%',
    },
    fixedjobbtn:{
        position:'absolute',
        bottom:0,
        width:'100%',
            },
            wdtg: {
                width: '50%',
                marginLeft:'auto',
                marginRight:'auto',
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
        alignItems: "center",
    },
    buttontext: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    viewjobsedit: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
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
        width: '90%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    viewjobsdelete: {
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowRadius: 50,
        marginTop: 0,
        marginBottom: 0,
        color: '#FE0000',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 12,
        width: '90%',
        padding: 8,
        borderRadius: 50,
        textTransform: 'capitalize',
    },
    padf: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 50,
    },
    viewjobsdeletetext:{
        fontSize:12,
        color: '#FE0000',
        textAlign: 'center',
        fontWeight: '500',
    },
    viewjobsedittext:{
        fontSize:12,
        color: '#909090',
        textAlign: 'center',
        fontWeight: '500',
    },
    imagex: {
        // width:330,
        marginBottom: 0,
        marginTop: 0,
        padding: 18,
    },
    srdf: {
        width: '28%',
    },


    bgsec: {
        backgroundColor: '#F5F5FA',
    },
    fullsectionjoblisst: {
marginBottom:150,
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
        padding: 20,
        paddingBottom: 0,
        borderRadius: 10,
        marginBottom: 0,

    },
    headingjobs: {
        fontSize: 14,
        color: '#1B52DF',
        fontWeight: '500',
        marginBottom: 4,
    },
    parajobs: {
        color: '#222',
        lineHeight: 18,
        fontSize: 12,
        marginBottom: 4,
    },
});