import { useEffect, useState } from "react"
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner"
import Banner from "./components/Banner/Banner"
import BestBook from "./components/BestBook/BestBook"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Testimonial from "./components/Testimonial/Testimonial"
import TopBook from "./components/TopBook/TopBook"

import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./components/Modal/Modal"


function App() {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);

  return (

    
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <BestBook handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <AppStoreBanner />
      <TopBook />
      <Testimonial />
      <Footer />
      <Modal handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>
    </div>
  )
}

export default App
