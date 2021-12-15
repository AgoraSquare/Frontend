import { Button } from '@material-ui/core';
import styles from './ProposalCard.module.scss';

const Images = ["/tp_1.jpg", "/tp_2.jpg"];

export default function ProposalCard() {
    return (
        <div className={styles.card}>
            <div className={styles.topBox}>
                <header className={styles.top}>
                    <div className={styles.subTitle} >
                        <h6>Funding Proposal</h6>
                        <span>6 hrs ago</span>
                    </div>
                    <div className={styles.tag}>Environment</div>
                </header>

                <div className={styles.aboutContent}>
                    <h6 className={styles.title}>For open source</h6>
                    <p className={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                    </p>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statBox}>
                        <strong>13.4K</strong>
                        <p>Tribute</p>
                    </div>
                    <div className={styles.statBox}>
                        <strong>13.4K</strong>
                        <p >Shares</p>
                    </div>
                </div>

                <div className={styles.mobileBar}>
                    <div className={styles.submittedBy}>
                        <img src={Images[0]} alt="Submitted By" className={styles.circle} />
                        <img src={Images[1]} alt="Submitted By" className={styles.circle1} />
                    </div>

                    <div className={styles.votesMobile}>
                        <div className={styles.numberPart}>
                            <div className={styles.yes}>
                                <div style={{ height: '41.86%' }} className={styles.yesIndicator} ></div>
                            </div>
                            <div className={styles.no}>
                                <div style={{ height: '75%' }} className={styles.noIndicator} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBox}>
                <div className={styles.part1}>
                    <div className={styles.submittedBy}>
                        <img src={Images[0]} alt="Submitted By" className={styles.circle} />
                        <img src={Images[1]} alt="Submitted By" className={styles.circle1} />
                    </div>
                </div>

                <div className={styles.part2}>
                    <div className={styles.votes}>
                        <div className={styles.numberPart}>
                            <div className={styles.yes}>
                                <div style={{ height: '41.86%' }} className={styles.yesIndicator} ></div>
                            </div>
                            <div className={styles.no}>
                                <div style={{ height: '75%' }} className={styles.noIndicator} ></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.voteSection}>
                        <Button variant="text" className={styles.noBtn}>No</Button>
                        <Button variant="contained" disableElevation className={styles.yesBtn}>Yes</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}