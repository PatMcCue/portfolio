const {useEffect, useState} = React

function App() {
  const [staminokaBassData, setStaminokaBassData] = useState(null);

  useEffect(() => {
    const userInput = 
    const fetchStaminokaBass = async () => {
      try {
        const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/entry/{userInput}');
        const data = await response.json();
        setStaminokaBassData(data);
      } catch (error) {
        console.error('Error fetching staminoka bass data:', error);
      }
    };

    fetchStaminokaBass();
  }, []);

  if (!staminokaBassData) {
    return <div className="loading">Loading...</div>;
  }

  const formattedLocations = staminokaBassData.data.common_locations.join(', ');

  return (
    <div className="container">
      <h1 className="name">
  {staminokaBassData.data.name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')} 
      </h1>
      <div className="separator"></div>
      <div className="info">
        <div className="image-container">
          <img className="image" src={staminokaBassData.data.image} alt={staminokaBassData.data.name} />
        </div>
        <div className="stats-container">
          <p className="stat"><strong>Category:</strong> {staminokaBassData.data.category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
          <p className="stat"><strong>Common Locations:</strong> {formattedLocations}</p>
          <p className="stat"><strong>Description:</strong> {staminokaBassData.data.description}</p>
          <p className="stat"><strong>Edible:</strong> {staminokaBassData.data.edible ? '👍' : '☠️'}</p>
          <p className="stat"><strong>Cooking Effect:</strong> {staminokaBassData.data.cooking_effect}</p>
          <p className="stat"><strong>Hearts Recovered:</strong> {staminokaBassData.data.hearts_recovered}</p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
