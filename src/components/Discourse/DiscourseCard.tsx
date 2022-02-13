import { useRouter } from "next/router";

const DiscourseCard = ({ inactive = false, scheduled = false }) => {

    const route = useRouter();

    const handleUpcoming = () => {
        route.push('/discourses/upcoming-daer-wwqe');
    }

    const handleOngoing = () => {
        route.push('/discourses/asde-ongoing-wwqe');
    }

    const handlePlanned = () => {
        route.push('/discourses/asde-daer-planned');
    }

    return (
        <>
            {(!inactive && scheduled) && <div onClick={handleOngoing} className="w-full sm:aspect-dCard rounded-2xl justify-between button-gradient flex flex-col p-3 overflow-hidden relative gap-2">
                <img className="absolute h-[80%] bottom-0 right-0" src="/dcard-b.png" alt="" />
                <div className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.375 1.78V1C8.375 0.795 8.205 0.625 8 0.625C7.795 0.625 7.625 0.795 7.625 1V1.75H4.375V1C4.375 0.795 4.205 0.625 4 0.625C3.795 0.625 3.625 0.795 3.625 1V1.78C2.275 1.905 1.62 2.71 1.52 3.905C1.51 4.05 1.63 4.17 1.77 4.17H10.23C10.375 4.17 10.495 4.045 10.48 3.905C10.38 2.71 9.725 1.905 8.375 1.78ZM10 4.92H2C1.725 4.92 1.5 5.145 1.5 5.42V8.5C1.5 10 2.25 11 4 11H8C9.75 11 10.5 10 10.5 8.5V5.42C10.5 5.145 10.275 4.92 10 4.92ZM4.605 9.105C4.555 9.15 4.5 9.185 4.44 9.21C4.38 9.235 4.315 9.25 4.25 9.25C4.185 9.25 4.12 9.235 4.06 9.21C4 9.185 3.945 9.15 3.895 9.105C3.805 9.01 3.75 8.88 3.75 8.75C3.75 8.62 3.805 8.49 3.895 8.395C3.945 8.35 4 8.315 4.06 8.29C4.18173 8.23999 4.31827 8.23999 4.44 8.29C4.5 8.315 4.555 8.35 4.605 8.395C4.695 8.49 4.75 8.62 4.75 8.75C4.75 8.88 4.695 9.01 4.605 9.105ZM4.71 7.19C4.685 7.25 4.65 7.305 4.605 7.355C4.555 7.4 4.5 7.435 4.44 7.46C4.38 7.485 4.315 7.5 4.25 7.5C4.185 7.5 4.12 7.485 4.06 7.46C4 7.435 3.945 7.4 3.895 7.355C3.85 7.305 3.815 7.25 3.79 7.19C3.76432 7.12991 3.75073 7.06535 3.75 7C3.75 6.935 3.765 6.87 3.79 6.81C3.815 6.75 3.85 6.695 3.895 6.645C3.945 6.6 4 6.565 4.06 6.54C4.18173 6.48999 4.31827 6.48999 4.44 6.54C4.5 6.565 4.555 6.6 4.605 6.645C4.65 6.695 4.685 6.75 4.71 6.81C4.735 6.87 4.75 6.935 4.75 7C4.75 7.065 4.735 7.13 4.71 7.19ZM6.355 7.355C6.305 7.4 6.25 7.435 6.19 7.46C6.13 7.485 6.065 7.5 6 7.5C5.935 7.5 5.87 7.485 5.81 7.46C5.75 7.435 5.695 7.4 5.645 7.355C5.555 7.26 5.5 7.13 5.5 7C5.5 6.87 5.555 6.74 5.645 6.645C5.695 6.6 5.75 6.565 5.81 6.54C5.93 6.485 6.07 6.485 6.19 6.54C6.25 6.565 6.305 6.6 6.355 6.645C6.445 6.74 6.5 6.87 6.5 7C6.5 7.13 6.445 7.26 6.355 7.355Z" fill="#212427" fillOpacity="0.6" />
                    </svg>
                    <p className="uppercase text-[10px] text-[#212427]/60 font-semibold tracking-widest">ongoing</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative flex items-center">
                        <div className="w-8 aspect-square border-[3px] border-[#0a0a0a] button-gradient rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="/demo-d1.png" alt="" />
                        </div>
                        <div className="w-4" />
                        <div className="w-8 aspect-square border-[3px] border-[#0a0a0a] button-gradient rounded-xl absolute left-[35%] overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="/demo-d2.png" alt="" />
                        </div>

                        <svg className="absolute bottom-0 translate-y-[50%] inset-x-0 mx-auto" width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5C0 2.23858 2.23858 0 5 0L17 0C19.7614 0 22 2.23858 22 5C22 7.76142 19.7614 10 17 10L5 10C2.23858 10 0 7.76142 0 5Z" fill="#121212" />
                            <path d="M10.848 2.69602L9.032 7.00002L7.744 7.00002L5.936 2.69602H7.224L8.416 5.62402L9.648 2.69602L10.848 2.69602Z" fill="url(#paint0_linear_125_256)" />
                            <path d="M13.1428 7.06402C12.7854 7.06402 12.4361 7.02135 12.0948 6.93602C11.7534 6.84535 11.4814 6.73335 11.2788 6.60002L11.6948 5.70402C11.8868 5.82669 12.1188 5.92802 12.3908 6.00802C12.6628 6.08269 12.9294 6.12002 13.1908 6.12002C13.7188 6.12002 13.9828 5.98935 13.9828 5.72802C13.9828 5.60535 13.9108 5.51735 13.7668 5.46402C13.6228 5.41069 13.4014 5.36535 13.1028 5.32802C12.7508 5.27469 12.4601 5.21335 12.2308 5.14402C12.0014 5.07469 11.8014 4.95202 11.6308 4.77602C11.4654 4.60002 11.3828 4.34935 11.3828 4.02402C11.3828 3.75202 11.4601 3.51202 11.6148 3.30402C11.7748 3.09069 12.0041 2.92535 12.3028 2.80802C12.6068 2.69069 12.9641 2.63202 13.3748 2.63202C13.6788 2.63202 13.9801 2.66669 14.2788 2.73602C14.5828 2.80002 14.8334 2.89069 15.0308 3.00802L14.6148 3.89602C14.2361 3.68269 13.8228 3.57602 13.3748 3.57602C13.1081 3.57602 12.9081 3.61335 12.7748 3.68802C12.6414 3.76269 12.5748 3.85869 12.5748 3.97602C12.5748 4.10935 12.6468 4.20269 12.7908 4.25602C12.9348 4.30935 13.1641 4.36002 13.4788 4.40802C13.8308 4.46669 14.1188 4.53069 14.3428 4.60002C14.5668 4.66402 14.7614 4.78402 14.9268 4.96002C15.0921 5.13602 15.1748 5.38135 15.1748 5.69602C15.1748 5.96269 15.0948 6.20002 14.9348 6.40802C14.7748 6.61602 14.5401 6.77869 14.2308 6.89602C13.9268 7.00802 13.5641 7.06402 13.1428 7.06402Z" fill="url(#paint1_linear_125_256)" />
                            <defs>
                                <linearGradient id="paint0_linear_125_256" x1="5.936" y1="3.68257" x2="14.9634" y2="6.41432" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#84B9D1" />
                                    <stop offset="1" stopColor="#D2B4FC" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_125_256" x1="5.936" y1="3.68257" x2="14.9634" y2="6.41432" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#84B9D1" />
                                    <stop offset="1" stopColor="#D2B4FC" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <div className="flex flex-col">
                        <p className="text-xs text-[#212427]/80 font-semibold">Joe M</p>
                        <p className="text-xs text-[#212427]/80 font-semibold">James D</p>
                    </div>
                </div>

                <p className="text-sm text-[#0a0a0a] font-bold w-full">Is God real ?</p>

                <div className="w-full flex items-center justify-between ">
                    <button className="flex items-center px-3 py-2 bg-[#0a0a0a] rounded-xl gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 6.87498V13.125M2.5 6.87498V13.125V6.87498ZM6.25 4.79165V15.2083V4.79165ZM10 2.70831V17.2916V2.70831ZM13.75 4.79165V15.2083V4.79165Z" stroke="url(#paint0_linear_125_310)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_125_310" x1="2.5" y1="6.1651" x2="18.1501" y2="8.50188" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#84B9D1" />
                                    <stop offset="1" stopColor="#D2B4FC" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className="text-xs text-[#ffffff]/80 font-medium">Watch Now</p>
                    </button>

                    <button className="cursor-pointer p-2 rounded-xl hover:bg-[#0a0a0a]/5 flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.125 12.5H6.87502M7.50002 18.3334H12.5C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V7.50002C18.3334 3.33335 16.6667 1.66669 12.5 1.66669H7.50002C3.33335 1.66669 1.66669 3.33335 1.66669 7.50002V12.5C1.66669 16.6667 3.33335 18.3334 7.50002 18.3334ZM13.125 7.50002H6.87502H13.125Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>}


            {scheduled && <div onClick={handlePlanned} className="w-full sm:aspect-dCard rounded-2xl justify-between button-gradient flex flex-col p-3 overflow-hidden relative gap-2">
                <img className="absolute h-[80%] bottom-0 right-0" src="/dcard-b.png" alt="" />
                <div className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.375 1.78V1C8.375 0.795 8.205 0.625 8 0.625C7.795 0.625 7.625 0.795 7.625 1V1.75H4.375V1C4.375 0.795 4.205 0.625 4 0.625C3.795 0.625 3.625 0.795 3.625 1V1.78C2.275 1.905 1.62 2.71 1.52 3.905C1.51 4.05 1.63 4.17 1.77 4.17H10.23C10.375 4.17 10.495 4.045 10.48 3.905C10.38 2.71 9.725 1.905 8.375 1.78ZM10 4.92H2C1.725 4.92 1.5 5.145 1.5 5.42V8.5C1.5 10 2.25 11 4 11H8C9.75 11 10.5 10 10.5 8.5V5.42C10.5 5.145 10.275 4.92 10 4.92ZM4.605 9.105C4.555 9.15 4.5 9.185 4.44 9.21C4.38 9.235 4.315 9.25 4.25 9.25C4.185 9.25 4.12 9.235 4.06 9.21C4 9.185 3.945 9.15 3.895 9.105C3.805 9.01 3.75 8.88 3.75 8.75C3.75 8.62 3.805 8.49 3.895 8.395C3.945 8.35 4 8.315 4.06 8.29C4.18173 8.23999 4.31827 8.23999 4.44 8.29C4.5 8.315 4.555 8.35 4.605 8.395C4.695 8.49 4.75 8.62 4.75 8.75C4.75 8.88 4.695 9.01 4.605 9.105ZM4.71 7.19C4.685 7.25 4.65 7.305 4.605 7.355C4.555 7.4 4.5 7.435 4.44 7.46C4.38 7.485 4.315 7.5 4.25 7.5C4.185 7.5 4.12 7.485 4.06 7.46C4 7.435 3.945 7.4 3.895 7.355C3.85 7.305 3.815 7.25 3.79 7.19C3.76432 7.12991 3.75073 7.06535 3.75 7C3.75 6.935 3.765 6.87 3.79 6.81C3.815 6.75 3.85 6.695 3.895 6.645C3.945 6.6 4 6.565 4.06 6.54C4.18173 6.48999 4.31827 6.48999 4.44 6.54C4.5 6.565 4.555 6.6 4.605 6.645C4.65 6.695 4.685 6.75 4.71 6.81C4.735 6.87 4.75 6.935 4.75 7C4.75 7.065 4.735 7.13 4.71 7.19ZM6.355 7.355C6.305 7.4 6.25 7.435 6.19 7.46C6.13 7.485 6.065 7.5 6 7.5C5.935 7.5 5.87 7.485 5.81 7.46C5.75 7.435 5.695 7.4 5.645 7.355C5.555 7.26 5.5 7.13 5.5 7C5.5 6.87 5.555 6.74 5.645 6.645C5.695 6.6 5.75 6.565 5.81 6.54C5.93 6.485 6.07 6.485 6.19 6.54C6.25 6.565 6.305 6.6 6.355 6.645C6.445 6.74 6.5 6.87 6.5 7C6.5 7.13 6.445 7.26 6.355 7.355Z" fill="#212427" fillOpacity="0.6" />
                    </svg>
                    <p className="uppercase text-[10px] text-[#212427]/60 font-semibold tracking-widest">31 Jan 2022</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative flex items-center">
                        <div className="w-8 aspect-square border-[3px] border-[#0a0a0a] button-gradient rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="/demo-d1.png" alt="" />
                        </div>
                        <div className="w-4" />


                        <div className="w-8 aspect-square border-[3px] border-[#0a0a0a] button-gradient rounded-xl absolute left-[35%] overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="/demo-d2.png" alt="" />
                        </div>

                        <svg className="absolute bottom-0 translate-y-[50%] inset-x-0 mx-auto" width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5C0 2.23858 2.23858 0 5 0L17 0C19.7614 0 22 2.23858 22 5C22 7.76142 19.7614 10 17 10L5 10C2.23858 10 0 7.76142 0 5Z" fill="#121212" />
                            <path d="M10.848 2.69602L9.032 7.00002L7.744 7.00002L5.936 2.69602H7.224L8.416 5.62402L9.648 2.69602L10.848 2.69602Z" fill="url(#paint0_linear_125_256)" />
                            <path d="M13.1428 7.06402C12.7854 7.06402 12.4361 7.02135 12.0948 6.93602C11.7534 6.84535 11.4814 6.73335 11.2788 6.60002L11.6948 5.70402C11.8868 5.82669 12.1188 5.92802 12.3908 6.00802C12.6628 6.08269 12.9294 6.12002 13.1908 6.12002C13.7188 6.12002 13.9828 5.98935 13.9828 5.72802C13.9828 5.60535 13.9108 5.51735 13.7668 5.46402C13.6228 5.41069 13.4014 5.36535 13.1028 5.32802C12.7508 5.27469 12.4601 5.21335 12.2308 5.14402C12.0014 5.07469 11.8014 4.95202 11.6308 4.77602C11.4654 4.60002 11.3828 4.34935 11.3828 4.02402C11.3828 3.75202 11.4601 3.51202 11.6148 3.30402C11.7748 3.09069 12.0041 2.92535 12.3028 2.80802C12.6068 2.69069 12.9641 2.63202 13.3748 2.63202C13.6788 2.63202 13.9801 2.66669 14.2788 2.73602C14.5828 2.80002 14.8334 2.89069 15.0308 3.00802L14.6148 3.89602C14.2361 3.68269 13.8228 3.57602 13.3748 3.57602C13.1081 3.57602 12.9081 3.61335 12.7748 3.68802C12.6414 3.76269 12.5748 3.85869 12.5748 3.97602C12.5748 4.10935 12.6468 4.20269 12.7908 4.25602C12.9348 4.30935 13.1641 4.36002 13.4788 4.40802C13.8308 4.46669 14.1188 4.53069 14.3428 4.60002C14.5668 4.66402 14.7614 4.78402 14.9268 4.96002C15.0921 5.13602 15.1748 5.38135 15.1748 5.69602C15.1748 5.96269 15.0948 6.20002 14.9348 6.40802C14.7748 6.61602 14.5401 6.77869 14.2308 6.89602C13.9268 7.00802 13.5641 7.06402 13.1428 7.06402Z" fill="url(#paint1_linear_125_256)" />
                            <defs>
                                <linearGradient id="paint0_linear_125_256" x1="5.936" y1="3.68257" x2="14.9634" y2="6.41432" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#84B9D1" />
                                    <stop offset="1" stopColor="#D2B4FC" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_125_256" x1="5.936" y1="3.68257" x2="14.9634" y2="6.41432" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#84B9D1" />
                                    <stop offset="1" stopColor="#D2B4FC" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <div className="flex flex-col">
                        <p className="text-xs text-[#212427]/80 font-semibold">Joe M</p>
                        <p className="text-xs text-[#212427]/80 font-semibold">James D</p>
                    </div>
                </div>

                <p className="text-sm text-[#0a0a0a] font-bold w-full ">How do you delete a post on AgoraSquare?</p>

                <div className="w-full flex items-center justify-between ">
                    <div className="cursor-default flex items-center px-1 py-2 rounded-xl gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3334 10C18.3334 14.6 14.6 18.3334 10 18.3334C5.40002 18.3334 1.66669 14.6 1.66669 10C1.66669 5.40002 5.40002 1.66669 10 1.66669C14.6 1.66669 18.3334 5.40002 18.3334 10Z" stroke="#212221" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.0917 12.65L10.5083 11.1084C10.0583 10.8417 9.69165 10.2 9.69165 9.67503V6.25836" stroke="#212221" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <p className="text-xs text-[#212427]/80 font-medium">Scheduled</p>
                    </div>

                    <button className="cursor-pointer p-2 rounded-xl hover:bg-[#0a0a0a]/5 flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.125 12.5H6.87502M7.50002 18.3334H12.5C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V7.50002C18.3334 3.33335 16.6667 1.66669 12.5 1.66669H7.50002C3.33335 1.66669 1.66669 3.33335 1.66669 7.50002V12.5C1.66669 16.6667 3.33335 18.3334 7.50002 18.3334ZM13.125 7.50002H6.87502H13.125Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>}


            {(inactive && !scheduled) && <div onClick={handleUpcoming} className="w-full sm:aspect-dCard rounded-2xl justify-between border-[2px] border-[#212427] flex flex-col p-3 overflow-hidden relative gap-2">
                {/* <img className="absolute h-[80%] bottom-0 right-0" src="/dcard-b.png" alt="" /> */}
                <div className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.375 1.78V1C8.375 0.795 8.205 0.625 8 0.625C7.795 0.625 7.625 0.795 7.625 1V1.75H4.375V1C4.375 0.795 4.205 0.625 4 0.625C3.795 0.625 3.625 0.795 3.625 1V1.78C2.275 1.905 1.62 2.71 1.52 3.905C1.51 4.05 1.63 4.17 1.77 4.17H10.23C10.375 4.17 10.495 4.045 10.48 3.905C10.38 2.71 9.725 1.905 8.375 1.78ZM10 4.92H2C1.725 4.92 1.5 5.145 1.5 5.42V8.5C1.5 10 2.25 11 4 11H8C9.75 11 10.5 10 10.5 8.5V5.42C10.5 5.145 10.275 4.92 10 4.92ZM4.605 9.105C4.555 9.15 4.5 9.185 4.44 9.21C4.38 9.235 4.315 9.25 4.25 9.25C4.185 9.25 4.12 9.235 4.06 9.21C4 9.185 3.945 9.15 3.895 9.105C3.805 9.01 3.75 8.88 3.75 8.75C3.75 8.62 3.805 8.49 3.895 8.395C3.945 8.35 4 8.315 4.06 8.29C4.18173 8.23999 4.31827 8.23999 4.44 8.29C4.5 8.315 4.555 8.35 4.605 8.395C4.695 8.49 4.75 8.62 4.75 8.75C4.75 8.88 4.695 9.01 4.605 9.105ZM4.71 7.19C4.685 7.25 4.65 7.305 4.605 7.355C4.555 7.4 4.5 7.435 4.44 7.46C4.38 7.485 4.315 7.5 4.25 7.5C4.185 7.5 4.12 7.485 4.06 7.46C4 7.435 3.945 7.4 3.895 7.355C3.85 7.305 3.815 7.25 3.79 7.19C3.76432 7.12991 3.75073 7.06535 3.75 7C3.75 6.935 3.765 6.87 3.79 6.81C3.815 6.75 3.85 6.695 3.895 6.645C3.945 6.6 4 6.565 4.06 6.54C4.18173 6.48999 4.31827 6.48999 4.44 6.54C4.5 6.565 4.555 6.6 4.605 6.645C4.65 6.695 4.685 6.75 4.71 6.81C4.735 6.87 4.75 6.935 4.75 7C4.75 7.065 4.735 7.13 4.71 7.19ZM6.355 7.355C6.305 7.4 6.25 7.435 6.19 7.46C6.13 7.485 6.065 7.5 6 7.5C5.935 7.5 5.87 7.485 5.81 7.46C5.75 7.435 5.695 7.4 5.645 7.355C5.555 7.26 5.5 7.13 5.5 7C5.5 6.87 5.555 6.74 5.645 6.645C5.695 6.6 5.75 6.565 5.81 6.54C5.93 6.485 6.07 6.485 6.19 6.54C6.25 6.565 6.305 6.6 6.355 6.645C6.445 6.74 6.5 6.87 6.5 7C6.5 7.13 6.445 7.26 6.355 7.355Z" fill="#797979" />
                    </svg>

                    <p className="uppercase text-[10px] text-[#c6c6c6]/60 font-semibold tracking-widest">upcoming</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative flex items-center">
                        <div className="w-8 aspect-square border-[3px] border-[#0a0a0a] button-gradient rounded-xl overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="/demo-d1.png" alt="" />
                        </div>
                        <div className="w-4" />


                        <div className="w-8 aspect-square border-[3px] border-[#0a0a0a] button-gradient rounded-xl absolute left-[35%] overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="/demo-d2.png" alt="" />
                        </div>

                        <svg className="absolute bottom-0 translate-y-[50%] inset-x-0 mx-auto" width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5C0 2.23858 2.23858 0 5 0L17 0C19.7614 0 22 2.23858 22 5C22 7.76142 19.7614 10 17 10L5 10C2.23858 10 0 7.76142 0 5Z" fill="url(#paint0_linear_125_297)" />
                            <path d="M10.848 2.69602L9.032 7.00002L7.744 7.00002L5.936 2.69602H7.224L8.416 5.62402L9.648 2.69602L10.848 2.69602Z" fill="#121212" />
                            <path d="M13.1428 7.06402C12.7854 7.06402 12.4361 7.02135 12.0948 6.93602C11.7534 6.84535 11.4814 6.73335 11.2788 6.60002L11.6948 5.70402C11.8868 5.82669 12.1188 5.92802 12.3908 6.00802C12.6628 6.08269 12.9294 6.12002 13.1908 6.12002C13.7188 6.12002 13.9828 5.98935 13.9828 5.72802C13.9828 5.60535 13.9108 5.51735 13.7668 5.46402C13.6228 5.41069 13.4014 5.36535 13.1028 5.32802C12.7508 5.27469 12.4601 5.21335 12.2308 5.14402C12.0014 5.07469 11.8014 4.95202 11.6308 4.77602C11.4654 4.60002 11.3828 4.34935 11.3828 4.02402C11.3828 3.75202 11.4601 3.51202 11.6148 3.30402C11.7748 3.09069 12.0041 2.92535 12.3028 2.80802C12.6068 2.69069 12.9641 2.63202 13.3748 2.63202C13.6788 2.63202 13.9801 2.66669 14.2788 2.73602C14.5828 2.80002 14.8334 2.89069 15.0308 3.00802L14.6148 3.89602C14.2361 3.68269 13.8228 3.57602 13.3748 3.57602C13.1081 3.57602 12.9081 3.61335 12.7748 3.68802C12.6414 3.76269 12.5748 3.85869 12.5748 3.97602C12.5748 4.10935 12.6468 4.20269 12.7908 4.25602C12.9348 4.30935 13.1641 4.36002 13.4788 4.40802C13.8308 4.46669 14.1188 4.53069 14.3428 4.60002C14.5668 4.66402 14.7614 4.78402 14.9268 4.96002C15.0921 5.13602 15.1748 5.38135 15.1748 5.69602C15.1748 5.96269 15.0948 6.20002 14.9348 6.40802C14.7748 6.61602 14.5401 6.77869 14.2308 6.89602C13.9268 7.00802 13.5641 7.06402 13.1428 7.06402Z" fill="#121212" />
                            <defs>
                                <linearGradient id="paint0_linear_125_297" x1="-6.0542e-08" y1="2.37037" x2="21.2934" y2="9.17075" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#84B9D1" />
                                    <stop offset="1" stopColor="#D2B4FC" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <div className="flex flex-col">
                        <p className="text-xs text-[#c6c6c6]/80 font-semibold">Joe M</p>
                        <p className="text-xs text-[#c6c6c6]/80 font-semibold">James D</p>
                    </div>
                </div>

                <p className="text-sm text-[#ffffff] font-semibold w-full">Is climate change real?</p>

                <div className="w-full flex items-center justify-between ">
                    <button className="flex items-center px-3 py-2 button-gradient rounded-xl gap-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66666 9.50001C6.66666 10.1417 7.16666 10.6667 7.77499 10.6667H9.02499C9.55832 10.6667 9.99166 10.2083 9.99166 9.65001C9.99166 9.04168 9.72499 8.82501 9.33332 8.68334L7.33332 7.98334C6.93332 7.84168 6.66666 7.62501 6.66666 7.01668C6.66666 6.45834 7.09999 6.00001 7.63332 6.00001H8.88332C9.49999 6.00834 9.99999 6.52501 9.99999 7.16668M8.33332 10.7083V11.325M8.33332 5.34167V5.99168" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.8167 16.5667C11.5667 17.625 12.7917 18.3167 14.1917 18.3167C16.4667 18.3167 18.3167 16.4667 18.3167 14.1917C18.3167 12.8084 17.6333 11.5834 16.5917 10.8334M8.32499 14.9834C10.0909 14.9834 11.7845 14.2819 13.0331 13.0332C14.2818 11.7845 14.9833 10.0909 14.9833 8.32502C14.9833 6.55912 14.2818 4.86555 13.0331 3.61687C11.7845 2.36819 10.0909 1.66669 8.32499 1.66669C6.55909 1.66669 4.86552 2.36819 3.61684 3.61687C2.36816 4.86555 1.66666 6.55912 1.66666 8.32502C1.66666 10.0909 2.36816 11.7845 3.61684 13.0332C4.86552 14.2819 6.55909 14.9834 8.32499 14.9834V14.9834Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <p className="text-xs text-[#0a0a0a]/80 font-semibold">Fund Discourse</p>
                    </button>

                    <button className="cursor-pointer p-2 rounded-xl hover:bg-[#0a0a0a]/5 flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.125 12.5H6.87502M7.50002 18.3334H12.5C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V7.50002C18.3334 3.33335 16.6667 1.66669 12.5 1.66669H7.50002C3.33335 1.66669 1.66669 3.33335 1.66669 7.50002V12.5C1.66669 16.6667 3.33335 18.3334 7.50002 18.3334ZM13.125 7.50002H6.87502H13.125Z" stroke="#c6c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>}

        </>
    );
}

export default DiscourseCard;