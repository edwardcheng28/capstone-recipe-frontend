export function IngredientsIndex(props) {
  return (
    <div>
      {/* <h1>All Ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.title}</h2>
          <img src={ingredient.image} />
          <br></br>
          <button onClick={() => props.onShowIngredient(ingredient)}>More Info</button>
        </div>
      ))} */}
      <br />
      <h1>Top Search Ingredients</h1>
      <br />
      <div className="row">
        {props.ingredients?.map((ingredient) => (
          <div className="col-sm-3" key={ingredient.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ingredient.name}</h5>
                <img src={ingredient.image_url} className="card-img-top" alt={ingredient.image_url}></img>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <button onClick={() => props.onIndexRecipes(ingredient)} className="btn btn-primary">
                  Search {ingredient.name} Recipe's
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
