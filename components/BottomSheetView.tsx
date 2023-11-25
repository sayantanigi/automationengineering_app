import { ReactElement, useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, View, Text, Animated } from "react-native";

interface BottomSheetViewProvider {
    children?: ReactElement | ReactElement[];
}


export default function BottomSheetViewProvider({
    children
}: BottomSheetViewProvider) {
    return (
        <>
            {children}
            <BottomSheetComponent />
        </>
    )
}

function atom(value: any) {
    let initValue = value;
    let subscribers = new Set<() => void>([]);

    return {
        get: () => initValue,
        set: (newValue: any) => {
            initValue = newValue;
            subscribers.forEach((func) => func())
        },
        subscribe: (func: () => void) => {
            subscribers.add(func)
        }
    }
}
function useAtom(atomvalue: ReturnType<typeof atom>) {

    const [value, setValue] = useState(atomvalue.get())

    useEffect(() => {
        atomvalue.subscribe(() => setValue(atomvalue.get()))
    }, [])

    return [value, atomvalue.set] as const
}
const initStateConfig = {
    display: false,
    element: <></>,
    backgroundColor: "#ffff"
}
const config = atom(initStateConfig)

function BottomSheetComponent() {
    const [state, setState] = useAtom(config)
    const [display, setDisplay] = useState<'none' | 'flex'>('none')
    const translateY = useRef(new Animated.Value(500)).current

    useEffect(() => {
        if (state.display) {
            setDisplay('flex')
            Animated.timing(translateY, {
                useNativeDriver: true,
                toValue: 0,
                duration: 200
            }).start()

        } else {
            Animated.timing(translateY, {
                useNativeDriver: true,
                toValue: 500,
                duration: 230
            }).start()
            let timeoutid = setTimeout(() => {
                setDisplay('none')
                clearTimeout(timeoutid)
            }, 200)
        }
    }, [state.display])
    return (
        <Pressable
            style={[styles.container, { display }]}>

            <Animated.View

                style={[styles.main,
                {
                    backgroundColor: state.backgroundColor,
                    transform: [{ translateY: translateY }]
                }]}>
                <Text style={styles.bar}></Text>
                {state.element}
            </Animated.View>
            <Pressable
                onPress={() => setState(initStateConfig)}
                style={styles.backdrop}>

            </Pressable>
        </Pressable>
    )
}

export const BottomSheet = {
    show: ({
        element,
        backgroundColor = '#ffffff'
    }: {
        element: ReactElement,
        backgroundColor?: string
    }) => {
        config.set({
            display: true,
            element,
            backgroundColor
        })
    },
    dismiss: () => {
        config.set(initStateConfig)
    }
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        zIndex: 99,
        justifyContent: "flex-end"
    },
    main: {
        minHeight: 0,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        padding: 7,
        flexDirection: 'column',
        justifyContent: "center"
    },
    bar: {
        width: 50,
        height: 6,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        top: 5,
        left: '50%',
        transform: [{ translateX: -25 }],
        marginBottom: 10

    },
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        height: "100%",
        width: "100%",
        position: 'absolute',
        zIndex: -9
    }
})