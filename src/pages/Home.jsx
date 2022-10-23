import React, {useContext,useEffect, useState} from 'react'
import abiton from './img/abiton_1.jpeg'
import {ThemeContext} from './ThemeContext'


function Home(props) {
    const {theme} = useContext(ThemeContext)
    const [quote, setQuote] = useState({
        text:'today for tomorrow',
        author:'Abiton'
    })

    useEffect(()=>{
        setInterval(()=>{
            myQuotes()
        },10000) 
    },[])

    const [allQuotes, setAllQuotes] = useState([])
    useEffect(()=>{
     
        if(allQuotes.length) getQuote()
      
       
    },[allQuotes])

    const myQuotes = async () => {
        const api = "https://type.fit/api/quotes?text&name"
        const response = await fetch(api)
        setAllQuotes(await response.json())
    }

    function getQuote(){
        const randomNumber = Math.floor(Math.random() * allQuotes.length)
        const text = allQuotes[randomNumber].text
        const author = allQuotes[randomNumber].author
 
    setQuote(prevQuote => ({...prevQuote, 
                            text:text,
                            author:author}))
}

    
  return (
            <div className={`${theme}-theme`}>

            <div className='display'>
                
                <div className='clock'>
                    
                    <div className='time'>
                            <h3>{new Date().toLocaleTimeString()}</h3>
                    </div>

                    <div className='quotes'>
                            <p > {quote.text}:  </p>
                            <p className='author'>{quote.author}  </p>                        
                    </div>
                </div>

                < div className='name-img'>
                            <h1 className="title_intro">
                                Hi, I am <br/> <strong>Abiton Padera</strong>
                            </h1>
                            <p className='location'>Port Elizabeth, SA</p>
                            
                            <div className='image_tit'>
                                <div className='underline'></div>
                                <img src={abiton} alt="" className='my-image'/>
                                <p className="title">front-end dev</p>
                            </div>
                        
                </div>
            
            </div>
        </div>
  )} 

export default Home

