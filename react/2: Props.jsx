import React from "react";

// Comparison 2: PROPS
function DogBreed({ breed }) {
  return (
    <p>You picked the breed: {breed}</p>
  )
}

// similar access to props as Svelte
<App breed={breed}/> 

export default DogBreed;