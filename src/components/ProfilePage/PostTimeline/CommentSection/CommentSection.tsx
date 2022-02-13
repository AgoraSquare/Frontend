import { Button, IconButton, ListItemIcon, ListItemText, MenuItem, TextField } from '@material-ui/core';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import MenuModal from '../../../MenuModal/MenuModal';
import styles from './CommentSection.module.scss';
import { useMutation, gql } from '@apollo/client';
import { RootState } from '../../../../store';
import { useSelector } from 'react-redux';

const ADD_COMMENT = gql`
    mutation CommentPost($postId: ID!, $commentBody: String!) {
        commentPost(postId: $postId, commentBody: $commentBody) {
            id
            comments {
                username
                name
                body
                timestamp
            }
        }
    }
`;

export default function CommentSection({data}: {data: any}) {
    console.log("CommentSection Rendered");

    const [commentBody, setCommentBody] = useState('');

    const token = useSelector((state: RootState) => state.auth.token);
    const [ commentPost, { data: commentPostData, loading: commentPostLoading, error: commentPostError }] = useMutation(ADD_COMMENT, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    });

    const handleComment = () => {
        if (commentBody !== '') {
            commentPost({ variables: { postId: data.id, commentBody: commentBody } })
                .catch(err => console.log(err));
            setCommentBody('');
        }
    }
    
    return (
        <div className={`${styles.commentSection}`}>
            <div className={styles.addComment}>
                <div className={styles.topSection}>
                    <img src="/daniel.webp" alt="profile photo" className={styles.profilePhoto} />
                    <TextField multiline fullWidth placeholder="comment something awesome!" className={styles.msg_box} onChange={(e) => setCommentBody(e.target.value)} 
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
                    <Button onClick={handleComment} variant="contained" className={styles.replyBtn}>Reply</Button>
                </div>
            </div>

            <ul className={styles.commentList}>
                {data?.comments.map((comment: any) => (
                    <li key={uuid()}>
                        <Comment data={comment} />
                    </li>
                ))}
            </ul>
        </div>
    )
}



const Comment = ({data}: {data: any}) => {
    console.log("Comment Rendered");
    const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let date = new Date(data?.timestamp!);

    return (
        <div className="flex flex-col overflow-hidden transition-all duration-500">
            <div className={styles.topBar}>
                <section className={styles.profileSection}>
                    <img src="/tp_3.jpg" alt="Profile Photo" />
                    <div className={styles.profileInfo}>
                        <h4>{data?.name}</h4>
                        <p>@{data?.username} | {date.getHours()}:{date.getMinutes()}</p>
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
                    {data?.body}
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
