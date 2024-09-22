import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaCheck } from "react-icons/fa6";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-[1180px] mx-auto py-10 px-4 sm:px-6 lg:px-8 lg:my-28 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-48">
        {/* Left Column - Recipe Details */}
        <div className='bg-[#8B888836] md:order-1 order-2 p-5 rounded-[28px]'>
          <h1 className="text-2xl font-montserrat font-medium mb-4">{recipe.name}</h1>
          <div className="mb-4">
            {recipe.instructions.map((instruction, index) => (
              <p key={index} className="text-[#49454F] ">
                {instruction}
              </p>
            ))}
          </div>
          <h2 className="text-xl font-normal mb-2 border-b-2 border-[#07070736] py-5 text-[#1D1B20]">Ingredients</h2>
          <ul className="list-none mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className='flex items-center gap-3 text-[#A2A8BA] font-medium pb-1 pl-2'>
                <div className='size-6 bg-[#509E2F] p-2 mb-2 flex items-center rounded-full'>
                  <FaCheck className='text-white' />
                </div>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Recipe Image */}
        <div className="flex items-center justify-center md:order-2 order-1">
          <div className="w-full md:w-[90%] rounded-full overflow-hidden shadow-[8px_8px_15px_rgba(0,0,0,0.6)]">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
