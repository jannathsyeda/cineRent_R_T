import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./MovieList";
import Footer from "./Footer";
import { MovieContext } from "./Context";

function App() {

  const [cartData, setCardData]=useState([])

  return (
    <>
    <MovieContext.Provider value={{cartData, setCardData}}>
      <Header />

      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
