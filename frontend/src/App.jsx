
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { AuthProvider } from './Context/AuthContext'; 


function App() {

  // const image = [img,img2,img,img2,img,img2,img,img2]
  // const details = {
  //   bathroom:2,
  //   bedroom : 2,
  //   kitchen : 3,
  //   balcony : 5
  // }
  // <RoomDesc photos = {image} details={details}/>
 return(
  <AuthProvider>


  <Router>
  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  </Router>
  </AuthProvider>
 )
}

export default App;
