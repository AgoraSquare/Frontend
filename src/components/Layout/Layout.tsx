import { createContext, useState } from "react";
import useResize from "../../utils/useResize";
import NewPostSection from "../FeedPage/NewPostSection/NewPostSection";
import LeftSideSection from "../LeftSideSection/LeftSideSection";
import Navbar from "../Navbar/Navbar";
import styles from './Layout.module.scss';
import { useEffect } from 'react';
import BackDrop from "../BackDrop/BackDrop";
import ProfileCardSection from "../RightSideSection/ProfileCardSection";
import Link from "next/link";
import { useRouter } from "next/router";
import BottomBar from "./BottomBar";

export const HideLeftSideSectionContext = createContext({
    hideLeftSideBar: true,
    setHideLeftSideBar: (e: boolean) => { }
});

//Layout Component For Each Page Except Landing Page
export default function Layout({ children, hideLeftSide, hideNavbar }: { children: any, hideNavbar: boolean, hideLeftSide: boolean }) {
    const [flag] = useResize(900);
    const [hideLeftSideBar, setHideLeftSideBar] = useState(false);
    const [showPostSection, setShowPostSection] = useState(false);
    const [postCreated, setPostCreated] = useState(0);
    // console.log("Layout Component Rendered");

    useEffect(() => {
        const checkResolution = () => {
            if (window.innerWidth > 900)
                document.body.style.overflow = "";
        }
        checkResolution();
        window.addEventListener('resize', checkResolution);

        return () => window.removeEventListener('resize', checkResolution);
    }, []);

    const route = useRouter();

    return (
        <div className="flex flex-col min-h-screen relative bg-[#0A0A0A] ">
            {/* {hideNavbar ? (!flag && <Navbar />) : <Navbar />} */}
            {/* {flag ?
                showPostSection && <div className={styles.mobile_only}>
                    <NewPostSection showPostSection={showPostSection} setShowPostSection={setShowPostSection} setPostCreated={setPostCreated} />
                </div> :
                <>
                    {showPostSection && <BackDrop onClick={() => {
                        setShowPostSection(false);
                    }}>
                        <div className=" max-w-3xl w-full">
                            <NewPostSection showPostSection={showPostSection} setShowPostSection={setShowPostSection} setPostCreated={setPostCreated} />
                        </div>
                    </BackDrop>}
                </>
            } */}

            <main className="flex w-full max-w-7xl flex-1 mx-auto flex-col sm:flex-row justify-between">
                <div className="w-full flex flex-col sm:hidden sticky -top-[0.1px] bg-[#0a0a0a] z-10">
                    <ProfileCardSection />
                </div>
                {!hideLeftSide && !hideLeftSideBar && <LeftSideSection setShowPostSection={setShowPostSection} />}
                {/* <div className="sticky top-8 w-[1px] bg-[#ffffff1F] hidden md:block " /> */}
                <div className="w-full mx-auto flex">
                    <HideLeftSideSectionContext.Provider value={{ hideLeftSideBar, setHideLeftSideBar }}>
                        {children}
                    </HideLeftSideSectionContext.Provider>
                </div>

            </main>

            <BottomBar />
            
        </div>
    )
}
