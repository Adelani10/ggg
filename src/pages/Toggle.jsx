import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Toggle (props){
  const {theme, toggleTheme} = useContext(ThemeContext)
    
  return (
    
  <div >
    <button id='switch' className={`${theme}-theme`} onClick={toggleTheme}>switch theme</button>
  </div>
)} 

export default Toggle