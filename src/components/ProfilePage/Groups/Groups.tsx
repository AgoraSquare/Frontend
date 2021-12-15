import { Button } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import styles from './Groups.module.scss';
import { useState } from 'react';
import Link from 'next/link';

export default function Groups() {
    console.log("Groups Rendered");
    return (
        <div className={styles.groups}>
            {[1, 2, 3, 4].map(() => (
                <GroupCard key={uuid()} />
            ))}
        </div>
    )
}

const GroupCard = () => {
    const [flip, setFlip] = useState(false);

    console.log("GroupCard Rendered")
    return (
        <div className={styles.groupCard} onClick={() => {
            setFlip(!flip);
        }}>
            <div className={`${styles.card_inner} ${flip && styles.flip}`}>
                <div className={styles.front}>
                    <div className={styles.topSection}>
                        <div className={styles.title}>
                            <p>Public</p>
                            <h3>Agora&apos;s DAO</h3>
                        </div>

                        <p className={styles.desc}>
                            If you want to go fast, go alone. If you want to go far, go together.
                        </p>

                        <ul className={styles.statsList}>
                            <li>
                                <strong>$13.4K</strong>
                                <h6>Price</h6>
                            </li>

                            <li>
                                <strong>243122</strong>
                                <h6>Members</h6>
                            </li>
                        </ul>

                        <div className={styles.bottomSection}>
                            <div className={styles.amount}>
                                <h6>Liquidity</h6>
                                <strong>$4.45K</strong>
                            </div>

                            <div className={styles.divider}>
                            </div>

                            <div className={styles.amount}>
                                <h6>Treasurey</h6>
                                <strong>$6.95K</strong>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.back}>
                    <div className={styles.graph} />
                    <div className={styles.text}>
                        0x2170ed0880ac9a755fd29b2688956bd959f933f8
                    </div>
                    <div className={styles.bottom}>
                        <Button className={styles.innerText}>Vaults</Button>
                        <Link href="/groups/page" passHref>
                            <Button variant="outlined" className={styles.proposalBtn} onClick={(e) => {
                                e.stopPropagation();
                            }}>PROPOSALS</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
