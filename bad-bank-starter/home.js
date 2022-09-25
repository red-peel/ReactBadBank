function Home(){
  return (
    <Card
      bgcolor="dark"
      header="Home"
      title="Welcome to The Baddest Bank"
      text="Please add a new account or select withdraw or deposit"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
