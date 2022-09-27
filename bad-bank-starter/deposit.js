function Deposit() {
  const [show, setShow] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [depositAmount, setDepositAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  /* ctx.users.forEach(element => {
    if (ctx.users[element].username == ctx.current.email) {
      
    }
  }); */
  
  function validateDepositAmount(input) {
    let postParse = parseFloat(input);
    /* TODO: add logic to validate depositAmount by using input parameter
    if not a number, hide the submit button */
    if (postParse === NaN){
      setStatus('Error: Deposit amount must be a number');
      return;
    }
    if (postParse < 0){
      setStatus('Error: Deposit amount must be a positive number');
      return;
    }
    setDepositAmount(postParse);
  }
  
  function handleDepositChange(amount) {
    validateDepositAmount(amount);
  }

  function addDeposit(amount) {
    ctx.users.forEach(element => {
      if (element.username == ctx.current.email) {
        console.log("added amount")
        element.balance += amount;
      }
    });
  }

  function handleDeposit() {
    /* depositAmount is handled here. first verify that depositAmount is valid, 
    then add depositAmount to ctx.users.balance of ctx.current.username */
    ctx.users.forEach(element => {
      if (element.email === ctx.current.username) {
        console.log("Database username and CTX username match!")
        console.log(depositAmount)
        addDeposit(depositAmount);
      }
      
    });
  }




  return (
    <Card
      bgcolor="dark primary"
      header="Deposit"
      status={status}
      body={(ctx.current.isLoggedIn)?(
        <>
          <h3>Account Total: </h3>
          <br />
          <h4>Deposit Amount</h4>
          <input type="number" className="form-control" id="depositAmount" placeholder="Enter Amount for Deposit" value={depositAmount} onChange={e => handleDepositChange(e.currentTarget.value)}/>
          <br />
          <button type="submit" className="btn btn-light" onClick={handleDeposit}>Confirm</button>
        </>
      ):(<h1>Please log in to deposit.</h1>)
    }
    />
  )
}
