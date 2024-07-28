import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Soilreport from './Reports/Soilreport';
import Login from './Modals/Login';
import SignUp from './Modals/SignUp';
import Prediction1 from './Prediction/Prediction';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleShowSignUpModal = () => setShowSignUpModal(true);
  const handleCloseSignUpModal = () => setShowSignUpModal(false);

  return (
    <>
      <Navbar handleShowLoginModal={handleShowLoginModal} handleShowSignUpModal={handleShowSignUpModal} />
      <Card />
      <Soilreport />

      <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
      <SignUp show={showSignUpModal} handleClose={handleCloseSignUpModal} />
      {/* <Prediction1/> */}
      <Footer/>
    </>
   
  );
}

export default App;
