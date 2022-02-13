import { useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { IconButton } from '@material-ui/core';
import { usePopper } from 'react-popper'
import Link from 'next/link';
import { Fragment } from 'react'

const PopoverL = () => {
    let [referenceElement, setReferenceElement] = useState<null | HTMLElement>()
    let [popperElement, setPopperElement] = useState<null | HTMLElement>()
    let { styles, attributes } = usePopper(referenceElement, popperElement)

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button ref={setReferenceElement}>
                        <i className="ri-filter-3-fill text-gray-200 bg-white/10 p-2 rounded-full my-auto"></i>
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >

                        <Popover.Panel 
                            className="bg-[#121212] ring-4 ring-[#212427] rounded-xl absolute z-10 w-max top-2 drop-shadow-lg transform -translate-x-[85%] translate-y-[20%] right-1/2"
                            // className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 right-1/2 sm:px-0 lg:max-w-3xl"
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            <div className="flex flex-col px-4 py-6 rounded-xl gap-6 items-center">
                                {/* <Link href="/whitepaper">
                                    <span className="transition-all ease-in-out duration-300 cursor-pointer text-white font-medium text-sm  hover:tracking-widest" >WHITEPAPER</span>
                                </Link> */}
                                {/* <Link href="/">
                                    <a className="cursor-pointer text-white text-sm" >JOIN <span className="text-[#5865F2] font-bold">DISCORD</span></a>
                                </Link> */}
                                <Link href="https://ez6ilepcd7z.typeform.com/to/RqcrWql0">
                                    <div className="cursor-pointer group flex flex-col justify-center items-center p-[0.1rem] bg-gradient-to-r from-[#84B9D1] to-[#D2B4FC] rounded-xl">
                                        <p className="transition-all ease-in-out duration-300 w-full h-full bg-[#1c1c1c] group-hover:bg-transparent rounded-[0.65rem] px-3 py-2 text-white text-sm" >SIGN UP
                                            <span className="transition-all ease-in-out duration-300 text-xs font-bold ml-2 text-gradient group-hover:text-gradient-dark">  BETA Test</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </Popover.Panel>

                    </Transition>
                </>
            )}
        </Popover>
    );
}

export default PopoverL;