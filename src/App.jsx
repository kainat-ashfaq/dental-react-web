import Slider from './components/slider'
import Cards from './components/Card'
import Treatment from './components/Treatment'
import Dentist from './components/Dentists'
import Appointment from './components/appointment'
import Blog from './components/Blog'
// import Footer from './components/Footer'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Slider/>
   <Cards/>
   <Treatment/>
   <Dentist/>
   <Appointment/>
   <Blog/>
   {/* <Footer/> */}
   <Footer/>
    </>
  )
}

export default App
