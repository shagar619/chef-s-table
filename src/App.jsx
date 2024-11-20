import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";


const App = () => {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const [prepareRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalorie, setTotalCalorie] = useState(0);

  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe =>previousRecipe.recipe_id === recipe.recipe_id)

    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    } else{
      alert('Recipe already exists in the queue.');
    }   
  }

  // console.log(recipeQueue);

  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);

    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...prepareRecipe, deletedRecipe]);
  }


  const calculateTimeAndCalorie = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalorie(totalCalorie + calorie);
  }

  return (
    <div className="w-11/12 mx-auto pt-10">

          {/* Header part */}

          <Header></Header>


          {/* Banner part */}

          <Banner></Banner>


          {/* Our Recipes part */}

          <OurRecipes></OurRecipes>

          {/* Recipes card part */}

          <section className="flex flex-col md:flex-row gap-6 mt-12">

               {/* Card section */}

               <Recipes addRecipeQueue={addRecipeQueue}></Recipes>

               {/* sidebar */}

               <Sidebar 
               prepareRecipe={prepareRecipe} 
               handleRemove={handleRemove} 
               recipeQueue={recipeQueue}
               calculateTimeAndCalorie={calculateTimeAndCalorie}
               totalTime={totalTime}
               totalCalorie={totalCalorie}
               ></Sidebar>

          </section>

          <Footer></Footer>
      
    </div>
  );
};

export default App;