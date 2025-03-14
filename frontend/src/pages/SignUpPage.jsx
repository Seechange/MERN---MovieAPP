import React from 'react'
import { Link } from "react-router-dom"
import { Key, Mail, User, UserPlus2 } from "lucide-react"

const SignUpPage = () => {
    return (
        <div className='h-screen w-full bia-bg'>
            <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                <Link to={"/"} >
                    <img src="logo.png" alt="" className='w-52' />
                </Link>
            </header>

            <div className='flex items-center justify-center mt-20 mx-3 '>
                <div className='w-full max-w-md p-8 space-y-6 bg-gray-700/60 rounded-lg shadow-2xl '>
                    <h1 className='text-center text-white text-2xl font-bold mb-4'>SIGN UP</h1>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor="email" className='text-md font-bold flex items-center text-gray-300' ><Mail size={20} className='mr-1' /> Email</label>
                            <input type="email" placeholder='you@example.com' className='w-full border px-3 py-2 text-white mt-1 rounded-md bg-transparent
                             focus:outline-none focus:ring'
                                id='email' />
                        </div>

                        <div>
                            <label htmlFor="username" className='text-md font-bold flex items-center text-gray-300' ><User size={20} className='mr-1' /> Username</label>
                            <input type="username" placeholder='Danhdev' className='w-full border px-3 py-2 text-white mt-1 rounded-md bg-transparent
                             focus:outline-none focus:ring'
                                id='username' />
                        </div>

                        <div>
                            <label htmlFor="password" className='text-md font-bold flex items-center text-gray-300' ><Key size={20} className='mr-1' /> Password</label>
                            <input type="password" placeholder='••••••••' className='w-full border px-3 py-2 text-white mt-1 rounded-md bg-transparent
                             focus:outline-none focus:ring'
                                id='password' />
                        </div>

                        <button className='w-full py-2 bg-purple-400 hover:text-pink-600 text-white font-medium rounded-md hover:bg-purple-800 flex items-center justify-center mt-6'>
                            <UserPlus2 size={20} className='mr-1.5' /> SIGN UP
                        </button>
                    </form>
                    <div className='text-center text-gray-400'>
                        Already have an account ?
                        <Link to={"/login"} className='text-green-500 font-medium underline' > Sign In </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
