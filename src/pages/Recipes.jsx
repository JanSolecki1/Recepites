import { useState } from 'react';
import recipes from '../data/recipes'; // Adjust the path as needed
import RecipeBox from '../components/RecipeBox'; // Adjust the path as needed

function Recipes() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All','Baking','Bread','Dessert', 'Cookies'];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === 'All' || recipe.tags.includes(category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className='search-container'>
        <div className='search-bar'>
          <input 
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeBox key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <h2>Our Recipes</h2>
    </div>
  );
}

export default Recipes; // Ensure this line is present