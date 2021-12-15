import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import ChatSection from '../components/Message/ChatSection/ChatSection';
import UserListSection from '../components/Message/UserListSection/UserListSection';
import styles from '../styles/Messages.module.scss';
import useResize from '../utils/useResize';

export default function Messages() {
    const [flag] = useResize(1200);
    console.log("Message Rendered")

    return (
        <div className={styles.messages}>
            <Layout hideNavbar={false} hideLeftSide={false}>
                {flag ? <MobileMessageBox /> : <DesktopMessageBox />}
            </Layout>
        </div>
    )
}

const DesktopMessageBox = () => {
    console.log("DesktopBox Rendered");
    return (
        <div className={styles.desktopMessageBox}>
            <UserListSection />
            <div className={styles.border} />
            <ChatSection />
        </div>
    )
}

const MobileMessageBox = () => {
    console.log("MobileMessageBox Rendered");
    const [screen,setScreen] = useState<0 | 1>(0); // used for changing between userlist and chatbox in mobile view
    return (
        <div className={styles.mobileMessageBox}>
            {screen === 0 ? <UserListSection setScreen={setScreen}/> : <ChatSection setScreen={setScreen}/>}
        </div>
    )
}