import styles from './Activities.module.scss';
import { Proposal } from '../../GroupsPage/TrendingProposals/TrendingProposals';
import {v4 as uuid} from 'uuid';

const Text = ["Chris submitted the Member proposal", "Alex joined the Agora DAO", "Brandy submitted a board post", "Treasury vault received $10k"]
const Images = ["/tp_1.jpg","/tp_2.jpg","/tp_3.jpg","/tp_4.jpg"];

export default function Activities() {
    return (
        <div className={styles.activities}>
            <h3 className={styles.title}>Activities</h3>

            <ul className={styles.activitiesList}>
                {[0,1,2,3,2,3].map((idx) => (
                    <Proposal key={uuid()} text={Text[idx]} img={Images[idx]} />
                ))}
            </ul>
        </div>
    )
}
