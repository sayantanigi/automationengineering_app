import { View, Image, Text, Animated, Pressable, BackHandler, Easing, ScrollView, ListRenderItemInfo, Modal, FlatList, TouchableOpacity, Platform } from "react-native";
import ExpertLayout from "./ExpertLayout";
import { colorDanger, colorPrimary } from "../../constants/color";
import React, { useEffect, useState } from "react";
import ButtonLight from "../../components/ButtonLight";
import moment from 'moment'; // For date formatting

import TextInput from "../../components/TextInput";
import DropdownSelect from "../../components/DropdownSelect";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useUser } from "../../stores/user";
import { API_URLS, BASE_URL, autoCompleteUrl, autocompleteDetails, googleApiKey } from "../../Network/URL";
import TouchableRipple from "../../components/TouchableRipple";
import { SearchbarEditable } from "../../components/SearchBar";
import * as ImagePicker from 'expo-image-picker';
import { getUser } from "../../stores/userAsync";
//import DateTimePickerModal from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getWorkexprienceUpdate } from "../../Network/APIService";
import SnackBar from "../../components/SnackBar";
export interface EducationValue {
  user_id: string
  education: string
  passing_of_year: string
  college_name: string
  department: string
  description: string
}

interface userValue {
  companyname: string
  firstname: string
  lastname: string
  email: string
  mobile: string
  gender: string
  key_skills: string
  zip: string
  address: string
  foundedyear: string
  teamsize: string
  latitude: string
  longitude: string
  short_bio: string
  user_id: string
}

export interface Coords {
  accuracy: number
  altitude: number
  altitudeAccuracy: number
  heading: number
  latitude: number
  longitude: number
  speed: number
}
interface option {
  value: string,
  label: string,
}
interface Location {
  formatted_address: string
}
function WorkEdit() {
  const [active, setActive] = React.useState(false)
  const [showatePicker, setShowDatePicker] = useState(false)
  const [showatePicker1, setShowDatePicker1] = useState(false)
  const [alert, setAlert] = useState("")
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [getTodate, setTodatee] = useState('');
  const [user, setUser] = useUser()
  const translateY = React.useRef(new Animated.Value(-200)).current;
  const [formData, setFormData] = React.useState({
    company_name: "",
    from_date: "",
    to_date: "",
    user_id: "",
    description: "",
    designation: ""
  })

  React.useEffect(() => {
    if (active) {
      Animated.timing(translateY, {
        useNativeDriver: true,
        duration: 200,
        easing: Easing.circle,
        toValue: -680
      }).start()
    } else {
      Animated.timing(translateY, {
        useNativeDriver: true,
        duration: 200,
        easing: Easing.circle,
        toValue: -200
      }).start()
    }
  }, [active])

  React.useEffect(() => {
    function handler() {
      if (active) {
        setActive(false)
        return true
      }
      return undefined
    }

    BackHandler.addEventListener("hardwareBackPress", handler)

    return () => BackHandler.removeEventListener("hardwareBackPress", handler)
  }, [active])


  const zIndex = translateY.interpolate({
    inputRange: [-680, -300],
    outputRange: [0, -1],
    extrapolate: "clamp"
  })
  useEffect(() => {
    (async () => {

      setUser(await getUser())
    })();

  }, []);
  function handleValueChange(value: string, key: string) {
    setFormData({ ...formData, [key]: value })


  }

  const showDatePicker = () => {
    setShowDatePicker(true);

  };

  const showDatePicker1 = () => {
    setShowDatePicker1(true);

  };


  const hideDatePicker = () => {
    setShowDatePicker(false);

  };
  const hideDatePicker1 = () => {
    setShowDatePicker1(false);

  };
  const handleConfirm = (date: any) => {
    // console.warn("A date has been picked: ", date);
    const formattedDate = moment(date).format('YYYY-MM-DD');
    setInputValue(formattedDate)
    // setFormData({ ...formData, from_date:formattedDate})

    hideDatePicker();
  };
  const handleConfirm1 = (date: any) => {
    // console.warn("A date has been picked: ", date);
    const formattedDate = moment(date).format('YYYY-MM-DD');
    setTodatee(formattedDate)
    // setFormData({ ...formData, to_date:getTodate})

    hideDatePicker1();
  };
  async function submitdata() {

    console.log(user?.userId + "-" + getTodate + "-" + inputValue)
    let response = await fetch(BASE_URL + "save_workexperience", {
      method: "POST",
      body: JSON.stringify({ ...formData, user_id: user?.userId as any, to_date: getTodate as any, from_date: inputValue as any }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let json = await response.json()

    if (json.status === "success") {
      setAlert(json.result)

    }
  }
  return (
    <Animated.View style={{
      height: 700,
      backgroundColor: "#f5f5fa",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "rgb(62, 62, 104)",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
      padding: 12,
      zIndex,
      position: 'absolute',
      width: '100%',
      transform: [{ translateY }]
    }}>
      <Text style={{ fontSize: 17, marginBottom: 10, fontFamily: "Inter-Bold", color: "#909090" }}>Add work experience</Text>
      <Pressable
        onPress={() => setActive(true)}
        style={{
          height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5fa", shadowColor: "rgb(62, 62, 104)",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
          display: active ? "none" : "flex"
        }}>
        <Text style={{ fontSize: 17, color: colorPrimary }}>+</Text>
      </Pressable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 4 }}
        style={{ width: '100%' }}>

        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 60 }}>
          Job Title
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          onChangeText={(text) => handleValueChange(text, "designation")}
          placeholder="Job Title"
        />
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Company Name
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>

        <TextInput
          style={{ width: '100%' }}
          placeholder="Company Name"
          onChangeText={(text) => handleValueChange(text, "company_name")}
        />


        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          From Date
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TouchableOpacity style={{ width: '100%' }} onPress={showDatePicker}>

          <TextInput
            value={inputValue}
            editable={false}
            style={{ width: '100%' }}
            placeholder="From Date"
          // onChangeText={(text) => handleValueChange(text, "from_date")}
          />

        </TouchableOpacity>



        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          To Date
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TouchableOpacity style={{ width: '100%' }} onPress={showDatePicker1}>

          <TextInput
            value={getTodate}
            editable={false}
            style={{ width: '100%' }}
            placeholder="To Date"
          // onChangeText={(text) => handleValueChange(text, "to_date")}
          />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Description
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%', height: 200, borderRadius: 10, textAlignVertical: "top", paddingTop: 8 }}
          multiline
          onChangeText={(text) => handleValueChange(text, "description")}
          placeholder="Description"
        />
        <ButtonPrimary onPress={submitdata} style={{ height: 55, marginBottom: 120 }}>
          <Text>Save</Text>
        </ButtonPrimary>
      </ScrollView>
      <Pressable
        onPress={() => setActive(false)}
        style={{
          height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5fa", shadowColor: "rgb(62, 62, 104)",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
          display: active ? "flex" : "none",
          position: "absolute",
          top: 12,
          right: 16
        }}>
        <Text style={{ fontSize: 17, color: colorPrimary }}>&times;</Text>
      </Pressable>


      <DateTimePickerModal
        isVisible={showatePicker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={showatePicker1}
        mode="date"
        onConfirm={handleConfirm1}
        onCancel={hideDatePicker1}
      />


      <SnackBar alert={alert} setAlert={setAlert} type="LONG" />

    </Animated.View>


  )


}
function EducationEdit() {
  const [alert, setAlert] = useState("")
  const [user, setUser] = useUser()
  const [active, setActive] = React.useState(false)
  const [inputValue, setInputValue] = useState('');
  const [showatePicker, setShowDatePicker] = useState(false)
  const translateY = React.useRef(new Animated.Value(-300)).current;
  const [formData, setFormData] = useState<EducationValue>({
    user_id: "",
    education: "",
    passing_of_year: "",
    college_name: "",
    department: "",
    description: "",
  })
  useEffect(() => {
    (async () => {

      setUser(await getUser())

    })();

  }, []);
  React.useEffect(() => {
    if (active) {
      Animated.timing(translateY, {
        useNativeDriver: true,
        duration: 200,
        easing: Easing.circle,
        toValue: -680
      }).start()
    } else {
      Animated.timing(translateY, {
        useNativeDriver: true,
        duration: 200,
        easing: Easing.circle,
        toValue: -300
      }).start()
    }
  }, [active])

  React.useEffect(() => {
    function handler() {
      if (active) {
        setActive(false)
        return true
      }
      return undefined
    }

    BackHandler.addEventListener("hardwareBackPress", handler)

    return () => BackHandler.removeEventListener("hardwareBackPress", handler)
  }, [active])


  const zIndex = translateY.interpolate({
    inputRange: [-680, -200],
    outputRange: [0, -2],
    extrapolate: "clamp"
  })


  function handleValueChange(value: string, key: string) {
    setFormData({ ...formData, [key]: value })

  }
  const showDatePicker = () => {
    setShowDatePicker(true);

  };




  const hideDatePicker = () => {
    setShowDatePicker(false);

  };

  const handleConfirm = (date: any) => {
    // console.warn("A date has been picked: ", date);
    const formattedDate = moment(date).format('YYYY-MM-DD');
    setInputValue(formattedDate)
    setFormData({ ...formData, passing_of_year: formattedDate })

    hideDatePicker();
  };

  async function submitData() {
    setFormData({ ...formData, user_id: String(user?.userId) })

    let response = await fetch(BASE_URL + "save_education", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let json = await response.json()
    console.log(json)
    if (json.status === "success") {
      setAlert(json.result)

    }

  }



  return (
    <Animated.View style={{
      height: 700,
      backgroundColor: "#f5f5fa",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "rgb(62, 62, 104)",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
      padding: 12,
      zIndex,
      position: 'absolute',
      width: '100%',
      transform: [{ translateY }]

    }}>
      <Text style={{ fontSize: 17, marginBottom: 10, fontFamily: "Inter-Bold", color: "#909090" }}>Add Education Details</Text>
      <Pressable
        onPress={() => setActive(true)}
        style={{
          height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5fa", shadowColor: "rgb(62, 62, 104)",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,

          elevation: 20,
          display: active ? "none" : "flex"

        }}>
        <Text style={{ fontSize: 17, color: colorPrimary }}>+</Text>
      </Pressable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 4 }}
        style={{ width: '100%' }}>
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 60 }}>
          Degree
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder="Degree"
          onChangeText={(text) => handleValueChange(text, "education")}
        />
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Year of Graduation
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TouchableOpacity style={{ width: '100%' }} onPress={showDatePicker}>
          <TextInput
            editable={false}
            value={inputValue}
            style={{ width: '100%' }}
            placeholder="Year of Graduation"

          />
        </TouchableOpacity>
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          School/College/University Name
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder="School/College/University Name"
          onChangeText={(text) => handleValueChange(text, "college_name")}
        />
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Department
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder="Department"
          onChangeText={(text) => handleValueChange(text, "department")}
        />

        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Description
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%', height: 200, borderRadius: 10, textAlignVertical: "top", paddingTop: 8 }}
          multiline
          placeholder="Description"
          onChangeText={(text) => handleValueChange(text, "description")}
        />
        <ButtonPrimary onPress={submitData} style={{ height: 55, marginBottom: 120 }}>
          <Text>Save</Text>
        </ButtonPrimary>
      </ScrollView>
      <Pressable
        onPress={() => setActive(false)}
        style={{
          height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5fa", shadowColor: "rgb(62, 62, 104)",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,

          elevation: 20,
          display: active ? "flex" : "none",
          position: "absolute",
          top: 12,
          right: 16
        }}>
        <Text style={{ fontSize: 17, color: colorPrimary }}>&times;</Text>
      </Pressable>

      <DateTimePickerModal
        isVisible={showatePicker}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <SnackBar alert={alert} setAlert={setAlert} type="LONG" />

    </Animated.View>
  )
}
function PersonalEdit() {
  const [active, setActive] = React.useState(false)
  const [isSearchOpen, setisSearchOpen] = useState(false)

  const [location, setLocation] = useState<Location[]>([])
  const [formData, setFormData] = React.useState({
    companyname: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    key_skills: "",
    zip: "",
    address: "",
    foundedyear: "",
    teamsize: "",
    latitude: "",
    longitude: "",
    short_bio: "",
    user_id: "",
    profilePic: ""
  })
  const [alert, setAlert] = useState("")
  const [fileName, setFileName] = useState('No File Chosen')
  const [mainFile, setMainfile] = useState<any>(null)
  const [imageSource, setImageSource] = useState<string | null>(null);
  const [image, setImage] = useState<any>(null)
  const [user, setUser] = useUser()

  const translateY = React.useRef(new Animated.Value(-400)).current;
  const [currentAddress, setCurrentaddress] = useState(null);
  React.useEffect(() => {
    if (active) {
      Animated.timing(translateY, {
        useNativeDriver: true,
        duration: 200,
        easing: Easing.circle,
        toValue: -680
      }).start()
    } else {
      Animated.timing(translateY, {
        useNativeDriver: true,
        duration: 200,
        easing: Easing.circle,
        toValue: -400
      }).start()
    }
  }, [active])

  React.useEffect(() => {
    function handler() {
      if (active) {
        setActive(false)
        return true
      }
      return undefined
    }

    BackHandler.addEventListener("hardwareBackPress", handler)

    return () => BackHandler.removeEventListener("hardwareBackPress", handler)
  }, [active])


  const zIndex = translateY.interpolate({
    inputRange: [-680, -300],
    outputRange: [0, -3],
    extrapolate: "clamp"
  })
  useEffect(() => {
    (async () => {

      setUser(await getUser())


    })();

  }, []);



  function handleValueChange(value: string, key: string) {
    setFormData({ ...formData, [key]: value })


  }
  function handleSearch() {
    setisSearchOpen(true)
  }

  async function handleLocationSearch(text: string) {


    let url = `${autoCompleteUrl}?input="${text.trim()}"&key=${googleApiKey}`
    let response = await fetch(url)
    let json = await response.json()
    setLocation(json.predictions)
    // console.log(json)

  }
  async function handleSelectLocation(data: any) {
    let response = await fetch(`${autocompleteDetails}?placeid=${data}&key=${googleApiKey}`)
    let payload = await response.json()


    let { lat, lng } = payload.result.geometry.location;

    setFormData({
      ...formData,
      longitude: String(payload.result.geometry.location.lng),
      latitude: String(payload.result.geometry.location.lat),
      address: String(payload.result.formatted_address),

    })


    // SetLocationDetails({ latitude: lat, longitude: lng, address })


  }
  function createLocationOptions(location: any[]) {
    let resArray = []
    for (let i = 0; i < location.length; i++) {
      // console.log(location[i])
      resArray.push({ value: String(i), label: location[i].description, label1: location[i].place_id })
    }

    // console.log(resArray)
    return resArray
  }



  const pickImage = async () => {
    //   // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //   console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      //setMainfile({ name: result.assets[0].fileName, type: 'png/jpeg', uri: result.assets[0].uri })

    }
  };


  async function subMitForm() {


    if (formData.mobile === '' || formData.mobile == null) {
      setAlert("Name is require")
      // console.log("name is require")
      // return
    }
    else if (formData.email === '' || formData.email == null) {
      setAlert("Email is require")
      // return
    }
    else if (formData.key_skills === '' || formData.key_skills == null) {
      setAlert("key Skill is require")
      // return
    }

    else if (formData.address === '' || formData.address == null) {
      setAlert("Address is require")
      // return
    }
    else {
      const setData = new FormData();
      setData.append('companyname', formData.companyname)
      setData.append('firstname', formData.firstname)
      setData.append('lastname', formData.lastname)
      // setData.append('email', formData.email)
      setData.append('mobile', formData.mobile)
      setData.append('gender', 'Male')
      setData.append('key_skills[]', formData.key_skills)
      setData.append('zip', formData.zip)
      setData.append('foundedyear', formData.foundedyear)
      setData.append('address', formData.address)
      setData.append('latitude', formData.latitude)
      setData.append('longitude', formData.longitude)
      setData.append('profilePic', { uri: image, name: "phd.png", type: 'images/png' } as any)
      setData.append('user_id', user?.userId as any)
      setData.append('short_bio', formData.short_bio)
      setData.append('teamsize', "")
      console.log(setData)

      let response = await fetch(API_URLS.getUpdatepersonalDetails, {
        method: "POST",
        body: setData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },

      })

      let payload = await response.json()
      if (payload.status === "success") {
        setAlert(payload.result)
      }
    }




  }

  // Camera function


  // async function handleProfileImage(key: string) {

  //   BottomSheet.show({
  //       element: <BottomSheetView objectkey={key} />
  //   })
  // }
  // async function handleImageLibrary(key: string) {
  //   BottomSheet.dismiss()

  //   let results = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       aspect: key == "profilePic" ? [1, 1] : [4, 3],
  //       base64: false,
  //       allowsEditing: true
  //   })

  //   if (results.canceled || results.assets.length <= 0) return;

  //   let image = results.assets.at(0);

  //   setFormData({ ...formData, [key]: image } as any)
  // }
  // async function handleCameraUpload(key: string) {
  //   BottomSheet.dismiss()
  //   const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //       SnackBar.show({
  //           text: "Please grant camera permission!",
  //           type: "LONG",
  //           backgroundColor: colorDanger
  //       })
  //       return;
  //   }

  //   const imageLibrarypermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (imageLibrarypermission.granted === false) {
  //       SnackBar.show({
  //           text: "Please grant Image Libary permission!",
  //           type: "LONG",
  //           backgroundColor: colorDanger
  //       })
  //       return;
  //   }
  //   console.log(permissionResult.granted)
  //   let results = await ImagePicker.launchCameraAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       aspect: key == "image" ? [1, 1] : [4, 3],
  //       base64: true,
  //       allowsEditing: true
  //   })
  //   if (results.canceled || results.assets.length <= 0) return;

  //   let image = results.assets.at(0);

  //   setFormData({ ...formData, [key]: 'data:image/png;base64,' + image?.base64 } as any)
  // }

  // function BottomSheetView({ objectkey }: any) {
  //   return (
  //       <View style={{ height: 140,
  //         width: '100%'}}>
  //           <Pressable
  //               onPress={() => handleCameraUpload(objectkey)}
  //               style={{ width: '100%',
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //               padding: 12,
  //               height: 60,
  //               borderBottomColor: 'rgba(0,0,0,0.1)',
  //               borderBottomWidth: 1}}>
  //               <Text style={{ fontFamily: 'Fontawesome-solid',
  //         fontSize: 20,
  //         marginRight: 10}}>&#xf030;</Text>
  //               <Text>Camera</Text>
  //           </Pressable>
  //           <Pressable
  //               onPress={() => handleImageLibrary(objectkey)}
  //               style={{ width: '100%',
  //               flexDirection: 'row',
  //               alignItems: 'center',
  //               padding: 12,
  //               height: 60,
  //               borderBottomColor: 'rgba(0,0,0,0.1)',
  //               borderBottomWidth: 1}}>
  //               <Text style={{fontFamily: 'Fontawesome-solid',
  //                fontSize: 20,
  //                marginRight: 10}}>&#xf03e;</Text>
  //               <Text>Image Library</Text>
  //           </Pressable>
  //       </View>
  //   )


  // }










  function AutoCompleteLayout({ item }: ListRenderItemInfo<{
    label: number; value: string, label1: number
  }>) {


    return (
      <TouchableRipple
        onPress={() => {
          console.log(item.label)
          // setPlaceId:String(item.label1)
          setFormData({
            ...formData,
            address: String(item.label)

          })
          handleSelectLocation(String(item.label1))
          setisSearchOpen(false)
        }}
        ripple_color={'rgba(0,0,0,0.2)'}
        style={{
          width: '100%',
          padding: 4,
          paddingVertical: 10
        }}>
        <Text style={{
          fontSize: 13,
          fontFamily: "Inter-Bold",
          marginBottom: 4
        }}>{item.label}</Text>



      </TouchableRipple>
    )
  }




  return (
    <Animated.View style={{
      height: 700,
      backgroundColor: "#f5f5fa",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "rgb(62, 62, 104)",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
      padding: 17,
      zIndex,
      position: 'absolute',
      width: '100%',
      transform: [{ translateY }]
    }}>
      <Text style={{ fontSize: 17, marginBottom: 10, fontFamily: "Inter-Bold", color: "#909090" }}>Add Personal Details</Text>
      <Pressable
        onPress={() => setActive(true)}
        style={{
          height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5fa", shadowColor: "rgb(62, 62, 104)",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,

          elevation: 20,
          display: active ? "none" : "flex"
        }}>
        <Text style={{ fontSize: 17, color: colorPrimary }}>+</Text>
      </Pressable>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", padding: 4 }}
        style={{ width: '100%' }}>
        <View style={{ marginTop: 60 }}>
          <Pressable
            style={{
              height: 140, width: 140, backgroundColor: "#f5f5fa", borderRadius: 70,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,
              elevation: 16,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Pressable onPress={pickImage}>
              <Image source={{ uri: image }} style={{ height: 140, width: 140, borderRadius: 70 }} resizeMode="cover" />

            </Pressable>


            {/* <FontAwesome name="user" size={40} color={'rgba(0,0,0,0.3)'} /> */}
          </Pressable>

        </View>
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          First Name
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder="First Name"
          onChangeText={(text) => handleValueChange(text, "firstname")}
        />
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Last Name
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder="Last Name"
          onChangeText={(text) => handleValueChange(text, "lastname")}
        />
        {/* <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Email Address
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder={user?.email}
          onChangeText={(text) => handleValueChange(text, "email")}
        /> */}
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Phone Number
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}

          placeholder="Phone Number"
          onChangeText={(text) => handleValueChange(text, "mobile")}
        />
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Gender
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <DropdownSelect
          options={[{ label: "Male", value: "Male" }, { label: "Female", value: "Female" }]}
          placeholder="Gender"
        // onValueChange={handleValueChange(value,')}

        />
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Legal Address
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <Pressable style={{ width: '100%' }} onPress={handleSearch}>
          <TextInput
            style={{ width: '100%' }}
            placeholder="Legal Address"
            editable={false}

            value={formData.address.slice(0, 40)}
            onChangeText={(text) => handleValueChange(text, "address")}
          />
        </Pressable>

        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Zip Code
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder="Zip Code"
          onChangeText={(text) => handleValueChange(text, "zip")}
        />

        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Key Skills
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%' }}
          placeholder="Key Skills"
          onChangeText={(text) => handleValueChange(text, "key_skills")}
        />
        <Text style={{ fontFamily: "Inter-Bold", width: '100%', paddingLeft: 7, marginTop: 10 }}>
          Short Bio
          <Text style={{ color: colorDanger }}>*</Text>
        </Text>
        <TextInput
          style={{ width: '100%', height: 200, borderRadius: 10, textAlignVertical: "top", paddingTop: 8 }}
          multiline
          placeholder="Short Bio"
          onChangeText={(text) => handleValueChange(text, "short_bio")}
        />


        <TouchableRipple style={{ width: '90%' }}>
          <ButtonPrimary onPress={subMitForm} style={{ height: 55, marginBottom: 120 }}>
            <Text>Save</Text>
          </ButtonPrimary>
        </TouchableRipple>

        {/* <ButtonPrimary  style={{ height: 55, marginBottom: 120 }}>
          <Text>Save</Text>
        </ButtonPrimary> */}

      </ScrollView>
      <Pressable
        onPress={() => setActive(false)}
        style={{
          height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5fa", shadowColor: "rgb(62, 62, 104)",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,

          elevation: 20,
          display: active ? "flex" : "none",
          position: "absolute",
          top: 12,
          right: 16
        }}>
        <Text style={{ fontSize: 17, color: colorPrimary }}>&times;</Text>
      </Pressable>


      <Modal
        animationType='slide'
        onRequestClose={() => setisSearchOpen(false)}
        visible={isSearchOpen}>
        <View style={{ padding: 8, flex: 1 }} >

          <SearchbarEditable
            onBackButtonPress={() => setisSearchOpen(false)}
            onChangeText={handleLocationSearch}
            label={currentAddress as any}
          // onSelect={handleSelectLocation}
          />

          <FlatList
            style={{ flex: 1 }}
            data={createLocationOptions(location)}
            keyExtractor={item => item.value}
            renderItem={AutoCompleteLayout}

          />



        </View>
      </Modal>
    </Animated.View>
  )
}
export default function ExpertProfileUpdate() {
  const [user] = useUser()
  const [isSearchOpen, setisSearchOpen] = useState(false)

  const [location, setLocation] = useState<Location[]>([])

  const [formData, setFormData] = useState<userValue>({
    companyname: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    key_skills: "",
    zip: "",
    address: "",
    foundedyear: "",
    teamsize: "",
    latitude: "",
    longitude: "",
    short_bio: "",
    user_id: "",
  })
  const percentage = React.useMemo(() => {
    let total = Object.keys(user ?? {}).length ?? 1;
    let filled = Object.values(user ?? {}).filter(item => item?.length != 0)?.length ?? 0;

    return filled / total * 100
  }, [user])

  const navigation = useNavigation<any>()
  return (
    <ExpertLayout
      MessageTextBarHidden
      isChildren={true}
      disable={true}
      title="Edit Profile">
      <View style={{ width: '100%', padding: 12 }}>
        <Text style={{ fontFamily: "Inter-Medium", color: colorPrimary, fontSize: 18 }}>Personal Details</Text>
        <Text style={{ fontFamily: "Inter-Medium", lineHeight: 21, marginTop: 12 }}>Create a profile to establish yourself as a freelancer
          on the AfreBay Platform.</Text>
        <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 17 }}>
          <Text style={{ fontSize: 17, fontFamily: "Inter-Bold" }}>Profile completion</Text>
          <Text style={{ fontFamily: "Inter-Medium", color: colorPrimary }}>{`${percentage.toFixed(2)}%`}</Text>
        </View>

        <View style={{ width: '100%', height: 6, backgroundColor: "#00000020", borderRadius: 4, marginTop: 13, overflow: "hidden" }}>
          <View style={{ width: `${percentage}%`, height: 6, backgroundColor: colorPrimary }}>
       </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ButtonLight
            onPress={() => navigation.navigate("ExpertProfile")}
            style={{ height: 55, width: 160, borderRadius: 10, margin: "auto" }}>
            <Text style={{ fontSize: 13 }}>View Profile</Text>
          </ButtonLight>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: -10, width: '100%' }}>
        <PersonalEdit />
        <EducationEdit />
        <WorkEdit />
      </View>



    </ExpertLayout>

  )
}



function setInputValue(arg0: string) {
  throw new Error("Function not implemented.");
}

function setSelectedDate(date: Date) {
  throw new Error("Function not implemented.");
}

