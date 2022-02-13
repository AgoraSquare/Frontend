import { v4 as uuid } from 'uuid';
import NFTModal from '../NFTModal/NFTModal';
import styles from './Collectibles.module.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useResize from '../../../utils/useResize';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { useRouter } from 'next/router';

const UPDATE_PROFILE = gql`
    mutation UpdateProfile($imgUrl: String!) {
        updateUserImgUrl(img_url: $imgUrl) {
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
`

const POST_NFT = gql`
    mutation PostNFT($nftPostInput: NFTPostInput!) {
        createNFTPost(nftPostInput: $nftPostInput) {
            id
            isNFT
            nft {
                permalink
                img_url
                collection
                description
                title
            }
        }
    }
`

export default function Collectibles({ walletAddress } : { walletAddress: string }) {

    const [nfts, setNfts] = useState([]);
    const options = { method: 'GET' }
    const [imgUrl, setImgUrl] = useState('');

    const uWalletAddress  = useSelector((state: RootState) => state.user.walletAddress);

    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();

    const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        },
        fetchPolicy: 'network-only'
    })

    useEffect(() => {
        if (data) {
            dispatch(setUser(data.updateUserImgUrl));
        }
    }, [data])


    useEffect(() => {
        if (imgUrl !== "") {
            updateProfile({ variables: { imgUrl } })
        }
    },[imgUrl])

    useEffect(() => {
        fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&offset=0&limit=20`, options)
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    setNfts(data.assets);
                })
            })
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }, [walletAddress])

    // console.log("Collectibles Rendered");
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-2 items-center">
            {nfts.map((nft) => (
                <CollectibleCard key={uuid()} data={nft} setImgUrl={setImgUrl} owner={ uWalletAddress === walletAddress } />
            ))}
        </div>
    )
}

const CollectibleCard = ({data, setImgUrl, owner}: {data : any, setImgUrl: Dispatch<SetStateAction<string>>, owner: boolean}) => {
    // console.log("CollectibleCard Rendered");
    // const [showModal, setShowModal] = useState(false);
    // const [flag] = useResize(520);

    const token = useSelector((state: RootState) => state.auth.token);

    const router = useRouter();
    const [postNFT, { data: postData, loading: postLoading, error: postError }] = useMutation(POST_NFT, {
        context: {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
    })

    useEffect(() => {
        if (postData) {
            router.push(`/posts/${postData.createNFTPost.id}`);
        }
    }, [postData])


    const handleClick = async () => {
        postNFT({
            variables: {
                nftPostInput: {
                    body: "",
                    nftTitle: data.name,
                    nftDescription: data.description,
                    nftCollection: data.collection.name,
                    nftImgUrl: data.image_url,
                    nftPermalink: data.permalink,
                }
            }
        })
        .catch(err => console.error(err));

    }

    return (
        <>
            <div className='group relative w-[100%] h-56 rounded-[12px] border border-[#212427] flex flex-col gap-1 items-center p-1'>
                <div className='h-[80%] w-full bg-[#212427] rounded-[10px] overflow-hidden relative'>
                    <img className='w-full h-full object-cover object-center' src={data.image_url} alt="" />
                    { owner &&
                    <div onClick={() => setImgUrl(data.image_url)} className='cursor-pointer absolute top-[5%] right-[5%] bg-[#212427] rounded-[8px] transition-all opacity-0 bg-opacity-25 backdrop-blur-lg group-hover:opacity-100 text-xs text-white/60 px-2 py-1'>
                        Set as profile
                    </div>
                    }
                </div>
                <div className='flex flex-col self-start px-2 h-[20%] justify-evenly'>
                    <p className='uppercase text-[10px] text-white/30 max-w-full line-clamp-1'>{data.collection.name}</p>
                    <p className='text-xs text-white/80 max-w-full line-clamp-1'>{data.name}</p>
                </div>
                { owner &&
                <div onClick={handleClick} className='absolute cursor-pointer bottom-2 right-2 p-2 opacity-0 transition-opacity group-hover:opacity-100'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8327 9.16602L17.666 2.33268M18.3327 5.66602V1.66602H14.3327M9.16602 1.66602H7.49935C3.33268 1.66602 1.66602 3.33268 1.66602 7.49935V12.4993C1.66602 16.666 3.33268 18.3327 7.49935 18.3327H12.4993C16.666 18.3327 18.3327 16.666 18.3327 12.4993V10.8327" stroke="#6A6A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                }
            </div>
        </>
    )
}
