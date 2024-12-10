import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import NavigationPage from "../NavigationPage/NavigationPage.jsx";
import ComicNaviagtionPage from "../ComicNavigationPage/ComicNavigationPage.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState("");
  const [comicData, setComicData] = useState(null); // Store the search results
  const [characterInfo, setCharacterInfo] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
  });

  const handleCharacterSearchResults = (results) => {
    setIsLoading(false);
    setCharacterInfo(results); // Update the state when new results come in
  };

  const handleComicSearchResults = (results) => {
    setIsLoading(false);
    setComicData(results);
  };

  const handleChangeClick = () => {
    setActiveModal("change");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleProfileChange = (newName, newAvatar) => {
    setCurrentUser({ name: newName, avatar: newAvatar });
    closeActiveModal();
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
    <div className="app">
      <div className="app__wrapper">
        <Header
          handleChangeClick={handleChangeClick}
          currentUser={currentUser}
        />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/profile"
            element={<Profile isLiked={isLiked} setIsLiked={setIsLiked} />}
          ></Route>
          <Route
            path="/search"
            element={
              <NavigationPage
                handleCharacterSearchResults={handleCharacterSearchResults}
                handleComicSearchResults={handleComicSearchResults}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          ></Route>
          <Route
            path="/comic-search"
            element={
              <ComicNaviagtionPage
                handleComicSearchResults={handleComicSearchResults}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
      <EditProfileModal
        isOpen={activeModal === "change"}
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        isLoading={isLoading}
        handleProfileChange={handleProfileChange}
        currentUser={currentUser}
      />
    </div>
  );
}

export default App;
