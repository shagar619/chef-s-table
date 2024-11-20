

const Sidebar = ({ recipeQueue, handleRemove, prepareRecipe, calculateTimeAndCalorie, totalTime, totalCalorie }) => {



    console.log(recipeQueue);

    return (
        <div className="md:w-1/3 border rounded-lg text-gray-600 p-6 bg-base-100">
            {/* want to cook table */}

            <div className="overflow-x-auto">
                <h2 className="text-center text-[#282828] text-2xl font-semibold border-b-2 mb-3 p-2">Want to Cook : {recipeQueue.length}</h2>

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

     {
        recipeQueue.map((recipe, idx) => (
            <tr key={idx} className="hover">
            <th>{idx + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>
            <td>
            <button onClick={() => 
            {
              handleRemove(recipe.recipe_id);
              calculateTimeAndCalorie(recipe.preparing_time, recipe.calories) 
            }
              } className="bg-[#0BE58A] p1-2 px-2 text-black text-base font-medium rounded-[50px]">Preparing</button>
            </td>

          </tr>
        ))
     }


    </tbody>
  </table>
</div>


            {/* currently cooking table */}

            <div className="overflow-x-auto mt-8">
                <h2 className="text-center text-[#282828] text-2xl font-semibold border-b-2 mb-3 p-2">Currently Cooking : {prepareRecipe.length}</h2>

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>

     {
        prepareRecipe.map((recipe, idx) => (
            <tr key={idx} className="hover">
            <th>{idx + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>

          </tr>
        ))
     }
  <tr>
     <th></th>
      <td></td>
      <td>Total Time : {totalTime} min</td>
      <td>Total Calories : {totalCalorie} calories</td>
  </tr>


    </tbody>
  </table>
</div>



        </div>
    );
};

export default Sidebar;