import { IngredientsIndex } from "./IngredientsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { IngredientsShow } from "./IngredientsShow";
import { IngredientsNew } from "./IngredientsNew";

export function Content() {
  const [ingredients, setIngredients] = useState([]);
  const [isIngredientsShowVisible, setIsIngredientsShowVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

  const handleIndexIngredients = () => {
    console.log("handleIndexIngredients");
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      console.log(response.data);
      setIngredients(response.data);
    });
  };

  const handleShowIngredient = (ingredient) => {
    console.log("handleShowIngredient", ingredient);
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleCreateIngredient = (params, successCallback) => {
    console.log("handleCreateIngredient", params);
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsIngredientsShowVisible(false);
  };

  useEffect(handleIndexIngredients, []);

  return (
    <div>
      <h1>The Pantry Purge!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <IngredientsNew onCreateIngredient={handleCreateIngredient} />
      <IngredientsIndex ingredients={ingredients} onShowIngredient={handleShowIngredient} />
      <Modal show={isIngredientsShowVisible} onClose={handleClose}>
        <IngredientsShow ingredient={currentIngredient} />
      </Modal>
    </div>
  );
}
