export interface Categories {
  status: string
  result: Category[]
}

export interface Category {
  id: string
  category_name: string
}


export interface HomeListRespose {
  status: string
  result: Result
}

export interface SubCategories {
  status: string
  result: SubCategory[]
}

export interface KeySkills {
  status: string
  result: KeySkill[]
}

export interface KeySkill {
  id: string
  specialist_name: string
}

export interface SubCategory {
  id: string
  sub_category_name: string
}


export interface Result {
  get_post: GetPost[]
  countries: Country[]
  get_freelancerspost: GetFreelancerspost[]
  get_users: GetUser[]
  get_ourservice: GetOurservice[]
  get_company: any[]
  get_career: GetCareer[]
  userinfo: Userinfo[]
  educationlist: EducationList[]
  worklist: WorkList[]
  bidlist: BidList[]
  searchlist: SearchList[]
  jobBidDetails: JobBidDetails[]
  get_cms: GetCms
  getPostDetails: PostData
  getPendingReviewdList: PendingReviewdList[]
  userdata: UserBusiness[]
  get_productpost: UserGetPost[]
  count_post: CountPost[]
  prod_list: ProdList[]
  prod_details: ProdDetail[]
  prod_images: ProdImage[]
  get_user: GetChatUser[]
  get_userlistbbyjobbid: GetUserlistbbyjobbid[]
  result: ChatList[]
  myjobs: MyJobsList[]

}
export interface MyJobsList {
  id: string
  user_id: string
  post_title: string
  description: string
  required_key_skills: string
  duration: string
  charges: string
  currency: string
  category_id: string
  subcategory_id: string
  appli_deadeline: string
  country: string
  state: string
  city: string
  location: string
  latitude: string
  longitude: string
  complete_address: string
  status: string
  created_date: string
  update_date: string
  is_delete: string
}

export interface ChatList {
  id: string
  userfrom_id: string
  userto_id: string
  postjob_id: string
  message: string
  attachment: string
  created_date: string
  status: string
  is_delete: string
  username: any
  full_name: string
  profilePic: string
  to_username: any
  to_fullname: string
}

export interface GetChatUser {
  userId: string
  companyname: string
  firstname: string
  lastname: string
  username: any
  email: string
  mobile: string
  dob: any
  password: string
  profilePic: string
  userType: string
  serviceType: any
  created: string
  modified: string
  status: string
  email_verified: string
  address: string
  latitude: string
  longitude: string
  zip: string
  resume: string
  additional_image: string
  short_bio: string
  video: string
  gender: string
  experience: string
  qualification: string
  skills: string
  oauth_provider: string
  oauth_uid: string
  view_count: string
  foundedyear: string
  teamsize: string
}

export interface GetUserlistbbyjobbid {
  id: string
  postjob_id: string
  user_id: string
  bid_amount: string
  currency: string
  email: string
  duration: string
  phone: string
  description: string
  bidding_status: string
  status: string
  created_date: string
  userid: string
  username: any
  full_name: string
  profilePic: string
  post_id: string
  post_title: string
}




export interface ProdDetail {
  id: string
  user_id: string
  prod_name: string
  prod_description: string
  created_date: string
  update_date: string
  status: string
  is_delete: string
}

export interface ProdImage {
  id: string
  prod_id: string
  prod_image: string
  created_date: string
}
export interface UserBusiness {
  userId: string
  companyname: string
  firstname: string
  lastname: string
  username: any
  email: string
  mobile: string
  dob: any
  password: string
  profilePic: string
  userType: string
  serviceType: any
  created: string
  modified: string
  status: string
  email_verified: string
  address: string
  latitude: string
  longitude: string
  zip: any
  resume: string
  additional_image: string
  short_bio: string
  video: string
  gender: string
  experience: string
  qualification: string
  skills: string
  oauth_provider: string
  oauth_uid: string
  view_count: string
  foundedyear: string
  teamsize: string
}
export interface CountPost {
  total: string
}
export interface UserGetPost {
  id: string
  user_id: string
  post_title: string
  description: string
  required_key_skills: string
  duration: string
  charges: string
  currency: string
  category_id: string
  subcategory_id: string
  appli_deadeline: string
  country: string
  state: string
  city: string
  location: string
  latitude: string
  longitude: string
  complete_address: string
  status: string
  created_date: string
  update_date: string
  is_delete: string
}

export interface CountPost {
  total: string
}

export interface ProdList {
  id: string
  prod_name: string
  prod_description: string
  prod_image: string
}
export interface PendingReviewdList {
  id: string
  postjob_id: string
  user_id: string
  bid_amount: string
  currency: string
  email: string
  duration: string
  phone: string
  description: string
  bidding_status: string
  status: string
  created_date: string
  userid: string
  post_title: string
  fullname: string
  username: any
  profilePic: string
  mobile: string
}

export interface PostData {
  id: string
  user_id: string
  post_title: string
  description: string
  required_key_skills: string
  duration: string
  charges: string
  currency: string
  category_id: string
  subcategory_id: string
  appli_deadeline: string
  country: string
  state: string
  city: string
  location: string
  latitude: string
  longitude: string
  complete_address: string
  status: string
  created_date: string
  update_date: string
  is_delete: string
  category_name: string
  fullname: string
  username: any
  user_address: string
  sub_category_name: string
  userType: string
}
export interface GetPost {
  id: string
  post_title: string
  description: string
  user_id: string
  user_image: string;
  company_name: string;
}

export interface Country {
  id: string
  name: string
  iso3: string
  numeric_code: string
  iso2: string
  phonecode: string
  capital: string
  currency: string
  currency_name: string
  currency_symbol: string
  tld: string
  native?: string
  region: string
  subregion: string
  timezones: string
  translations: string
  latitude: string
  longitude: string
  emoji: string
  emojiU: string
  created_at: string
  updated_at: string
  flag: string
  wikiDataId?: string
}

export interface GetFreelancerspost {
  id: string
  user_id: string
  post_title: string
  description: string
  required_key_skills: string
  duration: string
  charges: string
  currency: string
  category_id: string
  subcategory_id: string
  appli_deadeline: string
  country: string
  state: string
  city: string
  location: string
  latitude: string
  longitude: string
  complete_address: string
  status: string
  created_date: string
  update_date: string
  is_delete: string
}

export interface GetUser {
  userId: string
  companyname: string
  firstname: string
  lastname: string
  username: any
  email: string
  mobile: string
  dob: any
  password: string
  profilePic: string
  userType: string
  serviceType: any
  created: string
  modified: string
  status: string
  email_verified: string
  address: string
  latitude: string
  longitude: string
  zip: string
  resume: string
  additional_image: string
  short_bio: string
  video: string
  gender: string
  experience: string
  qualification: string
  skills: string
  oauth_provider: string
  oauth_uid: string
  view_count: string
  foundedyear: any
  teamsize: any
  id: string
  employer_id: string
  subscription_id: string
  name_of_card: string
  amount: string
  payment_status: string
  transaction_id: string
  payment_date: string
  created_date: string
  expiry_date: string
  invoice_url: string
  invoice_pdf: string
  duration: string
}

export interface GetOurservice {
  id: string
  category_id: string
  image: string
  icon: string
  description: string
  status: string
  created_date: string
  update_date: string
}

export interface GetCareer {
  id: string
  title: string
  image: string
  description: string
  status: string
  created_date: string
  update_date: string
}
export interface Userinfo {
  userId: string
  companyname: string
  firstname: string
  lastname: string
  username: any
  email: string
  mobile: any
  dob: any
  password: string
  profilePic: string
  userType: string
  serviceType: any
  created: string
  modified: string
  status: string
  email_verified: string
  address: string
  latitude: string
  longitude: string
  zip: any
  resume: string
  additional_image: string
  short_bio: string
  video: string
  gender: string
  experience: string
  qualification: string
  skills: string
  oauth_provider: string
  oauth_uid: string
  view_count: string
  foundedyear: any
  teamsize: any
}
export interface EducationList {
  id: string
  user_id: string
  education: string
  passing_of_year: string
  college_name: string
  department: string
  description: string
  created_date: string
  update_date: string
}
export interface WorkList {
  id: string
  user_id: string
  designation: string
  company_name: string
  duration: string
  from_date: string
  to_date: string
  description: string
  created_date: string
  update_date: string
}
export interface BidList {
  id: string
  user_id: string
  post_title: string
  description: string
  required_key_skills: string
  duration: string
  charges: string
  currency: string
  category_id: string
  subcategory_id: string
  appli_deadeline: string
  country: string
  state: string
  city: string
  location: string
  latitude: string
  longitude: string
  complete_address: string
  status: string
  created_date: string
  update_date: string
  is_delete: string
}
export interface SearchList {
  id: string
  user_id: string
  post_title: string
  description: string
  required_key_skills: string
  duration: string
  charges: string
  currency: string
  category_id: string
  subcategory_id: string
  appli_deadeline: string
  country: string
  state: string
  city: string
  location: string
  latitude: string
  longitude: string
  complete_address: string
  status: string
  created_date: string
  update_date: string
  is_delete: string
  profilePic: string
}
export interface JobBidDetails {
  id: string
  postjob_id: string
  user_id: string
  bid_amount: string
  currency: string
  email: string
  duration: string
  phone: string
  description: string
  bidding_status: string
  status: string
  created_date: string
  userid: string
  post_title: string
  fullname: string
  username: any
  profilePic: string
  mobile: string
}
export interface GetCms {
  id: string
  title: string
  description: string
  status: string
  created_date: string
  update_date: string
  get_employer: GetEmployer[]
}
export interface GetEmployer {
  userId: string
  companyname: string
  firstname: string
  lastname: string
  username: any
  email: string
  mobile: string
  dob: any
  password: string
  profilePic: string
  userType: string
  serviceType: any
  created: string
  modified: string
  status: string
  email_verified: string
  address: string
  latitude: string
  longitude: string
  zip: any
  resume: string
  additional_image: string
  short_bio: string
  video: string
  gender: string
  experience: string
  qualification: string
  skills: string
  oauth_provider: string
  oauth_uid: string
  view_count: string
  foundedyear: string
  teamsize: string
}
