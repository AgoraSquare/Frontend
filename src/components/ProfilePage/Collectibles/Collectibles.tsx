import { v4 as uuid } from 'uuid';
import NFTModal from '../NFTModal/NFTModal';
import styles from './Collectibles.module.scss';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useResize from '../../../utils/useResize';

export default function Collectibles() {
    console.log("Collectibles Rendered");
    return (
        <div className={styles.collectibles}>
            {[1, 2, 3, 4, 5, 6].map(() => (
                <CollectibleCard key={uuid()} />
            ))}
        </div>
    )
}

const CollectibleCard = () => {
    console.log("CollectibleCard Rendered");
    const [showModal, setShowModal] = useState(false);
    const [flag] = useResize(520);

    return (
        <>
            <motion.div whileTap={flag && !showModal ? "bounce" : ""} variants={{
                bounce: {
                    scale: .8,
                    transition: {
                        duration: .8
                    }
                }
            }} className={styles.collectibleCard}>
                <AnimatePresence>
                    {showModal && <NFTModal setShow={setShowModal} />}
                </AnimatePresence>
                <div className={styles.collectiblePhoto} onClick={() => {
                    document.body.style.overflow = "hidden";
                    setShowModal(true);
                }}>
                    <img src="/agoraNFT.png" alt="photo" className={styles.bannerPhoto} />
                </div>

                <div className={styles.collectibleInfo}>
                    <div className={styles.likeOption}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" fill="rgba(149,164,166,1)"/></svg>
                        <span>23</span>
                    </div>

                    <div className={styles.text}>
                        <h5 className={styles.collectionName}>Collection Name</h5>
                        <h5 className={styles.title}>NFT Title</h5>
                        <p className={styles.lastBid}>Last Bid: 0.05 ETH</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
