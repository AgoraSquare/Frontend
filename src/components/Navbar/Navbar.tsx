import styles from './Navbar.module.scss';
import Link from 'next/link';
import MobileSideBar from '../MobileSideBar/MobileSideBar';
import { useState } from 'react';
import useResize from '../../utils/useResize';

export default function Navbar() {
    const [showMobileSideBar, setShowMobileSideBar] = useState(false);
    const [flag] = useResize(900);

    return (
        <div className={styles.navbar}>
            {flag && <MobileSideBar show={showMobileSideBar} setShow={setShowMobileSideBar} />}
            {flag && <div className={styles.mobileProfile} onClick={() => {
                document.body.style.overflow = "hidden";
                setShowMobileSideBar(true);
            }}>
                <img src="/tp_2.jpg" alt="user profile photo" width={35} height={35} />
            </div>}
            <div className={styles.logo}>
                <img src="/logo.svg" alt="Agora Logo" width={55} height={55} />
            </div>

            <form className={styles.searchBar}>
                <input type="text" placeholder="Search" />
                <i className="ri-search-2-fill ri-xl"></i>
            </form>

            <div className={styles.desktopContainer}>
                <Link href="/notifications" passHref>
                    <div className={styles.notificationIcon}>
                        <i className="ri-notification-2-fill ri-xl"></i>
                    </div>
                </Link>

                <div className={styles.profile}>
                    <img src="/tp_2.jpg" alt="Profile Photo" width={28} height={28} />
                    <span>Alex</span>
                </div>
            </div>
        </div>
    )
}
