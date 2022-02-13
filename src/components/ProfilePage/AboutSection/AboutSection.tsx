import { useRouter } from 'next/router';
import {memo} from 'react';


function AboutSection({data} : {data: any}) {
    const router = useRouter();
    
    const goToFollowPage = () => {
        router.push('/profile/follow'); // go to follow page
    }

    return (
        <div className="flex flex-col px-8 py-7 border border-[#212427] sm:rounded-b-[12px]">
            <div className="flex items-center justify-between mt-8">
                <div className="gap-2">
                    <h3 className="text-sm font-semibold mb-1 text-white/80">{data?.name}</h3>
                    <p className="text-xs mb-1 text-white/60">@{data?.username}</p>
                </div>

                <div className="flex items-center gap-8">
                    <div className="cursor-default flex flex-col items-end font-semibold text-[#6a6a6a] ">
                        <span className='uppercase text-[10px]'>following</span>
                        <h5 className='text-sm text-white/60'>{data?.following?.length}</h5>
                    </div>

                    <div className="cursor-default flex flex-col items-end font-semibold text-[#6a6a6a] ">
                        <span className='uppercase text-[10px]'>followers</span>
                        <h5 className='text-sm text-white/60'>{data?.followers?.length}</h5>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <p className='w-full max-w-full text-sm text-[#6a6a6a] font-medium py-2'>
                    {data?.bio}
                </p>
            </div>
        </div>
    )
}

export default memo(AboutSection);