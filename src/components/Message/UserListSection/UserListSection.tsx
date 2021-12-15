import { Divider, List, ListItem } from '@material-ui/core';
import { Dispatch, SetStateAction, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { HideLeftSideSectionContext } from '../../Layout/Layout';
import styles from './UserListSection.module.scss';

export default function UserListSection({ setScreen }: { setScreen?: Dispatch<SetStateAction<0 | 1>> }) {
    const { setHideLeftSideBar } = useContext(HideLeftSideSectionContext);
    console.log("UserList Rendered");
    return (
        <div className={styles.userListSection}>
            <form className={styles.searchBar}>
                <i className="ri-search-2-fill ri-xl"></i>
                <input type="text" placeholder="Search or Start New Chat" />
            </form>

            <List className={styles.contacts_list}>
                {Array(9).fill(0).map((_) => (
                    <div key={uuid()}>
                        <ListItem component="li" button key={uuid()} onClick={() => {
                            if (setScreen) {
                                setScreen(1);
                                setHideLeftSideBar(true);
                            }
                        }}>
                            <Contact />
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    )
}

const Contact = () => {
    console.log("Contact Rendered");
    return (
        <div className={styles.contact}>
            <img src="/tp_4.jpg" alt="Profile Photo" />
            <section className={styles.container}>
                <div className={styles.topBar}>
                    <h3 className={styles.name}>Natasha</h3>
                    <span className={styles.handle}>@nat</span>
                    <span className={styles.time}>3:30 PM</span>
                </div>

                <div className={styles.bottomBar}>See you on monday!</div>
            </section>
        </div>
    )
}
