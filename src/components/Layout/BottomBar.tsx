import Link from "next/link";
import { useRouter } from "next/router";

const BottomBar = () => {
    const route = useRouter();
    return (
        <div className="w-full h-16 border-t bg-[#0a0a0a] border-[#212427] sticky bottom-0 sm:hidden flex flex-col items-center justify-evenly">
                <ul className="flex gap-2 self-center w-full justify-evenly">
                    <Link href="/feed">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <linearGradient id="a1">
                                        <stop offset="0" stopColor="#84B9D1" />
                                        <stop offset="1" stopColor="#D2B4FC" />
                                    </linearGradient>
                                </defs>
                                <path d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3"
                                    stroke={` ${route.pathname === '/feed' ? 'url(#a1)' : '#6a6a6a'}  `}
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </li>
                    </Link>
                    {/* Search */}
                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3327 18.3337L16.666 16.667M9.58268 17.5003C10.6223 17.5003 11.6518 17.2956 12.6123 16.8977C13.5728 16.4999 14.4455 15.9167 15.1806 15.1816C15.9157 14.4465 16.4989 13.5737 16.8967 12.6132C17.2946 11.6527 17.4993 10.6233 17.4993 9.58366C17.4993 8.54403 17.2946 7.51458 16.8967 6.55408C16.4989 5.59359 15.9157 4.72086 15.1806 3.98573C14.4455 3.2506 13.5728 2.66746 12.6123 2.26961C11.6518 1.87176 10.6223 1.66699 9.58268 1.66699C7.48305 1.66699 5.46942 2.50107 3.98475 3.98573C2.50009 5.47039 1.66602 7.48403 1.66602 9.58366C1.66602 11.6833 2.50009 13.6969 3.98475 15.1816C5.46942 16.6663 7.48305 17.5003 9.58268 17.5003V17.5003Z" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                    <Link href="/messages">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <linearGradient id="a1">
                                        <stop offset="0" stopColor="#84B9D1" />
                                        <stop offset="1" stopColor="#D2B4FC" />
                                    </linearGradient>
                                </defs>
                                <path d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                                    stroke={` ${route.pathname === '/messages' ? 'url(#a1)' : '#6a6a6a'}  `}
                                    strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M15.996 11h.01M11.995 11h.01M7.995 11h.008" stroke={` ${route.pathname === '/messages' ? 'url(#a)' : '#6a6a6a'}  `}
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </li>
                    </Link>
                    <Link href="/groups">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <linearGradient id="a1">
                                        <stop offset="0" stopColor="#84B9D1" />
                                        <stop offset="1" stopColor="#D2B4FC" />
                                    </linearGradient>
                                </defs>
                                <path d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
                                    stroke={` ${route.pathname === '/groups' ? 'url(#a1)' : '#6a6a6a'}  `}
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </li>
                    </Link>
                    <Link href="/discourses">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <linearGradient id="a1">
                                        <stop offset="0" stopColor="#84B9D1" />
                                        <stop offset="1" stopColor="#D2B4FC" />
                                    </linearGradient>
                                </defs>
                                <path d="M22 6.25v5.1c0 1.27-.42 2.34-1.17 3.08-.74.75-1.81 1.17-3.08 1.17v1.81c0 .68-.76 1.09-1.32.71l-.97-.64c.09-.31.13-.65.13-1.01V12.4c0-2.04-1.36-3.4-3.4-3.4H5.4c-.14 0-.27.01-.4.02V6.25C5 3.7 6.7 2 9.25 2h8.5C20.3 2 22 3.7 22 6.25Z"
                                    stroke={` ${route.pathname === '/discourses' ? 'url(#a1)' : '#6a6a6a'}  `} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.59 12.4v4.07c0 .36-.04.7-.13 1.01-.37 1.47-1.59 2.39-3.27 2.39H9.47l-3.02 2.01a.671.671 0 0 1-1.05-.56v-1.45c-1.02 0-1.87-.34-2.46-.93-.6-.6-.94-1.45-.94-2.47V12.4c0-1.9 1.18-3.21 3-3.38.13-.01.26-.02.4-.02h6.79c2.04 0 3.4 1.36 3.4 3.4Z"
                                        stroke={` ${route.pathname === '/discourses' ? 'url(#a1)' : '#6a6a6a'}  `}
                                        strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </li>
                    </Link>
                </ul>
            </div>
    );
}

export default BottomBar;