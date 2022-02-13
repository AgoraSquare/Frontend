import { Divider } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import Account from '../components/SettingPage/Account/Account';
import Preferences from '../components/SettingPage/Preferences/Preferences';
import styles from '../styles/Settings.module.scss';

export default function Settings() {
    return (
        <div className="min-h-screen">
            <Layout hideLeftSide={false} hideNavbar={false}>
                <SettingSection />
            </Layout>
        </div>
    )
}

const SettingSection = () => {
    return (
        <div className="w-full max-w-lg flex flex-col relative gap-4 mx-4 mt-10 mb-4">
            <div className="flex flex-col gap-8 border border-[#212427] px-6 py-8 rounded-xl">
                <Account />
                {/* <Divider /> */}
                <Preferences />
            </div>
        </div>
    )
}
