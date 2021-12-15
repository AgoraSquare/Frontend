import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import AboutSection from '../../components/ProfilePage/AboutSection/AboutSection';
import CoverSection from '../../components/ProfilePage/CoverSection/CoverSection';
import Menu from '../../components/ProfilePage/Menu/Menu';
import styles from '../../styles/Profile.module.scss';
import dynamic from 'next/dynamic';
import Friends from '../../components/RightSideSection/Friends/Friends';
import ProfilesYouMayLike from '../../components/RightSideSection/ProfilesYouMayLike/ProfilesYouMayLike';
import SuggestedGroups from '../../components/RightSideSection/SuggestedGroups/SuggestedGroups';

//Profile Page
export default function Profile() {
    console.log("Profile Page Rendered");
    return (
        <div className={styles.profile}>
            <Layout hideNavbar={true} hideLeftSide={false}>
                <ProfileSection />
                <div className={styles.border} />
                <div className={styles.rightSide}>
                    <Friends />
                    <ProfilesYouMayLike />
                    <SuggestedGroups />
                </div>
            </Layout>
        </div>
    )
}

const PostTimeline = dynamic(import('../../components/ProfilePage/PostTimeline/PostTimeline'));
const Collectibles = dynamic(import('../../components/ProfilePage/Collectibles/Collectibles'));
const Groups = dynamic(import('../../components/ProfilePage/Groups/Groups'));

const ProfileSection = () => {
    console.log("ProfileSection Rendered");
    const [currentOption, setCurrentOption] = useState(0);

    const getComponent = () => {
        switch (currentOption) {
            case 0: return <PostTimeline />;
            case 1: return <Collectibles />;
            case 2: return <Groups />;
            default: return <h1>Not yet build</h1>;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.userCoverAndAboutSection}>
                <CoverSection />
                <AboutSection />
            </div>
            <Menu currentOption={currentOption} setCurrentOption={setCurrentOption} />
            {getComponent()}
        </div>
    )
}
