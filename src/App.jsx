import Banner from "./components/Banner/Banner"
import BestBook from "./components/BestBook/BestBook"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <BestBook />
      <Banner />
    </div>
  )
}

export default App
