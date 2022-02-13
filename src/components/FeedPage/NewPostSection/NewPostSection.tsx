import { Button, IconButton, TextField } from '@material-ui/core';
import { useState, useEffect, FormEventHandler } from 'react';
import styles from './NewPostSection.module.scss';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { useFilePicker } from 'use-file-picker';
import { v4 as uuid } from 'uuid';
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const GifPicker = dynamic(() => import('../GifPicker/GifPicker'));
const Poll = dynamic(() => import('../Poll/Poll'));

const CREATE_POST = gql`
mutation Mutation($postInput: PostInput!) {
    createPost(postInput: $postInput) {
        body
        images
        id
        timestamp
    }
}
`

type NewPostSectionProps = {
    setShowPostSection?: Dispatch<SetStateAction<boolean>>;
    showPostSection?: boolean;
    setPostCreated: Dispatch<SetStateAction<number>>;
}

export default function NewPostSection({ showPostSection, setShowPostSection, setPostCreated }: NewPostSectionProps) {
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
    const userData = useSelector((state: RootState) => state.user);

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

    const getAvatarUrl = () => {
        if (userData.img_url !== '' && userData.img_url.length > 2) {
            return userData.img_url;
        }
        return '/avatar_null.png';
    }

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

    const token = useSelector((state: RootState) => state.auth.token);

    const [createPost, { loading, data, error }] = useMutation(CREATE_POST, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    });

    if (error) {
        console.log("Error ");
    }

    if (loading) {
        console.log("Creating Post...");
    }

    if (data) {
        console.log(data);
    }

    useEffect(() => {
        if (data) {
            setPostCreated((prev) => prev + 1);
            setMsg('');
        }

    }, [data])

    const handlePostButton = () => {

        // TODO : add images 

        if (msg.trim() !== '') {
            createPost({
                variables: {
                    postInput: {
                        body: msg,
                        images: []
                    }
                }
            })
        }

    }

    return (
        <div className="flex flex-col gap-3 bg-[#0A0A0A] border border-[#212427] relative sm:rounded-[12px] pt-4 pb-2 px-2" onClick={(e) => {
            e.stopPropagation();
        }}>
            {/* {showGifPicker && <GifPicker setShow={setShowGifPicker} setGif={setGif} />} */}
            {showPoll && <Poll setShow={setShowPoll} />}
            <div className="hidden">
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

            <div className="flex flex-col px-4 gap-3">
                <div className="flex items-center w-full gap-2 ">
                    {/* <img src={getAvatarUrl()} alt="Profile Image" className=" w-11 h-11 rounded-full object-cover" /> */}
                    <div className="flex flex-col px-2 py-1 rounded-[8px] bg-[#212427]">
                        <h4 className='text-white/60 text-xs'>{userData.name}</h4>
                        {/* <p className='text-xs text-white/30'>@{userData.username}</p> */}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-white">
                        <TextField fullWidth multiline placeholder="What's up with your portfolio?" className={styles.msg_box} onChange={(e) => {
                            setMsg(e.target.value);
                        }}
                            InputProps={
                                {
                                    className: "text-white text-[14px]",
                                }
                            }
                            value={msg}
                        />
                    </div>

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

                <div className="flex items-center justify-between">
                    <ul className="flex items-center rounded-[10px] ">
                        {/* <li>
                            <IconButton className={styles.btnOption}>
                                <i className="ri-map-pin-2-fill text-white/30"></i>
                            </IconButton>
                        </li> */}

                        {/* TODO:  Images */}
                        {/* <li>
                            <IconButton disabled={disableImageBtn()} onClick={() => {
                                if (images.length < 4)
                                    openImageSelector();
                            }} className={styles.btnOption}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.24544 18.6383H13.2454C17.4121 18.6383 19.0788 16.9717 19.0788 12.805V7.80501C19.0788 3.63835 17.4121 1.97168 13.2454 1.97168H8.24544C4.07878 1.97168 2.41211 3.63835 2.41211 7.80501V12.805C2.41211 16.9717 4.07878 18.6383 8.24544 18.6383Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.9707 16.0964L7.07904 13.338C7.73737 12.8964 8.68737 12.9464 9.27904 13.4547L9.55404 13.6964C10.204 14.2547 11.254 14.2547 11.904 13.6964L15.3707 10.7214C16.0207 10.163 17.0707 10.163 17.7207 10.7214L19.079 11.888M8.2457 8.63802C8.68773 8.63802 9.11165 8.46243 9.42421 8.14987C9.73677 7.8373 9.91237 7.41338 9.91237 6.97135C9.91237 6.52933 9.73677 6.1054 9.42421 5.79284C9.11165 5.48028 8.68773 5.30469 8.2457 5.30469C7.80368 5.30469 7.37975 5.48028 7.06719 5.79284C6.75463 6.1054 6.57904 6.52933 6.57904 6.97135C6.57904 7.41338 6.75463 7.8373 7.06719 8.14987C7.37975 8.46243 7.80368 8.63802 8.2457 8.63802Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </IconButton>
                        </li> */}

                        {/* <li>
                            <IconButton disabled={disableBtn()} className={styles.btnOption} onClick={() => {
                                document.body.style.overflow = "hidden";
                                setShowGifPicker(true);
                            }}>
                                <i className="ri-file-gif-fill text-white/30"></i>
                            </IconButton>
                        </li> */}

                        {!showPostSection && <li className='relative'>
                            <IconButton onClick={() => {
                                setShowEmojiPicker(prev => !prev);
                            }} className={styles.btnOption}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1020_916)">
                                        <path d="M8.42122 18.6383H13.4212C17.5879 18.6383 19.2546 16.9717 19.2546 12.805V7.80501C19.2546 3.63835 17.5879 1.97168 13.4212 1.97168H8.42122C4.25456 1.97168 2.58789 3.63835 2.58789 7.80501V12.805C2.58789 16.9717 4.25456 18.6383 8.42122 18.6383Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.8392 8.42969C14.1707 8.42969 14.4887 8.29799 14.7231 8.06357C14.9575 7.82915 15.0892 7.51121 15.0892 7.17969C15.0892 6.84817 14.9575 6.53022 14.7231 6.2958C14.4887 6.06138 14.1707 5.92969 13.8392 5.92969C13.5077 5.92969 13.1897 6.06138 12.9553 6.2958C12.7209 6.53022 12.5892 6.84817 12.5892 7.17969C12.5892 7.51121 12.7209 7.82915 12.9553 8.06357C13.1897 8.29799 13.5077 8.42969 13.8392 8.42969V8.42969ZM8.00586 8.42969C8.33738 8.42969 8.65532 8.29799 8.88974 8.06357C9.12416 7.82915 9.25586 7.51121 9.25586 7.17969C9.25586 6.84817 9.12416 6.53022 8.88974 6.2958C8.65532 6.06138 8.33738 5.92969 8.00586 5.92969C7.67434 5.92969 7.3564 6.06138 7.12198 6.2958C6.88756 6.53022 6.75586 6.84817 6.75586 7.17969C6.75586 7.51121 6.88756 7.82915 7.12198 8.06357C7.3564 8.29799 7.67434 8.42969 8.00586 8.42969ZM7.92253 11.388H13.9225C14.3392 11.388 14.6725 11.7214 14.6725 12.138C14.6725 14.213 12.9975 15.888 10.9225 15.888C8.84753 15.888 7.17253 14.213 7.17253 12.138C7.17253 11.7214 7.50586 11.388 7.92253 11.388V11.388Z" stroke="#6A6A6A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1020_916">
                                            <rect width="20" height="20" fill="white" transform="translate(0.921875 0.304688)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </IconButton>
                            {showEmojiPicker && <div className='absolute'>
                                <Picker title="Pick your emoji" emoji="point_up" onSelect={(e) => {
                                    let newMsg = msg + (e as any).native;
                                    setMsg(newMsg);
                                }}
                                    theme='dark'
                                />
                            </div>}
                        </li>}

                        {/* <li>
                            <IconButton disabled={disableBtn()} className={styles.btnOption} onClick={() => {
                                openVideoSelector();
                            }}>
                                <i className="ri-movie-fill text-white/30"></i>
                            </IconButton>
                        </li> */}

                        {/* Poll Button */}

                        {/* <li>
                            <IconButton className={styles.btnOption} onClick={() => {
                                document.body.style.overflow = "hidden";
                                setShowPoll(true);
                            }}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.59701 18.6383H12.597C16.7637 18.6383 18.4303 16.9717 18.4303 12.805V7.80501C18.4303 3.63835 16.7637 1.97168 12.597 1.97168H7.59701C3.43034 1.97168 1.76367 3.63835 1.76367 7.80501V12.805C1.76367 16.9717 3.43034 18.6383 7.59701 18.6383Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.0137 15.721C13.9303 15.721 14.6803 14.971 14.6803 14.0544V6.55436C14.6803 5.6377 13.9303 4.8877 13.0137 4.8877C12.097 4.8877 11.347 5.6377 11.347 6.55436V14.0544C11.347 14.4964 11.5226 14.9203 11.8352 15.2329C12.1477 15.5454 12.5716 15.721 13.0137 15.721ZM7.18034 15.721C8.09701 15.721 8.84701 14.971 8.84701 14.0544V11.1377C8.84701 10.221 8.09701 9.47103 7.18034 9.47103C6.26367 9.47103 5.51367 10.221 5.51367 11.1377V14.0544C5.51367 14.4964 5.68927 14.9203 6.00183 15.2329C6.31439 15.5454 6.73831 15.721 7.18034 15.721Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </IconButton>
                        </li> */}
                    </ul>

                    {/* <Button onClick={handlePostButton} variant="outlined" disabled={disablePostBtn()} className={`${styles.postBtn} ${!disablePostBtn() && styles.increaseBrightness}`}>Create Post</Button> */}
                    <div onClick={handlePostButton} className={`cursor-pointer group flex flex-col justify-center items-center p-[0.1rem] rounded-[12px] w-max self-center ${disablePostBtn() ? 'bg-[#212427]' : 'bg-gradient-to-r from-[#84B9D1] to-[#D2B4FC]'}`}>
                        <div className="transition-all ease-in-out duration-300 w-full h-full group-hover:bg-transparent rounded-[11px]  my-auto flex-col flex py-2" >
                            <span className="select-none self-center text-sm font-bold text-[#0a0a0a] group-hover:text-gradient-dark my-auto mx-4 tracking-wider">Create Post</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
