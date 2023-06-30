import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory)) return;

    setCategories((c) => [newCategory, ...c]);
  }

  return (
    <>

      {/* Titulo */}
      <h1 className="main-title">Your Favorites Gifs</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory =  { onAddCategory }
      />

      {/* Lista Gif */}
      {
        categories.map((category) => (
          <GifGrid
            key={ category }
            category={ category }
          />
        ))
      }

      {/* Gif */}

    </>
  );
}
