import { Dispatch, SetStateAction, useState } from "react";
import { Dialog } from '@headlessui/react'
import { useQuery, useLazyQuery, useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../../store/slices/authSlice";
import { setUser } from "../../store/slices/userSlice"

const FIND_USERNAME = gql`
    query FindUserName($username: String!) {
        findUserName(username: $username) {
            username,
            available,
            message
        }
    }
`

const SIGNUP_USER = gql`
    mutation RegisterUser($registerInput: RegisterInput!) {
        register(registerInput: $registerInput) {
            id,
            email,
            token,
            username,
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

const UserNameDialog = ({email, pass, usernameDialogOpen, setusernameDialogOpen }: {email:String, pass: String, usernameDialogOpen: boolean, setusernameDialogOpen:Dispatch<SetStateAction<boolean>>}) => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();
    let demoRef = useRef(null);

    // ? Username search query
    const { data, loading, error, refetch } = useQuery(FIND_USERNAME, {
        variables: { username: username },
    })

    // ? RegisterUser Mutation
    const [registerUser, {data: registerData, loading: registerLoading, error: registerError}] = useMutation(SIGNUP_USER);
    const [ getUserData, { data: userData, loading: userLoading, error: userError }] = useLazyQuery(GET_USERDATA);

    if (registerLoading) {
        console.log('Registering user...');
    }

    if (registerError) {
        console.log(registerError);
    }

    if (registerData){
        console.log("data ", registerData);

    }

    useEffect(() => {
        if(registerData) {
            dispatch(login({
                token: registerData?.register.token
            }))
            getUserData(
                {
                    context: {
                        headers: {
                            authorization: `Bearer ${registerData?.register.token}`
                        }
                    }
                }
            )
            .catch(err => console.log(err))
        }
    },[registerData])

    useEffect(() => {
        if(userData) {
            dispatch(setUser(userData?.getUserData))
            router.push('/feed')
        }
    }, [userData])

    const message = () => {

        if  (username === '') {
            return <></>
        }

        if (username.length < 4) {
            return <p className="font-medium text-sm text-red-500">Username must be at least 4 characters</p>
        }

        if (loading) {
            return <p className='font-medium text-sm text-white/30'>finding....</p>
        }

        if (error) {
            return <p className='font-medium text-sm text-red-500'>{error.message}</p>
        }

        if (data) {
            if (data.findUserName.available) { 
                // setUsernameAvailable(true)
                return <p className='font-medium text-sm text-green-400'>{data.findUserName.message}</p>
            } else { 
                // setUsernameAvailable(false)
                return <p className='font-medium text-sm text-red-500'>{data.findUserName.message}</p>
            }
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const getButtonColor = () => {
        if (username !== '' && username.length >= 4 && data && data.findUserName.available) {
            return 'button-gradient text-white'
        } else{
            return 'bg-[#121212] text-white/30'
        }
    }

    const handleContinueClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (username !== '' && username.length >= 4 && data && data.findUserName.available && name !== '') {
            registerUser({
                variables: {
                    registerInput: {
                        email: email,
                        password: pass,
                        username: username,
                        name: name
                    }
                }
            })
            .catch(error => {
                if (error.message.includes('Username is already taken')) {
                    console.log('Username is already taken');
                    refetch();
                }
            })
            
        }

    }

    return (
        <Dialog open={usernameDialogOpen} initialFocus={demoRef} onClose={() => setusernameDialogOpen(false)}
            className="fixed z-20 inset-0 overflow-y-auto">

                <button ref={demoRef} className="absolute opacity-0 bottom-0"></button>

            <div  className="flex items-center justify-center min-h-screen backdrop-blur-sm">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-80 " />

                <div  className="relative bg-[#212427] ring-[12px] ring-white/10 rounded-2xl max-w-xs sm:max-w-sm w-full mx-auto px-10 py-8 gap-4">
                    <Dialog.Title className="text-white text-sm  font-medium py-2">Complete Profile</Dialog.Title>
                    <Dialog.Description className="text-white/30 text-xs  pb-2">
                        Username should be unique
                    </Dialog.Description>

                    <form  className="w-full flex flex-col gap-3">
                        <input  className={`bg-[#121212]  rounded-2xl px-4 py-3 font-medium border-none text-white focus:outline-none text-sm `} 
                            onChange={handleUsernameChange} placeholder="Username"/>

                        <input type="text" className={`bg-[#121212] mt-2 rounded-2xl px-4 py-3 font-medium border-none text-sm text-white focus:outline-none `} 
                            onChange={handleNameChange} placeholder="Display Name" />
                        <div className={`flex w-full `}>
                            {message()}
                        </div>
                    </form>


                    <button onClick={handleContinueClick}
                        className={` text-base py-3 px-2 w-full rounded-2xl mt-4 font-semibold  ${getButtonColor()}`}>
                            Continue
                        </button>
                </div>
            </div>
        </Dialog>
    );
}


export default UserNameDialog;