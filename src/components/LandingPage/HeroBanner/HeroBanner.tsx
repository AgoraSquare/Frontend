import { useEffect, useState } from 'react';
import styles from './HeroBanner.module.scss';
// import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function HeroBanner() {
    return (
        <div className={styles.banner}>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    opacity: 0,
                },
                visible: {
                    opacity: 1,
                    transition: {
                        delay: .4,
                        duration: .5
                    }
                }
            }} className={styles.banner_image}>
                <img src="/hero_bg.png" alt="Agora Pic" />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    y: 20,
                    opacity: 0,
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: .4,
                        duration: .5
                    }
                }
            }}>
                <div className={styles.content}>
                    <h1>A Social Platform For</h1>
                    <strong>Communities</strong>

                    <div className={styles.contentFooter}>
                        <input type="text" className={styles.emailInput} placeholder='Join Email List' />
                        <button className={styles.submitBtn}><span>I&apos;M IN</span></button>
                    </div>
                </div>
            </motion.div>

            <div className={styles.lm}>
                <img src="lm.svg" alt="" />
            </div>
        </div>
    )
}
