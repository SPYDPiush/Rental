
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { AuthProvider } from './Context/AuthContext'; 
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";
import SignIn from './SignIn';
import RoomDesc from './RoomDesc';
import RoomDetails from './RoomDetails';

function App() {

  
  // <RoomDesc photos = {image} details={details}/>
 return(
  <AuthProvider>


  <Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path = '/sign_in' element={<SignIn />} />
    <Route path='/roomdesc' element={<RoomDetails />} />
  </Routes>
  </Router>
  </AuthProvider>
 )
}

export default App;
