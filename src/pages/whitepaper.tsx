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

            <main className="max-w-6xl mx-auto pt-[140px]">
                <div className=" relative flex flex-col gap-6 bg-[#1c1c1c] mx-1 rounded-2xl px-6 sm:px-10 py-10">
                    <div className="absolute right-6 top-6">
                        <img src="/mailmark2.svg" alt="Mail mark" width={70} height={70} />
                    </div>

                    <h3 className=" font-medium text-3xl mt-10 text-[#fcfcfc]">
                        Agora Square<br />Whitepaper <span className='text-gradient'>1.0</span>
                    </h3>

                    <p className="text-[#f3f3f3] break-words italic">
                        Agora Square is a web3 social media platform. Agora uses blockchain technology to power
                        multiple features. These include the enabling for the creation of self governing Decentralized
                        Autonomous Organizations (DAOs) on platform. A novel decentralized moderation protocol
                        which eliminates the need for central moderators and returns power to rules over rulers.
                        Discourse pools encourage and encourage dialogue through crowdfunding discourses on the
                        platform.

                    </p>

                    <footer className='hidden'>
                        <button className={styles.downloadBtn}>Download PDF</button>
                        <button className={styles.shareBtn}>
                            <i className="ri-share-forward-fill"></i>
                        </button>
                    </footer>
                </div>

                <div className={styles.info_route}>
                    <div className={styles.border} />

                    <ul className="px-4 py-10">
                        <section className={styles.intro}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className=' font-semibold text-xl mb-4 text-gradient'>Introduction</h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    In this technology era, the world is more connected than ever before, but we are becoming more socially alienated. The yearning for community and how to achieve it has become increasingly perplexing with our sense of belonging and social membership has splintered and is continuing to deteriorate. Local institutions, like town squares, guilds, and religious gatherings, were important sources of participation and collaboration. In Greek antiquity, the local Agora, which brought people together for trade, discourse, religious festivals, and political engagement, were essential hubs for community. We seek to merge this model into the modern context as the basis for revitalizing community. <br /><br />

                                    Much of the reason for this disintegration is that function community membership and engagement has deteriorated, therefore collaboration has lost much of its utility. Greater community involvement and participation, we believe, may help bridge the gap and bring communities together on issues of collaboration that benefit everyone involved. We believe that recent web3 technical advancements such as DAOs and sovereign identities can help in this community-building quest through enabling a  functional membership.  The revealing of local knowledge can be further utilized to address community or region-specific challenges and concerns and rebuild community . We have the opportunity to truly fulfill the need for community through the promises of the internet, rather than contributing to society&apos;s heightened sense of isolation.
                                    <br />
                                </p>
                            </div>
                        </section>

                        <section className={styles.intro}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className=' font-semibold text-xl mb-4 mt-20 text-gradient'>Decentralized Autonomous Organizations</h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    DAOs (Decentralized Autonomous Organizations) are programmable communities with deterministic rights that allow members to choose how the community is governed. Agora Square provides a familiar user interface for users to connect with and build DAOs on the platform. Given DAOs&apos; current esoteric nature, this is meant to bridge the knowledge gap between them and the broader public. The DAOs on Agora Square will be able to be customized and upgraded to meet the requirements and aspirations of communities. Permissions within DAOs can be customized to the organization&apos;s needs. Verified  members of DAOs created from the Agora Square platform can request funding from vaults, such as the DAO treasury to fund public initiatives within each DAO.

                                    <br /><br />

                                    A vault is a smart contract that has the ability to accept and distribute money. Most DAOs have a single treasury vault where members&apos; passed proposals are funded. However, there are occasions when you may just want a subset of verified community members to be allowed to suggest and accept suggestions for certain initiatives. Each DAO built on the Agora Square platform will be able to have numerous vaults, each with its own set of permissions governing who can submit and vote on proposals to decide how funds are allocated. Assume the Finance department of the imaginary City of Urbs is in charge of main treasury management. Only curtain authenticated decision makers can vote on how monies are allocated, according to the treasury vault&apos;s permissions. Consider that the City of Urbs DAO has a separate vault for environmental activities and a third for alternative public goods funding. The former could be accessed by a green task force, while the latter could be accessed by any City of Urbs resident.<br /><br />

                                    We believe that contractual covenant societies will emerge in the public mind. To contribute to and further the knowledge base of DAOs and their consequences in the new web3 environment, we propose to perform in-depth study on the multidisciplinary nature of DAOs.
                                    We believe that the advent of decentralized autonomous organizations has marked a watershed moment in the development of functioning communities and can help in the quest for community.

                                </p>
                            </div>
                        </section>

                        <section className={styles.fifth}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className='text-gradient font-semibold text-xl mb-4 mt-20'>Semi-Exclusive Organizations
                                </h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    Semi Exclusive Decentralized Organizations are decentralized organizations that have tokenized
                                    membership moderated by a discrete bonding curve.<br /><br />
                                </p>
                                <p className="text-[#fefefe] text-base px-1">
                                    <b> Definition 1.</b> A Discrete Bonding Curve is a function f : N → N that describes the instantaneous price
                                    at which a user can buy a token from or sell a token
                                    to a smart contract as a function of the outstanding
                                    supply of the issued token.<br />
                                </p>
                                <img className='my-4 mx-auto' src="/fig1-semiexo.svg" alt="" />
                                <p className="text-[#fefefe] text-base px-1 ">
                                    Many decentralized organizations have flat entry fees. But flat fees cannot take into account the
                                    dynamic nature of the benefits of joining an organization or the costs that a new member
                                    imposes on other members. Semi Exclusive DAOs offer extreme flexibility in fee structures for
                                    decentralized organizations.<br /><br />
                                </p>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    Along with extreme flexibility in fee structures, semi-exclusive DAOs are a mechanism for the financialization of DAO membership. Since bonding curves allow buying(minting) and selling (burning), semi-exclusive DAO membership is a liquid asset. The membership into a Semi-exclusive organization is represented by holding a social token in the form of an RFT or Re-fungible token. This allows members who are dissatisfied with the services or benefits they obtain by being a DAO member to trade in their membership for cash since bonding curves provide continuous sources of liquidity for the tokens they mint. If a DAO member no longer desires to be a part of an organization, the token holder can burn their RFT back into the curve and instainouly liquidate their membership. The price that the party will receive as a result of burning their token into the curve is represented by the current point the curve lies at that instance. In the case of figure 1a, the price of the token redeemed would be just over 0.6 ETH, minting shifts point of the curve to the right, burning shifts point to the left.

                                    <br /><br />Group members may be qualitatively incentivized to improve the ecosystem of the DAO since as the DAO&apos;s services improve, membership price will rise and the members will be eligible to sell their membership off for a profit if they so please. Liquid membership also opens the door to many financial possibilities including using club membership as collateral for loans. The freedom to associate and disassociate can be truly realized through this mechanism.

                                    <br /><br />
                                </p>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    By encoding a fee that allocates a percentage of each bonding instance into a treasury vault contract that can be used by the community to fund public goods. Much like other DAOs on the Agora Square platform, each Semi Exclusive organization will have the ability to have multiple treasuries or vaults which can take fees from minting or ”bonding” from a curve at hand. This can also act as a deterrent from selling the token membership immediately after minting to benefit from some service or benefit of the organization temporarily. The communities of these organizations can then submit proposals and vote on how the funds are distributed. What and how these funds are allocated are also largely determined by the features such as privileges, amount of total members, and membership price trajectory which will all be able to be customized.


                                    <br />
                                </p>
                            </div>
                        </section>

                        <section className={styles.second}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className='text-gradient font-semibold text-xl mb-4 mt-20'>Agora Forum: Discourse Pools</h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    In electricity and magnetism, opposites attract. The same is not true of ideas. Those who hold conflicting viewpoints in online communities rarely engage with one another and when they do it is hardly ever productive. The spirit of discourse is often restricted in its highest and most complete form. Good faith discourses between thought leaders from opposing sides are critical for exposing bad ideas and promoting good ones. To address this, Agora users can crowdfund incentives for thought leaders to discourse. Any Agora member can create a discourse proposal that specifies which thought leaders or influencers they would like to see discourse and how the funds will be distributed.

                                    <br /><br />
                                </p>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    To create a discourse proposal a member must commit a determined amount of funds to initiate the discourse proposal. The proposal contact will then be deployed for the rest of the community to crowdfund. Discourse proposals can also include royalties for the discourse suggestor and the ability to allocate some of the funds to an address of choice, say for a known charity. For example, someone can submit a discourse proposal and choose to allocate 20 percent of all proceeds raised for the discourse to go to their favorite charity and 1 percent goes to them. The proposal only gets passed when all requested participants agree to enter into a discussion. In order for the suggested participants to receive the money in escrow, the discourse must be proven to have taken place. This way members can be assured that there isn&apos;t a single entity controlling the allocation of the date pool funds.


                                </p>
                            </div>
                        </section>

                        <section className={styles.third}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className='text-gradient font-semibold text-xl mb-4 mt-20'>Rules Over Rulers: Decentralized
                                    Moderation
                                </h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    Many social media platforms apply rules and criteria in an arbitrary manner. The majority of social media networks that have subcommunities rely on a few unpaid moderators to enforce the rules. However, these moderators do not always adhere to the word or spirit of the laws. Instead of a set of rules, these subcommunities are overseen by unelected moderators who wield enormous power over the censorship of opposing viewpoints.

                                    <br /><br />
                                </p>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    Any user can flag a post on the Agora platform for review, but the user who flagged the post and the number of flags it got are not revealed to the designated moderators. These moderators are picked at random and are only given the content of a post. Moderators do&apos;t know who was picked and can&apos;t contact one another, thus they can&apos;t conspire. Moderators must decide which rules, if any, a post broke. The post is not removed if moderators agree that it violates a rule but disagree on which rule it breaches. The only way a post can be removed is if the moderators, who are chosen at random, agree on whatever rule the post broke (for some definition of agree).
                                    <br /><br />
                                </p>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    In this moderation architecture, moderators compete with one another in a coordination game. The moderators, on the other hand, have only the content of the post to work with. As a result, they can only agree on the rule a post broke if the rule was plainly broken. Instead of moderators enforcing subcommunity rules, this gives them back control.
                                    By staking the Solidus governance token, users on the Agora Platform  can become moderators. There will be a block explorer that will list each judgment and allow anyone to challenge it. If someone delivers poor moderation, their decision can be challenged, and if determined to be erroneous, they can be vetoed and have their stake reduced.
                                    <br />
                                </p>

                            </div>
                        </section>



                        <section className={styles.sixth}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className='text-gradient font-semibold text-xl mb-4 mt-20'>Agora Square DAO and Governance Token
                                </h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    The Agora Square DAO will have a significant impact on the platform&apos;s future development. The Agora Square DAO will function as a meta-DAO, communicating with and setting standards for dealing with and interacting with other DAOs in the Agora Square ecosystem. This can include operating as a venture or facialitor engine for other DAOs and ecosystems in development. Furthermore, just as each DAO on the Agora Square platform will be able to house multiple treasuries or vaults, the Agora Square DAO will follow a similar architectural paradigm. Each division will establish a proof of competence verification system to verify that DAO decisions are passed by members who specialize and are proven actors in their trusted communities. Ambassador programs, research programs, and platform moderators will all have their own vaults with their own set of rights. Only authenticated researchers affiliated with the Agora Square DAO, for example, will be allowed to submit and vote on research vault ideas. Platform moderators will have privileged access to making proposals to improve the protocol&apos;s moderation efforts.

                                    <br />
                                </p>
                            </div>
                        </section>

                        <section className={styles.seventh}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className='text-gradient font-semibold text-xl mb-4 mt-20'>Dynamic Publishing Prices
                                </h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    Many people who had previously been mute found new voices with the advent of user-generated content. These new voices brought new ideas and perspectives, but they also brought a flood of misinformed opinions and noise, which began to drown out subject matter experts&apos; voices. Until now, the solution to the noise problem has been to use community ratings to highlight the voices that the community wants to hear. This worked effectively in some areas, such as message boards about cat videos, but not so well in others, such as talks concerning medical issues. When it comes to medical knowledge, the difficulty is that what you need to hear isn&apos;t usually the same as what you want to hear.<br /><br />
                                </p>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    On Agora, message boards can choose to employ a dynamic publishing price model, which controls the volume of information that can be distributed on the message board at any moment using a dynamic pricing mechanism that changes prices at times of high post volume. This keeps important data from getting lost in a sea of noise. Agora will have message boards associated with each DAO to allow for more community engagement. This ensures that communities uncover even more local information to act upon and make better informed decisions. Users will be able to start a discourse regarding the community&apos;s needs or recommend topics for ongoing discussions. This can help users come up with better ideas because they&apos;ll have a place to talk about them.
                                    <br />
                                </p>
                            </div>
                        </section>

                        <section className={styles.last}>
                            <div className={styles.circle} />
                            <div className={styles.text_container}>
                                <h4 className='text-gradient font-semibold text-xl mb-4 mt-20'>Conclusion
                                </h4>
                                <p className="text-[#fefefe] text-base px-1 ">
                                    Agora Square aspires to capture the essence of the ancient Agoras as centers of discourse, commerce and community. To achieve this goal, we strive to facilitate an environment which is both technical yet user friendly toolkit that allows communities to interact, align, and thrive. We intend to create infrastructure that will establish a standard by which these ecosystems can flourish. With the emergence of the Agora Square DAO, the platform will serve as a functional ecosystem for aggregating decision making and information from the platform&apos;s associated DAOs. We seek to embody the concept of a decentralized autonomous society by which communities can organize and align with a meta protocol through the Agora Square platform. The platform will go through multiple major phases, each providing new functionality and increasing decentralization until we reach this goal and vision of a decentralized, yet ordered future.<br />
                                </p>
                            </div>
                        </section>
                    </ul>
                </div>
            </main>
        </div>
    )
}
