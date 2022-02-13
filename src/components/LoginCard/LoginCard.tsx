import styles from './LoginCard.module.scss';
import { SetStateAction, Dispatch } from "react";
import { login as loginAction } from "../../store/slices/authSlice";
import { setUser } from '../../store/slices/userSlice';
import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation, gql } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import UsernameChooser from './UsernameChooser';

const LOGIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token,
            lastLogin
        }
    }
`

const GET_USERDATA = gql`
    query GetUserData {
        getUserData {
            id,
            username,
            name,
            email,
            bio,
            img_url,
            cover_img_url,
            emailVerified,
            walletAddress,
            walletConnected,
            following,
            followers
        }
    }
`

const GET_NONCE = gql`
    query GetNonce($walletAddress: String!) {
        getNonce(walletAddress: $walletAddress) {
            nonce
            newUser
        }
    }
`

const VERIFY_SIGNATURE = gql`
    mutation VerifySignature($signature: String!, $walletAddress: String!) {
        verifySignature(signature: $signature, walletAddress: $walletAddress) {
            address
            username
            token
        }
    }
`

export default function LoginCard({ setHasAccount }: { setHasAccount: Dispatch<SetStateAction<boolean>> }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameDialogOpen, setUsernameDialogOpen] = useState(false);

    const [login, { data, loading, error }] = useMutation(LOGIN_USER);
    const [verifySignature, { data: signatureData, loading: signatureLoading, error: signatureError }] = useMutation(VERIFY_SIGNATURE);
    const [getUserData, { data: userData, loading: userLoading, error: userError }] = useLazyQuery(GET_USERDATA);
    const [getNonce, { data: nonceData, loading: nonceLoading, error: nonceError }] = useLazyQuery(GET_NONCE);


    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (data) {
            dispatch(loginAction({
                token: data?.login.token
            }))
            getUserData({
                context: {
                    headers: {
                        authorization: `Bearer ${data?.login.token}`
                    }
                }
            })
                .catch(err => console.log(err))
            console.log("user fetched :", data);
        }
    }, [data])

    useEffect(() => {
        if (nonceData) {
            verifySignatureHandler(nonceData)
        }
    }, [nonceData])

    useEffect(() => {
        if (signatureData) {
            console.log("signature data :", signatureData);
            dispatch(loginAction({
                token: signatureData?.verifySignature.token
            }))
            getUserData({
                context: {
                    headers: {
                        authorization: `Bearer ${signatureData?.verifySignature.token}`
                    }
                }
            })
                .catch(err => console.log(err))
            console.log("user fetched :", data);
        }
    }, [signatureData])

    useEffect(() => {
        if (userData) {
            console.log("user data :", userData);
            
            dispatch(setUser(userData?.getUserData));
            if (userData?.getUserData.username === "--" || userData?.getUserData.username === "") {
                // show username form
                setUsernameDialogOpen(true);
            } else {
                router.push('/feed');
            }
        }
    }, [userData])

    const verifySignatureHandler = async (data: any) => {

        const signData = await signNonce(data.getNonce.nonce)
            .catch(err =>
                { console.log(err)
                    return;
                });

        if (signData?.signature ) {
            verifySignature({
                variables: {
                    signature: signData?.signature,
                    walletAddress: signData?.address
                }
            })
        }

        return;
    }

    const signNonce = async (nonce: string) => {
        try {
            if (typeof (window as any).ethereum === 'undefined') {
                console.log("Metamask not installed!");
                return;
            }

            await (window as any).ethereum.send('eth_requestAccounts');
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const signature = await signer.signMessage(nonce)
                .catch(err => {console.log(err); return;});
            const address = await signer.getAddress();
            
            return {
                signature,
                address
            };
        } catch (err) {
            console.log(err);
        }
    }


    const handleMetamaskLogin = async () => {
        try {
            if (typeof (window as any).ethereum === 'undefined') {
                console.log("Metamask not installed!");
                return;
            }
            
            await (window as any).ethereum.send('eth_requestAccounts');
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            
            getNonce({
                variables: {
                    walletAddress: address
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        login({ variables: { username: username, password: password } })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="w-full md:w-auto md:ring-[14px] md:ring-white/10 bg-[#212427] max-w-[650px] md:rounded-[32px] md:min-w-[600px] flex flex-col relative z-10 py-4 px-10 md:py-8 gap-8">
            <UsernameChooser isOpen={usernameDialogOpen} setIsOpen={setUsernameDialogOpen} />
            <header className='flex items-center justify-between'>
                <h1 className="font-bold text-4xl text-white">Login</h1>
                <div className="flex flex-col">
                    <small className='text-white/30'>New Here?</small>
                    <a className='flex items-center gap-1 cursor-pointer' onClick={() => {
                        setHasAccount(false);
                    }}>
                        <small className='text-gradient font-bold text-lg'>Sign Up &rarr;</small>
                    </a>
                </div>
            </header>

            <form className='flex flex-col gap-4'>
                <input className='bg-[#121212] rounded-2xl px-4 py-3 font-medium border-none text-white' type="text" placeholder='Username/Email' onChange={handleUsernameChange} />
                <input className='bg-[#121212] rounded-2xl px-4 py-3 font-medium border-none text-white' type="password" placeholder='Password' onChange={handlePasswordChange} />

                <footer className='flex justify-between items-center mt-4'>
                    <button className="flex-[0.5] font-semibold text-white w-full button-gradient py-4 rounded-2xl" onClick={handleLogin} >Login</button>
                    <a href='#' className="flex-[0.5] w-full text-right text-white/30 font-regular">Need Help?</a>
                </footer>
            </form>

            <div className='w-[90%] mx-auto h-[1px] bg-white opacity-[0.37]' />

            <button className=" bg-[#121212] flex flex-col rounded-2xl justify-center items-center" onClick={handleMetamaskLogin}>
                <div className="flex justify-center items-center py-4 px-2" >
                    <img src="/metamask.svg" alt="Metamask logo" width={30} height={30} />
                    <small className='font-bold text-white/60 ml-4'>Continue with MetaMask</small>
                </div>
            </button>
        </div>
    )
}
