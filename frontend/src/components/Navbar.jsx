
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore"
import { useContentStore } from "../store/useContentStore"
import { LogOut, Menu, Search } from "lucide-react"
import { useState } from "react"
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [hisSearch, setHisSearch] = useState("")
    const { user, logout } = useAuthStore()
    const { setContentType, contentType } = useContentStore()
    const handleHis = (type) => {
        setContentType(type)
        if (type === "movie" || type === "tv") {
            setHisSearch(false)
        } else {
            setHisSearch(true)
            setContentType("movie")
        }
    }
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 ">
            <div className="flex items-center gap-10 z-50">
                <Link to='/'>
                    <img src='/logo.png' alt='' className='w-32 sm:w-40' />
                </Link>
                {/* desktop navbar items */}
                <div className='hidden sm:flex gap-2 items-center'>
                    <Link to='/' className={`hover:underline hover:text-purple-600 ${contentType === "movie" && hisSearch === false || contentType === "movie" && hisSearch === "" ? "underline text-purple-500" : ""}`}
                        onClick={() => handleHis("movie")} >
                        Movies
                    </Link>
                    <Link to='/' className={`hover:underline hover:text-purple-600 ${contentType === "tv" && hisSearch === false || contentType === "tv" && hisSearch === "" ? "underline  text-purple-500" : ""}`}
                        onClick={() => handleHis("tv")} >
                        Tv Shows
                    </Link>
                    <Link to='/history' className={`hover:underline hover:text-purple-600 ${hisSearch === true ? "underline  text-purple-500" : ""} `}
                        onClick={() => handleHis("historySearch")}
                    >
                        Search History
                    </Link>
                </div>


            </div>
            <div className='flex gap-4 items-center z-50'>
                <Link to={"/search"}>
                    <Search className='size-6 cursor-pointer hover:text-purple-600' />
                </Link>
                <img src={user.image} alt='Avatar' className='h-8 rounded cursor-pointer' />
                <LogOut className='size-6 cursor-pointer hover:text-purple-600' onClick={logout} />
                <div className='sm:hidden' onClick={toggleMenu}>
                    <Menu className='size-6 cursor-pointer hover:text-purple-600' />
                </div>
            </div>

            {/* mobile navbar items */}
            {isMobileMenuOpen &&
                <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                    <Link to={"/"} className='block hover:underline p-2'  >
                        Movies
                    </Link>
                    <Link to={"/"} className='block hover:underline p-2' >
                        Tv Shows
                    </Link>
                    <Link to={"/history"} className='block hover:underline p-2' >
                        Search History
                    </Link>
                </div>
            }
        </header>
    )
}

export default Navbar
