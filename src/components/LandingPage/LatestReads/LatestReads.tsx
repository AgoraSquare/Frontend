import styles from './LatestReads.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { v4 as uuid } from 'uuid';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function LatestReads() {
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                }
            }
        ]
    }

    const { ref: textRef, inView: textInView } = useInView();
    const { ref: cardRef, inView: cardInView } = useInView({
        threshold: .2
    });
    const animateText = useAnimation();
    const animateCard = useAnimation();

    useEffect(() => {
        if (textInView) {
            animateText.start({
                opacity: 1,
                x: 0,
                transition: {
                    delay: .7,
                    duration: .5
                }
            });
        }
    }, [textInView]);

    useEffect(() => {
        if (cardInView) {
            animateCard.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1
                }
            })
        }
    }, [cardInView]);

    return (
        <div className={styles.latestReads}>
            <motion.h2 initial={{
                opacity: 0,
                x: -50
            }}
                animate={animateText}
                ref={textRef}>
                Latest Reads
            </motion.h2>
            <motion.div initial={{
                opacity: 0,
                scale: .9
            }} animate={animateCard} ref={cardRef}>
                <Slider {...settings}>
                    {Array(8).fill(0).map((_) => (
                        <Card key={uuid()} />
                    ))}
                </Slider>
            </motion.div>
        </div >
    )
}

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.banner}>
                <img src='/news_bg.png' alt="News bg" />
            </div>
            <div className={styles.bottombar}>
                <h3>Agora, The next Big Thing!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <strong>12 Nov 2021</strong>
            </div>
        </div>
    )
}

//Custom NextArrow for react-slick
function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            onClick={onClick}
        >
            <img src="/rightArrow.svg" alt="Right Arrow" className={styles.nextArrow} />
        </div>
    );
}

//Custom PrevArrow for react-slick
function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <img src="/prevArrow.svg" alt="Right Arrow" className={styles.prevArrow} />
        </div>
    );
}