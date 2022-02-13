import { useEffect, useState } from 'react';
import styles from './HeroBanner.module.scss';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/fire";
import { useRouter } from 'next/router';

export default function HeroBanner() {
    const [email, setEmail] = useState('');
    const [showLm, setShowLm] = useState(true);
    const route = useRouter();

    const handleFocus = () => {
        setShowLm(false);
    }

    const handleBlur = () => {
        setShowLm(true);
    }

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

    return (
        <div className="max-w-6xl h-screen w-full mx-auto flex flex-col items-center relative justify-center overflow-hidden">
            {/* <motion.div initial="hidden" animate="visible" variants={{
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
            }} className="h-full w-full"> */}

            <div className="w-full z-0 absolute inset-x-0 bottom-0 translate-y-[30%]">
                <img className="h-full w-full" src="/hero_bg.png" alt="Agora Pic" />
            </div>
            {/* <div className={styles.spotlight} >
                    <img className={styles.lighting} src="/gb_light.svg" alt="" />
                </div> */}
            {/* <img src="/herobg.png" alt="Agora Pic" /> */}
            {/* </motion.div> */}

            <motion.div
                initial="hidden" animate="visible" variants={{
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
                }}
                className='relative flex flex-col'>
                <div className='h-[60%] absolute z-[0] blur-lg bottom-0 inset-x-0'>
                    <div className='bg-gradient-to-r from-[#92DDFF] to-[#B682FF] w-full h-full' style={{ clipPath: 'polygon(10% 0%, 0% 100%, 100% 100%, 90% 0%)' }}></div>
                </div>
                <div className="flex flex-col items-center w-max z-10 px-12 py-16 bg-gradient-to-b from-[#121212] bg-[#1c1c1c] rounded-[24px]" >

                    <div className="text-white/70 flex flex-col items-center self-center mt-6 sm:mt-0">
                        <h1 className=" text-xl sm:text-[20px] uppercase" >A Social Platform For</h1>
                        <strong className="text-gradient uppercase text-2xl sm:text-[32px] mt-4 font-semibold tracking-wider mb-6 sm:mb-10">Communities</strong>

                        <div className="flex gap-4 sm:gap-2 flex-col sm:flex-row">
                            <input type="text" value={email} onChange={handleEmailChange} className="bg-[#121212] px-5 py-3 border-2 border-[#323232] border-solid rounded-xl text-sm font-medium text-center sm:text-left" placeholder='Join Email List'
                                onFocus={handleFocus} onBlur={handleBlur} />
                            <div onClick={handleClick} className="cursor-pointer group flex flex-col justify-center items-center p-[0.1rem] bg-gradient-to-r from-[#84B9D1] to-[#D2B4FC] rounded-xl w-max self-center ">
                                <div className="transition-all ease-in-out duration-300 w-full h-full bg-[#1c1c1c] group-hover:bg-transparent rounded-xl  my-auto flex-col flex py-[0.6rem]" >
                                    <span className="select-none self-center text-sm font-bold text-gradient group-hover:text-gradient-dark my-auto mx-4 tracking-wider">I&apos;M IN</span>
                                </div>
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
                        </div>

                        {/* <a className='mt-4 text-sm text-white/70' href="https://ez6ilepcd7z.typeform.com/to/RqcrWql0">Sign up for <span className='text-gradient font-bold'>Beta</span> </a> */}
                    </div>
                </div>

            </motion.div>
            <Link to="theAgora" smooth={true} offset={-60} >
                <div className={`animate-bounce cursor-pointer flex-col absolute inset-x-0 bottom-10 items-center text-sm ${showLm ? 'flex' : 'hidden'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0699 14.43L11.9999 20.5L5.92993 14.43M11.9999 3.5V20.33" stroke="url(#paint0_linear_225_286)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_225_286" x1="5.92993" y1="7.52963" x2="18.7408" y2="8.85768" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#84B9D1" />
                                <stop offset="1" stopColor="#D2B4FC" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
            </Link>
        </div>
    )
}
