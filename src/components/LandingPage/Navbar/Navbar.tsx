import styles from './Navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <div className={styles.logobg}>
                    <img src="/logo.svg" alt="Logo" width={55} height={55} />
                </div>
            </div>

            <div className={styles.menu_links}>
                <Link href="/whitepaper" passHref>
                    <span className={styles.link}>Whitepaper</span>
                </Link>
            </div>
        </nav>
    )
}