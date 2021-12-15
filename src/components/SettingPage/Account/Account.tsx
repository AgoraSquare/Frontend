import { Button } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import styles from './Account.module.scss';

export default function Account() {
    return (
        <ul className={styles.account}>
            <strong>Account & Security</strong>
            <li>
                <div className={styles.text}>
                    <h5>Password</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

                <div className={styles.password}>
                    {Array(13).fill(0).map((_) => (
                        <span className={styles.dot} key={uuid()} />
                    ))}
                </div>

                <Button variant="outlined" className={styles.btn}>Change</Button>
            </li>

            <li>
                <div className={styles.text}>
                    <h5>Email</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

                <div className={styles.email}>vermaarsh65@gmail.com</div>

                <Button variant="outlined" className={styles.btn}>Update</Button>
            </li>

            <li>
                <div className={styles.text}>
                    <h5>Phone Number</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

                <div className={styles.phone}>+91 34234993292</div>

                <Button variant="outlined" className={styles.btn}>Edit</Button>
            </li>

            <li>
                <div className={styles.text}>
                    <h5>Display Information</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

                <div />

                <Button variant="outlined" className={styles.btn}>Edit</Button>
            </li>
        </ul>
    )
}
