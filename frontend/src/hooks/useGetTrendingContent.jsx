import { useEffect, useState } from "react";
import { useContentStore } from "../store/useContentStore";
import axiosInstance from "../libs/axios";


const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] = useState(null);
    const { contentType } = useContentStore()

    useEffect(() => {
        const getTrendingContent = async () => {
            const res = await axiosInstance.get(`/${contentType}/trending`)
            setTrendingContent(res.data.content)
        }
        getTrendingContent()
    }, [contentType])
    return trendingContent
}

export default useGetTrendingContent
