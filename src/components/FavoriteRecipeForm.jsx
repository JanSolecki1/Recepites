import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FavoriteRecipeForm({ onSave, recipeToEdit }) {
  const [recipe, setRecipe] = useState(
    recipeToEdit || { title: '', ingredients: '', instructions: '', image: '', id: null }
  );

  useEffect(() => {
    if (recipeToEdit) {
      setRecipe(recipeToEdit);
    }
  }, [recipeToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setRecipe({ ...recipe, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(recipe);
    setRecipe({ title: '', ingredients: '', instructions: '', image: '', id: null });
  };

  return (
    <form onSubmit={handleSubmit} className="favorite-recipe-form">
      <input
        type="text"
        name="title"
        value={recipe.title}
        onChange={handleChange}
        placeholder="Title (max 30 characters)"
        maxLength="30"
        required
      />
      <textarea
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        placeholder="Ingredients (max 100 characters)"
        maxLength="100"
        required
      />
      <textarea
        name="instructions"
        value={recipe.instructions}
        onChange={handleChange}
        placeholder="Instructions (max 500 characters)"
        maxLength="500"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">{recipe.id ? 'Update' : 'Add'} Recipe</button>
    </form>
  );
}

FavoriteRecipeForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  recipeToEdit: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    ingredients: PropTypes.string,
    instructions: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default FavoriteRecipeForm;