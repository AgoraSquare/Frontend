import { v4 as uuid } from 'uuid';
import NewPostSection from '../components/FeedPage/NewPostSection/NewPostSection';
import Layout from '../components/Layout/Layout';
import Post from '../components/ProfilePage/PostTimeline/Post/Post';
import Friends from '../components/RightSideSection/Friends/Friends';
import ProfilesYouMayLike from '../components/RightSideSection/ProfilesYouMayLike/ProfilesYouMayLike';
import SuggestedGroups from '../components/RightSideSection/SuggestedGroups/SuggestedGroups';
import styles from '../styles/Feed.module.scss';
import { useQuery, gql } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { RootState } from '../store';
import ProfileCardSection from '../components/RightSideSection/ProfileCardSection';
import Link from 'next/link';

const GET_POSTS = gql`
    query GetPosts {
        getPosts {
            id
            body
            images
            author {
                username
                name
                img_url
            }
            timestamp
            likes {
                username
                name
                timestamp
            }
            comments {
                username
                name
                body
                timestamp
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
`

export default function Feed() {
    console.log("Feed Rendered");

    // this is a temporary solution to reload the token
    const [postCreated, setPostCreated] = useState(0);


    return (
        <div className={styles.feed}>
            <Layout hideNavbar={false} hideLeftSide={false}>
                <FeedSection postCreated={postCreated} setPostCreated={setPostCreated} />
                {/* <div className="sticky top-8 w-[1px] bg-[#ffffff1F] hidden md:block " /> */}
                <div className="flex-col gap-6 w-full max-w-xs mx-auto ml-4 sticky top-0 h-max hidden sm:flex ">
                    {/* <Friends /> */}
                    {/* <ProfilesYouMayLike />
                    <SuggestedGroups /> */}
                    <ProfileCardSection />
                </div>
            </Layout>
        </div>
    )
}

const FeedSection = ({ postCreated, setPostCreated }: { postCreated: number, setPostCreated: Dispatch<SetStateAction<number>> }) => {
    // console.log("FeedSection Rendered");

    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token);

    const { data, loading, error, refetch } = useQuery(GET_POSTS, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    });

    useEffect(() => {
        refetch();
    }, [postCreated]);

    if (loading) {
        return (
            <div className="w-full sm:max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
                <div className={styles.desktopNewPostSection}>
                    <NewPostSection setPostCreated={setPostCreated} />
                </div>
                <ul className="flex flex-col gap-4 w-full ">
                    <li className='text-white/60  mx-auto text-[12px]' >Loading...</li>
                </ul>
            </div>
        );
    }

    if (error) {
        console.log(error);
        
        return (
            <div className="w-full sm:max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
                <div className={styles.desktopNewPostSection}>
                    { !error.message.includes("Your session expired.") && <NewPostSection setPostCreated={setPostCreated} />}
                </div>
                <ul className="flex flex-col gap-4 w-full ">
                    { !error.message.includes("Your session expired.") && <li className='text-white/60  mx-auto text-[12px]' >Error fetching posts.</li>}
                    { error.message.includes("Your session expired.") && 
                            <>
                            <li className='text-white/60 mt-20  mx-auto text-[12px] text-center' > <span className="font-semibold text-lg">Session Expired!</span> <br />Please login again</li>
                            <Link href="/login" passHref>
                                <button className="rounded-[10px] button-gradient w-max self-center text-xs font-semibold px-4 py-2 ">
                                    Login
                                </button>
                            </Link>
                            </>
                        }
                </ul>
            </div>
        );
    }

    return (
        <div className="w-full sm:max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
            <div className={styles.desktopNewPostSection}>
                <NewPostSection setPostCreated={setPostCreated} />
            </div>
            <ul className="flex flex-col gap-4 w-full ">
                {[].concat(data.getPosts)
                    .sort((a: any, b: any) => {
                        return Date.parse(b.timestamp) - Date.parse(a.timestamp)
                    })
                    .map((post) => (
                        <Post key={uuid()} data={post} />
                    ))
                }
            </ul>
        </div>
    )
}
