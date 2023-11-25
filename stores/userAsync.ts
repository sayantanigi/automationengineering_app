import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setUser(user: any) {
    try {
        return await AsyncStorage.setItem("@userdata", JSON.stringify(user))
    } catch {
        return {}
    }
}
export async function getUser() {
    try {
        return JSON.parse(await AsyncStorage.getItem("@userdata") as string)
    } catch(err) {
        console.log(err)
        return {}
    }
}
export async function setLocation(user: any) {
    try {
        return await AsyncStorage.setItem("@location", JSON.stringify(user))
    } catch {
        return {}
    }
}
export async function getLocation() {
    try {
        return JSON.parse(await AsyncStorage.getItem("@location") as string)
    } catch(err) {
        console.log(err)
        return {}
    }
}
export async function setChatInput(user: any) {
    try {
        return await AsyncStorage.setItem("@chatinput", JSON.stringify(user))
    } catch {
        return {}
    }
}
export async function getChatinput() {
    try {
        return JSON.parse(await AsyncStorage.getItem("@chatinput") as string)
    } catch(err) {
        console.log(err)
        return {}
    }
}






export async function clearUser() {
    try {
        return await AsyncStorage.clear()
    } catch {
        return {}
    }
}