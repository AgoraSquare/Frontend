import { SetStateAction,Dispatch } from "react";
import { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import UserNameDialog from "./UserNameDialog";

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

const FIND_EMAIL = gql`
    query FindEmail($email: String!) {
        findEmail(email: $email) {
            email,
            available,
            message
        }
    }
`

const FIND_USERNAME = gql`
    query FindUsername($username: String!) {
        findUsername(username: $username) {
            username,
            available,
            message
        }
    }
`

export default function Signup({setHasAccount}:{setHasAccount:Dispatch<SetStateAction<boolean>>}) {

    const [register, { data, loading, error }] = useMutation(SIGNUP_USER);

    const [usernameDialogOpen, setUsernameDialogOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [passmatch, setPassMatch] = useState(true);
    const [passCheck, setPassCheck] = useState(false);
    
    // const { data: emailCheckData, loading: emailCheckLoading, error: emailCheckError, refetch } = useQuery(FIND_EMAIL, {
    //     variables: { email: email },
    // });

    // if (emailCheckLoading) {
    //     console.log('Checking email...');
    // }

    // if (emailCheckError) {
    //     console.log(emailCheckError);
    // }

    // if (emailCheckData) {
    //     console.log(emailCheckData);
    // }

    const handleRegister = () => {

    }

    const handleFindEmail = () => {

    }

    useEffect(() => {
        if (pass1 === pass2) {
            setPassMatch(true);
        } else {
            setPassMatch(false);
        }
    },[pass2])

    useEffect(() => {
        if (pass1 === pass2) {
            setPassMatch(true);
        } else {
            setPassMatch(false);
        }
    },[pass1])

    useEffect(() => {
        if (pass1 !== '' && pass2 !== '') {
            setPassCheck(passwordCheck(pass1) && passwordCheck(pass2));
        } else {
            setPassCheck(false);
        }
    },[pass1, pass2])

    const handlePass1Change = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPass1(e.target.value);
    }

    const handlePass2Change = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPass2(e.target.value);
        
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const emailCheck = (email: string) => {
        if(email.trim() === ''){
            return false;
        } else {
            const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (email.match(regEx)) {
                return true;
            }
            return false;
        }
    }

    const passwordCheck = (password: string) => {
        if(password.trim() === ''){
            return false;
        } else {
            const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})/;
            if (password.match(regEx)) {
                return true;
            }
            return false;
        }
    }

    const handleContinueClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // changeUserNameDialog();
        // console.log('Continue clicked', usernameDialogOpen);
        
        if (emailCheck(email) && passCheck && pass1 === pass2) {
            setUsernameDialogOpen(true);
        }
    }

    const changeUserNameDialog = () => {
        setUsernameDialogOpen((prev) => !prev);
    }

    const getButtonColor = () => {
        if (passCheck && pass1 === pass2 && emailCheck(email)) {
            return 'button-gradient text-white';
        } else {
            return 'bg-[#121212] text-white/30 ';
        }
    }

    const isEightChar = () => {
        if (pass1.length >= 8 ) {
            return true;
        }
        return false;
    }


    return (
        
        <div className="w-full md:w-auto md:ring-[14px] md:ring-white/10  bg-[#212427] md:rounded-[32px] md:min-w-[600px] flex flex-col relative z-10 py-4 px-10 md:py-8 gap-8">
            <header className='flex items-center justify-between'>
                <h1 className="font-bold text-4xl text-white">Sign Up</h1>
                <div className="flex flex-col">
                    <small className='text-white/30'>Old Here?</small>
                    <a className='flex items-center gap-1 cursor-pointer' onClick={() => {
                        setHasAccount(true);
                    }}>
                        <small className='text-gradient font-bold text-lg'>Login &rarr;</small>
                    </a>
                </div>
            </header>

            { usernameDialogOpen && <UserNameDialog email={email} pass={pass1} setusernameDialogOpen={setUsernameDialogOpen} usernameDialogOpen={usernameDialogOpen} />}
            <form className='flex flex-col gap-4'>
                <input className={`bg-[#121212] rounded-2xl px-4 py-3 font-medium border-none text-white `}
                    type="text" placeholder='Email' onChange={handleEmailChange}/>
                <input className={`bg-[#121212] rounded-2xl px-4 py-3 font-medium  text-white ${passmatch ? 'border-none' : 'border-red-500 '}`} 
                    type="password" placeholder='Password' onChange={handlePass1Change} />
                    <ul className={`flex flex-col w-full pb-1 px-4 ${passCheck ? '' : ''}`}>
                        <li className='font-medium text-xs text-white/30 flex items-center gap-1'><div className={`w-1 h-1 rounded-full   ${isEightChar() ? 'bg-green-400': 'bg-red-400'} ${pass1 ==="" || pass2 === ''? "bg-white/30" : ''}`} /> Password must be 8 digits long</li>
                        <li className='font-medium text-xs text-white/30 flex items-center gap-1'><div className={`w-1 h-1 rounded-full  ${passCheck ? 'bg-green-400': 'bg-red-400'} ${pass1 ==="" || pass2 === ''? "bg-white/30" : ''}`} /> Password must contain atleast 1 uppercase, lowercase, digit and special charater </li>
                    </ul>
                <input className='bg-[#121212] rounded-2xl px-4 py-3 font-medium border-none text-white' type="password" placeholder='Confirm Password' onChange={handlePass2Change} />
                    <div className={`flex w-full pb-1 px-4 ${passmatch ? 'hidden' : ''}`}>
                        <p className='font-medium text-sm text-red-500'>Password didn&apos;t match</p>
                    </div>
                {/* <input type="text" placeholder='Username' /> */}

                <button className={`py-4 rounded-2xl mt-4 font-semibold ${getButtonColor()}`}
                    onClick={handleContinueClick}
                    >
                    Continue
                </button>
            </form>
        </div>
    )
}