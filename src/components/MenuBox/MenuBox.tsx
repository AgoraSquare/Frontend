import { useRouter } from "next/router";
import useResize from "../../utils/useResize";
import { Dispatch, SetStateAction } from 'react';
import Link from "next/link";
import styles from './MenuBox.module.scss';

export default function MenuBox({ setShowPostSection }: { setShowPostSection: Dispatch<SetStateAction<boolean>> }) {
    const [flag] = useResize(900);
    const route = useRouter();

    return (
        <ul className={styles.menuBox}>
            <Link href="/feed" passHref>
                {
                    !flag ? <li>
                        <i className={`ri-home-6-fill ${route.pathname === '/feed' && styles.selected}`}></i>
                        <span className={`${route.pathname === '/feed' && styles.selected}`}>Home</span>
                    </li> :
                        <li>
                            <i className={`ri-home-6-fill ${route.pathname === '/feed' && styles.selected}`}></i>
                        </li>
                }
            </Link>

            {
                !flag ?
                    <Link href='/messages' passHref>
                        <li>
                            <i className={`ri-message-2-fill ${route.pathname === '/messages' && styles.selected}`}></i>
                            <span className={`${route.pathname === '/messages' && styles.selected}`}>Messages</span>
                        </li>
                    </Link> :
                    <Link href='/search' passHref>
                        <li>
                            <i className={`ri-search-2-line ${route.pathname === '/search' && styles.selected}`}></i>
                        </li>
                    </Link>
            }

            {
                flag &&
                <li>
                    <div className={styles.showPostBtn} onClick={() => {
                        document.body.style.overflow = "hidden";
                        setShowPostSection(true);
                    }}>
                        <i className="ri-add-line"></i>
                    </div>
                </li>
            }

            {
                !flag &&
                <Link href="/groups" passHref>
                    <li>
                        <i className={`ri-group-fill ${route.pathname === '/groups' && styles.selected}`}></i>
                        <span className={`${route.pathname === '/groups' && styles.selected}`}>Explore Groups</span>
                    </li>
                </Link>
            }

            {
                !flag ?
                    <Link href='/profile' passHref>
                        <li>
                            <i className={`ri-user-fill ${route.pathname === '/[profile]' && styles.selected}`}></i>
                            <span className={`${route.pathname === '/[profile]' && styles.selected}`}>Profile</span>
                        </li>
                    </Link> :
                    <Link href='/messages' passHref>
                        <li>
                            <i className={`ri-message-2-fill ${route.pathname === '/messages' && styles.selected}`}></i>
                        </li>
                    </Link>
            }

            {
                !flag ?
                    <Link href="/settings" passHref>
                        <li>
                            <i className={`ri-more-fill ${route.pathname === '/settings' && styles.selected}`}></i>
                            <span className={`${route.pathname === '/settings' && styles.selected}`}>More</span>
                        </li>
                    </Link> :
                    <Link href="/groups" passHref>
                        <li>
                            <i className={`ri-group-fill ${route.pathname === '/groups' && styles.selected}`}></i>
                        </li>
                    </Link>
            }
        </ul>
    )
}
