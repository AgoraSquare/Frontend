import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { v4 as uuid } from 'uuid';
import styles from './CardSection.module.scss';
import { useEffect } from 'react';

const image_urls = ['c1.svg', 'c2.svg', 'c3.svg', 'c4.svg'];
const titles = ['DAO Factory', 'Decentralized Moderation', 'Incentivizing Discourse', 'Ad Rewards'];
const descriptions = ["Allows users to create and join communities with shared interests and values by creating and joining DAOs generated on the Agora platform.",
    "Rules over Rulers, the protocol will return power to the subcommunity rules rather than the moderators enforcing them. ",
    "Conflicting viewpoints rarely engage with one another in a productive manner. Agora users can crowdfund incentives for thought leaders to dialogue through discourse pools.",
    "Users on Agora have the option of opting in to receive rewards from interacting with advertisement on the platform. Users will be able to monetize post shout-outs directly to advertisers and their followers!"
];

export default function CardSection() {
    const { ref: textRef, inView: textInView } = useInView();
    const { ref: cardsRef, inView: cardsInView } = useInView({
        threshold: .2
    });
    const animateText = useAnimation();
    const animateCardsGrid = useAnimation();

    useEffect(() => {
        if (textInView) {
            animateText.start({
                opacity: 1,
                x: 0,
                transition: {
                    delay: .7,
                    duration: .5
                }
            })
        }
    }, [textInView]);

    useEffect(() => {
        if (cardsInView) {
            animateCardsGrid.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1,
                }
            })
        }
    }, [cardsInView]);

    return (
        <div className={styles.cardSection} id="theAgora">
            <motion.header initial={{
                opacity: 0,
                x: -50
            }}
                animate={animateText}
                ref={textRef}
            >
                <h2>AGORA <strong>Square</strong></h2>
                <p>
                    Agora is a social media platform that utilizes blockchain technology to help usher in the new dawn of meaningful social interaction. The platform utilizes a novel decentralized moderation protocol, DAO generator, and incentives discourse through debate pools.
                </p>
            </motion.header>

            <motion.div className={styles.cardGrid}
                ref={cardsRef}
                animate={animateCardsGrid}
                initial={{
                    opacity: 0,
                    scale: .9
                }}
            >
                {Array(4).fill(0).map((_, idx) => (
                    <Card key={uuid()} image_url={image_urls[idx]} title={titles[idx]} desc={descriptions[idx]} />
                ))}
            </motion.div>
        </div>
    )
}

const Card = ({ image_url, title, desc }: { image_url: string, title: string, desc: string }) => {
    console.log("Card Component Rendered");
    return (
        <motion.div className={styles.card} whileHover="scaleUp" whileTap="scaleUp" variants={{
            scaleUp: {
                scale: 1.1,
                transition: {
                    duration: .2
                }
            }
        }}>
            <div className={styles.header}>

                <img src={image_url} alt="Image" width={70} height={70} />

                <h2>{title}</h2>
            </div>
            <p>{desc}</p>
        </motion.div>
    )
}
