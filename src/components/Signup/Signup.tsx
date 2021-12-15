import { Button } from '@material-ui/core';
import { SetStateAction,Dispatch } from "react";
import styles from './Signup.module.scss';

export default function Signup({setHasAccount}:{setHasAccount:Dispatch<SetStateAction<boolean>>}) {
    return (
        <div className={styles.signup}>
            <header>
                <h1 className={styles.loginText}>Sign Up</h1>
                <div className={styles.signUpText}>
                    <small>Old Here?</small>
                    <a onClick={() => {
                        setHasAccount(true);
                    }}>
                        <small>Login</small>
                        <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
            </header>

            <form>
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Confirm Password' />
                <input type="text" placeholder='Username' />

                <Button className={styles.continueBtn}>Continue</Button>
            </form>
        </div>
    )
}