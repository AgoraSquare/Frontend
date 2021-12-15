import { Divider } from '@material-ui/core';
import { SetStateAction, Dispatch } from 'react';
import styles from './MobileSideBar.module.scss';
import Link from 'next/link';

export default function MobileSideBar({ show, setShow }: { show: boolean, setShow: Dispatch<SetStateAction<boolean>> }) {
    return (
        <>
            <div className={`${styles.mobileSideBar} ${show && styles.show}`}>
                <header>
                    <div className={styles.closeIcon} onClick={() => {
                        document.body.style.overflow = "";
                        setShow(false);
                    }}>
                        <i className="ri-close-fill"></i>
                    </div>

                    <Link href="/profile" passHref>
                        <div className={styles.profilePart}>
                            <img src="/tp_2.jpg" alt="profile pic" width={45} height={45} />
                            <div className={styles.textPart}>
                                <h5 className={styles.name}>Alex</h5>
                                <small className={styles.userName}>@alex</small>
                            </div>
                            <i className="ri-arrow-right-s-line"></i>
                        </div>
                    </Link>

                    <div className={styles.walletPart}>
                        <i className="ri-wallet-fill"></i>
                        <span>0x2170ed0880ac9a755fd</span>
                    </div>
                </header>

                <ul className={styles.menu}>
                    <li className={styles.menuItems}>
                        <i className="ri-group-2-fill"></i>
                        <span>Groups</span>
                    </li>
                    <li className={styles.menuItems}>
                        <i className="ri-collage-fill"></i>
                        <span>Collectibles</span>
                    </li>

                    <Divider />

                    <li className={styles.menuItems}>
                        <i className="ri-user-settings-fill"></i>
                        <span>Account Settings</span>
                    </li>
                    <li className={styles.menuItems}>
                        <i className="ri-settings-fill"></i>
                        <span>Preferences</span>
                    </li>

                    <Divider />

                    <li className={styles.menuItems}>
                        <i className="ri-logout-circle-r-fill"></i>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            {show && <div className={styles.overlay} onClick={() => {
                document.body.style.overflow = "";
                setShow(false);
            }} />}
        </>
    )
}
