import { v4 as uuid } from 'uuid';
import styles from './SuggestedGroups.module.scss';

export default function SuggestedGroups() {
    return (
        <div className="flex flex-col w-full max-w-xs bg-[#212427] rounded-[12px] p-6 gap-5">
            <header className='font-medium text-white text-base'>Suggested Groups</header>

            <ul className="flex flex-col gap-5">
                {Array(3).fill(0).map(() => (
                    <li className="flex items-center gap-4" key={uuid()}>
                        <img className=' w-10 h-10 object-cover rounded-[10px]' src="/groupCard_img_2.jpg" alt="profile pic" width={25} height={25} />

                        <div className="flex-1 flex flex-col ">
                            <h5 className=' font-semibold text-sm text-white'>Miami</h5>
                            <small className='text-white/60'>Government</small>
                        </div>

                        <div className="flex flex-col text-white/30 items-end">
                            <strong className='text-sm'>2.3K</strong>
                            <small className='text-xs'>members</small>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
