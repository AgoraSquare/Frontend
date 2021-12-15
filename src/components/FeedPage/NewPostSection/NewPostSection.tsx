import { Button, IconButton, TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';
import styles from './NewPostSection.module.scss';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { useFilePicker } from 'use-file-picker';
import { v4 as uuid } from 'uuid';
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction } from 'react';

const GifPicker = dynamic(() => import('../GifPicker/GifPicker'));
const Poll = dynamic(() => import('../Poll/Poll'));

type NewPostSectionProps = {
    setShowPostSection?: Dispatch<SetStateAction<boolean>>;
    showPostSection?: boolean;
}

export default function NewPostSection({ showPostSection, setShowPostSection }: NewPostSectionProps) {
    console.log("NewPost Rendered");
    const [images, setImages] = useState<File[]>([]);
    const [images_url, setImages_URL] = useState<string[]>([]);
    const [video_url, setVideo_URL] = useState('');
    const [video, setVideo] = useState<File | null>(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showGifPicker, setShowGifPicker] = useState(false);
    const [showPoll, setShowPoll] = useState(false);
    const [msg, setMsg] = useState('');
    const [gif, setGif] = useState('');

    const [openImageSelector, { filesContent: imageContent_url, plainFiles: imageContent }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'image/*',
        multiple: false,
    });

    const [openVideoSelector, { filesContent: videoContent_url, plainFiles: videoContent }] = useFilePicker({
        readAs: 'DataURL',
        accept: 'video/*',
        multiple: false,
    });

    const removeImageFromArray = (idx: number) => {
        setImages_URL([...images_url.slice(0, idx), ...images_url.slice(idx + 1)])
        setImages([...images.slice(0, idx), ...images.slice(idx + 1)]);
    }

    const disableImageBtn = () => {
        if (images.length >= 4 || gif || video)
            return true;
        else return false;
    }

    const disableBtn = () => {
        if (images.length > 0 || gif || video)
            return true;
        else return false;
    }

    const disablePostBtn = () => {
        if (msg.trim() || disableBtn())
            return false;
        else return true;
    }

    useEffect(() => {
        if (imageContent.length > 0) {
            setImages([...images, imageContent[0]]);
            setImages_URL([...images_url, imageContent_url[0].content]);
        }
    }, [imageContent, imageContent_url]);

    useEffect(() => {
        if (videoContent.length > 0) {
            setVideo(videoContent[0]);
            setVideo_URL(videoContent_url[0].content);
        }
    }, [videoContent, videoContent_url]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        }
    }, []);

    return (
        <div className={styles.newPostSection} onClick={(e) => {
            e.stopPropagation();
        }}>
            {showGifPicker && <GifPicker setShow={setShowGifPicker} setGif={setGif} />}
            {showPoll && <Poll setShow={setShowPoll} />}
            <div className={styles.mobile_TopBar}>
                <IconButton className={styles.leftArrow} onClick={() => {
                    if (setShowPostSection) {
                        document.body.style.overflow = "";
                        setShowPostSection(false);
                    }
                }}>
                    <i className="ri-arrow-left-line"></i>
                </IconButton>
                <Button variant="outlined" disabled={disablePostBtn()} className={`${styles.mobilePostBtn} ${!disablePostBtn() && styles.increaseBrightness}`}>Post</Button>
            </div>

            <div className={styles.mobileContainer}>
                <div className={styles.profileSection}>
                    <img src="/tp_2.jpg" alt="Profile Image" className={styles.profilePhoto} />
                    <div className={styles.profileContent}>
                        <h4>Alex</h4>
                        <p>@alex</p>
                    </div>
                </div>

                <div className={styles.contentSection}>
                    <TextField fullWidth multiline placeholder="What's up with your portfolio?" className={styles.msg_box} onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                        InputProps={
                            {
                                className: styles.fontSizeMobile
                            }
                        }
                        value={msg}
                    />

                    {images.length > 0 && <div className={styles.uploadedImagesGrid}>
                        {images.map((_, idx) => (
                            <div className={styles.uploadImage} key={uuid()}>
                                <img draggable={false} src={images_url[idx]} alt="Image" />
                                <IconButton className={styles.closebtn} onClick={() => {
                                    removeImageFromArray(idx)
                                }}>
                                    <img src="/close.svg" alt="" width={29} height={29} />
                                </IconButton>
                            </div>
                        ))}
                    </div>}

                    {gif && <div className={styles.gif}>
                        <img src={gif} alt="gif" />
                        <IconButton className={styles.closebtn} onClick={() => {
                            setGif('');
                        }}>
                            <img src="/close.svg" alt="" width={29} height={29} />
                        </IconButton>
                    </div>}

                    {video && <div className={styles.uploadVideo}>
                        <video src={video_url} controls />

                        <IconButton className={styles.closebtn} onClick={() => {
                            setVideo_URL('');
                            setVideo(null);
                        }}>
                            <img src="/close.svg" alt="" width={29} height={29} />
                        </IconButton>
                    </div>}
                </div>

                <div className={styles.option_section}>
                    <ul className={styles.options_list}>
                        <li>
                            <IconButton className={styles.btnOption}>
                                <i className="ri-map-pin-2-fill"></i>
                            </IconButton>
                        </li>

                        <li>
                            <IconButton disabled={disableImageBtn()} onClick={() => {
                                if (images.length < 4)
                                    openImageSelector();
                            }} className={styles.btnOption}>
                                <i className="ri-image-2-fill"></i>
                            </IconButton>
                        </li>

                        <li>
                            <IconButton disabled={disableBtn()} className={styles.btnOption} onClick={() => {
                                document.body.style.overflow = "hidden";
                                setShowGifPicker(true);
                            }}>
                                <i className="ri-file-gif-fill"></i>
                            </IconButton>
                        </li>

                        {!showPostSection && <li>
                            <IconButton onClick={() => {
                                setShowEmojiPicker(prev => !prev);
                            }} className={styles.btnOption}>
                                <i className="ri-emotion-happy-line"></i>
                            </IconButton>
                            {showEmojiPicker && <div className={styles.emojiPicker}>
                                <Picker title="Pick your emoji" emoji="point_up" onSelect={(e) => {
                                    let newMsg = msg + (e as any).native;
                                    setMsg(newMsg);
                                }} />
                            </div>}
                        </li>}

                        <li>
                            <IconButton disabled={disableBtn()} className={styles.btnOption} onClick={() => {
                                openVideoSelector();
                            }}>
                                <i className="ri-movie-fill"></i>
                            </IconButton>
                        </li>

                        <li>
                            <IconButton className={styles.btnOption} onClick={() => {
                                document.body.style.overflow = "hidden";
                                setShowPoll(true);
                            }}>
                                <i className="ri-bar-chart-box-fill"></i>
                            </IconButton>
                        </li>
                    </ul>
                    <Button variant="outlined" disabled={disablePostBtn()} className={`${styles.postBtn} ${!disablePostBtn() && styles.increaseBrightness}`}>Create Post</Button>
                </div>
            </div>
        </div>
    )
}
