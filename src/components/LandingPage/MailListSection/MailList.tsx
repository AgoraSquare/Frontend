import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import styles from './MailList.module.scss';

const MailList = () => {
    const { ref: cardRef, inView: cardInView } = useInView({
        threshold: .2
    });
    const animateCard = useAnimation();

    useEffect(() => {
        if (cardInView) {
            animateCard.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.5,
                }
            })
        }
    }, [cardInView]);

    return (
        <div className={styles.mailList}>

            <motion.div className={styles.card}
                ref={cardRef}
                animate={animateCard}
                initial={{ opacity: 0, scale: 0.9 }}
            >
                <div className={styles.mailmark}>
                    <img src="/mailmark.svg" alt="" />
                </div>

                <h5>Be a <span>part of Agora Square,</span><br />Subscribe to our mail list</h5>
                <p>We wont spam you!</p>

                <div className={styles.formDiv}>
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button><span>IM IN</span></button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default MailList;