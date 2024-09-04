import Link from 'next/link';
import Image from 'next/image';
import "./styles.css"
import { FaAlignJustify } from "react-icons/fa";
import { signOut, signIn, useSession } from 'next-auth/react'

export default function Header() {
    const { data: session, status } = useSession();
    console.log('Session user object:', session?.user);

    return (
        <div className='menulink py-1 bg-white w-full' style={{ position: 'sticky', top: 0, opacity: 1 }}>
            <div className="">
                <Link href="/">
                    <Image src="/assets/backgrounds/icon_62.png" alt="ConstruEX Logo" width={260} height={50} className="logoCX" priority />
                </Link>
            </div>
            <input type='checkbox' id='menu' />
            <label htmlFor='menu'>
                <FaAlignJustify size={25} className='menu-icon' />
            </label>
            <div className='navbarlink'>
                <ul className='ulnavbarlink'>
                    <li className='linkcontainer'>
                        <Link href="/" className='linkmenu'>
                            <div className={` linkent text-[#665f74] hover:text-[#6650bc] text-[18px]`}>
                                For Business
                            </div>
                        </Link>
                    </li>
                    <li className='linkcontainer'>
                        <Link href="/" className='linkmenu'>
                            <div className={` linkent text-[#665f74] hover:text-[#6650bc] text-[18px]`}>
                                Find Jobs
                            </div>
                        </Link>
                    </li>
                    <li className='linkcontainer'>
                        <Link href="/" className='linkmenu'>
                            <div className={` linkent text-[#665f74] hover:text-[#6650bc] text-[18px]`}>
                                Manage your teams
                            </div>
                        </Link>
                    </li>
                    {/**/}<li className='linkcontainer'>
                        <Link href="/" className='linkmenu'>
                            <div className={` linkent text-[#665f74] hover:text-[#6650bc] text-[18px]`}>
                                Contact Sales
                            </div>
                        </Link>
                    </li><div className='spacediv'></div>
                    <li className='linkcontainer'>
                        <div className='linkmenu'>
                            <div className='buttonlink flex'>
                                {session?.user ? (
                                    <div className='bg-sky-400 rounded px-3 py-2'>
                                        <Link href="./">
                                            Dashboard
                                        </Link>
                                        <p>{session.user?.name}</p>
                                    </div>
                                ) : (
                                    <button className='bg-sky-400 rounded px-3 py-2'
                                        onClick={() => signIn()}>
                                        Sign In
                                    </button>
                                )}
                                <button
                                    onClick={() => signOut()}
                                    className='bg-sky-400 rounded px-3 py-2'
                                >
                                    Sign out
                                </button>
                                <Link href="/login">
                                    <div className={` py-3 px-10 text-[16px] rounded-full  bg-[#65579d] hover:bg-[#6650bc] text-white text-center`}>
                                        Log in
                                    </div>
                                </Link>
                                <div className='m-2'></div>
                                <Link href="/register">
                                    <div className={` py-3 px-8 text-[16px] rounded-full bg-[var(--primary-color)] hover:bg-[#A257A9] text-white text-center`}>
                                        Sign Up
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}