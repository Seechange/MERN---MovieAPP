import React, { useEffect, useRef, useState } from 'react'
import { useContentStore } from '../store/useContentStore'
import axiosInstance from "../libs/axios"
import { SMALL_URL_TMDB } from "../utils/constants"
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const MovieSlider = ({ category }) => {
    const { contentType } = useContentStore()
    const [content, setContent] = useState([])
    const [showArrows, setShowArrows] = useState(false);
    const sliderRef = useRef(null);
    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    const formatCategory = capitalizeWords(category)
    const formatContentType = capitalizeWords(contentType)

    useEffect(() => {
        const getContent = async () => {
            try {
                const res = await axiosInstance.get(`/${contentType}/${category}`)
                setContent(res.data.listMovie)
            } catch (error) {
                // console.log("Error from getContent", error.response.data.message)
            }
        }
        getContent()
    }, [contentType, category])
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
        }
    };
    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
    };
    return (
        <div className='text-white bg-black px-5 md:px-20 relative'
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}>
            <h2 className='mb-4 text-2xl font-bold'>
                {formatCategory} {formatContentType}

            </h2>

            <div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef} >
                {content.map((item) => (
                    <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
                        <div className='rounded-lg overflow-hidden'>
                            <img
                                src={SMALL_URL_TMDB + item?.backdrop_path}
                                alt='Movie image'
                                className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                            />
                        </div>
                        <p className='mt-2 text-center'>{item.title || item.name}</p>
                    </Link>
                ))}
            </div>

            {showArrows && (
                <>
                    <button
                        className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
            '
                        onClick={scrollLeft}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
            '
                        onClick={scrollRight}
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}
        </div>


    )
}

export default MovieSlider