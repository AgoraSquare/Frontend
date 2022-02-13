import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useQuery, useLazyQuery, useMutation, gql } from "@apollo/client";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/slices/authSlice";
import { setUser, logout as logoutData } from "../../store/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const CHECK_AUTH = gql`
    query CheckAuth {
        checkAuth {
            token
            expired
        }
    }
`;

const GET_USERDATA = gql`
    query GetUserData {
        getUserData {
            id
            username
            name
            email
            bio
            img_url
            cover_img_url
            emailVerified
            walletAddress
            walletConnected
            following
            followers
        }
    }
`;

const GET_NONCE = gql`
    query GetNonce($walletAddress: String!) {
        getNonce(walletAddress: $walletAddress) {
            nonce
            newUser
        }
    }
`;

const VERIFY_SIGNATURE = gql`
    mutation VerifySignature($signature: String!, $walletAddress: String!) {
        verifySignature(signature: $signature, walletAddress: $walletAddress) {
            address
            username
            token
        }
    }
`;

const ProfileCardSection = () => {
    const userData = useSelector((state: RootState) => state.user);
    const token = useSelector((state: RootState) => state.auth.token);

    const dispatch = useDispatch();
    const router = useRouter();

    const { data: aData, loading: aLoading, error: aError } = useQuery(CHECK_AUTH, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            }
        }
    })

    const [getUserData, { data, loading, error }] = useLazyQuery(GET_USERDATA, {
        fetchPolicy: "network-only",
    });
    const [
        getNonce,
        { data: nonceData, loading: nonceLoading, error: nonceError },
    ] = useLazyQuery(GET_NONCE, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            },
        },
    });

    const [
        verifySignature,
        {
            data: signatureData,
            loading: signatureLoading,
            error: signatureError,
        },
    ] = useMutation(VERIFY_SIGNATURE, {
        context: {
            headers: {
                authorization: `Bearer ${token}`,
            },
        },
    });

    useEffect(() => {
        if (data) {
            dispatch(setUser(data.getUserData));
        }
    }, [data]);

    useEffect(() => {
        if (nonceData) {
            verifySignatureHandler(nonceData);
        }
    }, [nonceData]);

    useEffect(() => {
        if (signatureData) {
            dispatch(
                login({
                    token: signatureData?.verifySignature.token,
                })
            );
            getUserData({
                context: {
                    headers: {
                        authorization: `Bearer ${signatureData?.verifySignature.token}`,
                    },
                },
            }).catch((err) => console.log(err));
        }
    }, [signatureData]);

    const verifySignatureHandler = async (data: any) => {
        const signData = await signNonce(data.getNonce.nonce).catch((err) => {
            console.log(err);
            return;
        });

        if (signData?.signature) {
            verifySignature({
                variables: {
                    signature: signData?.signature,
                    walletAddress: signData?.address,
                },
            });
        }
        return;
    };

    const signNonce = async (nonce: string) => {
        try {
            if (typeof (window as any).ethereum === "undefined") {
                // Metamask not installed!
                return;
            }

            await (window as any).ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(
                (window as any).ethereum
            );
            const signer = provider.getSigner();
            const signature = await signer.signMessage(nonce).catch((err) => {
                console.log(err);
                return;
            });
            const address = await signer.getAddress();

            return {
                signature,
                address,
            };
        } catch (err) {
            console.log(err);
        }
    };

    const handleConnectWallet = async () => {
        try {
            if (typeof (window as any).ethereum === "undefined") {
                // Metamask is not installed
                return;
            }

            await (window as any).ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(
                (window as any).ethereum
            );
            const signer = provider.getSigner();
            const address = await signer.getAddress();

            getNonce({
                variables: {
                    walletAddress: address,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    const shortenAddress = (str: string) => {
        return str.substring(0, 6) + "..." + str.substring(str.length - 4);
    };

    const getAvatarUrl = () => {
        if (userData.img_url !== "" && userData.img_url.length > 2) {
            return userData.img_url;
        }
        return "/avatar_null.png";
    };

    const handleCreatePost = () => {
        router.push("/feed");
    };

    const handleLogout = () => {
        dispatch(logout());
        dispatch(logoutData());
        router.push("/login");
    }

    return (

        <>
        { (aError?.message.includes("Your session expired.") || aError?.message.includes("Authentication token")) &&
            <div className="flex items-center sm:p-2 w-full mt-2 sm:mt-10">
                <button className="flex justify-center self-end items-center pl-[1.4px] pr-[1.6px] pb-[1.4px] pt-[1.4px] button-gradient rounded-[12px]">
                            <div className="bg-[#0a0a0a] text-[#c6c6c6] text-sm pl-4 pr-4 py-2 rounded-[10px] m-auto flex items-center gap-2">
                                Login
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.7125 4.773L0 1.0605L1.0605 0L5.8335 4.773L1.0605 9.546L0 8.4855L3.7125 4.773Z" fill="#C6C6C6" />
                                </svg>

                            </div>
                        </button>

            </div>
        }

        <div
            className={`w-full p-4 sm:p-2 flex items-center justify-between mt-2 sm:mt-10 rounded-[12px] ${
                userData.walletConnected ? "" : ""
            } ${aError?.message.includes("Your session expired.") || aError?.message.includes("Authentication token")  ? 'hidden' : ''} `}
            >
            <div className={`flex items-center gap-3 `}>
                <div
                    onClick={handleCreatePost}
                    className="w-8 h-8 rounded-full bg-[#212427] flex items-center justify-center sm:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        >
                        <path
                            d="M6 12h12M12 18V6"
                            stroke="#6a6a6a"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                    </svg>
                </div>

                <div className="block sm:hidden h-8 w-[1px] bg-[#212427]"></div>

                <div className="hidden sm:flex w-8 h-8 rounded-full overflow-hidden">
                    <img
                        className="w-full h-full"
                        src={getAvatarUrl()}
                        alt=""
                        />
                </div>
                <Link href={`/${userData.username}`} passHref>
                    <div className="flex sm:hidden w-8 h-8 rounded-full overflow-hidden">
                        <img
                            className="w-full h-full"
                            src={getAvatarUrl()}
                            alt=""
                            />
                    </div>
                </Link>
                <div className="flex flex-col">
                    {userData.walletConnected && (
                        <p className="text-sm tracking-wide text-white/60">
                            {shortenAddress(userData.walletAddress)}
                        </p>
                    )}
                    {!userData.walletConnected && (
                        <div
                            onClick={handleConnectWallet}
                            className="cursor-pointer text-sm font-semibold text-gradient"
                            >
                            Connect Wallet
                        </div>
                    )}
                    <p className=" text-xs text-[#6a6a6a]">
                        {userData.username !== "--"
                            ? `@${userData.username}`
                            : "anonymous"}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="cursor-pointer">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M19.3399 14.4902L18.3399 12.8302C18.1299 12.4602 17.9399 11.7602 17.9399 11.3502V8.82016C17.9387 7.70419 17.6216 6.61137 17.0252 5.66813C16.4288 4.72489 15.5776 3.96978 14.5699 3.49016C14.3128 3.0335 13.9376 2.6543 13.4838 2.3922C13.0299 2.13009 12.514 1.99469 11.9899 2.00016C10.8999 2.00016 9.91994 2.59016 9.39994 3.52016C7.44994 4.49016 6.09994 6.50016 6.09994 8.82016V11.3502C6.09994 11.7602 5.90994 12.4602 5.69994 12.8202L4.68994 14.4902C4.28994 15.1602 4.19994 15.9002 4.44994 16.5802C4.68994 17.2502 5.25994 17.7702 5.99994 18.0202C7.93994 18.6802 9.97994 19.0002 12.0199 19.0002C14.0599 19.0002 16.0999 18.6802 18.0399 18.0302C18.7399 17.8002 19.2799 17.2702 19.5399 16.5802C19.7999 15.8902 19.7299 15.1302 19.3399 14.4902ZM14.8299 20.0102C14.6196 20.5923 14.2352 21.0956 13.7289 21.4516C13.2226 21.8077 12.6189 21.9992 11.9999 22.0002C11.2099 22.0002 10.4299 21.6802 9.87994 21.1102C9.55994 20.8102 9.31994 20.4102 9.17994 20.0002C9.30994 20.0202 9.43994 20.0302 9.57994 20.0502C9.80994 20.0802 10.0499 20.1102 10.2899 20.1302C10.8599 20.1802 12.0199 20.2102 12.0199 20.2102C12.5899 20.2102 13.1599 20.1802 13.7199 20.1302C13.9299 20.1102 14.1399 20.1002 14.3399 20.0702L14.8299 20.0102Z"
                            fill="white"
                            fillOpacity="0.37"
                            />
                    </svg>
                </div>
                <div onClick={handleLogout} className="cursor-pointer">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4M17.4398 14.62L19.9998 12.06L17.4398 9.5V14.62ZM9.75977 12.06H19.9298H9.75977Z"
                            stroke="#696969"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                    </svg>
                </div>
            </div>
        </div>
                            </>
    );
};

export default ProfileCardSection;
