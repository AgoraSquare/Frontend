import styles from './Navbar.module.scss';
import Link from 'next/link';
import MobileSideBar from '../MobileSideBar/MobileSideBar';
import { useState } from 'react';
import useResize from '../../utils/useResize';

export default function Navbar() {
    const [showMobileSideBar, setShowMobileSideBar] = useState(false);
    const [flag] = useResize(900);

    return (
        <div className="flex items-center uppercase sticky justify-evenly top-0 z-50 transition-all duration-500 bg-[#212427] py-3">
            {flag && <MobileSideBar show={showMobileSideBar} setShow={setShowMobileSideBar} />}
            {flag && <div className={styles.mobileProfile} onClick={() => {
                document.body.style.overflow = "hidden";
                setShowMobileSideBar(true);
            }}>
                <img src="/tp_2.jpg" alt="user profile photo" width={35} height={35} />
            </div>}
            <div className="">
                <img src="/logo.svg" alt="Agora Logo" width={55} height={55} />
            </div>

            <form className="group max-w-lg bg-[#121212] focus:outline-none rounded-[10px] w-full flex items-center px-4 gap-4">
                <input className="grow h-11 bg-transparent outline-none border-none text-white focus:outline-none focus:border-none" type="text" placeholder="Search" />
                <i className="ri-search-2-fill ri-xl text-white/60"></i>
            </form>

            <div className="flex items-center justify-center gap-8 ">
                <Link href="/notifications" passHref>
                    <div className="cursor-pointer mt-1">
                        <i className="ri-notification-2-fill ri-lg text-white/80"></i>
                    </div>
                </Link>

                <div className="flex items-center gap-2 ">
                    <img className='w-[28px] h-[28px] rounded-full object-cover' src="/tp_2.jpg" alt="Profile Photo" width={28} height={28} />
                    <span className='font-semibold tracking-widest uppercase text-white/80 text-xs'>Alex</span>
                </div>
            </div>
        </div>
    )
}
