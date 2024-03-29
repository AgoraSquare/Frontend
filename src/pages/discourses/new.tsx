import Layout from "../../components/Layout/Layout";
import ProfileCardSection from "../../components/RightSideSection/ProfileCardSection";
import { useState } from "react";
import { useRouter } from "next/router";

const New = () => {
    
    const [topicCount, setTopicCount] = useState(3);
    const route = useRouter();

    const handleBack = () => {
        route.push("/discourses");
    }

    return (
        <div className="min-h-screen">
            <Layout hideNavbar={false} hideLeftSide={false}>
                {/* <GroupsSection /> */}
                <div className="w-full sm:max-w-[40rem] flex flex-col relative gap-4 mx-4 mt-8 mb-4">
                    <nav className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <button onClick={handleBack} className="p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <p className="text-white/70 text-[12px]">Back to Discussion</p>
                        </div>

                        <button className=" w-max px-4 py-2 rounded-lg text-white/60 text-sm border border-[#212427]">Discard</button>
                    </nav>

                    <div className="flex flex-col gap-2">
                        <p className=" text-[#ffffff]/70 text-[10px] font-semibold">Invite speakers for discussion</p>

                        <div className="w-full flex items-center relative justify-between gap-4 py-2">
                            <div className="w-full flex gap-2 flex-1 border border-[#212427] rounded-xl py-2 px-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 14.252V16.342C13.0949 16.022 12.1263 15.9239 11.1754 16.0558C10.2245 16.1877 9.3192 16.5459 8.53543 17.1002C7.75166 17.6545 7.11234 18.3888 6.67116 19.2414C6.22998 20.094 5.99982 21.04 6 22L4 21.999C3.99969 20.7779 4.27892 19.5729 4.8163 18.4764C5.35368 17.3799 6.13494 16.4209 7.10022 15.673C8.0655 14.9251 9.18918 14.4081 10.3852 14.1616C11.5811 13.9152 12.8177 13.9457 14 14.251V14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z" fill="#6A6A6A" />
                                </svg>

                                <input className="grow bg-[#0a0a0a] outline-none border-none text-white/80 text-xs font-medium" type="text" placeholder="Speaker " />
                            </div>
                            <div className="absolute inset-x-0 w-max mx-auto">
                                <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8C0 3.58172 3.58172 0 8 0L27.2 0C31.6183 0 35.2 3.58172 35.2 8C35.2 12.4183 31.6183 16 27.2 16L8 16C3.58172 16 0 12.4183 0 8Z" fill="#212221" />
                                    <path d="M17.3568 4.31383L14.4512 11.2002H12.3904L9.49756 4.31383H11.5584L13.4656 8.99863L15.4368 4.31383H17.3568Z" fill="url(#paint0_linear_14_5)" />
                                    <path d="M21.0284 11.3026C20.4566 11.3026 19.8977 11.2344 19.3516 11.0978C18.8054 10.9528 18.3702 10.7736 18.046 10.5602L18.7116 9.12663C19.0188 9.32289 19.39 9.48503 19.8252 9.61303C20.2604 9.73249 20.687 9.79223 21.1052 9.79223C21.95 9.79223 22.3724 9.58316 22.3724 9.16503C22.3724 8.96876 22.2572 8.82796 22.0268 8.74263C21.7964 8.65729 21.4422 8.58476 20.9644 8.52503C20.4012 8.43969 19.9361 8.34156 19.5692 8.23063C19.2022 8.11969 18.8822 7.92343 18.6092 7.64183C18.3446 7.36023 18.2124 6.95916 18.2124 6.43863C18.2124 6.00343 18.3361 5.61943 18.5836 5.28663C18.8396 4.94529 19.2065 4.68076 19.6844 4.49303C20.1708 4.30529 20.7425 4.21143 21.3996 4.21143C21.886 4.21143 22.3681 4.26689 22.846 4.37783C23.3324 4.48023 23.7334 4.62529 24.0492 4.81303L23.3836 6.23383C22.7777 5.89249 22.1164 5.72183 21.3996 5.72183C20.9729 5.72183 20.6529 5.78156 20.4396 5.90103C20.2262 6.02049 20.1196 6.17409 20.1196 6.36183C20.1196 6.57516 20.2348 6.72449 20.4652 6.80983C20.6956 6.89516 21.0625 6.97623 21.566 7.05303C22.1292 7.14689 22.59 7.24929 22.9484 7.36023C23.3068 7.46263 23.6182 7.65463 23.8828 7.93623C24.1473 8.21783 24.2796 8.61036 24.2796 9.11383C24.2796 9.54049 24.1516 9.92023 23.8956 10.253C23.6396 10.5858 23.2641 10.8461 22.7692 11.0338C22.2828 11.213 21.7025 11.3026 21.0284 11.3026Z" fill="url(#paint1_linear_14_5)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_14_5" x1="9.49756" y1="5.8923" x2="23.9414" y2="10.2631" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#84B9D1" />
                                            <stop offset="1" stopColor="#D2B4FC" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_14_5" x1="9.49756" y1="5.8923" x2="23.9414" y2="10.2631" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#84B9D1" />
                                            <stop offset="1" stopColor="#D2B4FC" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            <div className="w-full flex gap-2 flex-1 border border-[#212427] rounded-xl py-2 px-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 14.252V16.342C13.0949 16.022 12.1263 15.9239 11.1754 16.0558C10.2245 16.1877 9.3192 16.5459 8.53543 17.1002C7.75166 17.6545 7.11234 18.3888 6.67116 19.2414C6.22998 20.094 5.99982 21.04 6 22L4 21.999C3.99969 20.7779 4.27892 19.5729 4.8163 18.4764C5.35368 17.3799 6.13494 16.4209 7.10022 15.673C8.0655 14.9251 9.18918 14.4081 10.3852 14.1616C11.5811 13.9152 12.8177 13.9457 14 14.251V14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z" fill="#6A6A6A" />
                                </svg>

                                <input className="grow bg-[#0a0a0a] outline-none border-none text-white/80 text-xs font-medium" type="text" placeholder="Speaker " />
                            </div>
                        </div>

                        <p className=" text-[#ffffff]/60 text-[10px] font-medium mt-6">What would the topic be?</p>
                        <input className="px-4 py-3 border text-white/70 border-[#212427] max-w-[60%] rounded-xl text-xs bg-[#0a0a0a]" type="text" placeholder="Topic" />

                        <p className=" text-[#ffffff]/60 text-[10px] font-medium mt-6">To keep the conversation active, please enter <b>atleast 3 sub-topics</b></p>

                        <div className="flex flex-col max-w-[60%] gap-2">
                            {
                                Array.from({length: topicCount}).map((_, index) => {

                                    return <input key={index} className="px-4 py-3 border border-[#212427] rounded-xl text-white/80 text-xs bg-[#0a0a0a]" type="text" placeholder="---" />
                                })
                            }
                            <button onClick={() => setTopicCount(prev => prev + 1)} className="self-end bg-[#212427] w-max px-4 py-2 rounded-lg text-white/60 text-sm border border-[#212427] flex items-center gap-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5.16675V0.166748H6.66667V5.16675H11.6667V6.83342H6.66667V11.8334H5V6.83342H0V5.16675H5Z" fill="#C6C6C6" />
                                </svg>
                                Add More
                            </button>
                        </div>

                        <button className="flex justify-center self-end items-center pl-[1.4px] pr-[1.6px] pb-[1.4px] pt-[1.4px] button-gradient rounded-[12px]">
                            <div className="bg-[#0a0a0a] text-[#c6c6c6] text-sm pl-4 pr-4 py-2 rounded-[10px] m-auto flex items-center gap-2">
                                Continue
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.7125 4.773L0 1.0605L1.0605 0L5.8335 4.773L1.0605 9.546L0 8.4855L3.7125 4.773Z" fill="#C6C6C6" />
                                </svg>

                            </div>
                        </button>

                    </div>


                </div>
                <div className="hidden 2lg:flex flex-col gap-x-4 w-full h-screen max-w-xs mx-auto ml-4 sticky gap-y-10 top-0 pb-10 gap-2">
                    <ProfileCardSection />

                </div>
            </Layout>
        </div>
    );
}

export default New;