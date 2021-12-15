import styles from './GroupCoverSection.module.scss';

export default function GroupCoverSection() {
    return (
        <div className={styles.coverSection}>
            <img src="/groupCard_img_2.jpg" alt="Cover Photo" className={styles.coverPhoto} />
        </div>
    )
}
