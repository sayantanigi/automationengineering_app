import React from 'react'
import { View,Text, TouchableOpacity, Platform} from 'react-native'
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';
import ExpertLayout from './ExpertLayout';
export default function EditProfile() {
  const platform = Platform.OS
  const Navigation = useNavigation<any>()
  function gotoProfile() {
    Navigation.navigate('Profile')
}
function gotoaddpersonaldetails() {
  Navigation.navigate('AddPersonalDetails')
}
  return (
    <ExpertLayout title="Edit Profile" isChildren={true}>
                    <View style={styles.updateprofile}>
                        <Text style={styles.updateheading}>Update your profile</Text>
                       <Text style={styles.updraea}>Create a profile to establish yourself as a freelancer on the AfreBay Platform.</Text>
                    
                    <View style={styles.profileccompl}>
                    <View style={styles.persentdf}>
                       <Text style={styles.pertext}> 65%</Text>
                        </View>
                        <Text style={styles.headingcompl}>Profile completion 
                             <Text style={styles.editprofile}> Edit</Text>
                        </Text>

                        <View style={styles.prosbarsection}>
                        <ProgressBar progress={0.6} color='#1B52DF'/>
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
                  <TouchableOpacity onPress={gotoaddpersonaldetails} activeOpacity={0.9}>
                  <View style={styles.editdetaicricle} >
                  <AntDesign name="plus" size={24} color="#1B52DF" />
                  </View>
               </TouchableOpacity>
               </View>
                    <View style={styles.editdetaillisttopsec}>
                        <Text style={styles.persodetails}>Add Education Details</Text>
                        <View style={styles.editdetaicricle}>
                        <AntDesign name="plus" size={24} color="#1B52DF" />
                        </View>
                    </View>
                    <View style={styles.editdetaillisttopsec}>
                        <Text style={styles.persodetails}>Add Work Experience</Text>
                        <View style={styles.editdetaicricle}>
                        <AntDesign name="plus" size={24} color="#1B52DF" />
                        </View>
                    </View>
                    </View>
   
</ExpertLayout>
)
}

const styles = StyleSheet.create({
    homesection: {
        backgroundColor: '#F5F5FA',
        height:'100%',
      }, 
      persentdf:{
      position:'absolute',
      right:0,
      marginTop:10,
      },
      pertext:{
        fontSize:12,
      },
      profilepreview:{
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,  
        shadowRadius: 50 ,
        padding:16,
        borderRadius:10,
        backgroundColor : '#fff',
        marginTop:20,
      },
      headingcompl:{
        fontSize:14,
        fontWeight:'bold',
       
      },
      prosbarsection:{
          paddingTop:10,
      },
      persodetails:{
        fontSize:16,
        color:'#909090',
        fontWeight:'400',
        textAlign:'center',
},
      previewr:{
      color:'#1B52DF',
      textAlign:'center',
      fontWeight:'500',
      },
topsec:{

},
addprofilelist:{
    position:'relative',
    width:'100%',
    marginTop:38,
    bottom:0,
    
},
      editdetaillist:{
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,  
        shadowRadius: 50 ,
        backgroundColor : '#fff',
        marginTop: 0,
        marginBottom:0,
        color: '#1B52DF',
        fontWeight: 'bold',
        width: '100%',
        padding: 18,
        paddingBottom:40,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
      },
      editdetaillisttopsec:{
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0)',
        shadowOpacity: 0.8,
        elevation: 4,  
        shadowRadius: 50 ,
        backgroundColor : '#fff',
        marginTop: -30,
        marginBottom:0,
        color: '#1B52DF',
        fontWeight: 'bold',
        width: '100%',
        padding: 18,
        paddingBottom:40,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
       
      },
      editdetaicricle:{
        justifyContent:'center',
        display: 'flex',
        flexDirection: "row",
        alignItems:'center',
        width:40,
        height:40,
        borderRadius:50,
        marginLeft:'auto',
        marginRight:'auto',
        shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.9)' :  'rgba(0, 0, 0, 0.1)',
        borderWidth:1,
        // borderColor:'#ebebeb',
        borderColor:Platform.OS === 'android' ? '#fff' :  '#f1f1f1',
        shadowOpacity: 0.8,
        elevation: 4,
        backgroundColor : '#fff',
        shadowRadius: 50 ,
        textAlign:'center',
        marginTop:10,
      },
      profileccompl:{
        paddingTop:10,
      },
      updateprofile:{
         padding:20,
        //  height:500,
        
      },
      editprofile:{
        color:'#1B52DF',
        fontSize:12,
       marginLeft:20,
      },
      updateheading:{
         color:'#1B52DF',
         fontWeight:'bold',
         fontSize:16,
         marginBottom:4,
      },
      updraea:{
        color:'#909090',
        fontSize:13,
        lineHeight:18,
      },
});
