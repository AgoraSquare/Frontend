import { v4 as uuid } from "uuid";
import Post from "./Post/Post";
import styles from "./PostTimeline.module.scss";
import { useQuery, gql } from "@apollo/client";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const GET_POSTS = gql`
    query GetUserPosts($username: String!) {
        getUserPosts(username: $username) {
            id
            body
            images
            author {
                img_url
                username
                name
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
`;

export default function PostTimeline({ username }: { username: string }) {
    // console.log("PostTimeline Rendered");

    const token = useSelector((state: RootState) => state.auth.token);

    const { data, loading, error } = useQuery(GET_POSTS, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            },
        },
        variables: {
            username: username
        }
    });

    // console.log(data, error, loading);

    if (loading) return (
        <ul className="w-full max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
            <li className='text-white/60  mx-auto text-[12px]' >Loading...</li>
        </ul>
    );
    if (error) return (
        <ul className="w-full max-w-lg flex flex-col relative gap-4 mx-auto sm:mx-4 mt-8 mb-4">
            <li className='text-white/60  mx-auto text-[12px]' >Error fetching profile.</li>
        </ul>
    );

    return (
        <div className={styles.timeline}>
            {[]
                .concat(data.getUserPosts)
                // .filter((post: any) => post.author?.username === userData.username)
                .sort((a: any, b: any) => {
                    return Date.parse(b.timestamp) - Date.parse(a.timestamp);
                })
                .map((post: Object) => (
                    <Post key={uuid()} data={post} />
                ))}
        </div>
    );
}
