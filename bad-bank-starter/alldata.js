function AllData(){
  const ctx = React.useContext(UserContext);

  function UserData(){
    const cards = [];
    for (let i = 0; i < ctx.users.length; i++) {

        cards.push(<Card
          key={i}
          bgcolor="card text-white bg-danger mb-3"
          header={"Name: " + ctx.users[i].name}
          body={
            "Email: " + ctx.users[i].email + 
            " Password: " + ctx.users[i].password +
            " Balance: " + ctx.users[i].balance}
        />);
    }
    return cards;
  }





  return (
    <div>
      <Card
            bgcolor="dark primary"
            header="Current User"
            status={"Password: " + ctx.current.password}
            body={"Username: "+ctx.current.username}
        />
        
   <Card
              bgcolor="card text-white bg-dark mb-3"
              header="All Data in Storage"
              status=""
              body={<UserData/>}
            />
      </div>
  );
}
