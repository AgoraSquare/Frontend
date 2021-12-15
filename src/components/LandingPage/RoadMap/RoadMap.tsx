import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './RoadMap.module.scss';
import { useEffect } from 'react';

const titles = ['Man, A Social Creature', 'Man, The Legate', 'Man, Autonomous Actor'];
const descriptions = ['Connect and discourse in the Agora Buy and sell NFTs all on a user friendly dapp platform.Crowd fund your favorite thoght leaders and influencers to dialogue on the platform.',
    'Generate and join DAOs. Experience decentralized moderation Ad rewards will be implemented Agora Token Launch',
    'Increased decentralization of the application. Rise of the Agora Metaverse'];

export default function RoadMap() {
    const { ref: textRef, inView: textInView } = useInView();
    const { ref: cardRef, inView: cardInView } = useInView({
        threshold: .2
    });
    const animateText = useAnimation();
    const animateCard = useAnimation();

    useEffect(() => {
        if (textInView) {
            animateText.start({
                opacity: 1,
                x: 0,
                transition: {
                    delay: .7,
                    duration: .5
                }
            });
        }
    }, [textInView]);

    useEffect(() => {
        if (cardInView) {
            animateCard.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1
                }
            })
        }
    }, [cardInView]);

    return (
        <div className={styles.roadmap}>
            <motion.h2 initial={{
                opacity: 0,
                x: -50
            }}
                animate={animateText}
                ref={textRef}>Phases <strong>/</strong>  RoadMap</motion.h2>

            <motion.div initial={{
                opacity: 0,
                scale: .9
            }} animate={animateCard} ref={cardRef} className={styles.roadmap_card}>
                <div className={styles.circle_outline}>
                    <div className={styles.line}>
                        <img src="/line.svg" alt="" />
                    </div>
                    <div className={styles.pt1}>
                        <Point title={titles[0]} desc={descriptions[0]} />
                    </div>
                    <div className={styles.pt2}>
                        <PointL title={titles[1]} desc={descriptions[1]} />
                    </div>
                    <div className={styles.pt3}>
                        <Point title={titles[2]} desc={descriptions[2]} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const Point = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className={styles.point}>
            <div className={styles.circle_outline_pt}>
                <div className={styles.circle} />
            </div>

            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const PointL = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <div className={styles.pointL}>
            <div className={styles.circle_outline_pt}>
                <div className={styles.circle} />
            </div>

            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}