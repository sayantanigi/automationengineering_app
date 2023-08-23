import { Animated, ImageBackground, Pressable, ScrollViewProps, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Entypo } from "@expo/vector-icons"
import { colorPrimary } from "../constants/color";
import React from "react";

interface Option {
    label: string;
    value: string;
}
interface DropdownSelect {
    placeholder?: string;
    options: Option[];
    value?: Option;
    onChangeValue?: (val: Option) => void;
    style?: ViewStyle
}
export default function DropdownSelect(props: DropdownSelect) {
    const height = React.useRef(new Animated.Value(0, { useNativeDriver: false })).current;

    const [open, setOpen] = React.useState(false);
    const [select, setSelect] = React.useState(props.value)

    React.useEffect(() => {
        if (open) {
            Animated.timing(height, {
                useNativeDriver: false,
                toValue: 170,
                duration: 200
            }).start()
        } else {
            Animated.timing(height, {
                useNativeDriver: false,
                toValue: 0,
                duration: 200
            }).start()
        }
    }, [open])

    const rotate = height.interpolate({
        inputRange: [0, 170],
        outputRange: ['0deg', '180deg'],
        extrapolate: "clamp"
    })

    function handleSelection(val: Option) {
        setSelect(val)
        props.onChangeValue?.(val)
        setOpen(false)
    }

    return (
        <View
            style={{ width: '100%', overflow: 'visible' }}>
            <Pressable
                onPress={() => setOpen(!open)}

                style={{ width: '100%', overflow: 'visible' }}>
                <ImageBackground
                    style={styles.inputWrapper}
                    resizeMode="stretch"
                    source={require("../assets/shadows/input.png")}>
                    <Text style={[styles.input, { color: select ? "#686868" : "#D6D6D6" }]}>{select?.label ?? props.placeholder}</Text>

                    <Pressable onPress={() => setOpen(!open)}>
                        <ImageBackground
                            source={require("../assets/shadows/round.png")}
                            resizeMode="cover"
                            style={styles.button}
                        >
                            <Animated.View style={{ transform: [{ rotate }] }}>
                                <Entypo
                                    name="chevron-thin-down"
                                    color={colorPrimary}
                                    size={15}
                                />
                            </Animated.View>
                        </ImageBackground>
                    </Pressable>
                </ImageBackground>
            </Pressable>
            <Animated.ScrollView
                style={[styles.dropdown, props.style, { maxHeight: height }]}>
                {props.options.map((option, key) => (
                    <Pressable

                        onPress={() => handleSelection(option)}
                        key={key}>
                        <Text

                            style={styles.option} key={key}>
                            {option.label}
                        </Text>
                    </Pressable>
                ))}
            </Animated.ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: 50,
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },
    input: {
        paddingLeft:20,
        flexGrow: 1,
        fontFamily: "Inter-Medium",
        paddingHorizontal: 7,
        fontSize: 16,
        color: "#D6D6D6"
    },
    button: {
        height: 50,
        width: 50,
        marginRight: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropdown: {
        width: '100%',
        maxHeight: 100,
        position: 'absolute',
        top: '100%',
        zIndex: 100,
        backgroundColor: '#f5f5fa',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        borderRadius: 20,
        marginTop: -6,
    },
    option: {
        width: '100%',
        padding: 14,
        fontFamily: "Inter-Medium",
        color: 'rgba(0,0,0,0.7)',
        paddingVertical: 16
    }
})