import { useEffect, useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";


const Recipes = ({ addRecipeQueue }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } , [])

    // console.log(recipes);

    return (
        <div className="md:w-2/3 mb-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {
                recipes.map(recipe =>
<div key={recipe.recipe_id} className="flex flex-col items-center bg-base-100 border rounded-lg pt-8">
  <figure>
    <img
      className="h-56 w-80 rounded-2xl"
      src={recipe.recipe_image}
      alt={recipe.recipe_name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#282828] text-xl font-semibold">{recipe.recipe_name}</h2>
    <p className="text-[#878787] text-base font-normal">{recipe.short_description}</p>
    <hr className="my-2" />
    <h3 className="text-[#282828] text-lg font-medium">Ingredients : {recipe.ingredients.length}</h3>
    <ul className="ml-8 my-1">
        {
            recipe.ingredients.map((item, idx) => (
                <li className="list-disc text-[#878787] text-lg font-normal" key={idx}>{item}</li>
            ))
        }
    </ul>
    <hr className="my-2" />
    <div className="flex text-[#282828cc] text-base font-normal">
    <p className="flex items-center gap-3"><CiStopwatch></CiStopwatch> {recipe.preparing_time}</p>
    <p className="flex items-center gap-3"><FaFire></FaFire> {recipe.calories}</p>
    </div>

    <button onClick={() => addRecipeQueue(recipe)} className="btn bg-[#0BE58A] py-2 text-black text-lg font-medium rounded-[50px] mt-3">Want to Cook</button>

  </div>
</div>
)
}

    </div>
        </div>
    );
};

export default Recipes;