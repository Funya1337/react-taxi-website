import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home