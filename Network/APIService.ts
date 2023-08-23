import { useQuery } from "react-query";
import { API_URLS } from "./URL";
import { HomeListRespose } from "./HomeListApi";

export function useHomeListData() {
    const response = useQuery("getHomeList", async () => {
        let res = await fetch(API_URLS.getHomeList)
        let payload: HomeListRespose = await res.json()

        return payload.result
    })

    return response
}