import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


//Components
import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Contact from './components/Contact/Contact.jsx';
import Details from "./components/Details/Details.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Posts from './components/Posts/Posts.jsx';

function App() {

  return (
    <Router>
     <Navbar/>
     <Routes>
       {/* <Route index exact element={<Home/>} /> */}
       <Route path='/contact' exact element={<Contact/>} />
       <Route path='/home' exact element={<Home />} />
       <Route path='/details' exact element={<Details />} />
       <Route path='/posts' exact element={<Posts />} />
       {/* <Route path='/games' element={<Games/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/sign-up' element={<SignUp/>}/> */}
     </Routes>
     
     <Footer />
   </Router> 
  )
}

export default App
