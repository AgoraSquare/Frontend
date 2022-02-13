import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import ChatSection from '../components/Message/ChatSection/ChatSection';
import UserListSection from '../components/Message/UserListSection/UserListSection';
import ProfileCardSection from '../components/RightSideSection/ProfileCardSection';
import styles from '../styles/Messages.module.scss';
import useResize from '../utils/useResize';

export default function Messages() {
    const [flag] = useResize(1200);
    console.log("Message Rendered")

    return (
        <div className={styles.messages}>
            <Layout hideNavbar={false} hideLeftSide={false}>
                <div className="w-full sm:max-w-lg flex flex-col relative gap-4 mx-4 mt-8 mb-4 realtive">
                    <img className='w-full h-full object-center object-cover' src="/messages_placeholder.png" alt="" />
                    <div className='flex flex-col items-center absolute inset-0 m-auto top-[30%] gap-1'>
                        <h3 className='text-white text-base'>Coming Soon</h3>
                        <p className='text-white/30 text-xs text-center'>Messages are planned<br />will be available soon</p>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col gap-6 w-full max-w-xs mx-auto ml-4 sticky top-0 h-max ">
                    {/* <Friends /> */}
                    {/* <ProfilesYouMayLike />
                    <SuggestedGroups /> */}
                    <ProfileCardSection />
                </div>
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
    const [screen, setScreen] = useState<0 | 1>(0); // used for changing between userlist and chatbox in mobile view
    return (
        <div className={styles.mobileMessageBox}>
            {screen === 0 ? <UserListSection setScreen={setScreen} /> : <ChatSection setScreen={setScreen} />}
        </div>
    )
}