import GroupCard from '../../components/GroupsPage/GroupCard/GroupCard';
import GroupCategoryMenu from '../../components/GroupsPage/GroupCategoryMenu/GroupCategoryMenu';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/Groups.module.scss';
import { v4 as uuid } from 'uuid';
import ProfileCardSection from '../../components/RightSideSection/ProfileCardSection';

export default function Groups() {
    return (
        <div className={styles.groups}>
            <Layout hideNavbar={false} hideLeftSide={false}>
                {/* <GroupsSection /> */}
                <div className="w-full sm:max-w-lg flex flex-col relative gap-4 mx-4 mt-8 mb-4">
                    <img className='w-full h-full object-center object-cover' src="/communities_placeholder.png" alt="" />
                    <div className='flex flex-col items-center absolute inset-0 m-auto top-[40%] gap-1'>
                        <h3 className='text-white text-base'>Coming Soon</h3>
                        <p className='text-white/30 text-xs text-center'>Communities(DAOs) are planned<br />will be available soon</p>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col gap-6 w-full max-w-xs mx-auto ml-4 sticky top-0 h-max ">
                    {/* <Friends /> */}
                    {/* <ProfilesYouMayLike />
                    <SuggestedGroups /> */}
                    <ProfileCardSection />
                </div>
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
