import React, { useState, useRef } from 'react'
import Link from 'next/link'

// https://www.youtube.com/watch?v=X6CsbhSVUEc

function MButton({ toggle }) {

    if (!toggle) {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        )
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export default function Navbar() {

    const [menuIcon, setMenuIcon] = useState(false)

    const ref = useRef(null)

    function onMenuButtonClick() {
        setMenuIcon(!menuIcon)
        if(!menuIcon) {
            ref.current.classList.add('opacity-100')
            ref.current.classList.remove('top-[-400px]')
            console.log(ref)
        } else {
            ref.current.classList.remove('opacity-100')
            console.log(ref)
        }
    }

    return (
        <div className="bg-primary text-primaryTextColor">
            <nav className="p-5 shadow md:flex md:items-center md:justify-between">

                <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold tracking-wide cursor-pointer">
                        99th Cloud
                    </span>

                    <span className="text-2xl cursor-pointer mx-2 md:hidden block" onClick={onMenuButtonClick}>
                        <MButton toggle={menuIcon} />
                    </span>
                </div>

                <ul ref={ref} className="md:flex md:items-center z-[-1] md:z-auto md:static absolute 
                    bg-primary w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-y md:opacity-100 
                    opacity-0 top-[-400px] transition-all ease-in duration-500"
                >
                    <li className="mx-4 my-6 md:my-0"><Link href="/"><span className="mr-6 cursor-pointer hover:bg-primaryLight">HOME</span></Link></li>
                    <li className="mx-4 my-6 md:my-0"><Link href="/"><span className="mr-6 cursor-pointer hover:bg-primaryLight">AWS</span></Link></li>
                    <li className="mx-4 my-6 md:my-0"><Link href="/"><span className="mr-6 cursor-pointer hover:bg-primaryLight">JS</span></Link></li>
                    <li className="mx-4 my-6 md:my-0"><Link href="/"><span className="mr-6 cursor-pointer hover:bg-primaryLight">PY</span></Link></li>
                    <button className="bg-secondary text-secondaryText px-6 py-2 mx-4 hover:bg-secondaryLight hover:text-secondaryTextColor rounded">
                        Get Started
                    </button>
                </ul>
            </nav>
        </div>
    )
}

/*
                <Link href="/">
                    <span className="mr-6 cursor-pointer">Home</span>
                </Link>
                <Link href="/create-post">
                    <span className="mr-6 cursor-pointer">Create Post</span>
                </Link>
                <Link href="/profile">
                    <span className="mr-6 cursor-pointer">Profile</span>
                </Link>
*/