import DiscourseCard from "../../components/Discourse/DiscourseCard";
import Layout from "../../components/Layout/Layout";
import ProfileCardSection from "../../components/RightSideSection/ProfileCardSection";

const discourses = () => {
    return (
        <div className="min-h-screen">
            <Layout hideNavbar={false} hideLeftSide={false}>
                {/* <GroupsSection /> */}
                <div className="w-full sm:max-w-[40rem] flex flex-col relative gap-4 mx-4 mt-8 mb-4">
                    <nav className="w-full flex justify-between">
                        <button className="flex justify-center items-center pl-[1.4px] pr-[1.6px] pb-[1.4px] pt-[1.4px] button-gradient rounded-[12px]">
                            <div className="bg-[#0a0a0a] text-[#c6c6c6] text-sm pl-4 pr-4 py-2 rounded-[10px] m-auto flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 15V5M5 10H15H5Z" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Start a Discourse
                            </div>
                        </button>
                        <button className="hidden sm:flex relative justify-center items-center pl-[1.4px] pr-[1.6px] pb-[1.4px] pt-[1.4px] border-[2px] border-[#212427] rounded-[12px]">
                            <div className="bg-[#0a0a0a] text-[#c6c6c6] text-xs h-full px-4  py-2 rounded-[10px] m-auto flex items-center">
                                Active Discourses
                            </div>
                            <p className="text-[#797979] text-[10px] px-2 left-2 bg-[#0a0a0a] absolute top-0 -translate-y-[50%]">Categories</p>
                        </button>
                    </nav>
                    <p className="uppercase text-[#6a6a6a] font-medium text-[11px] mt-4 tracking-widest">discourse</p>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 grid-flow-row items-center gap-2">
                        <DiscourseCard />
                        <DiscourseCard scheduled />
                        <DiscourseCard inactive />
                    </div>
                </div>
                <div className="hidden 2lg:flex flex-col gap-x-4 w-full max-w-xs mx-auto ml-4 sticky gap-y-10 top-0 h-max ">
                    {/* <Friends /> */}
                    {/* <ProfilesYouMayLike />
                    <SuggestedGroups /> */}
                    <ProfileCardSection />
                </div>
            </Layout>
        </div>
    );
}

export default discourses;