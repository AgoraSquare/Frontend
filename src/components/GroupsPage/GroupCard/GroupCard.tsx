import { Button } from '@material-ui/core';
import styles from './GroupCard.module.scss';
import Link from 'next/link';

export default function GroupCard({ type, name, img }: { type: string, name: string, img: string }) {
    return (
        <div className={styles.groupCard}>
            <div className={styles.coverPhoto}>
                <img src={img} alt="Random Photo" />
            </div>

            <div className={styles.overlay} />
            
            <div className={styles.mobileBackground}>
                <img src={img} alt="Random Photo" />
            </div>

            <main className={styles.mainContainer}>
                <header>
                    <small>{type}</small>
                    <h4 className={styles.title}>{name}</h4>
                </header>

                <p className={styles.description}>A group to discuss & get support from Agora foundation</p>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <h3>$13.4K</h3>
                        <small>Price</small>
                    </div>

                    <div className={styles.stat}>
                        <h3>2333</h3>
                        <small>Members</small>
                    </div>
                </div>

                <footer>
                    <Link href="/groups/grp/vaults" passHref>
                        <Button variant="text" className={styles.vaultBtn}>Vaults</Button>
                    </Link>
                    <Link href="/groups/grp" passHref>
                        <Button variant="outlined" className={styles.proposalBtn}>PROPOSALS</Button>
                    </Link>
                </footer>
            </main>
        </div>
    )
}
