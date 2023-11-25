import { Ionicons } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { useLocation } from "../../../stores/user";
import { getLocation, setLocation } from "../../../stores/userAsync";


export default function MapViewdetails() {
  const [lication, setsetlocation] = useLocation()
  const route = useRoute();
  const navigation = useNavigation();
  

  useEffect(() => {

    (async () => {

      setsetlocation(await getLocation())
      console.log(lication?.latitude)
      console.log(lication?.longitude)
      
       //setProfiledata()
  })();


    
   

  }, [route.params]);

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>

      <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', backgroundColor: "#1b52df", height: 60, width: "100%" }}>
        <Ionicons name="arrow-back-outline" onPress={() => navigation.goBack()} style={{ fontSize: 30, color: '#000000', position: 'absolute', top: 13, left: 10 }} />
        <Text style={{ color: "#fffffff", fontSize: 20, fontWeight: 'bold' }}>View On Map</Text>
      </View>

      <View style={{ width: "100%", height: "100%" }}>


        <WebView

          //source={{ uri:  `https://www.google.com/maps/search/?api=1&query=${Details?.latitude},${Details?.longitude}` }}
          //source={{ uri: ` http://maps.google.com/maps?saddr=${Details?.latitude},${Details?.longitude}&daddr=${Details?.latitude},${Details?.longitude}`}}
          // source={{ uri: `https://maps.google.com/?q=${Details?.location}` }}
          source={{ uri: `https://maps.google.com/?q=${lication?.latitude+","+lication?.longitude}` }}



        />
      </View>



    </SafeAreaView>
  )



}

