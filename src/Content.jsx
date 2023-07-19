import { IngredientsIndex } from "./IngredientsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { IngredientsShow } from "./IngredientsShow";
import { IngredientsNew } from "./IngredientsNew";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesShow } from "./RecipesShow";

export function Content() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [isIngredientsShowVisible, setIsIngredientsShowVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [searchTerms, setSearchTerms] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get(`http://localhost:3000/ingredients.json`).then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  //create ingredients
  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };
  // Modal Handle close
  const handleClose = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
  };

  // pantry item search results
  const handleIndexRecipes = (ingredient) => {
    console.log("handleIndexRecipes");
    axios.get(`http://localhost:3000/recipes.json?searchTerm=${ingredient.name}`).then((response) => {
      setRecipes(response.data);
      console.log(response.data);
      navigate("/recipes");
    });
  };

  //need to work on!!!!!!!
  const handleShowRecipes = (recipe) => {
    console.log("handleShowRecipes");
    axios.get(`http://localhost:3000/recipes.json?id=${recipe.id}`).then((response) => {
      setRecipes(response.data);
      console.log(response.data);
      // navigate("/recipes/${recipe.title}");
    });
  };

  useEffect(handleIndexIngredients, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/your_pantry" element={<IngredientsNew onCreateIngredient={handleCreateIngredient} />} />
        <Route path="/" element={<IngredientsIndex ingredients={ingredients} onIndexRecipes={handleIndexRecipes} />} />
        <Route path="/recipes" element={<RecipesIndex recipes={recipes} onShowRecipes={handleShowRecipes} />} />
        {/* <Route path="/recipes/id" element={<RecipesShow recipe={currentRecipe} onShowRecipes={handleShowRecipes} />} /> */}
      </Routes>
      {/* <div>
        Search: <input type="text" value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} />
        <button onClick={handleIndexIngredients}>Search</button>
      </div> */}
      {/* <IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} /> */}
      {/* <Modal show={isIngredientsShowVisible} onClose={handleClose}>
        <IngredientsShow ingredient={currentIngredient} />
      </Modal> */}
    </div>
  );
}

{
  /* <Modal show={isIngredientsShowVisible} onClose={handleClose}>
  <IngredientsNew onCreateIngredient={handleCreateIngredient} />
</Modal>; */
}
