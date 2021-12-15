import NewPostSection from '../components/FeedPage/NewPostSection/NewPostSection';
import Layout from '../components/Layout/Layout';
import Post from '../components/ProfilePage/PostTimeline/Post/Post';
import Friends from '../components/RightSideSection/Friends/Friends';
import ProfilesYouMayLike from '../components/RightSideSection/ProfilesYouMayLike/ProfilesYouMayLike';
import SuggestedGroups from '../components/RightSideSection/SuggestedGroups/SuggestedGroups';
import styles from '../styles/Feed.module.scss';

export default function Feed() {
    console.log("Feed Rendered");
    return (
        <div className={styles.feed}>
            <Layout hideNavbar={false} hideLeftSide={false}>
                <FeedSection />
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

const FeedSection = () => {
    console.log("FeedSection Rendered");

    return (
        <div className={styles.feedSection}>
            <div className={styles.desktopNewPostSection}>
                <NewPostSection />
            </div>
            <ul className={styles.postsList}>
                <Post img_url="/groupCard_img_3.jpg" />
                <Post />
                <Post />
                <Post img_url="/groupCard_img_3.jpg" />
            </ul>
        </div>
    )
}
