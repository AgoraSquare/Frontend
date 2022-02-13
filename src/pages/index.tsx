import CardSection from '../components/LandingPage/CardSection/CardSection';
import Footer from '../components/LandingPage/Footer/Footer';
import GraphSection from '../components/LandingPage/GraphSection/GraphSection';
import HeroBanner from '../components/LandingPage/HeroBanner/HeroBanner';
import Navbar from '../components/LandingPage/Navbar/Navbar';
import RoadMap from '../components/LandingPage/RoadMap/RoadMap';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import LatestReads from '../components/LandingPage/LatestReads/LatestReads';
import MailList from '../components/LandingPage/MailListSection/MailList';

//Landing Page
export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>AGORA SQUARE</title>
      </Head>
      <Navbar />

      <main>
        <HeroBanner />
        <CardSection />
        <GraphSection />
        <RoadMap />
        <MailList />
      </main>

      <Footer />
    </div>
  )
}
