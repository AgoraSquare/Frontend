import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AboutSection from "../../components/ProfilePage/AboutSection/AboutSection";
import CoverSection from "../../components/ProfilePage/CoverSection/CoverSection";
import Menu from "../../components/ProfilePage/Menu/Menu";
// import styles from '../../styles/Profile.module.scss';
import dynamic from "next/dynamic";
// import Friends from '../../components/RightSideSection/Friends/Friends';
// import ProfilesYouMayLike from '../../components/RightSideSection/ProfilesYouMayLike/ProfilesYouMayLike';
// import SuggestedGroups from '../../components/RightSideSection/SuggestedGroups/SuggestedGroups';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useLazyQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import ProfileCardSection from "../../components/RightSideSection/ProfileCardSection";

// const GET_POSTS = gql`
//     query GetPosts {
//         getPosts {
//             id
//             body
//             images
//             author {
//                 img_url
//                 username
//                 name
//             }
//             timestamp
//             likes: {
//                 username
//                 name
//                 timestamp
//             },
//             comments {
//                 timestamp
//                 body
//                 username
//             }
//         }
//     }
// `

const GET_USER_PROFILE = gql`
    query GetUserProfile($username: String!) {
        getUserProfile(username: $username) {
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

//Profile Page
export default function Profile() {

    const router = useRouter();

    const token = useSelector((state: RootState) => state.auth.token);

    // TODO: Add loading and error states

    const [getProfile, { data, loading, error }] = useLazyQuery(GET_USER_PROFILE, {
        context: {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    })


    // useEffect(() => {
    //     if (!token || token === "") {
    //         router.push("/login");
    //     }
    //     console.log(router.asPath.split("/")[1]);
        
    // }, []);

    useEffect(() => {
        if (router.asPath.split("/")[1] !== "") {
            getProfile({ variables: { username: router.asPath.split("/")[1] } });
        }
    }, [router.asPath]);

    const handleLoginClick = () => {
        router.push("/login");
    }
    

    return (
        <div className="min-h-screen w-full">
            <Layout hideNavbar={true} hideLeftSide={false}>
                {loading &&
                    <div className="w-full max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
                        <ul className="flex flex-col gap-4 w-full ">
                            <li className='text-white/60  mx-auto text-[12px]' >Loading...</li>
                        </ul>
                    </div>
                }
                {error &&
                    <ul className="w-full max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
                        { !error.message.includes("Your session expired.") && 
                            <li className='text-white/60  mx-auto text-[12px]' >Error fetching profile.</li>
                        }
                        { error.message.includes("Your session expired.") && 
                            <>
                            <li className='text-white/60 mt-20  mx-auto text-[12px] text-center' > <span className="font-semibold text-lg">Session Expired!</span> <br />Please login again</li>
                            
                            <button onClick={handleLoginClick} className="rounded-[10px] button-gradient w-max self-center text-xs font-semibold px-4 py-2 ">
                                Login
                            </button>
                            </>

                        }
                    </ul>
                }

                {data &&
                    <ProfileSection data={data.getUserProfile} />
                }

                {/* <div className={styles.border} /> */}
                <div className="hidden sm:flex flex-col gap-6 w-full max-w-xs mx-auto ml-4 sticky top-0 h-max ">
                    {/* <Friends /> */}
                    {/* <ProfilesYouMayLike />
                    <SuggestedGroups /> */}
                    <ProfileCardSection />
                </div>
            </Layout>
        </div>
    );
}

const PostTimeline = dynamic(
    import("../../components/ProfilePage/PostTimeline/PostTimeline")
);
const Collectibles = dynamic(
    import("../../components/ProfilePage/Collectibles/Collectibles")
);
const Groups = dynamic(import("../../components/ProfilePage/Groups/Groups"));

const ProfileSection = ({data} : {data: any}) => {
    const [currentOption, setCurrentOption] = useState(0);

    const getComponent = () => {
        switch (currentOption) {
            case 0:
                return <PostTimeline username={data.username} />;
            case 1:
                return <Collectibles walletAddress={data.walletAddress} />;
            case 2:
                return <Groups />;
            default:
                return (
                    <>
                        <div className="w-full max-w-lg flex flex-col relative gap-4 mx-4 mt-8 mb-4">
                            <img src="/activities_null.png" alt="" />
                            <div className="flex flex-col items-center absolute inset-0 m-auto gap-1">
                                <h3 className="text-white/60 text-base">
                                    Coming Soon
                                </h3>
                            </div>
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="w-full max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
            <div className=" sm:rounded-[12px] overflow-hidden">
                <CoverSection data={data} />
                <AboutSection data={data} />
            </div>
            <Menu
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
            />
            {getComponent()}
        </div>
    );
};
