const Square = ({ id, player, newState }) => {
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  const xorO = ["X", "O"];


  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];

  //Keep track of the state of the square in component lifecycle
  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  });
  
  return (
    <button 
      onClick={e => {
        let col = getRandomColor();
        setColor(col);
        let nextPlayer = newState({id});
        setStatus(nextPlayer);
        e.target.style.background = col;
    }}
    >
      <h1>{xOrO[status]}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1); //State of whose turn it is
  const [state, setState] = React.useState(Array(9).fill(null)); //Keep track of state of the game as a whole
  let status = `Player ${player}`;
  let winner = checkWinner(state);
  if(winner != null) status = `Player ${winner} wins!`

  const newState = (idOfSquare) => {
    let thePlayer = player;
    state[idOfSquare] = player; //player is the present player
    setState([state]); //state of array of 0, 1, or null
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    console.log(`adding state ${JSON.stringify(ob)}`);
    status = `Player ${nextPlayer}`;
    return thePlayer; //return the present player
  }
  // const toggle = () => {
  //   setMounted(!mounted);
  // }
  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }

  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer(player === 1 ? 2 : 1);
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
      <button onClick={toggle}>Show/Hide Row</button>
        <h1>Your turn, {status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
