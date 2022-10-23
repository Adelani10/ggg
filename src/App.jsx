import AboutMe from './pages/AboutMe'
import MyWork  from './pages/MyWork'
import Services from './pages/Services'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import { Route, Routes } from 'react-router-dom'
import SocialMedia from './pages/SocialMedia'
import Toggle from './pages/Toggle'
import React, { useContext } from 'react'
import { ThemeContext } from './pages/ThemeContext'


export default function App () {
  const {theme} = useContext(ThemeContext)

  return (
    < div id="App" className={`${theme}-theme`} >        
           <NavBar/>
          <div className='top-display'>
              <SocialMedia/>
              <Toggle/>
          </div>

         <Routes>
           <Route exact path='/' element={<Home/>}/> 
           <Route path='/Services' element={<Services/>}/>
           <Route path='/AboutMe'  element={<AboutMe/>}/>
           <Route path='/MyWork' element={<MyWork/>}/> 
         
         </Routes>          
    </div>
  )
  }

  



