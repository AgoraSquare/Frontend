import styles from './LoginCard.module.scss';
import { SetStateAction, Dispatch } from "react";
import { Button, Divider } from '@material-ui/core';

export default function LoginCard({ setHasAccount }: { setHasAccount: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className={styles.loginCard}>
            <header>
                <h1 className={styles.loginText}>Login</h1>
                <div className={styles.signUpText}>
                    <small>New Here?</small>
                    <a onClick={() => {
                        setHasAccount(false);
                    }}>
                        <small>Sign Up</small>
                        <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
            </header>

            <form>
                <input type="text" placeholder='Username/Email' />
                <input type="text" placeholder='Password' />

                <footer>
                    <Button className={styles.loginBtn}>Login</Button>
                    <a href="#" className={styles.needHelpText}>Need Help?</a>
                </footer>
            </form>

            <Divider />

            <Button className={styles.metaMaskBtn}>
                <div className={styles.metaMaskContainer}>
                    <img src="/metamask.svg" alt="Metamask logo" width={30} height={30} />
                    <small>Continue with MetaMask</small>
                </div>
            </Button>
        </div>
    )
}
