import styles from './LeftSideSection.module.scss';
import { Dispatch, SetStateAction } from 'react';
import MenuBox from '../MenuBox/MenuBox';
import { Button } from '@material-ui/core';

export default function LeftSideSection({ setShowPostSection }: { setShowPostSection: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className={styles.leftSideSection}>
            <Button variant="outlined" className={styles.connectWalletBtn}>CONNECT WALLET</Button>
            <i className={`ri-wallet-2-fill ${styles.mobileConnectWalletBtn}`}></i>
            <MenuBox setShowPostSection={setShowPostSection} />

            <footer>
                <img src="/logo_bw.svg" alt="logo" width={75} height={75} />
                <small>© Copyright 2021</small>
            </footer>
        </div>
    )
}