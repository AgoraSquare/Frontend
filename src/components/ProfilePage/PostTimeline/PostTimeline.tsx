import { v4 as uuid } from 'uuid';
import Post from './Post/Post';
import styles from './PostTimeline.module.scss';

export default function PostTimeline() {
    console.log("PostTimeline Rendered");
    return (
        <div className={styles.timeline}>
            {Array(10).fill(0).map((_) => (
                <Post key={uuid()} />
            ))}
        </div>
    )
}
