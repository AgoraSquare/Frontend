import styles from './LeftSideSection.module.scss';
import { Dispatch, SetStateAction } from 'react';
import MenuBox from '../MenuBox/MenuBox';
import { Button } from '@material-ui/core';

export default function LeftSideSection({ setShowPostSection }: { setShowPostSection: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className="hidden sm:flex flex-col gap-1 w-full h-max max-w-xs py-10 sticky top-0">
            {/* <div className="cursor-pointer group flex flex-col justify-center items-center p-[0.1rem] bg-gradient-to-r from-[#84B9D1] to-[#D2B4FC] rounded-[12px] w-max self-center">
                <div className="transition-all ease-in-out duration-300 w-full h-full bg-[#1c1c1c] group-hover:bg-transparent rounded-[11px]  my-auto flex-col flex py-2" >
                    <span className="select-none self-center text-sm font-bold text-gradient group-hover:text-gradient-dark my-auto mx-4 tracking-wider">CONNECT WALLET</span>
                </div>
            </div> */}
            {/* <i className={`ri-wallet-2-fill ${styles.mobileConnectWalletBtn}`}></i> */}
            
            <MenuBox setShowPostSection={setShowPostSection} />

            {/* <footer>
                <img src="/logo_bw.svg" alt="logo" width={75} height={75} />
                <small>© Copyright 2021</small>
            </footer> */}
        </div>
    )
}