//importer les modules necessaires
import React, {useState, useEffect} from 'react'

// importer les images du slider(carrousel)
import slider1 from '../assets/images/1.jpg'
import slider2 from '../assets/images/2.jpg'
import slider3 from '../assets/images/3.jpg'
import slider4 from '../assets/images/4.jpg'
import slider5 from '../assets/images/5.jpg'
import slider6 from '../assets/images/6.jpg'

const Home = (props) => {
    
    const [index, setIndex] = useState(0)
    const [timer, setTimer] = useState(null)
    const [timer2, setTimer2] = useState(null)
    
    let slides = [
    	{slide: slider1, legend: "legend 1"},
    	{slide: slider2, legend: "legend 2"},
    	{slide: slider3, legend: "legend 3"},
    	{slide: slider4, legend: "legend 4"},
    	{slide: slider5, legend: "legend 5"},
    	{slide: slider6, legend: "legend 6"}
    ]
    
    
    
    function getRandomInteger(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    const  onSliderGoToNext = () => { 
        console.log("index: ", index)
        index < slides.length -1 ? setIndex((index) => index +1) : setIndex((index) => 0)
    }
    
    const onSliderGoToPrevious = () => {
        console.log("index: ", index)
        index > 0 ? setIndex((index) => index - 1) : setIndex((index) => slides.length -1)
    }
    
    const onSliderRandom = ()=>{
        if(timer2 === null){
            setTimer(clearInterval(timer))
            setTimer(null)
            setTimer2(setInterval(()=>{
                setIndex((index) => getRandomInteger(0, slides.length-1));
            },3000))
       }else{
           setTimer2(clearInterval(timer2))
           setTimer2(null)
       }
    }
    
    const playPause = () => {
        if(timer2 !== null){
           setTimer2(clearInterval(timer2))
           setTimer2(null)
        }
        else if(timer === null){
           setTimer(setInterval(()=>{
               setIndex((index) => index < slides.length -1 ? index +1 : 0);
           }, 3000))
            
        }else{
            setTimer(clearInterval(timer))
            setTimer(null)
        }
    }

    return(<section>
        <h1> Bienvenue au Musée de la photographie</h1>
        <nav> 
            <button onClick = {onSliderGoToPrevious} > Précedent</button>
            <button onClick = {playPause} > Play/Pause </button>
            <button onClick = {onSliderGoToNext} > Suivent</button>
            <button onClick = {onSliderRandom} > Au pif </button>
        </nav>
        {<figure id="slider" className="slider">
            <img src={`${slides[index].slide}`} alt={slides[index].legend}/>
            <figcaption>{slides[index].legend}</figcaption>
        </figure>}
    </section>)
}

export default Home