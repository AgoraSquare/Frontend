import { useInView } from 'react-intersection-observer';
import styles from './GraphSection.module.scss';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function GraphSection() {
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
        if(cardInView){
            animateCard.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1
                }
            })
        }
    },[cardInView]);

    return (
        <div className={styles.graphSection}>
            <motion.h2 initial={{
                opacity: 0,
                x: -50
            }}
                animate={animateText}
                ref={textRef}
            >Radically Customizable <br />Bonding Curves</motion.h2>

            <motion.div className={styles.graphCard} initial={{
                opacity: 0,
                scale: .9
            }} animate={animateCard} ref={cardRef}>
                <section className={styles.section1}>
                    <h3>Liquid membership</h3>
                    <p>
                        Semi Exclusive Decentralized Organizations are decentralized organizations that have tokenized membership moderated by a discrete bonding curve. Semi Exclusive DAOs with extreme flexibility in fee structures for decentralized organizations.
                    </p>
                </section>

                <section className={styles.section2}>
                    <img src="/graph.svg" alt="Graph" />
                </section>
            </motion.div>
        </div>
    )
}
