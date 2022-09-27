function SPA() {
  return (
    <HashRouter>
      <UserContext.Provider value={{
        users:[{name:'Elias',email:'eg',password:'as',balance:100}],
        current:{username:" Log In ",password:"", isLoggedIn:false, workingBalance:null}
        }}>
        <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>

      </UserContext.Provider>
      <Footer/>      
    </HashRouter>
  );
}

ReactDOM.render(
  <SPA/>,
  document.getElementById('root')
);
