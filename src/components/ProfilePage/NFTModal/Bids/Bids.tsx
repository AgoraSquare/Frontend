import styles from './Bids.module.scss';
import { v4 as uuid } from 'uuid';

export default function Bids() {
    return (
        <ul className={styles.bids}>
            {Array(20).fill(0).map(() => (
                <Bid key={uuid()} />
            ))}
        </ul>
    )
}

const Bid = () => {
    return (
        <div className={styles.bid}>
            <div className={styles.bidInfo}>
                <span className={styles.circle} />
                <div className={styles.bidName}>
                    <h5>Bid</h5>
                    <strong>0.091 ETH</strong>
                </div>
            </div>

            <div className={styles.whoPlaced}>
                by Wil all 14 hours ago
            </div>
        </div>
    )
}
