import { v4 as uuid } from 'uuid';
import styles from './SuggestedGroups.module.scss';

export default function SuggestedGroups() {
    return (
        <div className={styles.suggestedGroups}>
            <header>Suggested Groups</header>

            <ul className={styles.groupsList}>
                {Array(3).fill(0).map(() => (
                    <li className={styles.groups} key={uuid()}>
                        <img src="/groupCard_img_2.jpg" alt="profile pic" width={25} height={25} />

                        <div className={styles.nameContainer}>
                            <h5>Miami</h5>
                            <small>Government</small>
                        </div>

                        <div className={styles.stat}>
                            <strong>2.3K</strong>
                            <small>members</small>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
