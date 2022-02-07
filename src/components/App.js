import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

  function renderDelete(deletedName) {
    const shortenedToys = toys.filter((toy) => {
      if (toy.name === deletedName) {
        return null
      } else {
        return toy
      }
    })
    setToys(shortenedToys)
  }

  function updateLikes(updatedToy) {
    const updatedToys = toys.map((toy) => {
      if (toy.name === updatedToy.name) {
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(updatedToys)
  }

  function updateToys(newToy) {
    setToys([
      ...toys,
      newToy
    ])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToys={updateToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} renderDelete={renderDelete} updateLikes={updateLikes}/>
    </>
  );
}

export default App;
