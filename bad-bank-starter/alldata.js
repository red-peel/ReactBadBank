function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <Card
            bgcolor="dark primary"
            header="Current User"
            status={"Password: " + ctx.current.password}
            body={"Username: "+ctx.current.username}
        />
    <Card
    
            bgcolor="dark primary"
            header="All Data in Storage"
            status=""
            body={<Card
              bgcolor="card text-white bg-danger mb-3"
              header="All Data in Storage"
              status=""
              body={JSON.stringify(ctx.users)}
          />}
        />
      </div>
  );
}
