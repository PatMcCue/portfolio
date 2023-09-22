function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store user's search term
  const [staminokaBassData, setStaminokaBassData] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm) {
      return; // Don't make the API call if search term is empty
    }

    try {
      const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${searchTerm}`);
      const data = await response.json();
      setStaminokaBassData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleSearch(); // Perform the initial search when the component mounts
  }, []);

  return (
    <div className="gradient-border">
      <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a search term"
        />
        <button onClick={handleSearch}>Search</button>
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
          {staminokaBassData.data.category && (
            <p className="stat">
            <strong>Category:</strong>{" "}
            {staminokaBassData.data.category
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
            </p>
          )}
          {staminokaBassData.data.common_locations && (
            <p className="stat">
            <strong>Common Locations:</strong>{" "}
            {staminokaBassData.data.common_locations?.join(', ')}
            </p>
          )}
          {staminokaBassData.data.description && (
            <p className="stat">
            <strong>Description:</strong>{" "} 
            {staminokaBassData.data.description}
            </p>
          )}
          {typeof staminokaBassData.data.edible !== "undefined" && (
            <p className="stat">
            <strong>Edible:</strong>{" "}
            {staminokaBassData.data.edible ? "👍" : "☠️"}
            </p>
          )}
          {staminokaBassData.data.cooking_effect && (
            <p className="stat">
            <strong>Cooking Effect:</strong>{" "}
            {staminokaBassData.data.cooking_effect}
            </p>
          )}
          {staminokaBassData.data.fuse_attack_power && (
            <p className="stat">
            <strong>Fuse Attack Power:</strong>{" "}
            {staminokaBassData.data.fuse_attack_power}
            </p>
          )}
          {staminokaBassData.data.hearts_recovered !== null && staminokaBassData.data.hearts_recovered !== undefined && (
            <p className="stat">
            <strong>Hearts Recovered:</strong>{" "}
            {staminokaBassData.data.hearts_recovered}
            </p>
          )}

          {staminokaBassData.data.drops && (
            <p className="stat">
            <strong>Drops:</strong>{" "}
            {staminokaBassData.data.drops?.join(', ')}
            </p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
