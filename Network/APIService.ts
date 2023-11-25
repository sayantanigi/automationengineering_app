import { useQuery } from "react-query";
import { API_URLS } from "./URL";
import { Categories, Category, EducationList, GetCareer, GetCms, HomeListRespose, JobBidDetails, KeySkill, PostData, SearchList, SubCategory, Userinfo, WorkList } from "./HomeListApi";
import { postValue } from "../screens/Business/PostJobs";

export function useHomeListData() {
    const response = useQuery("getHomeList", async () => {
        let res = await fetch(API_URLS.getHomeList)
        let payload: HomeListRespose = await res.json()

        return payload.result
    })

    return response
}

export async function userseProfile(body: string) {
    let response = await fetch(API_URLS.getUserprofile, {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body
    })

    let payload = await response.json()

    return payload.result?.userinfo
}


export async function useEducationPost(body: string) {
    let response = await fetch(API_URLS.getEducationList, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()
    return payload.result as EducationList[]
}
export async function useWorkList(body: string) {
    let response = await fetch(API_URLS.getWorkExprienceList, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()
    return payload.result as WorkList[]
}

export async function useSearchList(body: string) {
    console.log(body)
    let response = await fetch(API_URLS.getAllSearchlist, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()

    return payload.result as SearchList[]
}

export async function useCarrerDetails(body: string) {


    let response = await fetch(API_URLS.getcareerTipsdetails, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()
    //console.log(payload.result.get_career as GetCareer[])
    return payload.result.get_career as GetCareer[]
}
export async function getJobbidDetails(body: string) {


    let response = await fetch(API_URLS.getJobbid, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()
    //console.log(payload.result.get_career as GetCareer[])
    return payload.result as JobBidDetails[]
}


export async function getAbout() {


    let response = await fetch(API_URLS.getAbout, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        },

    })

    let payload = await response.json()
    //console.log(payload.result.get_career as GetCareer[])
    return payload.result.get_cms as GetCms
}

export async function getProfileUpdate(body: string) {


    let response = await fetch(API_URLS.getUpdatepersonalDetails, {
        method: "POST",
        headers: {
            'content-type': ' multipart/form-data'

        },
        body
    })

    let payload = await response.json()
    //console.log(payload.result.get_career as GetCareer[])
    return payload.status
}
export async function getWorkexprienceUpdate(body: string) {


    let response = await fetch(API_URLS.getUpdateWorExprience, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()

    return payload.status
}

export async function getPostdetails(body: string) {


    let response = await fetch(API_URLS.getPostJobdetails, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()
    // console.log(payload.result.post_data as PostData)
    return payload.result.post_data as PostData
}
export async function getPosjobbid(body: string) {


    let response = await fetch(API_URLS.getPostJobBid, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body
    })

    let payload = await response.json()
    console.log(payload.result.post_data as PostData)
    return payload.result.post_data as PostData
}

export async function getCategoryList() {
    const response = await fetch(API_URLS.getCategoryList, {
        headers: {
            'content-type': 'application/json'
        }
    })
    const payload = await response.json()
    console.log(payload)
    return payload.result as Category[]
}

export async function getSubCategoriesByCategory(categoryId: string) {
    const response = await fetch(API_URLS.getSubCategoryByCategory, {
        method: "POST",
        body: JSON.stringify({ id: categoryId }),
        headers: {
            'content-type': 'application/json'
        }
    })
    const payload = await response.json()
    return payload.result as SubCategory[]

}
export async function getKeySkills() {
    const response = await fetch(API_URLS.getKeySkills, {
        headers: {
            'content-type': 'application/json'
        }
    })
    const payload = await response.json()
    return payload.result as KeySkill[]
}

export async function postJob(body: postValue) {
    const response = await fetch(API_URLS.postJob, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    })

    const payload = await response.json()
    return payload as { status: string, result: string }

}

// export function useJobDetails(body: string) {
//     const response = useQuery("JOB_DETAILS", async () => {
//         let res = await fetch(API_URLS.JOB_DETAILS, {
//             method: "POST",
//             body,
//         })
//         let payload: JOBResponse = await res.json()

//         return payload.result?.post_data
//     })

//     return response
// }

// export function useIPAddress() {
//     const response = useQuery("IP_ADDRESS", async () => {
//         let res = await fetch(API_URLS.IP_ADDRESS)
//         let payload: IPResponse = await res.json()

//         return payload
//     })

//     return response
// }

// export async function useBIDPost(body: string) {
//     let response = await fetch(API_URLS.BID_POST, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body,

//     });
//     let payload: BIDPostResponse = await response.json()

//     return payload
// }
// export function useVendorDetails(body: string) {
//     const response = useQuery("VENDOR_DETAILS", async () => {
//         let res = await fetch(API_URLS.VENDOR_DETAILS, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body
//         })
//         let payload: VendorDetailsResponse = await res.json()

//         return payload.result
//     })

//     return response
// }

// export function useCareerDetails(body: string) {
//     const response = useQuery("CAREER_DETAILS", async () => {
//         let res = await fetch(API_URLS.CAREER_DETAILS, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body
//         })
//         let payload: CareerResponse = await res.json()

//         return payload.result.get_career
//     })

//     return response
// }
// export function useJobBids(body: string) {
//     const response = useQuery("JOB_BIDS", async () => {
//         let res = await fetch(API_URLS.JOB_BIDS, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body
//         })
//         let payload: JobBidResponse = await res.json()

//         return typeof payload.result == "string" ? [] : payload.result
//     })

//     return response
// }

// export function useAbout() {
//     const response = useQuery("ABOUT_US", async () => {
//         let res = await fetch(API_URLS.ABOUT_US)
//         let payload: AboutResponse = await res.json()

//         return payload.result
//     })

//     return response
// }
// export function useContact() {
//     const response = useQuery("CONTACT_US", async () => {
//         let res = await fetch(API_URLS.CONTACT_US)
//         let payload: ContactResponse = await res.json()

//         return payload.result
//     })

//     return response
// }
// export async function useContactPost(body: string) {
//     let response = await fetch(API_URLS.CONTACT_POST, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body,

//     });
//     let payload: { status: string; result: string; } = await response.json()

//     return payload
// }
// export function usePrivacy() {
//     const response = useQuery("PRIVACY_POLICY", async () => {
//         let res = await fetch(API_URLS.PRIVACY_POLICY)
//         let payload: AboutResponse = await res.json()

//         return payload.result
//     })

//     return response
// }
// export function useTerms() {
//     const response = useQuery("TERMS_CONDITION", async () => {
//         let res = await fetch(API_URLS.TERMS_CONDITION)
//         let payload: AboutResponse = await res.json()

//         return payload.result
//     })

//     return response
// }

// export function usePlans(body: string) {
//     const response = useQuery("PLANS", async () => {
//         let res = await fetch(API_URLS.PLANS, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body
//         })
//         let payload: SubscriptionResponse = await res.json()

//         return payload.result
//     })

//     return response
// }

// export async  function usePlanSave(body: string) {
//     let response = await fetch(API_URLS.SUB_POST, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body,

//     });
//     let payload: { status: string; result: string; } = await response.json()

//     return payload
// }
// export function useEducation(body: string) {
//     const response = useQuery("EDUCATION_LIST", async () => {
//         let res = await fetch(API_URLS.EDUCATION_LIST, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body
//         })
//         let payload: EducationResponse = await res.json()

//         return typeof payload.result == "string" ? [] : payload.result
//     })

//     return response
// }