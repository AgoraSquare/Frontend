import styles from './RightSideSection.module.scss';
import ProfilesYouMayLike from './ProfilesYouMayLike/ProfilesYouMayLike';

export default function RightSideSection() {
    return (
        <div className="flex flex-col max-w-sm w-full px-5">
            <ProfilesYouMayLike />
            <TrendingPages />
        </div>
    )
}

const TrendingPages = () => {
    return (
        <div className={styles.trendingPages}>
            <h3>Trending Pages</h3>

            <ul className={styles.trendingPagesList}>
                <li>
                    <div className={styles.avatarSection}>
                        <div className={styles.avatar}></div>
                        <span>UnboxTherapy</span>
                    </div>

                    <span className={styles.followers}>4.3k Followers</span>
                </li>

                <li>
                    <div className={styles.avatarSection}>
                        <div className={styles.avatar}></div>
                        <span>ColdFusion</span>
                    </div>

                    <span className={styles.followers}>465k Followers</span>
                </li>

                <li>
                    <div className={styles.avatarSection}>
                        <div className={styles.avatar}></div>
                        <span>Unbox</span>
                    </div>

                    <span className={styles.followers}>4.3k Followers</span>
                </li>

                <li>
                    <div className={styles.avatarSection}>
                        <div className={styles.avatar}></div>
                        <span>UnboxTherapy</span>
                    </div>

                    <span className={styles.followers}>4.3k Followers</span>
                </li>
            </ul>
        </div>
    )
}
