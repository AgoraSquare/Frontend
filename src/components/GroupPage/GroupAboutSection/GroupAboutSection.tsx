import { Button } from '@material-ui/core';
import styles from './GroupAboutSection.module.scss';
import Link from 'next/link';

export default function GroupAboutSection() {
    return (
        <div className={styles.groupAboutSection}>
            <header>
                <div className={styles.nameTag}>
                    <p>Public</p>
                    <h3 className={styles.name}>Miami</h3>
                </div>
                <Link href="/groups/grp/vaults" passHref>
                    <Button variant="text" className={styles.mobile_textBtn}>Vault</Button>
                </Link>
            </header>
            <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500
            </p>

            <div className={styles.bottomSection}>
                <div className={styles.stats}>
                    <div className={styles.statBox}>
                        <strong>13.4K</strong>
                        <h6>Price</h6>
                    </div>

                    <div className={styles.statBox}>
                        <strong>2322</strong>
                        <h6>Members</h6>
                    </div>

                    <div className={styles.statBox}>
                        <strong>13.4K</strong>
                        <h6>Liquidity</h6>
                    </div>

                    <div className={styles.statBox}>
                        <strong>2322</strong>
                        <h6>Treasury</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
