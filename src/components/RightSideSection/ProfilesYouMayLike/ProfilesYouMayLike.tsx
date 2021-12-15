import styles from './ProfilesYouMayLike.module.scss';
import {v4 as uuid } from 'uuid';

export default function ProfilesYouMayLike() {
    return (
        <div className={styles.profilesYouMayLike}>
            <h4 className={styles.heading}>People you may like</h4>

            <ul className={styles.profilesList}>
                {Array(3).fill(0).map(() => (
                    <li key={uuid()}>
                        <div className={styles.avatarSection}>
                            <img src="/tp_4.jpg" alt="" width={40} height={40} className={styles.avatar} />
                            <div className={styles.nameContainer}>
                                <h5>Sarah</h5>
                                <small>@iamSarah</small>
                            </div>
                        </div>

                        <span className={styles.followBtn}>FOLLOW</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}