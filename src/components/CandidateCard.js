import React from 'react';


const CandidateCard = ({ image }) => {
    {/*const tags = image.tags.split(',');*/}
    return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg"  style={{background:"white"}}>
          <a href={"/candidate/"+image.id}>

          <img src={image.Image} alt="" className="w-full"></img>
          <div className="px-6 py-4">
            {/*<div className="font-bold text-purple-500 text-xl mb-2">
              Candidate Name : {image.user}
            </div>
            */}   
        <ul>
          <li>
            <strong>Candidate Name : </strong>{image.name}
          </li>
          <li>
            <strong>Candidate Id : </strong>{image.id}
          </li>
        </ul>   
      </div>
      </a>
      {/*<div className="px-6 py-4">
        {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full
        px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
      */}
    </div>  
    )
}

export default CandidateCard;