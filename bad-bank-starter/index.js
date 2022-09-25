function SPA() {
  return (
    <HashRouter>
      <UserContext.Provider value={{
        users:[{name:'Elias',email:'eg@eliasgonzalez.com',password:'owowhatsthis',balance:9999999}],
        current:{username:"eg@eliasgonzalez.com",password:"owowhatsthis"}
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
