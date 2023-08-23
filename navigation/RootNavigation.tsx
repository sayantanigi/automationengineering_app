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
import PrivacyPolicy from "../screens/Global/Privacypolicy";
import ContactUs from "../screens/Global/ContactUs";
import About from "../screens/Global/About";
import TermsCondition from "../screens/Global/TermsCondition";
import Settings from "../screens/Global/Settings";
import CareerTips from "../screens/Global/CareerTips";
import ExpertsOpportunitiesDetails from "../screens/Experts/ExpertsOpportunitiesDetails";
import ExpertsChatDetails from "../screens/Experts/Chat/ExpertsChatDetails";
import BusinessDetails from "../screens/Experts/BusinessDetails";
import ProductDetails from "../screens/Experts/ProductDetails";
import ChangePassword from "../screens/Global/ChangePassword";
import ExpertSubscriptionDone from "../screens/Experts/Subscription/ExpertSubscriptionDone";
import ExpertEditProfile from "../screens/Experts/ExpertEditProfile";
import AfterExpertSubscription from "../screens/Experts/Subscription/AfterExpertSubscription";


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

                    


                    
                </Root.Group>
            </Root.Navigator>
        </NavigationContainer>
    )
}