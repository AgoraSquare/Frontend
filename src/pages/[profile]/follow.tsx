import { Button, IconButton,Tab, Tabs } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/Follow.module.scss';

export default function follow() {
    return (
        <div className={styles.follow}>
            <Layout hideNavbar={true} hideLeftSide={false}>
                <FollowSection />
            </Layout>
        </div>
    )
}

const FollowSection = () => {
    const [value, setValue] = useState(0); // for changing between Followers list and Following List
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.followSection}>
            <header className={styles.header}>
                <div className={styles.topPart}>
                    <IconButton>
                        <img src="/leftArrow.svg" alt="Back Arrow" width={30} height={30} className={styles.backBtn} onClick={() => {
                            router.push('/profile');
                        }} />
                    </IconButton>
                    <div className={styles.name_container}>
                        <h3>Daniel Figueroa</h3>
                        <p>@Dchain33</p>
                    </div>
                </div>

                <div className={styles.bottomPart}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Followers" />
                        <Tab label="Following" />
                    </Tabs>
                </div>
            </header>

            <ul className={styles.followList}>
                {Array((value == 0 ? 10 : 5)).fill(0).map((_) => (
                    <li key={uuid()}>
                        <img src="/daniel.webp" alt="Profile Photo" />
                        <div className={styles.profileSection}>
                            <section className={styles.topBar}>
                                <section className={styles.handleSection}>
                                    <h4>Daniel Figueroa</h4>
                                    <p className={styles.handle}>@Dchain33</p>
                                </section>
                                <Button variant="outlined" className={styles.followBtn}>Following</Button>
                            </section>
                            <p className={styles.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima molestias saepe labore culpa eaque iure, quas obcaecati</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
