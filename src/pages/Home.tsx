
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import EventsSection from '../components/EventsSection';
import OrganizersSection from '../components/OrganizersSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="about">
        <Introduction />
      </div>
      <div id="events">
        <EventsSection />
      </div>
      <OrganizersSection />
      <Footer />
    </div>
  );
};

export default Home;