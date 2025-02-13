import { useState } from 'react';
import PropTypes from 'prop-types';

function RecipeBox({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="recipe-box" onClick={() => setExpanded(!expanded)}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="tags">
        {recipe.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <h3>{recipe.title}</h3>
      {expanded && (
        <div className="recipe-details">
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.quantity} {ingredient.name}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <p><strong>Preparation Time:</strong> {recipe.prepTime}</p>
          <p><strong>Cooking Time:</strong> {recipe.cookTime}</p>
          <p><strong>Total Time:</strong> {recipe.totalTime}</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Nutritional Information:</strong> {recipe.nutrition}</p>
        </div>
      )}
    </div>
  );
}

RecipeBox.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    prepTime: PropTypes.string.isRequired,
    cookTime: PropTypes.string.isRequired,
    totalTime: PropTypes.string.isRequired,
    servings: PropTypes.string.isRequired,
    nutrition: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeBox;