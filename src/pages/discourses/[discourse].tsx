import Layout from "../../components/Layout/Layout";
import ProfileCardSection from "../../components/RightSideSection/ProfileCardSection";
import { useRouter } from "next/router";

const Discourse = () => {

    const router = useRouter();

    const handleQuit = () => {
        router.push("/discourses");
    }

    return (
        <div className="min-h-screen">
            <Layout hideNavbar={false} hideLeftSide={false}>
                {/* <GroupsSection /> */}
                <div className="w-full sm:max-w-[40rem] flex flex-col relative gap-4 mx-4 mt-8 mb-4">
                    <nav className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative flex items-center">
                                <div className="w-12 aspect-square border-[4px] border-[#0a0a0a] button-gradient rounded-2xl overflow-hidden">
                                    <img className="w-full h-full object-cover object-center" src="/demo-d1.png" alt="" />
                                </div>
                                <div className="w-4" />
                                <div className="w-12 aspect-square border-[4px] border-[#0a0a0a] button-gradient rounded-2xl absolute left-[35%] overflow-hidden">
                                    <img className="w-full h-full object-cover object-center" src="/demo-d2.png" alt="" />
                                </div>

                            </div>
                            <h3 className="text-white font-semibold text-base max-w-[60%]">How do you delete a post on AgoraSquare?</h3>
                        </div>

                        {!router.asPath.includes("speaker") &&

                            <button onClick={handleQuit} className="border flex-1 min-w-max hover:bg-[#212427]/60  border-[#212427] rounded-xl flex items-center gap-2 px-3 py-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5834 13.6998C12.3251 16.6998 10.7834 17.9248 7.40841 17.9248L7.30008 17.9248C3.57508 17.9248 2.08342 16.4331 2.08342 12.7081L2.08342 7.2748C2.08342 3.5498 3.57508 2.05814 7.30008 2.05814L7.40842 2.05814C10.7584 2.05814 12.3001 3.26647 12.5751 6.21647M7.50008 9.9998L16.9834 9.99981M15.1251 12.7915L17.9167 9.99981L15.1251 7.20814" stroke="#FC8181" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="uppercase text-[#FC8181] text-xs font-semibold">Exit quitely</p>
                            </button>
                        }

                    </nav>

                    {/* Agenda */}


                    {router.asPath.includes("ongoing") && <AgendaSectionLive />}

                    {/* Schedule */}

                    {/* {
                        router.asPath.includes("upcoming") &&
                        <ScheduleSection />
                    } */}
                    {
                        router.asPath.includes("planned") &&
                        <EarlyView />
                    }


                    {/* Contribute */}

                    {
                        router.asPath.includes("upcoming") && !router.asPath.includes("ongoing") &&
                        <ContributeSection />
                    }

                </div>
                <div className="hidden 2lg:flex flex-col gap-x-4 w-full h-screen max-w-xs mx-auto ml-4 sticky gap-y-4 top-0 pb-10 ">
                    <ProfileCardSection />
                    {
                        !router.asPath.includes("upcoming") && router.asPath.includes("ongoing") &&
                        <ChatSection />
                    }
                </div>
            </Layout>
        </div>
    );
}

const AgendaSectionLive = () => {
    return (
        <div className=" px-4 py-4 w-full flex flex-col gap-4 border border-[#212427] rounded-2xl">
            <div className="flex items-center justify-between gap-4 min-h-[30vh] w-full">
                <div className="button-gradient rounded-2xl flex-1 w-full h-full relative">
                    <img className="w-full h-full object-cover object-center" src="/demo-d1.png" alt="" />
                    <p className="text-white/70 text-xs px-4 py-1 rounded-xl bg-[#212427] absolute bottom-2 mx-auto inset-x-0 w-max">Joe M</p>
                </div>
                <div className="button-gradient rounded-2xl flex-1 w-full h-full relative">
                    <img className="w-full h-full object-cover object-center" src="/demo-d2.png" alt="" />
                    <p className="text-white/70 text-xs px-4 py-1 rounded-xl bg-[#212427] absolute bottom-2 mx-auto inset-x-0 w-max">Joe M</p>
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <button className="rounded-[10px] button-gradient flex items-center px-4 py-2 gap-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1251 12.4998H6.87508M7.50008 18.3332H12.5001C16.6667 18.3332 18.3334 16.6665 18.3334 12.4998V7.49984C18.3334 3.33317 16.6667 1.6665 12.5001 1.6665H7.50008C3.33341 1.6665 1.66675 3.33317 1.66675 7.49984V12.4998C1.66675 16.6665 3.33341 18.3332 7.50008 18.3332ZM13.1251 7.49984H6.87508H13.1251Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className="text-xs text-[#ffffff] font-semibold">Agenda</p>

                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.38012 5.19727L6.18345 9.0006C6.63262 9.44977 7.36762 9.44977 7.81678 9.0006L11.6201 5.19727" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button className="p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1202 9.12035C18.7302 9.12035 18.4202 9.43035 18.4202 9.82035V11.4004C18.4202 14.9404 15.5402 17.8204 12.0002 17.8204C8.46018 17.8204 5.58018 14.9404 5.58018 11.4004V9.81035C5.58018 9.42035 5.27018 9.11035 4.88018 9.11035C4.49018 9.11035 4.18018 9.42035 4.18018 9.81035V11.3904C4.18018 15.4604 7.31018 18.8104 11.3002 19.1704V21.3004C11.3002 21.6904 11.6102 22.0004 12.0002 22.0004C12.3902 22.0004 12.7002 21.6904 12.7002 21.3004V19.1704C16.6802 18.8204 19.8202 15.4604 19.8202 11.3904V9.81035C19.8158 9.62701 19.7403 9.45255 19.6097 9.32381C19.4791 9.19507 19.3036 9.12211 19.1202 9.12035Z" fill="#6A6A6A"/>
<path d="M11.9981 2C9.55813 2 7.57812 3.98 7.57812 6.42V11.54C7.57812 13.98 9.55813 15.96 11.9981 15.96C14.4381 15.96 16.4181 13.98 16.4181 11.54V6.42C16.4181 3.98 14.4381 2 11.9981 2ZM13.3081 8.95C13.2381 9.21 13.0081 9.38 12.7481 9.38C12.6981 9.38 12.6481 9.37 12.5981 9.36C12.2081 9.25 11.7981 9.25 11.4081 9.36C11.0881 9.45 10.7781 9.26 10.6981 8.95C10.6081 8.64 10.7981 8.32 11.1081 8.24C11.6981 8.08 12.3181 8.08 12.9081 8.24C13.2081 8.32 13.3881 8.64 13.3081 8.95ZM13.8381 7.01C13.7969 7.12235 13.7218 7.21918 13.6234 7.28721C13.5249 7.35524 13.4078 7.39115 13.2881 7.39C13.2181 7.39 13.1581 7.38 13.0881 7.36C12.3881 7.1 11.6081 7.1 10.9081 7.36C10.7622 7.41174 10.6018 7.40404 10.4615 7.33857C10.3212 7.27309 10.2122 7.15508 10.1581 7.01C10.0481 6.71 10.2081 6.37 10.5081 6.27C11.4706 5.92 12.5256 5.92 13.4881 6.27C13.7881 6.38 13.9481 6.71 13.8381 7.01Z" fill="#6A6A6A"/>
</svg>

                </button>

            </div>
        </div>
    )
}

const EarlyView = () => {
    return (
        <div className="flex flex-col items-center justify-between px-4 py-2 w-full mt-20">
            <p className="text-sm font-semibold text-white/75">Happening on</p>
            <p className="text-sm font-semibold text-gradient">Jan 28 &apos;22 | 13:00 EST</p>
        </div>
    )
}

const AgendaSection = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 w-full">
            <button className="rounded-[10px] button-gradient flex items-center px-4 py-2 gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1251 12.4998H6.87508M7.50008 18.3332H12.5001C16.6667 18.3332 18.3334 16.6665 18.3334 12.4998V7.49984C18.3334 3.33317 16.6667 1.6665 12.5001 1.6665H7.50008C3.33341 1.6665 1.66675 3.33317 1.66675 7.49984V12.4998C1.66675 16.6665 3.33341 18.3332 7.50008 18.3332ZM13.1251 7.49984H6.87508H13.1251Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className="text-xs text-[#ffffff] font-semibold">Agenda</p>

                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.38012 5.19727L6.18345 9.0006C6.63262 9.44977 7.36762 9.44977 7.81678 9.0006L11.6201 5.19727" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

const ScheduleSection = () => {
    return (
        <div className="w-full flex flex-col gap-4 px-4 py-4">
            <div className="flex items-center justify-between">
                <p className="text-white/70 text-base">Hey! <span className="text-gradient font-semibold">@username</span></p>
                <p className="uppercase text-[#797979] text-[10px] font-semibold">14 Days left</p>
            </div>
            <div className="flex w-full flex-col gap-2">
                <p className="uppercase text-[#797979] text-[10px] font-semibold">discourse schedule</p>
                <div className="w-full flex items-center justify-between">
                    <p className=" font-semibold text-xl text-white/30 uppercase">12 March 2022 | 10:00 AM</p>
                    <div className="flex items-center gap-2 min-w-[40%]">
                        <button className="min-w-[50%] w-max px-2 py-2 rounded-lg text-white text-sm border border-[#212427]">Reschedule</button>
                        <button className="min-w-[50%] w-max px-2 py-2 rounded-lg text-white text-sm button-gradient">Accept</button>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className=" font-semibold text-xl text-white/30 uppercase">12 March 2022 | 10:00 AM</p>
                    <div className="flex items-center gap-2 min-w-[40%]">
                        <button className="min-w-[50%] w-max px-2 py-2 rounded-lg text-white text-sm border border-[#212427]">Reschedule</button>
                        <button className="min-w-[50%] w-max px-2 py-2 rounded-lg text-white text-sm button-gradient">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContributeSection = () => {
    return (
        <div className="w-full mt-6 rounded-xl flex flex-col gap-4 px-4 py-4 border-[2px] border-[#212427]">
            <div className="flex items-center justify-between">
                <p className="text-white/70 text-sm">Contribute to discussion</p>
                <p className="uppercase text-[#797979] text-[10px] font-semibold">24 Days left</p>
            </div>

            <div className="flex items-end justify-between">
                <div className="flex flex-col">
                    <p className="uppercase text-[#797979] text-[10px] font-semibold">Total raised</p>
                    <p className="text-white font-semibold text-2xl">$30,000</p>
                </div>

                <button className="flex items-center px-3 py-2 button-gradient rounded-xl gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66666 9.50001C6.66666 10.1417 7.16666 10.6667 7.77499 10.6667H9.02499C9.55832 10.6667 9.99166 10.2083 9.99166 9.65001C9.99166 9.04168 9.72499 8.82501 9.33332 8.68334L7.33332 7.98334C6.93332 7.84168 6.66666 7.62501 6.66666 7.01668C6.66666 6.45834 7.09999 6.00001 7.63332 6.00001H8.88332C9.49999 6.00834 9.99999 6.52501 9.99999 7.16668M8.33332 10.7083V11.325M8.33332 5.34167V5.99168" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.8167 16.5667C11.5667 17.625 12.7917 18.3167 14.1917 18.3167C16.4667 18.3167 18.3167 16.4667 18.3167 14.1917C18.3167 12.8084 17.6333 11.5834 16.5917 10.8334M8.32499 14.9834C10.0909 14.9834 11.7845 14.2819 13.0331 13.0332C14.2818 11.7845 14.9833 10.0909 14.9833 8.32502C14.9833 6.55912 14.2818 4.86555 13.0331 3.61687C11.7845 2.36819 10.0909 1.66669 8.32499 1.66669C6.55909 1.66669 4.86552 2.36819 3.61684 3.61687C2.36816 4.86555 1.66666 6.55912 1.66666 8.32502C1.66666 10.0909 2.36816 11.7845 3.61684 13.0332C4.86552 14.2819 6.55909 14.9834 8.32499 14.9834V14.9834Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className="text-xs text-[#0a0a0a]/80 font-semibold">Fund Discourse</p>
                </button>

            </div>
        </div>
    )
}

const chatData = [
    
    {
        username: '@jones23441',
        message: 'Hello! How are you guys doin?'
    },
    {
        username: '@richardJ',
        message: 'Hey!',
    },
    {
        username: '@mike54.eth',
        message: 'I am doing great!'
    },
    {
        username: '@jones23441',
        message: 'We should do a meetup sometime'
    },
    {
        username: '@mike54.eth',
        message: 'Sure! I will be there!'
    }
]

const ChatSection = () => {
    return (
        <div className="w-full border border-[#212427] rounded-xl px-2 py-2 grow flex flex-col justify-between ">
            <div className="grow w-full flex flex-col gap-2 px-2 pt-2">
                {chatData.map( (data, i) =>

                    <div key={i} className="flex w-full gap-2">
                        <div className="w-6 h-6 mt-2 aspect-square button-gradient rounded-lg"></div>
                        <div className="flex flex-col">
                            <p className="text-[10px] text-white/30 font-medium" >{data.username}</p>
                            <p className="text-[12px] text-white/70 font-medium" >{data.message}</p>
                        </div>
                    </div>

                )}
            </div>
            <div className="w-full h-max flex items-center justify-between gap-2">
                <input type="text" className="bg-[#0a0a0a] text-sm grow py-2 px-3 text-white/80 border border-[#212427] rounded-lg" placeholder="Type" />
                <button className="p-2 w-max rounded-lg bg-[#212427]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="m9.51 4.23 8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23ZM5.44 12h5.4" stroke="#6a6a6a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Discourse;