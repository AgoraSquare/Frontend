import { Radio, Switch } from '@material-ui/core';
import styles from './Preferences.module.scss';

export default function Preferences() {
    return (
        <ul className={styles.preferences}>
            <strong>Preferences</strong>
            <li>
                <div className={styles.text}>
                    <h5>Notification Alert</h5>
                    <p>Toggles an alert when you receive a notification</p>
                </div>

                <Switch />
            </li>

            <li>
                <div className={styles.text}>
                    <h5>Message Alert</h5>
                    <p>Toggles an alert when you receive a message</p>
                </div>

                <Switch />
            </li>

            <li>
                <div className={styles.lanuageOption}>
                    <div className={styles.text}>
                        <h5>Language</h5>
                        <p>You preferred interface language</p>
                    </div>

                    <ul className={styles.options}>
                        <li>
                            <Radio />
                            <span>English</span>
                        </li>

                        <li>
                            <Radio />
                            <span>Espanol</span>
                        </li>

                        <li>
                            <Radio />
                            <span>French</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}
