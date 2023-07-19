export function RecipesIndex(props) {
  return (
    <div className="row">
      {props.recipes?.map((recipe) => (
        <div className="col-sm-6" key={recipe.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <img src={recipe.image} className="card-img-top" alt={recipe.image}></img>
              {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              <button onClick={() => props.onShowRecipes(ingredient)} className="btn btn-primary">
                View Recipe
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
