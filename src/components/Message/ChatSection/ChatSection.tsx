import { IconButton } from '@material-ui/core';
import { Dispatch, SetStateAction, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { HideLeftSideSectionContext } from '../../Layout/Layout';
import styles from './ChatSection.module.scss';

export default function ChatSection({ setScreen }: { setScreen?: Dispatch<SetStateAction<0 | 1>> }) {
    console.log("ChatSection Rendered");
    const { setHideLeftSideBar } = useContext(HideLeftSideSectionContext);

    return (
        <div className={styles.chatSection}>
            <section className={styles.header}>
                <IconButton className={styles.backBtn} onClick={() => {
                    if (setScreen) {
                        setScreen(0);
                        setHideLeftSideBar(false);
                    }
                }}>
                    <i className="ri-arrow-left-line"></i>
                </IconButton>
                <div className={styles.profileInfo}>
                    <img src="/tp_4.jpg" alt="Profile Photo" className={styles.profilePic} />
                    <div className={styles.usernameContainer}>
                        <h4>Natasha</h4>
                        <p>@nat</p>
                    </div>
                    <IconButton>
                        <i className="ri-more-2-fill"></i>
                    </IconButton>
                </div>
            </section>

            <ul className={styles.chatContainer}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => (
                    <li key={uuid()} className={(_ % 2 == 0 ? styles.sentLi : styles.receivedLi)}>
                        <Message type={_ % 2 == 0 ? true : false} />
                    </li>
                ))}
            </ul>

            <form className={styles.chatBox}>
                <IconButton>
                    <i className="ri-emotion-laugh-line"></i>
                </IconButton>
                <input placeholder="Type a message" />
                <IconButton>
                    <i className="ri-attachment-2"></i>
                </IconButton>
                <IconButton>
                    <i className="ri-send-plane-2-fill"></i>
                </IconButton>
            </form>
        </div>
    )
}

const Message = ({ type }: { type: boolean }) => {
    console.log("Message Rendered");
    return (
        <div className={`${styles.message} ${type ? styles.sent : styles.received}`}>
            <div className={styles.space_container}></div>
            <div className={`${styles.msg_box} ${type && styles.sent_msg_box}`}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vero consectetur eer</p>
            </div>
        </div>
    )
}
