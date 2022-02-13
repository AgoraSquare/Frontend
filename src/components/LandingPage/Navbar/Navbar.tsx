import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import MenuModal from '../../MenuModal/MenuModal';
import { IconButton, ListItemText, MenuItem } from '@material-ui/core';
import { Popover } from '@headlessui/react';
import PopoverL from './PopoverL';

export default function Navbar() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className="w-full bg-[#121212] bg-opacity-10 backdrop-blur-xl fixed top-0 z-50 ">
            <nav className="relative max-w-6xl flex justify-between mx-auto sm:px-4 items-center py-6">
                <Link href="/" passHref>
                    <div className="pl-8 sm:pl-2">
                        <img src="/logo.svg" alt="Logo" />
                    </div>
                </Link>

                <div className="self-center gap-6 items-center hidden sm:flex">
                    <Link href="/whitepaper" passHref>
                        <span className="transition-all ease-in-out duration-300 cursor-pointer text-white font-medium text-sm  hover:tracking-widest" >WHITEPAPER</span>
                    </Link>
                    {/* <Link href="/">
                        <a className="cursor-pointer text-white text-sm" >JOIN <span className="text-[#5865F2] font-bold">DISCORD</span></a>
                    </Link> */}
                    <Link href="https://ez6ilepcd7z.typeform.com/to/RqcrWql0" passHref>
                        <button className='relative flex group'>
                            <div className='absolute w-full h-full bg-gradient-to-r from-[#92DDFF] to-[#B682FF] z-[0] rounded-xl blur-md  group-hover:scale-110 transition-all ease-in-out duration-300'>
                            </div>
                            <div className='text-xs z-10 text-[#B9B9B9] uppercase font-medium ring-[3px] ring-[#212427]/70 px-4 py-3 bg-[#212427] rounded-xl'>
                                sign up for <span className='font-black text-gradient'>BETA TEST</span>
                            </div>
                        </button>
                    </Link>
                </div>

                <div className="absolute right-[10%] self-center sm:hidden" >
                    <PopoverL />
                </div>

            </nav>

        </div>
    )

    // return (
    //     <nav className={styles.navbar}>
    //         <div className={styles.logo}>
    //             <div className={styles.logobg}>
    //                 <img src="/logo.svg" alt="Logo" width={55} height={55} />
    //             </div>
    //         </div>

    //         <div className={styles.menu_links}>
    //             <Link href="/whitepaper" passHref>
    //                 <span className={styles.link}>WHITEPAPER</span>
    //             </Link>
    //             <Link href="/discord" passHref>
    //                 <span className={styles.link}>JOIN OUR <b>DISCORD</b></span>
    //             </Link>
    //             <Link href="/whitepaper" passHref>
    //                 <span className={styles.buttonBeta}>SIGN UP <b>BETA</b></span>
    //             </Link>
    //         </div>



    //         <IconButton className={styles.menu_small} onClick={handleClick}>
    //                 <i className="ri-filter-3-fill"></i>
    //         </IconButton>

    //         <MenuModal anchorEl={anchorEl} handleClose={handleClose}> 
    //             <MenuItem onClick={handleClose}>
    //                 <Link href="/whitepaper" passHref>
    //                     <span className={styles.link}>WHITEPAPER</span>
    //                 </Link>
    //             </MenuItem>
    //             <MenuItem onClick={handleClose}>
    //                 <Link href="/whitepaper" passHref>
    //                     <span className={styles.link}>JOIN OUR DISCORD</span>
    //                 </Link>
    //             </MenuItem>
    //             <MenuItem onClick={handleClose}>
    //                 <Link href="/whitepaper" passHref>
    //                     <span className={styles.buttonBeta1}>SIGN UP <b>BETA</b></span>
    //                 </Link>
    //             </MenuItem>
    //         </MenuModal>

    //     </nav>
    // )
}