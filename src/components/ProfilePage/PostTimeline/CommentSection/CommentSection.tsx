import { Button, IconButton, ListItemIcon, ListItemText, MenuItem, TextField } from '@material-ui/core';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import MenuModal from '../../../MenuModal/MenuModal';
import styles from './CommentSection.module.scss';

export default function CommentSection() {
    console.log("CommentSection Rendered");
    return (
        <div className={`${styles.commentSection}`}>
            <div className={styles.addComment}>
                <div className={styles.topSection}>
                    <img src="/daniel.webp" alt="profile photo" className={styles.profilePhoto} />
                    <TextField multiline fullWidth placeholder="comment something awesome!" className={styles.msg_box}
                        InputProps={
                            {
                                className: styles.fontSizeMobile
                            }
                        }
                    />
                </div>
                <div className={styles.optionSection}>
                    <IconButton className={styles.addImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(0,52,97,1)" /></svg>
                    </IconButton>
                    <Button variant="contained" className={styles.replyBtn}>Reply</Button>
                </div>
            </div>

            <ul className={styles.commentList}>
                {Array(2).fill(0).map(() => (
                    <li key={uuid()}>
                        <Comment />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Comment = () => {
    console.log("Comment Rendered");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.comment}>
            <div className={styles.topBar}>
                <section className={styles.profileSection}>
                    <img src="/tp_3.jpg" alt="Profile Photo" />
                    <div className={styles.profileInfo}>
                        <h4>Brandy Hudson</h4>
                        <p>@brandyH | 3:30 PM</p>
                    </div>
                </section>

                <div className={styles.menu}>
                    <IconButton className={styles.menu} onClick={handleClick}>
                        <i className="ri-more-2-fill"></i>
                    </IconButton>
                    <MenuModal anchorEl={anchorEl} handleClose={handleClose}>
                        <MenuItem>
                            <ListItemIcon style={{ minWidth: "40px" }}>
                                <img src="/delete.svg" alt="Delete icon" width={22} height={22} />
                            </ListItemIcon>
                            <ListItemText primary="Delete this post" />
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon style={{ minWidth: "40px" }}>
                                <img src="/edit.svg" alt="Edit icon" width={22} height={22} />
                            </ListItemIcon>
                            <ListItemText primary="Edit" />
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon style={{ minWidth: "40px" }}>
                                <img src="/star.svg" alt="Star icon" width={22} height={22} />
                            </ListItemIcon>
                            <ListItemText primary="Pin to top" />
                        </MenuItem>
                    </MenuModal>
                </div>
            </div>

            <div className={styles.middleBar}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis eum, ex sint pariatur accusantium rem, repellat ad magni ut velit ea omnis dignissimos at sunt iusto repellendus itaque excepturi?
                </p>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.left}>
                    <div className={styles.option}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z" />
                            <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
                                fill="rgba(149,164,166,1)" /></svg>
                        <span>23</span>
                    </div>
                    <div className={styles.option}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8z"
                            fill="rgba(149,164,166,1)" /></svg>
                        <span>23</span>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.option}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4v-3z" fill="rgba(0,52,97,1)" /></svg>
                        <span>23</span>
                    </div>
                    <div className={styles.option}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .959 1.755l-4.2 2.29a4.008 4.008 0 0 1 0 1.954l4.199 2.29a4 4 0 1 1-.959 1.755zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="rgba(0,52,97,1)" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
