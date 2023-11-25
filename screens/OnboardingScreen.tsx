import { StatusBar } from "expo-status-bar";
import { Animated, Dimensions, Easing, FlatList, Image, ListRenderItemInfo, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorPrimary } from "../constants/color";
import { Slide, slides } from "../constants/slides";
import React from "react";
import ButtonLight from "../components/ButtonLight";
import { useNavigation } from "@react-navigation/native";

interface Indicator {
    active: boolean;
}
function Indicator(props: Indicator) {
    const scale = React.useRef(new Animated.Value(1)).current;

    React.useEffect(() => {
        if (props.active) {
            Animated.timing(scale, {
                toValue: 1.5,
                useNativeDriver: true,
                easing: Easing.circle,
                duration: 150
            }).start()
        } else[
            Animated.timing(scale, {
                toValue: 1,
                useNativeDriver: true,
                easing: Easing.circle,
                duration: 150
            }).start()
        ]
    }, [props.active])

    return (
        <Animated.View
            style={[styles.indicator, { transform: [{ scale }] }]}>

        </Animated.View>
    )
}
export default function OnboardingScreen() {
    const [activeIndex, setActiveIndex] = React.useState(0)

    const navigation = useNavigation<any>()

    function goToLogin() {
        navigation.navigate("LoginScreen")
    }

    function SlideLayout({ item }: ListRenderItemInfo<Slide>) {
        return (
            <View style={styles.slideWrapper}>
                <Image
                    style={styles.slideImage}
                    source={item.image}
                    resizeMode="contain"
                />
                <Text style={styles.slideTitle}>{item.title}</Text>
                <Text style={styles.slideText}>{item.text}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView
            style={styles.container}>
            <StatusBar
                style="dark"
                backgroundColor={"#f5f5fa"}
            />
            <FlatList
                overScrollMode="never"
                alwaysBounceHorizontal={false}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').width}
                snapToAlignment="center"
                disableIntervalMomentum
                decelerationRate={"fast"}
                horizontal
                keyExtractor={item => item.key}
                data={slides}
                onMomentumScrollEnd={(event) => {
                    const index = Math.floor(
                        (event.nativeEvent.contentOffset.x /
                            event.nativeEvent.layoutMeasurement.width) + 0.1
                    );
                    setActiveIndex(index);
                }}
                renderItem={(item) => SlideLayout(item as any)}

            />
            <View style={styles.bottomView}>
                <View style={styles.indicatorContainer}>
                    {slides.map((_, index) => (
                        <Indicator
                            active={index == activeIndex}
                            key={index} />
                    ))}
                </View>
                <ButtonLight
                    onPress={goToLogin}
                    style={styles.buttonMain}>
                    Get Started
                </ButtonLight>
            </View>
            <ButtonLight
                onPress={goToLogin}
                textStyle={styles.skipText}
                style={styles.skipButton}>
                Skip Intro
            </ButtonLight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5fa"
    },
    slideWrapper: {
        width: Dimensions.get('window').width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    slideImage: {
        width: '100%',
        maxWidth: 380,
        height: 170

    },
    slideTitle: {
        fontSize: 23,
        color: colorPrimary,
        marginTop: 30,
        marginBottom: 22,
        fontFamily: "Inter-Bold",
        textAlign: "center",
        maxWidth: 320
    },
    slideText: {
        color: '#000',
        fontFamily: "Inter-Medium",
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 30,
        maxWidth: 320,
        marginBottom: 30
    },
    indicator: {
        height: 14,
        width: 14,
        backgroundColor: "#f5f5fa",
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 2,
        borderWidth: 1,
        borderColor: "hsla(0,0%,100%,0.01)"
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: Platform.OS === 'android' ? 210 : 160,
        padding: 12,
        paddingHorizontal: 27
    },
    indicatorContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },
    buttonMain: {
        height: 60
    },
    skipButton: {
        position: 'absolute',
        top: 30,
        right: 27,
        height: 40,
        width: 110,
        borderWidth:1,
        borderColor:Platform.OS === 'android' ? '#fff' :  '#ebebeb',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    skipText: {
        fontSize: 13,
        fontFamily: "Inter-Medium",
        color: "rgba(0,0,0,0.4)"
    }
})