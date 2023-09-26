function Spa() {
  return (
    <>
      <div className="header-section">
        <a className="nav-link" href="/">
          <img src="./mountainlogo.jpeg" className="bank-logo"></img>
        </a>
        <h1 className="bank-name">
          <a className="nav-link" href="/">
            Rocky Mountain Bank
          </a>
        </h1>
      </div>
      <div className="header-divider"></div>

      <HashRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
              {
                name: "tom",
                email: "tom@mit.edu",
                password: "secret",
                balance: 100,
              },
              {
                name: "sandy",
                email: "sandy@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "40px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/balance/" component={Balance} /> */}
            <Route path="/alldata/" component={AllData} />
            <Route path="/login/" component={Login} />
          </div>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
