import React from 'react'
import { View, Text, TouchableOpacity, Platform, Modal, Pressable, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar, TouchableRipple } from 'react-native-paper';
import ExpertLayout from './BusinessLayout';
import TextInput from '../../components/TextInput';
import { colorPrimary } from '../../constants/color';
import DropdownSelect from '../../components/DropdownSelect';
import Textarea from '../../components/Textarea';
import RNLinearGradient from '../../components/RNLinearGradient';
export default function EditProfile() {
  const [open, setOpen] = React.useState(false)
  const platform = Platform.OS
  const Navigation = useNavigation<any>()
  function gotoProfile() {
    Navigation.navigate('BusinessProfile')
  }
  function gotoaddpersonaldetails() {
    Navigation.navigate('AddPersonalDetails')
  }
  const options = [
    {
      value: "Male",
      label: "Male"
    },
    {
      value: "Female",
      label: "Female"
    },
    {
      value: "Others",
      label: "Others"
    },

  ]
  return (
    <ExpertLayout title="Edit Profile" isChildren={true}>

      <Modal
        transparent={true}
        onRequestClose={() => setOpen(false)}
        animationType="slide"
        visible={open}>

        <View
          style={{
            padding: 18, flex: 1, paddingBottom: 6,
          }}>
          <View

            style={[styles.bottomsheet]}
          >
            <Text style={styles.bottomsheetTitle}>
              Add Personal details
            </Text>
            <Pressable
                onPress={() => setOpen(false)}
                style={styles.bottomSheetClose}>
                <AntDesign
                  style={{ fontWeight: '100' }}
                  name="close"
                  color={colorPrimary}
                  size={15} />
              </Pressable>
            <View style={styles.userprofileimg}>
              <View style={styles.criclebg}>
                <Feather name="camera" style={styles.cricleitext} />
              </View>
              <Image source={require('../../assets/images/freelancers4.jpg')} style={styles.userprofileimgg} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Full Name *</Text>
                <TextInput placeholder="Enter your first name"
                />
              </View>
            
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Last Name *</Text>
                <TextInput placeholder="Enter Your Last Name"
                />
              </View>
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Email Address *</Text>
                <TextInput placeholder="Enter Your Email Address"
                />
              </View>
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Phone Number</Text>
                <TextInput placeholder="Enter Your Phone Number"
                />
              </View>
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Gender *</Text>
                <DropdownSelect
                  options={options}
                  placeholder="Select Gender"
                />
              </View>

              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Legal Address*</Text>
                <TextInput placeholder="Enter Legal Address"
                />
              </View>
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Key Skills</Text>
                <TextInput placeholder="Enter Key Skills"
                />
              </View>
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Zip Code</Text>
                <TextInput placeholder="Enter Zip Code"
                />
              </View>
              <View style={styles.pgfull}>
                <Text style={styles.titileop}>Short Bio*</Text>
                <Textarea placeholder="Enter Your Short Bio"
                />
              </View>

              <TouchableRipple style={styles.wdtg}>
                <RNLinearGradient
                  direction="column"
                  style={styles.linearGradient}
                  colors={['hsl(222, 83%, 32%)', 'hsl(223, 86%, 65%)']} >
                  <Text style={styles.buttontext} >Save Changes </Text>
                </RNLinearGradient>
              </TouchableRipple></ScrollView>
          </View>
        </View>

      </Modal>

      <View style={styles.updateprofile}>
        <Text style={styles.updateheading}>Update your profile</Text>
        <Text style={styles.updraea}>Create a profile to establish yourself as a Business on the AES Platform.</Text>

        <View style={styles.profileccompl}>
          <View style={styles.persentdf}>
            <Text style={styles.pertext}> 65%</Text>
          </View>
          <Text style={styles.headingcompl}>Profile completion
            <Text style={styles.editprofile}> Edit</Text>
          </Text>

          <View style={styles.prosbarsection}>
            <ProgressBar progress={0.6} color='#1B52DF' />
          </View>
        </View>

        <View style={styles.profilepreview}>
          <TouchableOpacity onPress={gotoProfile} activeOpacity={0.9}>
            <Text style={styles.previewr}>View A Preview Of Your Profile</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.addprofilelist}>
        <View style={styles.editdetaillist}>
          <Text style={styles.persodetails}>Add Personal Details</Text>
          <TouchableOpacity onPress={() => setOpen(true)} activeOpacity={0.9}>
            <View style={styles.editdetaicricle} >
              <AntDesign name="plus" size={24} color="#1B52DF" />
            </View>
          </TouchableOpacity>
        </View>

      </View>

    </ExpertLayout>
  )
}

const styles = StyleSheet.create({
  homesection: {
    backgroundColor: '#F5F5FA',
    height: '100%',
  },
  persentdf: {
    position: 'absolute',
    right: 0,
    marginTop: 10,
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
  wdtg: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttontext: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  pertext: {
    fontSize: 12,
    fontFamily: "Inter-Medium",
  },
  userprofileimg: {

  },
  cricleitext: {

    color: '#fff',
    fontSize: 20,
  },
  criclebg: {
    position: 'absolute',
    left: '58%',
    top: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#1B52DF',
    textAlign: 'center',
    zIndex: 9,
  },
  userprofileimgg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    marginTop: 20,
  },
  profilepreview: {
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 50,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  headingcompl: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: "Inter-Medium",

  },

  profilepro: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  pgfull: {
    width: '100%',
    marginBottom: 12,
    // marginLeft:20,
  },
  bottomsheet: {
    width: '100%',
    minHeight: 250,
    marginTop: 'auto',
    overflow: 'scroll',
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
    color: '#909090',
    fontFamily: "Inter-Bold",
    fontSize: 16,
    marginVertical: 2,
    marginBottom: 20,


  },
  titileop: {
    paddingLeft: 4,
    fontWeight: 'bold',
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
    top: 25,
    right: 18
  },
  prosbarsection: {
    paddingTop: 10,
  },
  persodetails: {
    fontSize: 16,
    color: '#909090',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: "Inter-Medium",
  },
  previewr: {
    color: '#1B52DF',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: "Inter-Medium",
  },
  topsec: {

  },
  addprofilelist: {
    position: 'relative',
    width: '100%',
    marginTop: 230,
    bottom: 0,
  },
  editdetaillist: {
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 50,
    backgroundColor: '#fff',
    marginTop: 0,
    marginBottom: 0,
    color: '#1B52DF',
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
    padding: 18,
    paddingBottom: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

  },
  editdetaillisttopsec: {
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)',
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 50,
    backgroundColor: '#fff',
    marginTop: -30,
    marginBottom: 0,
    color: '#1B52DF',
    fontWeight: 'bold',
    width: '100%',
    padding: 18,
    paddingBottom: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

  },
  editdetaicricle: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    // borderColor:'#ebebeb',
    borderColor: Platform.OS === 'android' ? '#fff' : '#f1f1f1',
    shadowOpacity: 0.8,
    elevation: 4,
    backgroundColor: '#fff',
    shadowRadius: 50,
    textAlign: 'center',
    marginTop: 10,
  },
  profileccompl: {
    paddingTop: 10,
  },
  updateprofile: {
    padding: 20,
    //  height:500,

  },
  editprofile: {
    color: '#1B52DF',
    fontSize: 12,
    marginLeft: 20,
  },
  updateheading: {
    color: '#1B52DF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    fontFamily: "Inter-Medium",
  },
  updraea: {
    color: '#909090',
    fontSize: 13,
    fontFamily: "Inter-Medium",
    lineHeight: 18,
  },
});
