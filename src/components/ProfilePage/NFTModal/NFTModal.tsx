import { Button, Divider, IconButton } from '@material-ui/core';
import Bids from './Bids/Bids';
import styles from './NFTModal.module.scss';
import { Dispatch, SetStateAction } from 'react';
import BackDrop from '../../BackDrop/BackDrop';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NFTModal({ setShow }: { setShow: Dispatch<SetStateAction<boolean>> }) {
    const [previewNFT, setPreviewNFT] = useState(false);

    return (
        <BackDrop onClick={() => {
            document.body.style.overflow = "";
            setShow(false);
        }}>
            <motion.div initial={{
                scale: .7,
                opacity: 1,
            }}
                animate={{
                    scale: 1,
                    transition: {
                        duration: .4
                    }
                }}
                className={styles.nftModal} onClick={(e) => {
                    e.stopPropagation();
                }}>
                <div className={`${styles.nftPreview} ${previewNFT && styles.inlarge}`} onClick={() => {
                    setPreviewNFT(true);
                }}>
                    <img src="/agoraNFT.png" alt="NFT" />
                    {!previewNFT && <IconButton className={styles.backBtn} onClick={(e) => {
                        e.stopPropagation();
                        document.body.style.overflow = "";
                        setShow(false);
                    }}>
                        <i className="ri-arrow-left-line"></i>
                    </IconButton>}
                    {previewNFT && <IconButton className={styles.closeBtn} onClick={(e) => {
                        e.stopPropagation();
                        setPreviewNFT(false);
                    }}>
                        <img src="/close.svg" alt="close icon" />
                    </IconButton>}
                </div>

                <div className={styles.infoContainer}>
                    <section className={styles.infoSection}>
                        <h3 className={styles.nftName}>Agora - The Genesis</h3>
                        <div className={styles.tags}>
                            <span className={styles.onSale}>On Sale</span>
                            <span className={styles.category}>Category Tag</span>
                        </div>

                        <div className={styles.description}>
                            <p>Lines extended, multiplying toward the infinite...toward the ten thousand things.
                                <br />Audio and Visual Line Meditation.
                                <br />Part three of a series of three pieces. Iteration 003/003
                            </p>
                        </div>

                        <div className={styles.authorityInfo}>
                            <div className={styles.owner}>
                                <p>Owner</p>
                                <div className={styles.info}>
                                    <span className={styles.circle} />
                                    <span className={styles.text}>@voidHistorian</span>
                                </div>
                            </div>
                            <div className={styles.collection}>
                                <p>Collection</p>
                                <div className={styles.info}>
                                    <span className={styles.circle} />
                                    <span className={styles.text}>Genesis</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Divider orientation="vertical" />

                    <section className={styles.statSection}>
                        <ul className={styles.menu}>
                            <li className={styles.selected}>Bids</li>
                            <li>History</li>
                        </ul>

                        <Bids />
                        <AuctionTimer />

                        <div className={styles.bottomPart}>
                            <div className={styles.highestBid}>
                                <small>Highest Bid: <strong>0.3 ETH</strong></small>
                            </div>

                            <Button variant="outlined" className={styles.placeBidBtn}>Place a Bid</Button>
                        </div>
                    </section>
                </div>
            </motion.div>
        </BackDrop>
    )
}

const AuctionTimer = () => {
    return (
        <div className={styles.auctionTimer}>
            <span className={styles.text}>Auction ends in:</span>

            <div className={styles.timer}>
                <div className={styles.col}>
                    <strong>0</strong>
                    <small>Days</small>
                </div>

                <div className={styles.col}>
                    <strong>12</strong>
                    <small>Hrs</small>
                </div>

                <div className={styles.col}>
                    <strong>14</strong>
                    <small>Mins</small>
                </div>

                <div className={styles.col}>
                    <strong>15</strong>
                    <small>Sec</small>
                </div>
            </div>
        </div>
    )
}
