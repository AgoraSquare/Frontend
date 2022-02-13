import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './RoadMap.module.scss';
import { useEffect } from 'react';

const titles = ['The Social Creature', 'The Legate', 'Autonomous Actor'];
const descriptions = ['Connect and discourse in the Agora Buy and sell NFTs all on a user friendly dapp platform.Crowd fund your favorite thoght leaders and influencers to dialogue on the platform.',
    'Generate and join DAOs. Experience decentralized moderation Ad rewards will be implemented Agora Token Launch',
    'Increased decentralization of the application. Rise of the Agora Metaverse'];

export default function RoadMap() {
    const { ref: textRef, inView: textInView } = useInView();
    const { ref: cardRef, inView: cardInView } = useInView({
        threshold: .2
    });
    const { ref: pointRef, inView: pointInView } = useInView({
        threshold: .2
    });
    const { ref: pointsRef, inView: pointsInView } = useInView({
        threshold: .2
    });
    const { ref: pointtRef, inView: pointtInView } = useInView({
        threshold: .2
    });
    const animateText = useAnimation();
    const animateCard = useAnimation();
    const animatePoint = useAnimation();
    const animatePoints = useAnimation();
    const animatePointt = useAnimation();

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

    useEffect(() => {
        if (pointInView) {
            animatePoint.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1
                }
            })
        }
    }, [pointInView]);
    useEffect(() => {
        if (pointsInView) {
            animatePoints.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1
                }
            })
        }
    }, [pointsInView]);
    useEffect(() => {
        if (pointtInView) {
            animatePointt.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1
                }
            })
        }
    }, [pointtInView]);

    return (
        <div className="relative flex flex-col items-center h-auto max-w-6xl px-4 mx-auto gap-10 pb-0 sm:pb-20">
            <motion.h2
                className=" text-3xl font-semibold text-white mb-20"
                initial={{
                    opacity: 0,
                    x: -50
                }}
                animate={animateText}
                ref={textRef}>Phases <strong className="opacity-[0.37]">/</strong>  RoadMap</motion.h2>

            <div
                className="w-full min-h-screen sm:min-h-screen relative flex flex-col justify-center gap-10"
            >
                {/* <div className={styles.circle_outline}> */}

                <motion.div className="w-full flex items-center relative"
                    initial={{
                        opacity: 0,
                        scale: 0.9
                    }}
                    animate={animatePoint} ref={pointRef}>
                    {/* <Point title={titles[0]} desc={descriptions[0]} /> */}
                    {/* <img className='h-full blur-lg absolute right-0 z-0' src="/reveal_bg_g.svg" alt="" /> */}
                    <div className='w-[60%] h-full absolute z-0 blur-lg right-0'>
                        <div className='bg-gradient-to-b from-[#92DDFF] to-[#B682FF] w-full h-full' style={{ clipPath: 'polygon(0% 20%, 0% 80%, 100% 100%, 100% 0%)' }}></div>
                    </div>
                    <div className="w-full z-10 rounded-xl bg-gradient-to-r from-[#121212]  to-[#1C1C1C] py-4 flex items-center justify-end px-6 min-h-[30vh]">
                        <div className=" flex flex-col items-start">
                            <h3 className=" text-lg font-bold  text-gradient">The Social Creature</h3>
                            <p className="text-sm text-white/80 max-w-sm leading-7 mt-2" >
                                Connect and discourse in the Agora <br />Buy and sell NFTs all on a user friendly dapp platform.<br />Crowd fund your favorite thought leaders and influencers to dialogue on the platform.
                            </p>

                        </div>
                    </div>
                </motion.div>
                <motion.div className="w-full flex items-center relative"
                    initial={{
                        opacity: 0,
                        scale: 0.9
                    }}
                    animate={animatePoints} ref={pointsRef}>
                        <div className='w-[60%] h-full absolute z-0 blur-lg left-0'>
                        <div className='bg-gradient-to-b from-[#92DDFF] to-[#B682FF] w-full h-full transform scale-x-[-1]' style={{ clipPath: 'polygon(0% 20%, 0% 80%, 100% 100%, 100% 0%)' }}></div>
                    </div>
                    {/* <img className='h-full blur-lg absolute left-0 z-0 transform scale-x-[-1]' src="/reveal_bg_g.svg" alt="" /> */}
                    <div className="w-full z-10 rounded-xl bg-gradient-to-l from-[#121212]  to-[#1C1C1C] py-4 flex items-center justify-start px-6 min-h-[30vh]">

                        <div className=" flex flex-col items-start">
                            <h3 className=" text-lg font-bold  text-gradient">The Legate</h3>
                            <p className="text-sm text-white/80 max-w-sm leading-7 mt-2" >
                                Generate and join DAOs. <br />Experience decentralized moderation <br />Ad rewards will be implemented <br />Agora Token Launch
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="w-full flex items-center relative"
                    initial={{
                        opacity: 0,
                        scale: 0.9
                    }}
                    animate={animatePointt} ref={pointtRef}>
                    <div className='w-[60%] h-full absolute z-0 blur-lg right-0'>
                        <div className='bg-gradient-to-b from-[#92DDFF] to-[#B682FF] w-full h-full' style={{ clipPath: 'polygon(0% 20%, 0% 80%, 100% 100%, 100% 0%)' }}></div>
                    </div>
                    <div className="w-full z-10 rounded-xl bg-gradient-to-r from-[#121212]  to-[#1C1C1C] py-4 flex items-center justify-end px-6 min-h-[30vh]">

                        <div className=" flex flex-col items-start">
                            <h3 className=" text-lg font-bold  text-gradient">The Autonomous Actor</h3>
                            <p className="text-sm text-white/80 max-w-sm leading-7 mt-2" >
                                Increased decentralization of the application <br />Rise of the Agora Metaverse<br />Research initiatives
                            </p>

                        </div>
                    </div>
                </motion.div>
                {/* </div> */}
            </div>
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
                <h3 className=" text-2xl font-bold text-white">{title}</h3>
                <p className="text-base text-white/80 max-w-sm leading-7 mt-2" >{desc}</p>
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
                <h3 className=" text-2xl font-bold text-white">{title}</h3>
                <p className="text-base text-white/80 max-w-sm leading-7 mt-2" >{desc}</p>
            </div>
        </div>
    )
}