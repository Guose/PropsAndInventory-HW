import Hats from './program/Hats';
import Jackets from './program/Jackets'
import FunctionalShoes from './program/Shoes';
import FunctionalSuits from './program/Suits';

function App() {
  return (
    <div className="App">
      <Hats description="Baseball Cap" currentCount={2} idealCount={20} />
      <Jackets description="Wool" currentCount={2} idealCount={20} />
      <FunctionalShoes description="Tennis" currentCount={2} idealCount={20} />
      <FunctionalSuits description="3 piece" currentCount={2} idealCount={20} />
    </div>
  );
}

export default App;
