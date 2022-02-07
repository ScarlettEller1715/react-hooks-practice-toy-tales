import React from "react";

function ToyCard({ name, image, likes, id, renderDelete, updateLikes }) {
  
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log("gottems!"))

    renderDelete(name)
  }

  function handleLikes() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    }
    ).then(res => res.json())
    .then(data => updateLikes(data))
  }
  
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
