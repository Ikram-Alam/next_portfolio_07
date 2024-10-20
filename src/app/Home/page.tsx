import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Footer from '../../components/Footer';
import Service from '@/components/Service';
import ContactForm from '@/components/ContactForm';

export default function HomeSection() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Service/>
      <ContactForm/>
      <Footer/>
    </>
  );
}