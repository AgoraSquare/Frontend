import { useRouter } from 'next/router';
import styles from './AboutSection.module.scss';
import {memo} from 'react'

function AboutSection() {
    console.log("AboutSection Rendered");
    
    const router = useRouter();
    const goToFollowPage = () => {
        router.push('/profile/follow'); // go to follow page
    }

    return (
        <div className={styles.aboutSection}>
            <div className={styles.mobile_container}>
                <div className={styles.mobile_username_section}>
                    <h3 className={styles.name}>Alexander</h3>
                    <p className={styles.username}>@alex</p>
                </div>

                <div className={styles.statSection}>
                    <div className={styles.stat} onClick={goToFollowPage}>
                        <span>following</span>
                        <h5>450</h5>
                    </div>

                    <div className={styles.stat} onClick={goToFollowPage}>
                        <span>followers</span>
                        <h5>2350</h5>
                    </div>
                </div>
            </div>
            <div className={styles.desc}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500
                </p>
            </div>
        </div>
    )
}

export default memo(AboutSection);