import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ExpertRegister from "../screens/Experts/ExpertRegister";
import ExpertDashboard from "../screens/Experts/ExpertDashboard";
import ForgotPassword from "../screens/ForgotPasswordScreen";
import JobBids from "../screens/Experts/jobs/JobBids";
import JobPending from "../screens/Experts/jobs/JobPending";
import JobReviewed from "../screens/Experts/jobs/JobReviewed";
import ExpertMyjobs from "../screens/Experts/ExpertMyjobs";
import ExpertsChat from "../screens/Experts/Chat/ExpertsChat";
import ExpertProfile from "../screens/Experts/ExpertProfile";
import SeeAllJobs from "../screens/Experts/view-all/SeeAllJobs";
import SeeAllServices from "../screens/Experts/view-all/SeeAllServices";
import SeeAllCareerTips from "../screens/Experts/view-all/SeeAllCareerTips";
import ExpertSubscription from "../screens/Experts/Subscription/ExpertSubscription";
import PrivacyPolicy from "../screens/Experts/Others/Privacypolicy";
import ContactUs from "../screens/Experts/Others/ContactUs";
import About from "../screens/Experts/Others/About";
import TermsCondition from "../screens/Experts/Others/TermsCondition";
import Settings from "../screens/Experts/Others/Settings";
import CareerTips from "../screens/Experts/Others/CareerTips";
import ExpertsOpportunitiesDetails from "../screens/Experts/ExpertsOpportunitiesDetails";
import ExpertsChatDetails from "../screens/Experts/Chat/ExpertsChatDetails";
import BusinessDetails from "../screens/Experts/BusinessDetails";
import ProductDetails from "../screens/Experts/ProductDetails";
import ChangePassword from "../screens/Experts/Others/ChangePassword";
import ExpertSubscriptionDone from "../screens/Experts/Subscription/ExpertSubscriptionDone";
import ExpertEditProfile from "../screens/Experts/ExpertEditProfile";
import AfterExpertSubscription from "../screens/Experts/Subscription/AfterExpertSubscription";

 {/* Business Layout Start*/}
import BusinessDashboard from "../screens/Business/BusinessDashboard";
import BusinessSeeAllCareerTips from "../screens/Business/view-all/BusinessSeeAllCareerTips";
import BusinessSeeAllJobs from "../screens/Business/view-all/BusinessSeeAllJobs";
import BusinessSeeAllServices from "../screens/Business/view-all/BusinessSeeAllServices";
import BusinessRegister from "../screens/Business/BusinessRegister";
import BusinessCareerTips from "../screens/Business/Others/BusinessCareerTips";
import BusinessChangePassword from "../screens/Business/Others/BusinessChangePassword";
import BusinessContactUs from "../screens/Business/Others/BusinessContactUs";
import BusinessPrivacypolicy from "../screens/Business/Others/BusinessPrivacypolicy";
import BusinessSettings from "../screens/Business/Others/BusinessSettings";
import BusinessTermsCondition from "../screens/Business/Others/BusinessTermsCondition";
import BusinessAbout from "../screens/Business/Others/BusinessAbout";
import ListBids from "../screens/Business/jobs/ListBids";
import Products from "../screens/Business/jobs/Products";
import BusinessProfile from "../screens/Business/BusinessProfile";
import BusinessMyjobs from "../screens/Business/BusinessMyjobs";
import MyJobs from "../screens/Business/jobs/MyJobs";
import PostJobs from "../screens/Business/PostJobs";
import BusinessEditProfile from "../screens/Business/BusinessEditProfile";
import BusinessChat from "../screens/Business/Chat/BusinessChat";
import BusinessChatDetails from "../screens/Business/Chat/BusinessChatDetails";
import ListExperts from "../screens/Business/ListExperts";
import ExpertDetails from "../screens/Business/ExpertDetails";
import BusinessSubscription from "../screens/Business/Subscription/BusinessSubscription";
import AddProduct from "../screens/Business/jobs/AddProduct";
import BusinessOpportunitiesDetails from "../screens/Business/BusinessOpportunitiesDetails";
import BusinessSubscriptionDone from "../screens/Business/Subscription/BusinessSubscriptionDone";
import BusinessProductDetails from "../screens/Business/BusinessProductDetails";
import MapViewdetails from "../screens/Experts/jobs/MapViewdetails";
 {/* Business Layout End*/}


const Root = createNativeStackNavigator()
const DefaultOptions = { headerShown: false, animation: "slide_from_right" }
const TabOptions = { headerShown: false, animation: "none" }
export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="SplashScreen">
                <Root.Group screenOptions={DefaultOptions as any}>
                    <Root.Screen name="SplashScreen" component={SplashScreen} />
                    <Root.Screen name="OnboardingScreen" component={OnboardingScreen} />
                    <Root.Screen name="LoginScreen" component={LoginScreen} />
                    <Root.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Root.Screen name="ExpertRegister" component={ExpertRegister} />
                    <Root.Screen name="BusinessRegister" component={BusinessRegister} />
                    <Root.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
                </Root.Group>
                <Root.Group screenOptions={TabOptions as any}>
                    <Root.Screen name="ExpertDashboard" component={ExpertDashboard} />
                    <Root.Screen name="ExpertMyjobs" component={ExpertMyjobs} />
                    <Root.Screen name="JobBids" component={JobBids} />
                    <Root.Screen name="JobPending" component={JobPending} />
                    <Root.Screen name="JobReviewed" component={JobReviewed} />
                    <Root.Screen name="ExpertsChat" component={ExpertsChat} />
                    <Root.Screen name="ExpertsChatDetails" component={ExpertsChatDetails} />
                    <Root.Screen name="ExpertProfile" component={ExpertProfile} />
                    <Root.Screen name="SeeAllJobs" component={SeeAllJobs} />
                    <Root.Screen name="SeeAllServices" component={SeeAllServices} />
                    <Root.Screen name="SeeAllCareerTips" component={SeeAllCareerTips} />
                    <Root.Screen name="ExpertSubscription" component={ExpertSubscription} />
                    <Root.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
                    <Root.Screen name="ContactUs" component={ContactUs} />
                    <Root.Screen name="About" component={About} />
                    <Root.Screen name="TermsCondition" component={TermsCondition} />
                    <Root.Screen name="Settings" component={Settings} />
                    <Root.Screen name="CareerTips" component={CareerTips} />
                    <Root.Screen name="ExpertsOpportunitiesDetails" component={ExpertsOpportunitiesDetails} />
                    <Root.Screen name="BusinessDetails" component={BusinessDetails} />
                    <Root.Screen name="ProductDetails" component={ProductDetails} />
                    <Root.Screen name="ChangePassword" component={ChangePassword} />
                    <Root.Screen name="ExpertSubscriptionDone" component={ExpertSubscriptionDone} />
                    <Root.Screen name="ExpertEditProfile" component={ExpertEditProfile} />
                    <Root.Screen name="AfterExpertSubscription" component={AfterExpertSubscription} />
                    <Root.Screen name="MapViewdetails" component={MapViewdetails} />
                    
                </Root.Group>


                {/* Business Layout Start*/}
                <Root.Group screenOptions={TabOptions as any}>
                    <Root.Screen name="BusinessDashboard" component={BusinessDashboard} />
                    <Root.Screen name="BusinessSeeAllJobs" component={BusinessSeeAllJobs} />
                    <Root.Screen name="BusinessSeeAllServices" component={BusinessSeeAllServices} />
                    <Root.Screen name="BusinessSeeAllCareerTips" component={BusinessSeeAllCareerTips} />
                    <Root.Screen name="BusinessCareerTips" component={BusinessCareerTips} />
                    <Root.Screen name="BusinessChangePassword" component={BusinessChangePassword} />
                    <Root.Screen name="BusinessContactUs" component={BusinessContactUs} />
                    <Root.Screen name="BusinessPrivacypolicy" component={BusinessPrivacypolicy} />
                    <Root.Screen name="BusinessSettings" component={BusinessSettings} />
                    <Root.Screen name="BusinessTermsCondition" component={BusinessTermsCondition} />
                    <Root.Screen name="BusinessAbout" component={BusinessAbout} />
                    <Root.Screen name="ListBids" component={ListBids} />
                    <Root.Screen name="BusinessMyjobs" component={BusinessMyjobs} />
                    <Root.Screen name="Products" component={Products} />
                    <Root.Screen name="BusinessProfile" component={BusinessProfile} />
                    <Root.Screen name="MyJobs" component={MyJobs} />
                    <Root.Screen name="PostJobs" component={PostJobs} />
                    <Root.Screen name="BusinessEditProfile" component={BusinessEditProfile} />
                    <Root.Screen name="BusinessChat" component={BusinessChat} />
                    <Root.Screen name="BusinessChatDetails" component={BusinessChatDetails} />
                    <Root.Screen name="ListExperts" component={ListExperts} />
                    <Root.Screen name="ExpertDetails" component={ExpertDetails} />
                    <Root.Screen name="BusinessSubscription" component={BusinessSubscription} />
                    <Root.Screen name="AddProduct" component={AddProduct} />
                    <Root.Screen name="BusinessOpportunitiesDetails" component={BusinessOpportunitiesDetails} />
                    <Root.Screen name="BusinessSubscriptionDone" component={BusinessSubscriptionDone} />
                    <Root.Screen name="BusinessProductDetails" component={BusinessProductDetails} />

                    
                </Root.Group>
                {/* Business Layout End*/}

            </Root.Navigator>
        </NavigationContainer>
    )
}