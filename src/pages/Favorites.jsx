import { useState, useEffect } from 'react';
import FavoriteRecipeForm from '../components/FavoriteRecipeForm';

function Favorites() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addOrUpdateRecipe = (recipe) => {
    if (recipe.id === null) {
      recipe.id = Date.now();
      setFavorites([...favorites, recipe]);
    } else {
      const updatedFavorites = favorites.map((fav) =>
        fav.id === recipe.id ? recipe : fav
      );
      setFavorites(updatedFavorites);
    }
    setRecipeToEdit(null);  // Reset the form after saving
  };

  const deleteRecipe = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>      
      <FavoriteRecipeForm onSave={addOrUpdateRecipe} recipeToEdit={recipeToEdit} />
      <ul style={{ listStyle: 'none', padding: '20px', textAlign: 'center'}}>
        {favorites.map((recipe) => (
          <li key={recipe.id}>
            {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ width: '100px', height: '100px' }} />}
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <div className="favorite-recipe-buttons">
              <button onClick={() => setRecipeToEdit(recipe)}>Edit</button>
              <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Personal Favorite Recipes</h2>
    </div>
  );
}

export default Favorites;
