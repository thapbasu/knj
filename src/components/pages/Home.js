import React from 'react';
import Hero from '../hero/Hero';
import '../../App.css';
import Welcome from '../Welcome/Welcome';
import Offer from '../Offer/Offer';
import Language from '../Language-Approach/language';
import ContactForm from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Offer />
      <Language />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
