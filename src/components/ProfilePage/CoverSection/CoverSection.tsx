import styles from './CoverSection.module.scss';
import { memo } from 'react';
import { Button } from '@material-ui/core';

function CoverSection() {
    console.log("CoverSection Rendered");

    return (
        <div className={styles.coverSection}>
            <img src="/groupCard_img_3.jpg" alt="Cover Photo" className={styles.coverPhoto} />
            <div className={styles.profilePhoto}>
                <img src="/tp_2.jpg" alt="Profile photo" />
            </div>
            <Button variant="outlined" className={styles.editProfile}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" fill="rgba(0,0,0,1)" /></svg>
                &nbsp;&nbsp;Edit
            </Button>
        </div>
    )
}

export default memo(CoverSection);