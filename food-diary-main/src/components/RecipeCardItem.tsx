
import React from 'react';
import { Link } from 'react-router-dom';
import { CiStopwatch } from "react-icons/ci";

interface Recipe {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
  reviewCount: number;
  rating: number;
  mealType: string[];
}

const RecipeCardItem: React.FC<{ recipe: Recipe }> = React.memo(({ recipe }) => (
  <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
    <div className="overflow-hidden transform transition-transform hover:scale-105 duration-300 cursor-pointer">
        <div className='relative'>
        <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />
        <h2 className=" font-bold text-white lg:text-2xl md: text-xl sm:text-sm  shadow-md absolute bottom-0 mb-4  font-montez left-1/2 transform -translate-x-1/2">{recipe.name}</h2>
        </div>
      
      <div>
        <div className="flex justify-between items-center h-20">
          <h2 className="text-lg font-medium text-black font-montserrat w-[60%]">{recipe.name}</h2>
          <p className="text-sm px-2 py-1 font-montserrat bg-primary">Reviews: {recipe.reviewCount}</p>
        </div>
        <div className="flex justify-between items-center text-black font-medium">
          <p className="text-sm flex items-center gap-2">
            <CiStopwatch className='text-xl' /> {recipe.prepTimeMinutes} minutes
          </p>
          <p className="text-sm">{recipe.mealType.join(', ')}</p>
        </div>
        <div className="flex justify-end mt-2">
          <p className="text-yellow-500 text-sm font-semibold">{recipe.rating} ⭐</p>
        </div>
      </div>
    </div>
  </Link>
));

export default RecipeCardItem;
