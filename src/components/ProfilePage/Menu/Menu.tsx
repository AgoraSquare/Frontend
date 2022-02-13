import { Button } from '@material-ui/core';
import { Dispatch, SetStateAction } from 'react';
import styles from './Menu.module.scss';

export default function Menu({ currentOption, setCurrentOption }: { currentOption: number, setCurrentOption: Dispatch<SetStateAction<number>> }) {
    console.log("Menu Rendered");
    return (
        <div className='flex sticky -top-[0.1px] items-center w-full bg-[#0a0a0a] max-w-full sm:max-w-lg py-2 z-10'>
            <ul className="flex items-center sm:gap-4 max-w-lg w-full justify-between bg-[#0A0A0A] py-2 px-2 sm:rounded-[12px] border border-[#212427]">
                <li>
                    <button
                        className={`text-[#6a6a6a] ${currentOption === 0 && 'bg-[#212427] text-white/60'}  text-xs font-semibold px-3 py-2 rounded-[8px]`}
                        onClick={() => setCurrentOption(0)}
                    >Posts</button>
                </li>
                <li>
                    <button
                        className={`text-[#6a6a6a] ${currentOption === 1 && 'bg-[#212427] text-white/60'}  text-xs font-semibold px-3 py-2 rounded-[8px]`}
                        onClick={() => setCurrentOption(1)}
                    >Collectibles</button>
                </li>
                <li className='hidden sm:block'>
                    <button
                        className={`text-[#6a6a6a] ${currentOption === 2 && 'bg-[#212427] text-white/60'}  text-xs font-semibold px-3 py-2 rounded-[8px]`}
                        onClick={() => setCurrentOption(2)}
                    >Communities</button>
                </li>
                <li>
                    <button
                        className={`text-[#6a6a6a] ${currentOption === 3 && 'bg-[#212427] text-white/60'}  text-xs font-semibold px-3 py-2 rounded-[8px]`}
                        onClick={() => setCurrentOption(3)}
                    >Activities</button>
                </li>
            </ul>
        </div>
    )
}
