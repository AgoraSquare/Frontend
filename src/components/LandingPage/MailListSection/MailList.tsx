import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import styles from './MailList.module.scss';
import toast, { Toaster } from 'react-hot-toast';
import { doc, setDoc } from "firebase/firestore";
import {db} from "../../../utils/fire";

const MailList = () => {
    const { ref: cardRef, inView: cardInView } = useInView({
        threshold: .2
    });
    const animateCard = useAnimation();
    const [email, setEmail] = useState('');

    const notify = async () => {
        await setDoc(doc(db, "Subscribed List", email), {
            email,
        });
        toast('Added to list.');
        setEmail('');
    }

    const handleClick = () => {
        if (email.length > 3) {
            notify();
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

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

            <motion.div className="relative  w-full bg-gradient-to-tr from-[#84B9D1] to-[#D2B4FC] flex flex-col px-10 justify-center rounded-3xl gap-2 py-20 h-max"
                ref={cardRef}
                animate={animateCard}
                initial={{ opacity: 0, scale: 0.9 }}
            >
                <div className="absolute bottom-0 right-0 h-[80%]">
                    <img className="w-full h-full" src="/mail_bg.svg" alt="" />
                </div>

                <h5 className="text-xl sm:text-2xl font-semibold text-left ">
                    Be a <span className="font-semibold text-white underline">part of Agora Square,</span>
                    <br />
                    Subscribe to our mail list
                </h5>
                <p className="font-medium sm:text-[16px]">We won&apos;t spam you!</p>

                <div className="flex mt-4 items-center">
                    <form className="flex gap-4 flex-row items-center">
                        <input value={email} onChange={handleEmailChange} className="font-medium text-xs text-white bg-[#212427] px-4 py-3 rounded-lg" type="email" placeholder='Your Email' />
                        <div onClick={handleClick} className="cursor-pointer group flex flex-col justify-center items-center py-3 bg-[#121212] rounded-lg w-max sm:h-full">
                            {/* <div className="transition-all ease-in-out duration-300 w-full h-full bg-[#1c1c1c]  rounded-lg  my-auto flex-col flex py-2 " > */}
                                <span className="select-none self-center text-xs font-bold text-gradient my-auto mx-4 tracking-wider">I&apos;M IN</span>
                            {/* </div> */}
                        </div>
                        <Toaster
                            toastOptions={{
                                className: '',
                                style: {
                                    border: '2px solid #212427',
                                    color: '#ffffff',
                                    background: '#121212'
                                },
                            }}
                        />
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default MailList;