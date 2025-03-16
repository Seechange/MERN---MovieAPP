import { Link } from "react-router-dom"


const NotFoundPage = () => {
    return (
        <div
            className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white'
            style={{ backgroundImage: `url('/404.png')` }}
        >
            <header className='absolute top-0 flex justify-center p-4  w-full '>
                <Link to={"/"}>
                    <img src='/logo.png' alt='Netflix' className='h-14' />
                </Link>
            </header>
            <main className='text-center error-page--content z-10'>
                <h1 className='text-7xl font-semibold mb-4'>Lost your way?</h1>
                <p className='mb-6 text-xl'>
                    Sorry, we can't find that page. You'll find lots to explore on the home page.
                </p>
                <Link to={"/"} className='text-white font-bold hover:bg-pink-500 bg-purple-600 text-black py-4 px-4 rounded-2xl'>
                    SeeChange Home
                </Link>
            </main>
        </div>
    )
}

export default NotFoundPage
