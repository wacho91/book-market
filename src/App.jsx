import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner"
import Banner from "./components/Banner/Banner"
import BestBook from "./components/BestBook/BestBook"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import TopBook from "./components/TopBook/TopBook"


function App() {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <BestBook />
      <Banner />
      <AppStoreBanner />
      <TopBook />
    </div>
  )
}

export default App
