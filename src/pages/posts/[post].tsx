import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import ProfileCardSection from "../../components/RightSideSection/ProfileCardSection";
import { useLazyQuery, useMutation, gql } from "@apollo/client";
import { useEffect, useState, useRef, ChangeEvent, KeyboardEventHandler } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Post from "../../components/ProfilePage/PostTimeline/Post/Post";
import moment from "moment";
import { v4 as uuid } from "uuid";
moment().format();

const GET_POST = gql`
    query GetPost($postId: ID!) {
        getPost(postId: $postId) {
            id
            body
            images
            author {
                name
                username
                img_url
            }
            timestamp
            likes {
                timestamp
                name
                username
            }
            comments {
                likes {
                    timestamp
                    name
                    username
                }
                img_url
                timestamp
                body
                name
                username
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


export default function PostPage() {
    const route = useRouter();

    const token = useSelector((state: RootState) => state.auth.token);

    const [getPost, { data, loading, error }] = useLazyQuery(GET_POST, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    });

    useEffect(() => {
        if (route.asPath.split("/")[2] !== "[post]") {
            getPost({ variables: { postId: route.asPath.split("/")[2] } });
        }
    }, [route.asPath.split("/")[2]])

    return (
        <div className="min-h-screen">
            <Layout hideNavbar={false} hideLeftSide={false}>
                <div className="w-full sm:max-w-lg flex flex-col relative gap-4 sm:mx-4 mt-8 mb-4">
                    {loading &&
                        <div className="w-full max-w-lg flex flex-col relative gap-4 sm:mx-4 mt-8 mb-4">
                            <ul className="flex flex-col gap-4 w-full ">
                                <li className='text-white/60  mx-auto text-[12px]' >Loading...</li>
                            </ul>
                        </div>
                    }
                    {data &&
                        <>
                            <Post data={data.getPost} disableCommentBtn={false} />
                            <CommentBox comments={data.getPost.comments} postId={data.getPost.id} />
                        </>
                    }
                    {
                        error && <ul className="flex flex-col gap-4 w-full ">
                            <li className='text-white/60  mx-auto text-[12px]' >Error fetching post.</li>
                        </ul>
                    }
                </div>
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

const ADD_COMMENT = gql`
    mutation CommentPost($postId: ID!, $commentBody: String!) {
        commentPost(postId: $postId, commentBody: $commentBody) {
            id
            comments {
                username
                name
                body
                timestamp
                img_url
            }
            body
            images
            author {
                username
                name
                img_url
            }
            timestamp
            likes {
                timestamp
                name
                username
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

function CommentBox({ comments, postId }: { comments: any, postId: string }) {

    const [commentsData, setCommentsData] = useState(comments);
    const commentField = useRef<HTMLInputElement>(null);
    const [commentBody, setCommentBody] = useState("");
    const token = useSelector((state: RootState) => state.auth.token);
    const [commentPost, { data, loading, error }] = useMutation(ADD_COMMENT, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    })

    useEffect(() => {
        if (data) {
            // console.log('comments:', data);
            
            setCommentsData(data.commentPost.comments);
        }

    }, [data])

    const handleComment = () => {
        if (commentBody !== "") {
            commentPost({ variables: { postId, commentBody } })
            setCommentBody("");
            if (commentField.current) {
                commentField.current.value = "";
            }
        }
    }

    const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleComment();
        }
    }
    console.log('commentsData:', commentsData);

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <div className="flex px-4 w-full items-center justify-evenly">
                <input ref={commentField} onKeyDown={handleKeyPress} onChange={(e) => setCommentBody(e.target.value)} className="text-white/80 text-sm min-w-[80%] outline-none grow px-4 py-2 rounded-[12px] bg-[#212427]" type="text" placeholder="Comment" />
                <button className=" min-w-[10%] flex justify-center" onClick={handleComment}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.43929 12.0465H10.8393M9.50929 4.27652L18.0693 8.55652C21.9093 10.4765 21.9093 13.6165 18.0693 15.5365L9.50929 19.8165C3.74929 22.6965 1.39929 20.3365 4.27929 14.5865L5.14929 12.8565C5.36929 12.4165 5.36929 11.6865 5.14929 11.2465L4.27929 9.50652C1.39929 3.75652 3.75929 1.39652 9.50929 4.27652Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {
                commentsData.length > 0 ?
                    [].concat(commentsData).sort((a: any, b: any) => {
                        return Date.parse(b.timestamp) - Date.parse(a.timestamp);
                    })
                        .map((comment: any) => (
                            <CommentDiv comment={comment} key={uuid()} />
                        ))

                    :

                    <div className="w-full max-w-lg flex flex-col relative gap-4 sm:mx-4 mt-8 mb-4">
                        <ul className="flex flex-col gap-4 w-full ">
                            <li className='text-white/60  mx-auto text-[12px]' >No comments yet.</li>
                        </ul>
                    </div>
            }
        </div>
    );
}

function CommentDiv({ comment }: { comment: any }) {

    const [commentData, setCommentData] = useState(comment);
    const userData = useSelector((state: RootState) => state.user);

    const isCommentLiked = () => {
        if (commentData.likes?.length > 0) {
            if (commentData.likes.find((like: any) => like.username === userData.username)) {
                return true;
            }
            return false;
        }
        return false;
    }

    const getAvatarUrl = () => {
        if (comment.img_url !== '' && comment.img_url) {
            return comment.img_url;
        }
        return '/avatar_null.png';
    }

    return (
        <div className="w-full border border-[#212427] px-4 py-4 sm:rounded-[12px] gap-4 flex flex-col ">
            <div className="flex items-center gap-4 w-full">
                <img className=' w-9 h-9 object-cover rounded-full' src={getAvatarUrl()} alt="Profile Photo" />
                <div className="flex flex-col grow">
                    <h4 className='font-medium text-xs text-white/60' >{comment.name}</h4>
                    <p className='font-medium text-xs text-white/30'>@{comment.username}</p>
                </div>
                <p className='font-medium text-xs self-start text-white/30'>{moment(comment.timestamp).fromNow()}</p>
            </div>

            <div className="flex gap-4 w-full">
                <div className="flex flex-col self-end gap-1 w-9 h-9 items-center justify-center">
                    {
                        isCommentLiked() ?
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3988 17.9009C11.1155 18.0009 10.6488 18.0009 10.3655 17.9009C7.94883 17.0759 2.54883 13.6342 2.54883 7.80091C2.54883 5.22591 4.62383 3.14258 7.18216 3.14258C8.69883 3.14258 10.0405 3.87591 10.8822 5.00925C11.3103 4.43081 11.868 3.96068 12.5105 3.63653C13.153 3.31238 13.8625 3.14321 14.5822 3.14258C17.1405 3.14258 19.2155 5.22591 19.2155 7.80091C19.2155 13.6342 13.8155 17.0759 11.3988 17.9009Z" fill="#C40054" stroke="#C40054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        :
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3988 17.9009C11.1155 18.0009 10.6488 18.0009 10.3655 17.9009C7.94883 17.0759 2.54883 13.6342 2.54883 7.80091C2.54883 5.22591 4.62383 3.14258 7.18216 3.14258C8.69883 3.14258 10.0405 3.87591 10.8822 5.00925C11.3103 4.43081 11.868 3.96068 12.5105 3.63653C13.153 3.31238 13.8625 3.14321 14.5822 3.14258C17.1405 3.14258 19.2155 5.22591 19.2155 7.80091C19.2155 13.6342 13.8155 17.0759 11.3988 17.9009Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    <span className='text-[10px] text-white/30 w-full text-center'>{comment?.likes?.length > 0 ? comment?.likes?.length : '' }</span>
                </div>
                <p className="w-full text-white/80 text-sm">
                    {comment.body}
                </p>
            </div>

        </div>
    );
}
