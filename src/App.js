import React, { useState, useEffect } from 'react';
import CandidateCard from './components/CandidateCard';
import CandidateSearch from './components/CandidateSearch';
import Navbar from './components/Navbar';

import './app.css';



function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);
  const [ term, setTerm ] = useState('');

  useEffect(() => {
    fetch(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setImages(data)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
  }, [term])

  return (
    <div className="containe mx-auto">
      <Navbar />
      <CandidateSearch searchText={(text)=>setTerm(text)} />
      
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">404! Not found</h1>}

      { isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
        <div className="mx-10 grid grid-cols-3 gap-6">
          {images.map((image, index) =>(
            <CandidateCard key={index} image={image} />
          ))}
      </div>
      }
      
    </div>
  );
}

export default App;
