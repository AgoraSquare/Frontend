import { createContext, useState } from "react";
import useResize from "../../utils/useResize";
import NewPostSection from "../FeedPage/NewPostSection/NewPostSection";
import LeftSideSection from "../LeftSideSection/LeftSideSection";
import Navbar from "../Navbar/Navbar";
import styles from './Layout.module.scss';
import { useEffect } from 'react';
import BackDrop from "../BackDrop/BackDrop";

export const HideLeftSideSectionContext = createContext({
    hideLeftSideBar: true,
    setHideLeftSideBar: (e: boolean) => { }
});

//Layout Component For Each Page Except Landing Page
export default function Layout({ children, hideLeftSide, hideNavbar }: { children: any, hideNavbar: boolean, hideLeftSide: boolean }) {
    const [flag] = useResize(900);
    const [hideLeftSideBar, setHideLeftSideBar] = useState(false);
    const [showPostSection, setShowPostSection] = useState(false);
    console.log("Layout Component Rendered");

    useEffect(() => {
        const checkResolution = () => {
            if (window.innerWidth > 900)
                document.body.style.overflow = "";
        }
        checkResolution();
        window.addEventListener('resize', checkResolution);

        return () => window.removeEventListener('resize', checkResolution);
    }, []);

    return (
        <div className={styles.layout}>
            {hideNavbar ? (!flag && <Navbar />) : <Navbar />}
            {flag ?
                showPostSection && <div className={styles.mobile_only}>
                    <NewPostSection showPostSection={showPostSection} setShowPostSection={setShowPostSection} />
                </div> :
                <>
                    {showPostSection && <BackDrop onClick={() => {
                        setShowPostSection(false);
                    }}>
                        <div className={styles.modal}>
                            <NewPostSection showPostSection={showPostSection} setShowPostSection={setShowPostSection} />
                        </div>
                    </BackDrop>}
                </>
            }

            <main className={styles.layoutMain}>
                {!hideLeftSide && !hideLeftSideBar && <LeftSideSection setShowPostSection={setShowPostSection} />}
                <div className={styles.border} />
                <div className={styles.children_container}>
                    <HideLeftSideSectionContext.Provider value={{ hideLeftSideBar, setHideLeftSideBar }}>
                        {children}
                    </HideLeftSideSectionContext.Provider>
                </div>
            </main>
        </div>
    )
}
