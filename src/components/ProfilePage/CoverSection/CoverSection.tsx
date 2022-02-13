// import styles from './CoverSection.module.scss';
import { useEffect, useState } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useMutation, gql } from "@apollo/client";
import EditProfileDailog from "../EditProfileDailog";

const FOLLOW_PROFILE = gql`
    mutation FollowProfile($username: String!) {
        followProfile(username: $username) {
            id
            username
            name
            email
            bio
            img_url
            web_url
            cover_img_url
            emailVerified
            walletAddress
            walletConnected
            followers
            following
            updatedAt
        }
    }
`;

function CoverSection({ data }: { data: any }) {
    const [following, setFollowing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const { username } = useSelector((state: RootState) => state.user);

    const token = useSelector((state: RootState) => state.auth.token);

    const [ followProfile, { data: followData , loading, error }] = useMutation(FOLLOW_PROFILE, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    })

    useEffect(() => {
        if (data.followers.includes(username)) {
            setFollowing(true);
        }
    }, []);

    useEffect(() => {
        
    }, [followData])

    const handleFollow = () => {
        followProfile({ variables: { username: data.username } });
        if(following) {
            setFollowing(false);
        } else {
            setFollowing(true);
        }
    }

    const getAvatarUrl = () => {
        if (data.img_url !== "" && data.img_url.length > 2) {
            return data.img_url;
        }
        return "/avatar_null.png";
    };

    const getCoverUrl = () => {
        if (data.cover_img_url !== "" && data.cover_img_url.length > 2) {
            return data.cover_img_url;
        }
        return "/cover_null.png";
    };

    return (
        <>
            {username === data.username && (
                <div className="relative h-full max-h-[140px] rounde-t-[12px]">
                    <div className="cursor-pointer w-full h-full object-cover object-center relative group">
                        <img
                            src={getCoverUrl()}
                            alt="Cover Photo"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-10 top-[10px] right-[10px] bg-[#212427] px-1 py-1 rounded-[40%]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="m2.58 19.011-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98ZM9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z"
                                    fill="#6a6a6a"
                                ></path>
                                <path
                                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v4.8l-.13-.11Z"
                                    fill="#6a6a6a"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <EditProfileDailog isOpen={isOpen} setIsOpen={setIsOpen} />
                    <div className="group cursor-pointer absolute rounded-[25%] w-24 h-24 -bottom-5 ml-8 overflow-hidden border-4 border-[#212427]">
                        <div className="w-full h-full relative">
                            <img
                                className="h-full w-full object-cover"
                                src={getAvatarUrl()}
                                alt="Profile photo"
                            />
                            <div className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-10 bottom-[10%] right-[10%] bg-[#212427] px-1 py-1 rounded-[40%]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="m2.58 19.011-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98ZM9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z"
                                        fill="#6a6a6a"
                                    ></path>
                                    <path
                                        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v4.8l-.13-.11Z"
                                        fill="#6a6a6a"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(true)} className="bg-[#212427] rounded-[8px] text-white/60 absolute right-0 mr-8 -bottom-5 flex px-3 py-2 text-sm">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.0495 3.00002L4.2078 10.2417C3.94947 10.5167 3.69947 11.0584 3.64947 11.4334L3.34114 14.1334C3.2328 15.1084 3.9328 15.775 4.89947 15.6084L7.5828 15.15C7.9578 15.0834 8.4828 14.8084 8.74113 14.525L15.5828 7.28335C16.7661 6.03335 17.2995 4.60835 15.4578 2.86668C13.6245 1.14168 12.2328 1.75002 11.0495 3.00002V3.00002Z"
                                stroke="#6A6A6A"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.90833 4.20898C10.083 5.32636 10.6238 6.3541 11.4458 7.13086C12.2679 7.90762 13.3245 8.38943 14.45 8.50065M2.5 18.334H17.5"
                                stroke="#6A6A6A"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        &nbsp;&nbsp;Edit
                    </button>
                </div>
            )}

            {username !== data.username && (
                <div className="relative h-full max-h-[140px] rounde-t-[12px]">
                    <div className="cursor-pointer w-full h-full object-cover object-center relative group">
                        <img
                            src={getCoverUrl()}
                            alt="Cover Photo"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="group cursor-pointer absolute rounded-[25%] w-24 h-24 -bottom-5 ml-8 overflow-hidden border-4 border-[#212427]">
                        <div className="w-full h-full relative">
                            <img
                                className="h-full w-full object-cover"
                                src={getAvatarUrl()}
                                alt="Profile photo"
                            />
                        </div>
                    </div>
                    {following && (
                        <button onClick={handleFollow} className="bg-[#0a0a0a] rounded-[8px] text-white/60 absolute right-0 mr-8 -bottom-5 flex px-3 py-2 text-sm">
                            Following
                        </button>
                    )}
                    {!following && (
                        <button onClick={handleFollow} className="bg-[#212427] rounded-[8px] text-white/60 absolute right-0 mr-8 -bottom-5 flex px-3 py-2 text-sm">
                            Follow
                        </button>
                    )}
                </div>
            )}
        </>
    );
}

export default memo(CoverSection);
