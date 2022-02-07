import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, renderDelete, updateLikes }) {
  
  const renderToys = toys.map((toy) => {
    console.log(toy.id)
    return <ToyCard key={toy.id} 
                    name={toy.name} 
                    image={toy.image} 
                    likes={toy.likes} 
                    renderDelete={renderDelete} 
                    id={toy.id}
                    updateLikes={updateLikes}/>
  })
  
  return (
    <div id="toy-collection">
      {renderToys}
      </div>
  );
}

export default ToyContainer;
