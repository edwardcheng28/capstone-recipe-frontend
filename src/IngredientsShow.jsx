export function IngredientsShow(props) {
  return (
    <div>
      <h1>Ingredient Information</h1>
      <p>Name: {props.ingredient.title}</p>
      <p>Ingredients: {props.ingredient.missedIngredients[0].original}</p>
    </div>
  );
}
