import { Content } from "./Contentsrc/Content.jsx";

export function Home() {
  return (
    <div>
      Search: <input type="text" value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} />
      <button onClick={handleIndexIngredients}>Search</button>
    </div>
  );
}
