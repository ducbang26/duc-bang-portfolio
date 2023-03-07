import { Footer, Navbar } from '../components';
import CustomCursor from '../components/CustomCursor';
import { About, Explore, GetStarted, Hero, Insights, Skills, WhatsNew } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <CustomCursor />
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Skills />
    </div>
    <Footer />
  </div>
);

export default Home;
