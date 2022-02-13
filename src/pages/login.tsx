import LoginCard from '../components/LoginCard/LoginCard';
import Signup from '../components/Signup/Signup';
import styles from '../styles/Login.module.scss';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';


const PING = gql`
    query Ping {
        ping
    }
`

export default function Login() {
    const [hasAccount, setHasAccount] = useState(true);

    const { data, loading, error } = useQuery(PING);

    console.log(data, loading, error);

    

    return (
        <div className="min-h-screen md:h-full bg-[#212427] md:bg-[#121212] flex flex-col lg:flex-row items-center justify-center px-0 lg:px-20 2xl:px-48 overflow-hidden">
            <div className="flex-[0.3] text-center items-center flex flex-col justify-end md:justify-center">
                <img className=' w-[200px]  lg:w-[300px]' src="/logo.svg" alt="Logo" width={140} height={140} />
                <footer className="hidden lg:block mt-10">
                    <small className='text-white/30'>
                        Privacy Policy<br />
                        Terms & Conditions
                    </small>
                </footer>
            </div>

            <div className="flex-[0.7] relative flex items-center justify-center w-full sm:w-auto ">
                <div className="hidden md:block transition-all ease-in duration-500 absolute leading-[0px] text-[0px] translate-y-[5%] z-[9]">
                    <img className='w-full h-full object-scale-down rotate-[90deg]' src="/gb_light.svg" alt="background image" width={120} height={120} />
                </div>
                {hasAccount ? <LoginCard setHasAccount={setHasAccount} /> : <Signup setHasAccount={setHasAccount} />}
            </div>

            <footer className="text-center lg:hidden py-4">
                <small className='text-white/30'>
                    Privacy Policy<br />
                    Terms & Conditions
                </small>
            </footer>

            <div className={`w-1 h-1 rounded-full absolute bottom-4 right-4 ${data ? 'bg-green-400' : 'bg-gray-400'} ${error ? 'bg-red-400': ''}`}>

            </div>

        </div>
    )
}
