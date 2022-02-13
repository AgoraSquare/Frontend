import { IconButton, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import MenuModal from '../../../MenuModal/MenuModal';
import styles from './Post.module.scss';
import { useQuery, useMutation, gql } from '@apollo/client';
import { RootState } from '../../../../store';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Linkify from 'react-linkify';
import router, { useRouter } from "next/router";
import moment from 'moment';
moment().format();

// const DynamicCommentSection = dynamic(() => import('../CommentSection/CommentSection'));

const GET_IMG_URL = gql`
    query GetUserProfile($username: String!) {
        getUserProfile(username: $username) {
        img_url
        }
    }
`;

const LIKE_POST = gql`
    mutation LikePost($postId: ID!) {
        likePost(postId: $postId) {
            id
            body
            images
            author {
                name
                username
                img_url
            }
            likes {
                username
                name
                timestamp
            }
            timestamp
            comments {
                username
                name
                body
                timestamp
                img_url
                likes {
                    timestamp
                    name
                    username
                }
            }
            isNFT
            nft {
                permalink
                img_url
                collection
                description
                title
            }
        }
    }
`;

const GET_LINK_META = gql`
    query GetLinkMeta($url: String!) {
        getLinkMeta(url: $url) {
            ogTitle
            ogType
            ogUrl
            ogDescription
            ogImage {
                url
                width
                height
                type
            }
            requestUrl
            success
        }
    }
`

export default function Post({ img_url, data, disableCommentBtn = false }: { img_url?: string, data?: any, disableCommentBtn?: boolean }) {
    // console.log("Post Rendered");
    const [postData, setPostData] = useState(data);
    const [liked, setLiked] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const route = useRouter();

    const token = useSelector((state: RootState) => state.auth.token);
    const [likePost, { data: likePostData, loading: likePostLoading, error: likePostError }] = useMutation(LIKE_POST, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    });

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    useEffect(() => {
        updatePostLike();
    }, [])

    let date = new Date(postData?.timestamp!);

    const handleLike = () => {
        setLiked(!liked);
        likePost({ variables: { postId: postData?.id } })
            .catch(err => console.log(err));
    }

    const getLink = (text: string) => {
        var link = "";
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        text.replace(urlRegex, function (url: string) {
            link = url;
            return url;
        })
        return link;

    }

    const hasLink = () => {
        if (postData?.body?.includes("http://") || postData?.body?.includes("https://")) {
            return true;
        }
        return false;
    }

    const componentDecorator = (href: string, text: string, key: number) => {
        return (
            <a href={href} key={key} rel="noreferrer" target="_blank" className='text-blue-300 decoration-2 break-all'>
                {text}
            </a>
        );
    }

    const userData = useSelector((state: RootState) => state.user);
    const { data: userDataData, loading: userDataLoading, error: userDataError } = useQuery(GET_IMG_URL, {
        variables: { username: postData?.author?.username },
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    })

    // if (userDataData) {
    //     console.log(userDataData);
        
    // }

    const getAvatarUrl = () => {

        if (userDataData?.getUserProfile?.img_url) {
            return userDataData?.getUserProfile?.img_url;
        }

        if (postData.author.img_url !== '' && postData.author.img_url) {
            return postData.author.img_url;
        }
        return '/avatar_null.png';
    }

    const handleCommentClick = () => {
        if (!disableCommentBtn) {
            router.push(`/posts/${postData?.id}`);
        }

    }

    const handleProfileClick = () => {
        router.push(`/${postData?.author.username}`);
    }

    const updatePostLike = () => {
        if (postData?.likes?.length > 0) {
            if (postData?.likes.find((like: any) => like.username === userData.username)) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        }
    }

    return (
        <div className="flex flex-col gap-4 sm:rounded-[12px] px-6 bg-[#0A0A0A] border border-[#212427] py-4">
            <div className="flex items-center justify-between">
                <section className="flex items-center gap-2">
                    <img onClick={handleProfileClick} className='cursor-pointer w-9 h-9 object-cover rounded-full' src={getAvatarUrl()} alt="Profile Photo" />
                    <div className="flex flex-col">
                        <h4 className='cursor-default font-medium text-xs text-white/80' >{postData?.author?.name!}</h4>
                        <div className='flex item-center gap-2'>
                            <p onClick={handleProfileClick} className='cursor-pointer font-medium text-xs text-white/30'>{postData?.author?.username === "--" ? 'anonymous' : `@${postData?.author?.username}`}</p>
                            <p className='cursor-default font-medium text-xs text-white/30'>• {moment(postData?.timestamp).fromNow()}</p>
                        </div>
                    </div>
                </section>

                <IconButton className={styles.menu} onClick={handleClick}>
                    <i className="ri-more-2-fill text-white/30"></i>
                </IconButton>

                <MenuModal anchorEl={anchorEl} handleClose={handleClose}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{ minWidth: "40px" }}>
                            <img src="/delete.svg" alt="Delete icon" width={22} height={22} />
                        </ListItemIcon>
                        <ListItemText primary="Delete this post" />
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{ minWidth: "40px" }}>
                            <img src="/edit.svg" alt="Edit icon" width={22} height={22} />
                        </ListItemIcon>
                        <ListItemText primary="Edit" />
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{ minWidth: "40px" }}>
                            <img src="/star.svg" alt="Star icon" width={22} height={22} />
                        </ListItemIcon>
                        <ListItemText primary="Pin to top" />
                    </MenuItem>
                </MenuModal>
            </div>

            <div className={styles.middleBar}>
                <Linkify componentDecorator={componentDecorator}>
                    <p className={`leading-7 tracking-wide text-white/80 w-full break-normal ${postData?.body?.length < 30 ? 'text-[20px]' : 'text-[14px]'}`} style={img_url ? { marginBottom: "1rem" } : {}}>
                        {postData?.body!}
                    </p>
                </Linkify>

                {img_url &&
                    <div className="w-full h-80 ">
                        <img src={img_url} alt="Random Img" className="w-full h-full object-cover rounded-[12px]" />
                    </div>
                }

                {hasLink() ? <LinkDiv url={getLink(postData?.body!)} /> : null}

                {postData.isNFT &&
                    <NFTDiv data={postData.nft} />
                }

            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-8">
                    <div className=" flex items-center gap-1 " >
                        <div className='cursor-pointer p-1 ' onClick={handleLike}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
                                fill={` ${liked ? "rgba(196, 0, 84, 1)" : "rgba(255, 255, 255, 0.37)"}  `} />
                            </svg> */}
                            {
                                liked ?
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3988 17.9009C11.1155 18.0009 10.6488 18.0009 10.3655 17.9009C7.94883 17.0759 2.54883 13.6342 2.54883 7.80091C2.54883 5.22591 4.62383 3.14258 7.18216 3.14258C8.69883 3.14258 10.0405 3.87591 10.8822 5.00925C11.3103 4.43081 11.868 3.96068 12.5105 3.63653C13.153 3.31238 13.8625 3.14321 14.5822 3.14258C17.1405 3.14258 19.2155 5.22591 19.2155 7.80091C19.2155 13.6342 13.8155 17.0759 11.3988 17.9009Z" fill="#C40054" stroke="#C40054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    :
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3988 17.9009C11.1155 18.0009 10.6488 18.0009 10.3655 17.9009C7.94883 17.0759 2.54883 13.6342 2.54883 7.80091C2.54883 5.22591 4.62383 3.14258 7.18216 3.14258C8.69883 3.14258 10.0405 3.87591 10.8822 5.00925C11.3103 4.43081 11.868 3.96068 12.5105 3.63653C13.153 3.31238 13.8625 3.14321 14.5822 3.14258C17.1405 3.14258 19.2155 5.22591 19.2155 7.80091C19.2155 13.6342 13.8155 17.0759 11.3988 17.9009Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                            }
                        </div>

                        <span className='text-[10px] text-white/30'>{postData?.likes?.length > 0 ? data?.likes?.length : ''}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${disableCommentBtn ? "cursor-pointer" : ""}`} onClick={handleCommentClick}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8z"
                            fill={` ${showComments ? "rgba(0, 52, 97, 1)" : "rgba(255, 255, 255, 0.37)"}`} />
                        </svg> */}
                        <div className='p-1'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.08268 8.75039H12.916H7.08268ZM5.83268 15.3587H9.16602L12.8743 17.8254C12.9995 17.9088 13.1449 17.9567 13.2952 17.9639C13.4454 17.9712 13.5948 17.9375 13.7274 17.8665C13.86 17.7955 13.9708 17.6898 14.0481 17.5608C14.1253 17.4317 14.1661 17.2841 14.166 17.1337V15.3587C16.666 15.3587 18.3327 13.6921 18.3327 11.1921V6.19206C18.3327 3.69206 16.666 2.02539 14.166 2.02539H5.83268C3.33268 2.02539 1.66602 3.69206 1.66602 6.19206V11.1921C1.66602 13.6921 3.33268 15.3587 5.83268 15.3587V15.3587Z" stroke="#6A6A6A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <span className='text-[10px] text-white/30'>{postData?.comments?.length > 0 ? data?.comments?.length : ''}</span>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    {/* <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4v-3z" fill="rgba(255, 255, 255, 0.37)" /></svg>
                        <span className='text-sm text-white/60'>23</span>
                    </div> */}
                    <div className={styles.option}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.77539 9.99987C3.77539 13.6832 6.27539 16.6665 10.4421 16.6665C14.6087 16.6665 17.1087 13.6832 17.1087 9.99987M8.20872 5.41654L10.3421 3.2832L12.4754 5.41654H8.20872ZM10.3421 11.8165V3.34154V11.8165Z" stroke="#6A6A6A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}


function LinkDiv({ url }: { url: string }) {
    const { data: linkMetaData, loading: linkMetaLoading, error: linkMetaError } = useQuery(GET_LINK_META, {
        variables: { url: url }
    });

    return (
        <Link href={url} passHref>
            <a target="_blank">
                {
                    linkMetaData &&
                    <div className='w-full h-40 mt-4 rounded-[12px] border border-[#212427] flex items-center px-2 gap-4'>
                        <div className='w-[40%] h-36 button-gradient rounded-[10px] overflow-hidden'>
                            <img src={linkMetaData?.getLinkMeta?.ogImage?.url} alt="Link icon" className='w-full h-full object-cover object-center' />
                        </div>
                        <div className='w-[60%] h-full flex flex-col justify-center gap-2 py-4'>
                            <p className='text-[#6a6a6a] text-xs font-medium line-clamp-1'>{linkMetaData?.getLinkMeta?.ogUrl}</p>
                            <p className='text-white/60 text-sm font-medium line-clamp-3 py-1'>{linkMetaData?.getLinkMeta?.ogTitle}</p>
                            <p className='text-[#6a6a6a] text-xs font-medium max-w-full line-clamp-2'>{linkMetaData?.getLinkMeta?.ogDescription}</p>
                        </div>
                    </div>
                }

                {
                    !linkMetaData &&
                    <div className='w-full h-20 mt-4 rounded-[12px] border border-[#212427] flex items-center px-2 gap-4 justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM8.18 16.77h-.07c-.97-.09-1.88-.54-2.56-1.26-1.6-1.68-1.6-4.41 0-6.09l2.19-2.3a4.05 4.05 0 0 1 2.95-1.28c1.12 0 2.17.45 2.95 1.28 1.6 1.68 1.6 4.41 0 6.09l-1.09 1.15c-.29.3-.76.31-1.06.03a.755.755 0 0 1-.03-1.06l1.09-1.15c1.06-1.11 1.06-2.92 0-4.02-.99-1.04-2.73-1.04-3.73 0l-2.19 2.3c-1.06 1.11-1.06 2.92 0 4.02.43.46 1.01.74 1.62.8.41.04.71.41.67.82a.74.74 0 0 1-.74.67Zm10.27-2.18-2.19 2.3a4.05 4.05 0 0 1-2.95 1.28c-1.12 0-2.17-.45-2.95-1.28-1.6-1.68-1.6-4.41 0-6.09l1.09-1.15c.29-.3.76-.31 1.06-.03.3.29.31.76.03 1.06l-1.09 1.15c-1.06 1.11-1.06 2.92 0 4.02.99 1.04 2.73 1.05 3.73 0l2.19-2.3c1.06-1.11 1.06-2.92 0-4.02-.43-.46-1.01-.74-1.62-.8a.75.75 0 0 1-.67-.82c.04-.41.4-.72.82-.67.97.1 1.88.54 2.56 1.26 1.59 1.67 1.59 4.41-.01 6.09Z" fill="#6a6a6a"></path></svg>
                        <p className='text-white/60 text-sm font-medium'>Click to open link</p>
                    </div>
                }
            </a>
        </Link>
    );
}

function NFTDiv({ data }: { data: any }) {
    return (
        <div className='w-full aspect-square border border-[#212427] rounded-[12px] flex flex-col p-2 item items-center justify-between'>
            <div className='w-full h-[85%] overflow-hidden button-gradient rounded-[10px]'>
                <img className='w-full h-full object-cover object-center' src={data.img_url} alt="" />
            </div>
            <div className='w-full flex items-center p-2 justify-evenly mt-2'>
                <div className='w-[60%] flex flex-col'>
                    <p className='w-full text-white/60 uppercase tracking-widest text-xs truncate ' >{data.collection}</p>
                    <p className='w-full text-white/80 font-medium text-sm truncate '>{data.title}</p>
                </div>
                <Link href={data.permalink} passHref>
                    <a target="_blank" className='px-2 cursor-pointer text-center text-sm text-white/70 rounded-[8px] bg-[#212427] w-[40%] py-3 '>
                        <div className='flex justify-center gap-2' >
                            Opensea <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99935 1.66699C5.39935 1.66699 1.66602 5.40033 1.66602 10.0003C1.66602 14.6003 5.39935 18.3337 9.99935 18.3337C14.5993 18.3337 18.3327 14.6003 18.3327 10.0003" stroke="#6A6A6A" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.334 5.69199V1.66699H14.309M10.834 9.16699L17.6673 2.33366L10.834 9.16699Z" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}