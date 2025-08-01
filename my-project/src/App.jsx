import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./MovieList";
import Footer from "./Footer";
import { MovieContext, ThemeContext } from "./Context";
import Page from "./Page";
  import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [cartData, setCardData]=useState([])
 const [darkMode, setDarkMode]=useState(true)


  
  return (

    
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    <MovieContext.Provider value={{cartData, setCardData}}>
     <Page/>
             <ToastContainer />

      </MovieContext.Provider>
      </ThemeContext.Provider>
  
  );
}

export default App;
