
import React, { useEffect, useState, Suspense, lazy } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define the Recipe interface
interface Recipe {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
  reviewCount: number;
  rating: number;
  mealType: string[];
}

// Lazy load the RecipeCardItem component
const RecipeCardItem = lazy(() => import('./RecipeCardItem'));

const RecipeCard: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recipesPerPage = 6;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:my-5">
        <Suspense fallback={<div>Loading...</div>}>
          {currentRecipes.map((recipe) => (
            <RecipeCardItem recipe={recipe} key={recipe.id} />
          ))}
        </Suspense>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8 lg:pt-8 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="border rounded-full h-10 flex justify-center w-10 text-white items-center bg-primary"
          disabled={currentPage === 1}
        >
          <FaChevronLeft className="text-black" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`border rounded-full h-10 flex justify-center w-10 font-semibold text-black items-center bg-primary ${
              currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'
            } hover:bg-gray-200`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          className="border rounded-full h-10 flex justify-center w-10 text-white items-center bg-primary"
          disabled={currentPage === totalPages}
        >
          <FaChevronRight className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
