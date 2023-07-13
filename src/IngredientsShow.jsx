export function IngredientsShow(props) {
  return (
    <div>
      <h1>Ingredient Information</h1>
      <p>Name: {props.ingredient.name}</p>
      <p>Image_Url: {props.ingredient.image_url}</p>
    </div>
  );
}
