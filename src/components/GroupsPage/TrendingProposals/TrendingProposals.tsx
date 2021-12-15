import { Button } from '@material-ui/core'
import styles from './TrendingProposals.module.scss'
import { v4 as uuid } from 'uuid';

export default function TrendingProposals() {
    return (
        <div className={styles.trendingProposals}>
            <h3>Trending Proposals</h3>

            <ul className={styles.proposalsList}>
                {[1, 2, 3, 4].map((_, idx) => (
                    <Proposal key={uuid()} text={Text[idx]} img={Images[idx]} />
                ))}
            </ul>
        </div>
    )
}

const Text = ["Chris submitted the Member proposal", "Alex joined the Agora DAO", "Brandy submitted a board post", "Treasury vault received $10k"]
const Images = ["/tp_1.jpg", "/tp_2.jpg", "/tp_3.jpg", "/tp_4.jpg"];

export const Proposal = ({ text, img }: { text: string, img: string }) => {
    return (
        <div className={styles.proposal}>
            <div className={styles.circle}>
                <img src={img} alt="Some Random Image" width={40} height={40} />
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.topBar}>
                    {text}
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.viewProposalBtn}>VIEW PROPOSAL</div>
                    <span className={styles.time}>6 hrs ago</span>
                </div>
            </div>
        </div>
    )
}
