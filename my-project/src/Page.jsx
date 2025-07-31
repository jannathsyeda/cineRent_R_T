import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import MovieList from './MovieList'
import Footer from './Footer'
import { ThemeContext } from './Context'
import { useContext } from 'react'

export default function Page() {
  const { darkMode } = useContext(ThemeContext) 

  return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>

     <Header />
    
          <main>
            <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <SideBar />
              <MovieList />
            </div>
          </main>
          <Footer /></div>
  )
}
