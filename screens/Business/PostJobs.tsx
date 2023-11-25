import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Platform, Modal, FlatList, ListRenderItemInfo, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import Background from "../../assets/images/postjobs.png";
// import { LinearGradient } from 'expo-linear-gradient';
import TouchableRipple from "../../components/TouchableRipple";
import RNLinearGradient from '../../components/RNLinearGradient';
import TextInput from "../../components/TextInput";
import Textarea from '../../components/Textarea';
import { MaterialIcons } from '@expo/vector-icons';
import BusinessLayout from './BusinessLayout';
import { getCategoryList, getKeySkills, getSubCategoriesByCategory, postJob } from '../../Network/APIService';
import DropdownSelect from "../../components/DropdownSelect";
import { SearchbarEditable } from '../../components/SearchBar';
import { autoCompleteUrl, autocompleteDetails, googleApiKey } from '../../Network/URL';
import { EvilIcons } from "@expo/vector-icons";
import { getUser } from '../../stores/userAsync';
import { useUser } from '../../stores/user';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

export interface postValue {
  user_id: string
  post_title: string
  description: string
  duration: string
  key_skills: number[]
  currency: string
  charges: string
  category_id: string
  subcategory_id: string
  appli_deadeline: string
  country: string
  state: string
  city: string
  location: string
  latitude: string
  longitude: string
}

interface Location {
  formatted_address: string
}

export default function PostJobs() {
  const [categories, setCategories] = useState<{
    label: string,
    value: string
  }[] | []>([])
  const [subCategories, setSubCategories] = useState<{
    label: string,
    value: string
  }[] | []>([])

  const [keySkills, setKeySkills] = useState<{
    label: string,
    value: string
  }[] | []>([])
  const [alert, setAlert] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [user, setUser] = useUser()
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
  const [currentAddress, setCurrentaddress] = useState(null);
  const [showdatePicker, setShowDatePicker] = useState(false)
  const [inputValue, setInputValue] = useState('');
  const [isSearchOpen, setisSearchOpen] = useState(false)
  const [location, setLocation] = useState<Location[]>([])
  const [formData, setFormData] = useState<postValue>({
    user_id: "",
    post_title: "",
    description: "",
    duration: "",
    key_skills: [],
    currency: "USD ($)",
    charges: "",
    category_id: "",
    subcategory_id: "",
    appli_deadeline: "",
    country: "",
    state: "",
    city: "",
    location: "",
    latitude: "",
    longitude: "",
  })
  function handleValueChange(value: string, key: string) {
    setFormData({ ...formData, [key]: value })
  }

  useEffect(() => {
    (async () => {
      setUser(await getUser())
      const [categories, keyskills] = await Promise.allSettled([getCategoryList(), getKeySkills()])

      if (categories.status === "fulfilled") {
        const tempData: { label: string, value: string }[] = []
        categories.value.map(item => {
          tempData.push({
            label: item.category_name,
            value: item.id
          })
        })
        setCategories(tempData)
      }

      if (keyskills.status === "fulfilled") {
        const tempData: { label: string, value: string }[] = []
        keyskills.value.map(item => {
          tempData.push({
            label: item.specialist_name,
            value: item.id
          })
        })
        setKeySkills(tempData)
      }

    })();
    return () => {
      setCategories([])
      setKeySkills([])
    }
  }, [])

  useEffect(() => {
    setFormData({
      ...formData,
      user_id: user?.userId!
    })

    return () => {
      setFormData({
        ...formData,
        user_id: ""
      })
    }
  }, [user])


  useEffect(() => {
    (async () => {
      const data = await getSubCategoriesByCategory(selectedCategory!)
      if (data) {
        const tempData: { label: string, value: string }[] = []
        data.map(item => {
          tempData.push({
            label: item.sub_category_name,
            value: item.id
          })
        })
        setSubCategories(tempData)
      }

    })();
    return () => {
      setSubCategories([])
    }
  }, [selectedCategory])

  function createLocationOptions(location: any[]) {
    let resArray = []
    for (let i = 0; i < location.length; i++) {
      // console.log(location[i])
      resArray.push({ value: String(i), label: location[i].description, label1: location[i].place_id })
    }

    // console.log(resArray)
    return resArray
  }
  function getAddressComponent(str: string) {
    let strArr = str.split(",");
    let resultObject: Record<string, string> = {};

    strArr.forEach((item: string) => {
      resultObject[item.match(/class\=\"(.*)\"/)?.[1] ?? ""] = item.replace(/<\/?[^>]+(>|$)/g, "").trim()
    })

    return resultObject
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
    const object = getAddressComponent(payload.result.adr_address)
    console.log(object)
    setFormData({
      ...formData,
      longitude: String(payload.result.geometry.location.lng),
      latitude: String(payload.result.geometry.location.lat),
      location: String(payload.result.formatted_address),
      // country: String(payload.result.address_components.find((item: any) => item.types.find((type: string) => type === "country")).long_name),
      // state: String(payload.result.address_components.find((item: any) => item.types.find((type: string) => type === "administrative_area_level_1")).long_name),
      // city: String(payload.result.address_components.find((item: any) => item.types.find((type: string) => type === "locality")).long_name),
      country: object["country-name"],
      state: object["region"],
      city: object["locality"]

    })
  }
  function AutoCompleteLayout({ item }: ListRenderItemInfo<{
    label: number; value: string, label1: number
  }>) {
    return (
      <TouchableRipple
        onPress={() => {
          // setPlaceId:String(item.label1)
          setFormData({
            ...formData,
            location: String(item.label)

          })
          handleSelectLocation(String(item.label1))
          setisSearchOpen(false)
        }}
        ripple_color={'rgba(0,0,0,0.2)'}
        style={styles.listItem}>
        <Text style={styles.listTitle}>{item.label}</Text>

      </TouchableRipple>
    )
  }
  function handleSearch() {
    setisSearchOpen(true)
  }
  const hideDatePicker = () => {
    setShowDatePicker(false);

  };

  const handleConfirm = (date: any) => {
    // console.warn("A date has been picked: ", date);
    const formattedDate = moment(date).format('YYYY-MM-DD');
    setInputValue(formattedDate)
    setFormData({ ...formData, appli_deadeline: formattedDate })

    hideDatePicker();
  };
  const showDatePicker = () => {
    setShowDatePicker(true);

  };

  const handleSubmit = async () => {
    const response = await postJob(formData)
    if(response.status === "success"){
      /// Show Toast
      setAlert(response.result)
    }
  }
  return (
    <BusinessLayout title="Post jobs" isChildren={true}>
      <View style={styles.bgimgsection}>
        <ImageBackground source={Background} resizeMode="cover" style={styles.imagex}>
          <Text style={styles.productheading}>Post A New Job</Text>
          <View style={styles.overlay} />
        </ImageBackground>
      </View>
      <View style={styles.addfulsection}>
        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Job Title *</Text>
          <TextInput
            placeholder="Enter your job title"
            onChangeText={(text) => handleValueChange(text, "post_title")}
            value={formData.post_title}
          />
        </View>
        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Description</Text>
          <Textarea
            onChangeText={(text) => handleValueChange(text, "description")}
            placeholder="Enter your description"
            value={formData.description}
          />
        </View>
        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Required skill set *</Text>
          <DropdownSelect options={keySkills} placeholder='Select keyskills' onChangeValue={(val) => {
            setFormData({
              ...formData,
              key_skills: [...formData.key_skills, Number(val.value)]
            })
          }} />
        </View>

        <DateTimePickerModal
          isVisible={showdatePicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Approximate Duration</Text>
          <TextInput
            onChangeText={(text) => handleValueChange(text, "duration")}
            placeholder="Enter approximate duration"
            value={formData.duration}
          />
        </View>

        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Approximate Remuneration ($)</Text>

          <View style={styles.remunreaapp}>

            <View style={styles.textusd}>
              <Text style={styles.textdolcolor}>USD ($)</Text>
            </View>

            <View style={styles.chaartext}>
              <TextInput
                onChangeText={(text) => handleValueChange(text, "charges")}
                placeholder="Enter Charges"
                value={formData.charges}
              />
            </View>
          </View>

        </View>

        <View style={styles.pgflc}>
          <Text style={styles.titileop}>Categories *</Text>
          <DropdownSelect options={categories} placeholder='Select Category' onChangeValue={(val) => {
            setSelectedCategory(val.value)
            setFormData({
              ...formData,
              category_id: val.value
            })
          }} />
          <View style={styles.cricleiconb} >
            <MaterialIcons name="keyboard-arrow-down" style={styles.cricleitext} />
          </View>
        </View>

        <View style={styles.pgflc}>
          <Text style={styles.titileop}>Sub Categories *</Text>
          <DropdownSelect options={subCategories} placeholder='Select SubCategory' onChangeValue={(val) => {
            setSelectedSubCategory(val.value)
            setFormData({
              ...formData,
              subcategory_id: val.value
            })
          }} />
          <View style={styles.cricleiconb} >
            <MaterialIcons name="keyboard-arrow-down" style={styles.cricleitext} />
          </View>

        </View>

        <View style={styles.pgflc}>
          <Text style={styles.titileop}>Application Deadline Date *</Text>
          <TouchableOpacity style={{ width: '100%' }} onPress={showDatePicker}>

            <TextInput
              value={inputValue}
              editable={false}
              style={{ width: '100%' }}
              placeholder="From Date"
            // onChangeText={(text) => handleValueChange(text, "from_date")}
            />

          </TouchableOpacity>
        </View>

        <View style={styles.pgflc}>
          <Text style={styles.titileop}>Address *</Text>
          <Pressable
            onPress={handleSearch} style={styles.pgfull}>
            <TextInput
              editable={false}
              placeholder="Legal Address"
              value={formData.location.slice(0, 40)}
              onChangeText={(text) => handleValueChange(text, "location")} />

            <View style={styles.cricleiconb} >
              <EvilIcons name="location" style={styles.cricleitext} />
            </View>
          </Pressable>
        </View>

        <Modal
          animationType='slide'
          onRequestClose={() => setisSearchOpen(false)}
          visible={isSearchOpen}>
          <View style={styles.searchPopup} >

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

        <View style={styles.pgflc}>
          <Text style={styles.titileop}>Country *</Text>
          <TextInput
            editable={false}
            placeholder="Enter country"
            value={formData.country}
          />
          <View style={styles.cricleiconb} >
            <MaterialIcons name="keyboard-arrow-down" style={styles.cricleitext} />
          </View>
        </View>

        <View style={styles.pgflc}>
          <Text style={styles.titileop}>States *</Text>
          <TextInput
            editable={false}
            placeholder="Enter States"
            value={formData.state}
          />
          <View style={styles.cricleiconb} >
            <MaterialIcons name="keyboard-arrow-down" style={styles.cricleitext} />
          </View>
        </View>

        <View style={styles.pgflc}>
          <Text style={styles.titileop}>City *</Text>
          <TextInput
            editable={false}
            placeholder="Enter city"
            value={formData.city}
          />
          <View style={styles.cricleiconb} >
            <MaterialIcons name="keyboard-arrow-down" style={styles.cricleitext} />
          </View>
        </View>

        {/* <View style={styles.pgflc}>
          <Text style={styles.titileop}>Find On Map *</Text>
          <TextInput
            onChangeText={(text) => handleValueChange(text, "post_title")}
            placeholder="Enter find on map *"
          />
          <View style={styles.cricleiconb} >
            <MaterialIcons name="keyboard-arrow-down" style={styles.cricleitext} />
          </View>
        </View>


        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Latitude</Text>
          <TextInput
            onChangeText={(text) => handleValueChange(text, "post_title")}
            placeholder="Enter latitude"
          />
        </View>
        <View style={styles.pgfull}>
          <Text style={styles.titileop}>Longitude</Text>
          <TextInput
            onChangeText={(text) => handleValueChange(text, "post_title")}
            placeholder="Enter longitude"
          />
        </View> */}
        {/* <View style={styles.profilemapbtn}>
          <TouchableOpacity style={styles.mgt} activeOpacity={0.9}>
            <View style={styles.freelbtnmaps}>
              <Text style={styles.freelbtnmaptext}>
                Maps
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.freelbtn} >
              <Text style={styles.sealocation}>
                Search Location
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}


      </View>
      <View style={styles.submfga}>
        <TouchableRipple onPress={handleSubmit}>
          <RNLinearGradient
            direction="column"
            style={styles.linearGradient}
            colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
            <Text style={styles.buttontext} >Submit</Text>
          </RNLinearGradient>
        </TouchableRipple>
      </View>

    </BusinessLayout>

  )
}
const styles = StyleSheet.create({
  imagex: {
    height: 230,
    width: '100%',
  },
  mgt: {
    marginRight: 10,
  },
  remunreaapp: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: "row",
  },
  chaartext: {
    width: '68%',
  },
  textusd: {
    shadowColor: Platform.OS === 'android' ? '#F5F5FA' : '#F5F5FA',
    shadowOpacity: 0.8,
    elevation: 4,
    backgroundColor: '#fff',
    shadowRadius: 50,
    marginTop: 10,
    marginBottom: 0,
    width: 100,
    height: 50,
    marginRight: 10,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 50,
  },
  textdolcolor: {
    paddingTop: 16,
    fontWeight: '600',
    color: '#D6D6D6',
    textAlign: 'center',
  },
  freelbtn: {
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 4,
    backgroundColor: '#fff',
    shadowRadius: 50,
    marginTop: 18,
    marginBottom: 0,

    width: 140,
    padding: 10,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 50,
  },
  sealocation: {
    color: '#1B52DF',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
  },
  freelbtnmaps: {
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 4,
    backgroundColor: '#fff',
    shadowRadius: 50,
    marginTop: 18,
    marginBottom: 0,
    width: 140,
    padding: 10,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 50,
  },
  freelbtnmaptext: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
  },
  searchPopup: {
    padding: 8,
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  profilemapbtn: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
    marginBottom: 30,
  },
  cricleiconb: {
    fontSize: 20,
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    shadowOffset: { width: 1, height: 13 },
    elevation: 4,

    backgroundColor: '#fff',
    width: 32, height: 32, borderRadius: 50,
    zIndex: 9,

    marginHorizontal: 25,
    marginTop: -54,
    textAlign: 'center',
    marginLeft: "auto",
    marginRight: 20,
  },
  cricleitext: {
    position: 'relative',
    textAlign: 'center',
    top: 7,
    fontSize: 18,
    color: "#1B52DF",
  },
  camerabg: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: "bold",
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 50,
    left: 200,
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
    borderRadius: 50,
    marginTop: 8,
    marginBottom: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  submfga: {
    // justifyContent: 'center',
    // display: 'flex',
    // flexDirection: "row",
    // marginBottom:160,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttontext: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  titileop: {
    paddingLeft: 6,
    fontWeight: 'bold',
  },
  homesection: {
    backgroundColor: '#F5F5FA',
  },
  bgimgsection: {
    marginBottom: 10,
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
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    // borderColor:'#ebebeb',
    borderColor: Platform.OS === 'android' ? '#fff' : '#ebebeb',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 2, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
  },
  textinputarea: {
    marginTop: 10,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    paddingStart: 5,
    width: '90%',
    paddingTop: 14,
    height: 100,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlignVertical: 'top',
    borderWidth: 1,
    // borderColor:'#ebebeb',
    borderColor: Platform.OS === 'android' ? '#fff' : '#ebebeb',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 2, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
  },
  pgfull: {
    marginLeft: 16,
    // marginRight:20,
    width: '90%',
    marginBottom: 10,
  },

  pgflc: {
    marginLeft: 16,
    width: '90%',
    marginBottom: 20,
  },
  addfulsection: {
    backgroundColor: '#F5F5FA',
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin: 0,
    padding: 0,
    paddingTop: 30,
  },
  productdwn: {
    padding: 22,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
  },
  productheading: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
    color: '#fff',
    paddingTop: 120,
    position: 'relative',
    zIndex: 1,
  },
  profilepro: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  listItem: {
    width: '100%',
    padding: 4,
    paddingVertical: 10
  },
  listTitle: {
    fontSize: 13,
    fontFamily: "Inter-Bold",
    marginBottom: 4
  }
});
