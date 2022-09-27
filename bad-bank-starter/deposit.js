function Deposit() {
  const [show, setShow] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [depositAmount, setDepositAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  
  function validateDepositAmount(input) {
    //change input to int
    let postParse = parseFloat(input);
    //check if number is number
    if (postParse === NaN || postParse === null || postParse === undefined) {
      setStatus('Error: Deposit amount must be a number');
      setTimeout(() => setStatus(''), 3000);
      setShow(false);
      return;
    }
    //check if number is positive
    if (postParse <= 0){
      setStatus('Error: Deposit amount must be a positive number');
      setTimeout(() => setStatus(''), 3000);
      setShow(false)
      return;
    }
    //set depositAmount and show submit button
    setDepositAmount(postParse);
    setShow(true)
  }
  
  function handleDepositChange(amount) {
    //on change validate amount
    validateDepositAmount(amount);
  }

  function addDeposit(amount) {
    ctx.users.forEach(element => {
      //first look through emails from "database" for current logged in user
      if (element.email == ctx.current.username) {
        console.log("adding " + amount+" to " + element.email + " with current balance "+ ctx.current.workingBalance);
        //show amount deposited to user
        setStatus('Deposit of $' + amount + ' was added to account');
        setTimeout(() => setStatus(''), 3000);
        //change balance in context
        element.balance += amount;
        //change workingBalance
        ctx.current.workingBalance += amount;
        console.log("new balance :" + element.balance+ " new ctx balace :" + ctx.current.workingBalance);
      }
    });
  }

  function handleDeposit() {
    //on submit runs handleDeposit 
    ctx.users.forEach(element => {
      if (element.email === ctx.current.username) {
        console.log("Database username and CTX username match!")
        console.log("requested deposit amount:" + depositAmount)
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
          <h3>Account Total: {ctx.current.workingBalance}</h3>
          <br />
          <h4>Deposit Amount</h4>
          <input type="number" className="form-control" id="depositAmount" placeholder="Enter Amount for Deposit" value={depositAmount} onChange={e => handleDepositChange(e.currentTarget.value)}/>
          <br />
          {(show)?(<button type="submit" className="btn btn-light" onClick={handleDeposit}>Confirm</button>):(<></>)}
        </>
      ):(<h1>Please log in to deposit.</h1>)
    }
    />
  )
}
