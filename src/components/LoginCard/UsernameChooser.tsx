import { Dispatch, SetStateAction, useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { login as loginAction } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { RootState } from "../../store";

const FIND_USERNAME = gql`
    query FindUserName($username: String!) {
        findUserName(username: $username) {
            username
            available
            message
        }
    }
`;

const UPDATE_USERNAME = gql`
    mutation UpdateUsername($name: String!, $username: String!) {
        updateUsername(name: $name, username: $username) {
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
    }
`;

const REFRESH_TOKEN = gql`
    mutation RefreshToken {
        refreshToken {
            token
            expired
        }
    }
`;

const UsernameChooser = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");

    const router = useRouter();
    const dispatch = useDispatch();
    let demoRef = useRef(null);

    const token = useSelector((state: RootState) => state.auth.token);

    // ? Username search query
    const { data, loading, error, refetch } = useQuery(FIND_USERNAME, {
        variables: { username: username },
    });

    // ? RegisterUser Mutation
    const [updateUsername, { data: uData, loading: uLoading, error: uError }] =
        useMutation(UPDATE_USERNAME, {
            context: {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        });

    const [refreshToken, { data: rData, loading: rLoading, error: rError }] = useMutation(REFRESH_TOKEN, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    });

    useEffect(() => {
        if (uData) {
            dispatch(setUser(uData?.updateUsername));
            console.log("data: ", uData?.updateUsername);
            refreshToken();
            // router.push('/feed')
        }
    }, [uData]);

    useEffect(() => {
        if (rData) {
            console.log("refresh token: ", rData);
            dispatch(loginAction({
                token: rData?.refreshToken.token
            }))
            router.push('/feed')
        }
    })

    const message = () => {
        if (username === "") {
            return <></>;
        }

        if (username.length < 4) {
            return (
                <p className="font-medium text-sm text-red-500">
                    Username must be at least 4 characters
                </p>
            );
        }

        if (loading) {
            return (
                <p className="font-medium text-sm text-white/30">finding....</p>
            );
        }

        if (error) {
            return (
                <p className="font-medium text-sm text-red-500">
                    {error.message}
                </p>
            );
        }

        if (data) {
            if (data.findUserName.available) {
                // setUsernameAvailable(true)
                return (
                    <p className="font-medium text-sm text-green-400">
                        {data.findUserName.message}
                    </p>
                );
            } else {
                // setUsernameAvailable(false)
                return (
                    <p className="font-medium text-sm text-red-500">
                        {data.findUserName.message}
                    </p>
                );
            }
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const getButtonColor = () => {
        if (
            username !== "" &&
            username.length >= 4 &&
            data &&
            data.findUserName.available
        ) {
            return "button-gradient text-white";
        } else {
            return "bg-[#121212] text-white/30";
        }
    };

    const handleContinueClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (
            username !== "" &&
            username.length >= 4 &&
            data &&
            data.findUserName.available &&
            name !== ""
        ) {
            updateUsername({
                variables: {
                    username: username,
                    name: name,
                },
            }).catch((error) => {
                if (error.message.includes("Username is already taken")) {
                    console.log("Username is already taken");
                    refetch();
                }
            });
        }
    };

    return (
        <Dialog
            open={isOpen}
            initialFocus={demoRef}
            onClose={() => setIsOpen(false)}
            className="fixed z-20 inset-0 overflow-y-auto"
        >
            <div className="flex items-center justify-center min-h-screen backdrop-blur-sm">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-80 pointer-events-none" />

                <div className="relative bg-[#212427] ring-[12px] ring-white/10 rounded-2xl max-w-xs sm:max-w-sm w-full mx-auto px-10 py-8 gap-4">
                    <Dialog.Title className="text-white text-sm  font-medium py-2">
                        Complete Profile
                    </Dialog.Title>
                    <Dialog.Description className="text-white/30 text-xs  pb-2">
                        Username should be unique
                    </Dialog.Description>

                    <form className="w-full flex flex-col gap-3">
                        <input
                            className={`bg-[#121212]  rounded-2xl px-4 py-3 font-medium border-none text-white focus:outline-none text-sm `}
                            onChange={handleUsernameChange}
                            placeholder="Username"
                        />

                        <input
                            type="text"
                            className={`bg-[#121212] mt-2 rounded-2xl px-4 py-3 font-medium border-none text-sm text-white focus:outline-none `}
                            onChange={handleNameChange}
                            placeholder="Display Name"
                        />
                        <div className={`flex w-full `}>{message()}</div>
                    </form>

                    <button
                        onClick={handleContinueClick}
                        className={` text-base py-3 px-2 w-full rounded-2xl mt-4 font-semibold  ${getButtonColor()}`}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default UsernameChooser;
