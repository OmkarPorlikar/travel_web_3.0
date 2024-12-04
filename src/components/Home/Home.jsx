
import NatureCard from '../NatureCard/NatureCard';
import Services from '../Services/Services';
import Itinerary from '../itinerary/Itinerary';
import Testimonial from '../Testimonials/Testimonials';
import GallerySection from '../roadmap/GallerySections';
import Destinations from '../Destinations/Destinations'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import FeaturesPage from '../../pages/FeaturePage/FeaturePage';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import Banner from '../Banner/Banner';
import ChooseUs from '../choose/ChooseUs';
import Header1 from '../header1/Header1';
import TripCards from '../../pages/roadmap_page/itinerary_page';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ContactForm from '../ContactForm/ContactForm';  
import ContactFormPage from '../../pages/ContactFormPage/ContactFormPage';
function Home() {
  return (
    <Router>
      <Routes>
        {/* Home Route with default Header */}
        <Route 
          path="/" 
          element={
            <div>
              <Header/>
              <Hero />
              <NatureCard />
              <AboutUsPage/>
              <Services />
              <Itinerary />
              <Banner/>
              <ChooseUs/>
              <Testimonial />
              <ContactForm/>
            </div>
          }
        />

        {/* Other routes with Header1 */}
        <Route 
          path="/features" 
          element={
            <>
              <Header1 />
              <FeaturesPage />
            </>
          } 
        />

        <Route 
          path="/services" 
          element={
            <>
              <Header1 />
              <ServicesPage />
            </>
          } 
        />

       <Route 
          path="/testimonials" 
          element={
            <>
              <Header1 />
            <Testimonial/>
            </>
          } 
        />

<Route 
          path="/itinerary" 
          element={
            <>
              <Header1 />
<TripCards/>
            </>
          }    
        />

        
<Route 
          path="/itinerary/:id" 
          element={
            <>
              <Header1 />
<GallerySection/>
<Destinations/>            </>
          }    
        />

<Route 
          path="/contact" 
          element={
            <>
              <Header1 />
<ContactFormPage/>
          </>
          }    
        />
      </Routes>
<Footer/>
    </Router>
  );
};


export default Home;


