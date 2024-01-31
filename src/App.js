import React,{ useState } from 'react';
import people from './data.js';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa';

function App() {

  const[index,setIndex] = useState(0);
  const {name , job , image, text} = people[index];

  const randomValue = () => {
    setIndex(()=>{
      let randomNumber = Math.floor(Math.random() * people.length);
      if(randomNumber === index)
      {
        randomNumber = (randomNumber+2)%people.length;
      }
      return randomNumber;
    })
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={()=>{ setIndex((currentIndex)=>{
              return (currentIndex!==0)?(currentIndex-=1)%(people.length):(currentIndex+=(people.length-1))%(people.length);
          }) }}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={()=>{ setIndex((currentIndex)=>{
              return (currentIndex+=1)%(people.length);
            }) }}>
            <FaChevronRight/>
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomValue}>Surprise Me</button>
      </article>
    </main>
  );
}

export default App;
