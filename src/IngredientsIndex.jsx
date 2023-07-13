export function IngredientsIndex(props) {
  return (
    <div>
      <h1>All Ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.name}</h2>
          <img src={ingredient.image_url} />
          <br></br>
          <button onClick={() => props.onShowIngredient(ingredient)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
