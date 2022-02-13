import styles from './ProfilesYouMayLike.module.scss';
import {v4 as uuid } from 'uuid';

export default function ProfilesYouMayLike() {
    return (
        <div className="flex flex-col w-full max-w-xs bg-[#212427] rounded-[12px] p-6 gap-5">
            <h4 className=" font-medium text-white text-base">People you may like</h4>

            <ul className="flex flex-col gap-5">
                {Array(3).fill(0).map(() => (
                    <li key={uuid()} className='flex items-center' >
                        <div className="flex items-center gap-2 flex-1">
                            <img  src="/tp_4.jpg" alt="" width={40} height={40} className=" w-10 h-10 object-cover rounded-full" />
                            <div className="flex flex-col ml-2">
                                <h5 className='text-white font-medium'>Sarah</h5>
                                <small className='text-white/60 text-xs'>@iamSarah</small>
                            </div>
                        </div>

                        <span className="cursor-pointer text-gradient text-sm font-bold">FOLLOW</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}