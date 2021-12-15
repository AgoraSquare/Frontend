import GroupCard from '../../components/GroupsPage/GroupCard/GroupCard';
import GroupCategoryMenu from '../../components/GroupsPage/GroupCategoryMenu/GroupCategoryMenu';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/Groups.module.scss';
import { v4 as uuid } from 'uuid';

export default function Groups() {
    return (
        <div className={styles.groups}>
            <Layout hideNavbar={false} hideLeftSide={false}>
                <GroupsSection />
            </Layout>
        </div>
    )
}

const GroupNames = ["Miami", "WCS", "Green Peace", "Children International", "El Portal", "Biscayne Park"];
const GroupTypes = ["Government", "Public", "Private", "Non-Profit", "Government", "Government"]
const CoverPhotos = ["/groupCard_img_2.jpg", "/groupCard_img_1.jpeg", "/groupCard_img_3.jpg", "/groupCard_img_4.jpg", "/groupCard_img_5.jpg", "/groupCard_img_6.jpg"]

const GroupsSection = () => {
    return (
        <div className={styles.groupSection}>
            <GroupCategoryMenu />
            <div className={styles.cardGrid}>
                {Array(6).fill(0).map((_, idx) => (
                    <GroupCard key={uuid()} type={GroupTypes[idx]} name={GroupNames[idx]} img={CoverPhotos[idx]} />
                ))}
            </div>
        </div>
    )
}
