import { Divider } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import Account from '../components/SettingPage/Account/Account';
import Preferences from '../components/SettingPage/Preferences/Preferences';
import styles from '../styles/Settings.module.scss';

export default function Settings() {
    return (
        <div className={styles.settings}>
            <Layout hideLeftSide={false} hideNavbar={false}>
                <SettingSection />
            </Layout>
        </div>
    )
}

const SettingSection = () => {
    return (
        <div className={styles.settingSection}>
            <div className={styles.settingsContainer}>
                <Account />
                <Divider />
                <Preferences />
            </div>
        </div>
    )
}
