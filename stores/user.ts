import { atom, useAtom } from "jotai";
export interface User {
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
  export interface ExperienceInfo {
  clubName: string
  designation: string
  startDate: string
  endDate: string
  information: string
}

export interface AcademicInfo {
  college: string
  course: string
  rank: string
  graduation_year: string
  gpa: string
  act_score: string
}

export interface ReferenceInfo {
  coachName: string
  coachEmail: string
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

export interface Location {
  latitude: string
  longitude: string
  
}

export interface ChatInputdata {
  userf_id: string
  usert_id: string
  post_id: string
}
export const userStore = atom<User | null>(null)

export const useUser = () => useAtom(userStore)
export const categoryStore = atom<GetCareer | null>(null)

export const useCategory = () => useAtom(categoryStore)

export const userLocationStore = atom<Location | null>(null)
export const useLocation = () => useAtom(userLocationStore)


export const userChatInput = atom<ChatInputdata | null>(null)
export const usechatData = () => useAtom(userChatInput)
