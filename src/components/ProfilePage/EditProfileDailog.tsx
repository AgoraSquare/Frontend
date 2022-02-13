import { Dialog } from "@headlessui/react";
import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { RootState } from "../../store";
import { dispatch } from "react-hot-toast/dist/core/store";

const GET_USERDATA = gql`
    query GetUserData {
        getUserData {
            id
            username
            name
            bio
        }
    }
`;

const U_NAME = `
updateUserName(name: $name) {
    id
    username
    name
    email
    bio
    img_url
    web_url
    cover_img_url
    emailVerified
    walletAddress
    walletConnected
    followers
    following
    updatedAt
}
`;

const U_BIO = `
updateUserBio(bio: $bio) {
    id
    username
    email
    name
    bio
    web_url
    img_url
    cover_img_url
    emailVerified
    walletConnected
    walletAddress
    followers
    following
    updatedAt
}
`;

const UPDATE_BOTH = gql`
    mutation UpdateUsername($name: String!, $bio: String!) {
        ${U_NAME}
        ${U_BIO}
    }
`;

const UPDATE_BIO = gql`
    mutation UpdateUsername($bio: String!) {
        ${U_BIO}
    }
`;

const UPDATE_NAME = gql`
    mutation UpdateUsername($name: String!) {
        ${U_NAME}
    }
`;

const EditProfileDailog = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {

    const dispatch = useDispatch();
    let demoRef = useRef(null);

    const { token } = useSelector((state: RootState) => state.auth);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

    const { data, loading, error } = useQuery(GET_USERDATA, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            },
        },
    });

    useEffect(() => {
        if (data) {
            setName(data.getUserData.name);
            setBio(data.getUserData.bio);
        }
    }, [data])

    const [updateUsername, { data: uData, loading: uLoading, error: uError }] = useMutation(UPDATE_NAME, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    });

    const [updateBio, { data: bData, loading: bLoading, error: bError }] = useMutation(UPDATE_BIO, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    })

    const [updateBoth, { data: bbData, loading: bbLoading, error: bbError }] = useMutation(UPDATE_BOTH, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    })

    useEffect(() => {
        if (uData) {
            dispatch(setUser(uData?.updateUserName));
        }
        
        if (bData) {
            dispatch(setUser(bData?.updateUserBio));
        }
        setIsOpen(false);
    }, [uData, bbData])

    useEffect(() => {
        if (bData) {
            dispatch(setUser(bData?.updateUserBio));
        }
        setIsOpen(false);
    }, [bData])


    const handleSave = () => {
        if ( data.getUserData.bio !== bio || data.getUserData.name !== name) {
            updateBoth({
                variables: {
                    name,
                    bio
                }
            })
        } else if (data.getUserData.bio !== bio) {
            updateBio({
                variables: {
                    bio
                }
            })
        } else if (data.getUserData.name !== name) {
            updateUsername({
                variables: {
                    name
                }
            })
        } else {
            console.log("No changes made")
        }
    }

    const isLoading = () => {
        if (uLoading || bLoading || bbLoading) {
            return true;
        }
        return false;
    }

    const isError = () => {
        if (uError || bError || bbError) {
            return true;
        }
        return false;
    }


    return (
        <Dialog
            open={isOpen}
            initialFocus={demoRef}
            onClose={() => setIsOpen(false)}
            className="fixed z-20 inset-0 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen backdrop-blur-sm">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-80 " />

                {/* { isLoading() && 
                <div className="relative bg-[#212427] ring-[4px] ring-white/10 rounded-2xl max-w-xs sm:max-w-sm w-full mx-auto px-8 py-4 gap-4">
                <Dialog.Title className="text-white text-sm  font-medium py-2">
                    Fetching data ..
                </Dialog.Title>
                </div>
                }

                { isError() &&
                    <div className="relative bg-[#212427] ring-[4px] ring-white/10 rounded-2xl max-w-xs sm:max-w-sm w-full mx-auto px-8 py-4 gap-4">
                    <Dialog.Title className="text-white text-sm  font-medium py-2">
                        Error Occured.
                    </Dialog.Title>
                    </div>
                } */}

                {data && (
                    <div className="relative bg-[#212427] ring-[4px] ring-white/10 rounded-2xl max-w-xs sm:max-w-sm w-full mx-auto px-8 py-4 gap-4">
                        <Dialog.Title className="text-white text-sm  font-medium py-2">
                            Edit Profile
                        </Dialog.Title>

                        <form className="w-full flex flex-col gap-2 mt-4 mb-3">
                            <input
                                value={data.getUserData.username}
                                disabled
                                className={`bg-[#121212]/40 rounded-[10px] px-4 py-3 font-medium border-none text-white/30 focus:outline-none text-xs `}
                                placeholder="Username"
                            />

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`bg-[#121212] mt-2 rounded-[10px] px-4 py-3 font-medium border-none text-xs text-white focus:outline-none `}
                                placeholder="Display Name"
                            />

                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className={`bg-[#121212] mt-2 rounded-[10px] px-4 py-3 font-medium border-none text-xs text-white focus:outline-none `}
                                placeholder="Bio"
                            />
                        </form>

                        <div className="flex items-center w-full justify-between gap-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className={`text-white/30 text-sm py-2 px-2 w-full rounded-[10px] mb-4 mt-4 font-semibold bg-[#121212]/40 `}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className={` text-sm py-2 px-2 w-full rounded-[10px] mb-4 mt-4 font-semibold button-gradient `}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Dialog>
    );
};

export default EditProfileDailog;
