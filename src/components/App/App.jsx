import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import viteLogo from '/vite.svg'
import Header from '../Header/Header.jsx';
import Banner from '../Banner/Banner.jsx';
import Search from '../Search/Search.jsx';
import Main from '../Main/Main.jsx';
import Profile from '../Profile/Profile.jsx';
import CharacterCard from'../ItemCard/ItemCard.jsx';
import NavigationPage from '../NavigationPage/NavigationPage.jsx';
import './App.css'
import EditProfileModal from '../EditProfileModal/EditProfileModal.jsx';

function App() {
  const [activeModal, setActiveModal] = useState('');
  const [selectedCard, setSelectedCard] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeClick = () => {
    setActiveModal('change');
  }

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
    
  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Header handleChangeClick={handleChangeClick}/>
        <Routes>
          <Route path='/' element={
            <Main/>
          }>
          </Route>
          <Route path='/profile' element={
            <Profile isLiked={isLiked} setIsLiked={setIsLiked}/>
          }>  
          </Route>
          <Route path='/search' element={
            <NavigationPage />
          }>
          </Route>
        </Routes>
      </div>
      <EditProfileModal isOpen={activeModal === 'change'} activeModal={activeModal} closeActiveModal={closeActiveModal}/>
    </div>
  )
}

export default App
