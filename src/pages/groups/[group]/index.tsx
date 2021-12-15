import ProposalCard from '../../../components/GroupPage/ProposalCard/ProposalCard';
import Layout from '../../../components/Layout/Layout';
import styles from '../../../styles/Group.module.scss';
import { v4 as uuid } from 'uuid';
import GroupCoverSection from '../../../components/GroupPage/GroupCoverSection/GroupCoverSection';
import GroupAboutSection from '../../../components/GroupPage/GroupAboutSection/GroupAboutSection';
import GroupMenu from '../../../components/GroupPage/GroupMenu/GroupMenu';
import Activities from '../../../components/GroupPage/Activities/Activities';

export default function Group() {
    return (
        <div className={styles.profile}>
            <Layout hideNavbar={true} hideLeftSide={false}>
                <GroupSection />
                <div className={styles.border} />
                <div className={styles.rightSide}>
                    <Activities />
                </div>
            </Layout>
        </div>
    )
}

const GroupSection = () => {
    return (
        <div className={styles.container} >
            <div className={styles.mainSection}>
                <div className={styles.cardSection}>
                    <div className={styles.groups}>
                        <GroupCoverSection />
                        <GroupAboutSection />
                    </div>
                </div>

                <GroupMenu />

                <div className={styles.listSection}>
                    {[1, 2, 3, 4, 5, 6].map(() => (
                        <ProposalCard key={uuid()} />
                    ))}
                </div>
            </div>
        </div>
    )
}