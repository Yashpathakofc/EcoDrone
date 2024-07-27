import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Soilreport from './Reports/Soilreport';
import Login from './Modals/Login';
import SignUp from './Modals/SignUp';

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
    </>
  );
}

export default App;
