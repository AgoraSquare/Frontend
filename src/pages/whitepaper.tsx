import styles from '../styles/Whitepaper.module.scss';
import Head from 'next/head';
import Navbar from '../components/LandingPage/Navbar/Navbar';

export default function Whitepaper() {
    return (
        <div className={styles.whitepaper}>
            <Head>
                <title>Whitepaper</title>
            </Head>

            <Navbar />

            <main>
                <div className={styles.card}>
                    <div className={styles.mailmark}>
                        <img src="/mailmark.svg" alt="Mail mark" width={70} height={70} />
                    </div>

                    <h3 className={styles.heading}>Agora Square<br />Whitepaper <span>1.0</span></h3>

                    <p className={styles.content}>
                        Agora Square is a censorship-resistant web3 social media platform.
                        Agora uses blockchain technology to power a novel decentralized moderation protocol.
                        This protocol eliminates the need for moderators to have individual censorship authority and returns power to rules over rulers. Agora
                        also facilitates the creation of self governing Decentralized Autonomous Organizations
                        (DAOs) and encourages and incentives dialogue through discourse pools.
                    </p>

                    <footer>
                        <button className={styles.downloadBtn}>Download PDF</button>
                        <button className={styles.shareBtn}>
                            <i className="ri-share-forward-fill"></i>
                        </button>
                    </footer>
                </div>

                <div className={styles.info_route}>
                    <div className={styles.border} />

                    <ul>
                        <section className={styles.intro}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4>Introduction</h4>
                                <p className={styles.content}>
                                    Our world today is more connected than ever but our
                                    communities are fragmented and drifting apart in
                                    a world where people are becoming more and more
                                    socially isolated and out of touch. The problem of social isolation seems greater than ever. We suggest we
                                    look to the past for guidance. The Agoras of ancient
                                    Greece were centers of community and civilization
                                    where people would engage in commerce, discourse,
                                    and form communities. Which in turn breed social
                                    behaviour and benefit from using their fellow man.<br /><br />

                                    With this in mind, the Agora Social Network is focused on solving the quest for community. Agora&apos;s
                                    novel Decentralized Moderation Protocol allows
                                    communities to enforce rules without handing censorship power to despotic moderator oligarchies; its
                                    Semi Exclusive Decentralized Organizations
                                    improve on the existing DAO model by providing
                                    flexible fee structures and liquid club membership;
                                    its Discourse Pools incentives discourses across the
                                    aisle; and its Dynamic Publishing Prices keep
                                    noise levels in message boards at manageable levels,
                                    along with other features
                                    Additionally, Agora is a social media platform that
                                    seeks to fulfil the vision of web3 within social media
                                    and interaction. Agora will have multiple iterations
                                    with each phase including additional web3 features.</p>
                            </div>
                        </section>

                        <section className={styles.rules}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4>Rules Over Rulers: Decentralized Moderation</h4>
                                <p className={styles.content}>
                                    Our world today is more connected than ever but our
                                    communities are fragmented and drifting apart in
                                    a world where people are becoming more and more
                                    socially isolated and out of touch. The problem of social isolation seems greater than ever. We suggest we
                                    look to the past for guidance. The Agoras of ancient
                                    Greece were centers of community and civilization
                                    where people would engage in commerce, discourse,
                                    and form communities. Which in turn breed social
                                    behaviour and benefit from using their fellow man.<br /><br />

                                    With this in mind, the Agora Social Network is focused on solving the quest for community. Agora&apos;s
                                    novel Decentralized Moderation Protocol allows
                                    communities to enforce rules without handing censorship power to despotic moderator oligarchies; its
                                    Semi Exclusive Decentralized Organizations
                                    improve on the existing DAO model by providing
                                    flexible fee structures and liquid club membership;
                                    its Discourse Pools incentives discourses across the
                                    aisle; and its Dynamic Publishing Prices keep
                                    noise levels in message boards at manageable levels,
                                    along with other features
                                    Additionally, Agora is a social media platform that
                                    seeks to fulfil the vision of web3 within social media
                                    and interaction. Agora will have multiple iterations
                                    with each phase including additional web3 features.
                                </p>
                            </div>
                        </section>
                    </ul>
                </div>
            </main>
        </div>
    )
}
