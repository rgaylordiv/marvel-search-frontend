import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import NavigationPage from "../NavigationPage/NavigationPage.jsx";
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

  const handleCharacterSearchResults = (results) => {
    setIsLoading(false);
    setCharacterInfo(results); // Update the state when new results come in
  };

  const handleComicSearchResults = (results) => {
    setIsLoading(false);
    setComicData(results);
  };

  // const generateHash = (timeStamp) => {
  //   return md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);
  // };

  // const timeStamp = new Date().getTime();
  // const hash = generateHash(timeStamp);

  // const getComicData = (characterId) => {
  //   setCharacterInfo(null);
  //   setComicData(null);

  //   const comicUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&limit=100`;

  //   fetch(comicUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setComicData(result.data || { results: [] });
  //       handleComicSearchResults(result.data); // was onComicSearchResults
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.error("Error message:" + err);
  //     });
  // };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   getCharacterData();
  // };

  // const handleChange = (evt) => {
  //   setCharacter(evt.target.value);
  // };

  // const getCharacterData = () => {
  //   setCharacterInfo(null);
  //   setComicData(null);

  //   const characterUrl = `http://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${character}&limit=100`;

  //   fetch(characterUrl)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCharacterInfo(result.data || { results: [] });
  //       handleCharacterSearchResults(result.data); // was onCharacterSearchResults
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.error("Error message:" + err);
  //     });
  // };

  const handleChangeClick = () => {
    setActiveModal("change");
  };

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
    <div className="app">
      <div className="app__wrapper">
        <Header handleChangeClick={handleChangeClick} />
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
                // getComicData={getComicData}
                // getCharacterData={getCharacterData}
                // handleSubmit={handleSubmit}
                // handleChange={handleChange}
              />
            }
          ></Route>
        </Routes>
      </div>
      <EditProfileModal
        isOpen={activeModal === "change"}
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        isLoading={isLoading}
      />
      {/* <Preloader /> */}
    </div>
  );
}

export default App;
