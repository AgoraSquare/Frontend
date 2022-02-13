import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        
            <footer className="relative bg-[#1D1D1D] flex flex-col w-full items-center pb-4 pt-20 gap-4">
                <div className=" absolute bg-[#1D1D1D] top-0 flex flex-col p-4 h-max rounded-full translate-y-[-50%] shadow-stamp">
                    <img src="/stamp.svg" alt="" />
                </div>
                <Link href="/whitepaper" passHref>
                    <span className='text-[#fafafa] text-base font-semibold hover:cursor-pointer uppercase'>Whitepaper</span>
                </Link>
                <p className='text-sm text-white/40 text-center'>©Agora Square 2021<br />All rights reserved</p>
            </footer>
        
    )
}