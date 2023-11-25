import { StatusBar } from "expo-status-bar";
import { Animated, BackHandler, Dimensions, Easing, Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewBase } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorPrimary, colorPrimarySecond } from "../../constants/color";
import TouchableRipple from "../../components/TouchableRipple";
import { FontAwesome, AntDesign, Foundation } from "@expo/vector-icons";
import { Link,  useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import RNLinearGradient from "../../components/RNLinearGradient";
import TextInput from "../../components/TextInput";
import DropdownSelect from "../../components/DropdownSelect";
import { Fontisto, Ionicons } from '@expo/vector-icons';
// import BusinessMyjobs from "./BusinessMyjobs";
// import JobTabView from "../../components/TabView";
// import ExpertsChat from "./Chat/ExpertsChat";
import { useNavigation } from '@react-navigation/native';
import BusinessTabView from "../../components/BusinessTabView";
import { useUser } from "../../stores/user";
import { getUser } from "../../stores/userAsync";

interface BusinessLayout {
    children?: any;
    isFIlter?: boolean,
    isChildren?: boolean,
    title?: string;
}
const Navs = [
    {
        name: "AES Experts",
        link: "ListExperts",
        icon: "suitcase"
    },
    {
        name: "Our Jobs",
        link: "BusinessSeeAllJobs",
        icon: "user"
    },
    {
        name: "Subscription",
        link: "BusinessSubscription",
        icon: "bookmark"
    },
    {
        name: "About Us",
        link: "BusinessAbout",
        icon: "user"

    },
    {
        name: "Contact Us",
        link: "BusinessContactUs",
        icon: "phone"

    },
    {
        name: "Privacy Policy",
        link: "BusinessPrivacypolicy",
        icon: "shield"

    },
    {
        name: "Terms and Condition",
        link: "BusinessTermsCondition",
        icon: "file-text"

    },


]
function DrawerView({ setDrawer }: any) {
    const [user, setUser] = useUser()
    const Navigation = useNavigation<any>()
    function gotosettings() {
        Navigation.navigate('BusinessSettings')
    }
    function gotoLogin() {
        Navigation.navigate('LoginScreen')
    }
    const navigate = useNavigation<any>()

    useEffect(() => {
        (async () => {
            
            setUser(await getUser())
           

        })();
    }, [])
    return (
        <SafeAreaView style={styles.drawerWrapper} >
            <View style={styles.drawerHeader}>
                <View style={styles.drawerProfile}>
                    <Image
                        source={{uri:user?.profilePic}}
                        resizeMode="cover"
                        style={styles.drawerAvatar}
                    />
                    <View>
                        <Text style={styles.drawerName}>{user?.firstname+" "+user?.lastname}</Text>
                        <Text style={styles.drawerStatus}>Status Active</Text>
                    </View>
                </View>
                <TouchableRipple
                    onPress={() => setDrawer(false)}
                    style={styles.drawerCloseButton}>
                    <Text style={styles.drawerClose}>&times;</Text>
                </TouchableRipple>
            </View>
            <View style={{ marginTop: 30 }}>
                {Navs.map((nav, key) => (
                    <TouchableRipple
                        style={styles.nav}
                        key={key}
                        onPress={() => navigate.navigate(nav.link)}
                    >

                        <FontAwesome
                            style={styles.navicon}
                            name={nav.icon as any} />
                        <Text style={styles.navText}>{nav.name}</Text>

                    </TouchableRipple>

                ))}
            </View>
            <View style={styles.drawerBottom}>
            <TouchableOpacity onPress={gotosettings}  style={{ paddingVertical: 15 }} activeOpacity={0.9}>
                <View style={styles.drawerSettings}>
                    <FontAwesome
                        name="cog"
                        style={styles.navicon}
                    />
                    <Text style={styles.navText}>Settings</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoLogin}>
                <Text
                    style={[styles.navText, {
                        marginLeft: 9
                    }]}>Logout</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default function BusinessLayout(props: BusinessLayout) {
    const [drawer, setDrawer] = React.useState(false)
    const scale = React.useRef(new Animated.Value(1)).current;
    const Navigation = useNavigation<any>()
 
    React.useEffect(() => {
        if (drawer) {
            Animated.timing(scale, {
                toValue: 0.6,
                useNativeDriver: true,
                duration: 200,
                easing: Easing.ease
            }).start()
        } else {
            Animated.timing(scale, {
                toValue: 1,
                useNativeDriver: true,
                duration: 200,
                easing: Easing.ease
            }).start()
        }
    }, [drawer])

    React.useEffect(() => {
        function handler() {
            if (drawer) {
                setDrawer(false)
                return true
            }
            return undefined
        }

        BackHandler.addEventListener("hardwareBackPress", handler)

        return () => BackHandler.removeEventListener("hardwareBackPress", handler)
    }, [drawer])
    const translateX = scale.interpolate({
        inputRange: [0.6, 1],
        outputRange: [Dimensions.get('window').width / 2 + 100, 0]
    })
    const borderRadius = scale.interpolate({
        inputRange: [0.6, 1],
        outputRange: [40, 0]
    })
    const [modalVisible, setModalVisible] = React.useState(false);
    function gotojobdetails() {
        Navigation.navigate('Job-Details')
    }
 

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={drawer ? colorPrimary : "#f5f5fa"} />
            <DrawerView setDrawer={setDrawer} />
            <Animated.View
                style={[styles.contentWrapper, { transform: [{ scale }, { translateX }] }, { borderRadius }]}>

                <SafeAreaView style={styles.contentWrapper} >
                    <Header title={props.title} setDrawer={setDrawer} />
                    {props.isChildren ? <ScrollView showsVerticalScrollIndicator={false}
                        style={styles.contentContainer}>
                        {props.children}
                    </ScrollView> : <BusinessTabView />
                    }
                    <TabBar />
                    {props.isFIlter && <View style={styles.fixedjobbtn}>
                        <Pressable onPress={() => setModalVisible(true)}>
                            <View style={styles.linearGradientfilter} >
                                <Fontisto name="filter" size={22} color="#1B52DF" />
                            </View>
                        </Pressable>
                    </View>}
                </SafeAreaView>
            </Animated.View>
        </View>
    )
}

// Header Start
export const Header = ({ setDrawer, title }: any) => {
    const platform = Platform.OS
    const navigation = useNavigation<any>()
    return (
        <View style={platform === 'android' ? headerStyle.header : headerStyle.osheader}>
            <View>
                {title ? (

                    // <View>
                    //     <AntDesign onPress={() => navigation.goBack()} name="arrowleft" />
                    //     <Text>{title}</Text>
                    // </View>

                    <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()} activeOpacity={0.9}>
                        {Platform.OS === 'ios' ?
                            <Ionicons name="chevron-back" size={20} color="#222" style={styles.adfgicon} /> :
                            <Ionicons name="arrow-back-sharp" size={20} color="#222" style={styles.adfgicon} />}
                        <Text style={styles.backbtntext}>{title} </Text>
                    </TouchableOpacity>


                ) : (<Image style={headerStyle.logoHeader}
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />)}
            </View>
            <TouchableOpacity
                onPress={() => setDrawer(true)}
                style={headerStyle.rightmenu} activeOpacity={0.9}>
                <AntDesign name="appstore1" size={20} color="#1B52DF" />
            </TouchableOpacity>
        </View>
    )
}
// Header End


// Footer Buttom Start
function TabBar() {
  
    return (
        
        <View style={styles.tabBar}>
            <TabButton

                icon={'home'}
                route="BusinessDashboard"

            />

            <TabButton
                icon={'briefcase'}
                route="BusinessMyjobs"
            />
            <TabButtonSearch />
            <TabButton
                icon={'user'}
                route="BusinessProfile"

            />

            <TabButton
                icon={'commenting'}
                route="BusinessChat"

            />
        </View>
    )
}

// Footer Buttom End

interface TabButton {
    icon?: any;
    route?: string;
    
}
function TabButton(props: TabButton) {
    const route = useRoute()
  
    const navigation = useNavigation<any>()

    const active = route.name == props.route
    return (
        <Pressable onPress={() => navigation.navigate(props.route)}>
            <FontAwesome
                name={props.icon}
                size={30}
                color={active ? colorPrimary : '#d9d9d9'} />
        </Pressable>
    )
}
function TabButtonSearch() {
    const [open, setOpen] = React.useState(false)
    const options = [
        {
            value: "india",
            label: "India"
        },
        {
            value: "india",
            label: "China"
        },
        {
            value: "india",
            label: "Russia"
        },
        {
            value: "india",
            label: "India"
        },
        {
            value: "india",
            label: "China"
        },
        {
            value: "india",
            label: "Russia"
        }
    ]
    return (
        <Pressable
            onPress={() => setOpen(true)}
        >
            <Image
                source={require("../../assets/images/search.png")}
                resizeMode="contain"
                style={styles.tabSearch}
            />
            <Modal
                transparent={true}
                onRequestClose={() => setOpen(false)}
                animationType="slide"
                visible={open}>
                <View
                    style={{ padding: 18, flex: 1, paddingBottom: 6 }}>
                    <View

                        style={[styles.bottomsheet]}
                    >
                        <Text style={styles.bottomsheetTitle}>
                            The Easiest Way to Get Your
                            New Job
                        </Text>
                        <TextInput
                            placeholder="Job title, keywords"
                        />

                        <Pressable
                            onPress={() => setOpen(false)}
                            style={styles.bottomSheetClose}>
                            <AntDesign
                                style={{ fontWeight: '100' }}
                                name="close"
                                color={colorPrimary}
                                size={17} />
                        </Pressable>


                    

                        <DropdownSelect
                            options={options}
                            placeholder="Select Country"
                        />

                        <DropdownSelect
                            options={options}
                            placeholder="Select State"
                        />
                        <DropdownSelect
                            options={options}
                            placeholder="Select City"
                        />


                        <Pressable style={{ alignSelf: 'center', zIndex: -1, marginTop: 'auto' }}>
                            <Image
                                source={require("../../assets/images/search.png")}
                                resizeMode="contain"
                                style={styles.tabSearch}
                            />
                        </Pressable>


                    </View>
                </View>

            </Modal>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5FA"
    },
    drawerWrapper: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: colorPrimary,
        left: 0,
        top: 0,
        zIndex: -1,
        padding: 12
    },
    drawerHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    drawerProfile: {
        flexDirection: 'row',
        alignItems: "center"
    },
    drawerAvatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 12
    },
    drawerName: {
        fontSize: 18,
        fontFamily: "Inter-Medium",
        color: 'rgba(255,255,255,0.8)'
    },
    drawerStatus: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.6)',
        fontFamily: "Inter-Medium"
    },
    drawerClose: {
        color: '#f5f5fa',
        fontSize: 17,
        fontWeight: '300',
        marginBottom: 2
    },
    drawerCloseButton: {
        height: 34,
        width: 34,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17,
        shadowColor: colorPrimarySecond,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        backgroundColor: colorPrimary
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
        //  shadowColor: 'rgba(0, 0, 0, 0.9)',
        borderWidth: 1,
        //  borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#fcfafa',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 2, 0)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
    },
    nav: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        height: 55,
        padding: 8,
        marginTop: 7,
        borderRadius: 10
    },
    navicon: {
        fontSize: 20,
        color: '#8DA8EF',
        marginRight: 9
    },
    navText: {
        fontSize: 14,
        color: '#8DA8EF',
        fontFamily: "Inter-Bold"
    },
    drawerBottom: {
        marginTop: 'auto',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    drawerSettings: {
        flexDirection: "row",
        alignItems: "center",
        borderRightWidth: 2,
        borderRightColor: 'hsl(29.76,100%,75.1%)',
        width: 95
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: '#F5F5FA',
        overflow: 'hidden'
    },
    contentContainer: {
        height: Dimensions.get('window').height - 100,
        // padding: 12,
        // margin:10,
    },
    tabBar: {


        width: '100%',
        // height: 80,
      
        // position: 'absolute',
        backgroundColor: '#f5f5fa',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 30,
        marginTop: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.06)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent: "space-between"
     

    },
    tabSearch: {
        height: 90,
        width: 90,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    backbtntext: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomsheet: {
        width: '100%',
        minHeight: 550,
        marginTop: 'auto',
        backgroundColor: '#f5f5fa',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        padding: 24
    },
    bottomsheetTitle: {
        color: colorPrimary,
        fontFamily: "Inter-Bold",
        fontSize: 18,
        marginVertical: 12

    },
    backbutton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: "row",
        marginLeft: 20,

    },
    bottomSheetClose: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#f5f5fa',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 12,
        right: 12
    },
    adfgicon: {
        marginRight: 6,
    },
    fixedjobbtn: {
        position: 'absolute',
        bottom: 100,
        right: 0,
        marginRight: 30,
    },
    linearGradient: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: "bold",
        width: '50%',
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 28,
        marginBottom: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },

})
const headerStyle = StyleSheet.create({
    header: {
        // paddingBottom:10,
        // paddingTop:20,
        height: 70,
        borderBottomColor: '#f5f5fa',
        borderBottomWidth: 1,
        backgroundColor: '#f5f5fa',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    osheader: {
        height: 80,
        // flex:0,
        borderBottomColor: '#f5f5fa',
        borderBottomWidth: 1,
        backgroundColor: '#f5f5fa',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        // marginTop:40,
        // position:'absolute',top:0,
    },
    logoHeader: {
        width: 140,
        height: 80,
        marginLeft: 20,
    },
    rightmenu: {
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        marginRight: 20,
        borderRadius: 50,
        textAlign: 'center',
        backgroundColor: "#f5f5fa",
        shadowRadius: 50,
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        // borderColor:'#ebebeb',
        borderColor: Platform.OS === 'android' ? '#fff' : '#f1f1f1',
        shadowOpacity: 0.8,
        shadowOffset: { width: 1, height: 13 },
        elevation: 4,
    },
    pdmgh: {
        paddingLeft: 10,
        marginLeft: 100,
    },
});