import Layout from "../components/Layout/Layout";
import ProfileCardSection from "../components/RightSideSection/ProfileCardSection";

const discourses = () => {
    return (
        <div className="min-h-screen">
            <Layout hideNavbar={false} hideLeftSide={false}>
                {/* <GroupsSection /> */}
                <div className="w-full sm:max-w-lg flex flex-col relative gap-4 mx-4 mt-8 mb-4">
                    <img className='w-full h-full object-center object-cover' src="/discourses_placeholder.png" alt="" />
                    <div className='flex flex-col items-center absolute inset-0 m-auto top-[40%] gap-1'>
                        <h3 className='text-white text-base'>Coming Soon</h3>
                        <p className='text-white/30 text-xs text-center'>Discourses are planned<br />will be available soon</p>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col gap-6 w-full max-w-xs mx-auto ml-4 sticky top-0 h-max ">
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