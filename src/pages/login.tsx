import LoginCard from '../components/LoginCard/LoginCard';
import Signup from '../components/Signup/Signup';
import styles from '../styles/Login.module.scss';
import { useState } from 'react';

export default function Login() {
    const [hasAccount, setHasAccount] = useState(true);

    return (
        <div className={styles.login}>
            <div className={styles.logoPart}>
                <img src="/logo.svg" alt="Logo" width={140} height={140} />
                <footer className={styles.desktopFooter}>
                    <small>
                        Privacy Policy<br />
                        Terms & Conditions
                    </small>
                </footer>
            </div>

            <div className={styles.loginFormPart}>
                <div className={styles.bgImage}>
                    <img src="/bg_glow.svg" alt="background image" width={120} height={120} />
                </div>
                {hasAccount ? <LoginCard setHasAccount={setHasAccount} /> : <Signup setHasAccount={setHasAccount} />}
            </div>

            <footer className={styles.mobileFooter}>
                <small>
                    Privacy Policy<br />
                    Terms & Conditions
                </small>
            </footer>
        </div>
    )
}
