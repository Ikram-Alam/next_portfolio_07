import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import Footer from '../../components/Footer';
import Service from '@/components/Service';
import ContactForm from '@/components/ContactForm';
import Project from '@/components/Project';

export default function HomeSection() {
  return (
    <>
      <Navbar/>
      <Project/>
      <Footer/>
    </>
  );
}