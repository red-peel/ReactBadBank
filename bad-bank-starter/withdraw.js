function Withdraw() {
  const [show, setShow] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [withdrawalAmount, setWithdrawalAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  
  function validateWithdrawalAmount(input) {
    //change input to int
    let postParse = parseFloat(input);
    //check if number is number
    if (postParse === NaN || postParse === null || postParse === undefined) {
      setStatus('Error: Withdrawal amount must be a number');
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
    //set withdrawalAmount and show submit button
    setWithdrawalAmount(postParse);
    setShow(true)
  }
  


  function handleWithdrawalChange(amount) {
    //on change validate amount
    validateWithdrawalAmount(amount);
  }


  function takeWithdrawal(amount) {
    //first look through emails from "database" for current logged in user
    ctx.users.forEach(element => {
      if (element.email == ctx.current.username) {
        console.log("removing " + amount+" from " + element.email + " with current balance "+ ctx.current.workingBalance);
        //show amount withdrawn to user
        setStatus('Withdrawl of $' + amount + ' was taken from account');
        setTimeout(() => setStatus(''), 3000);
        //change balance in context
        element.balance -= amount;
        //change workingBalance
        ctx.current.workingBalance -= amount;
        console.log("new balance :" + element.balance+ " new ctx balace :" + ctx.current.workingBalance);
      }
    });
  }

  function handleWithdrawal() {
    //on submit runs takeWithdrawal 
    ctx.users.forEach(element => {
      if (element.email === ctx.current.username) {
        console.log("Database username and CTX username match!")
        console.log(withdrawalAmount)
        takeWithdrawal(withdrawalAmount);
      }
      
    });
  }




  return (
    <Card
      bgcolor="dark primary"
      header="Withdraw"
      status={status}
      body={(ctx.current.isLoggedIn)?(
        <>
          <h3>Account Total: {ctx.current.workingBalance}</h3>
          <br />
          <h4>Withdrawal Amount</h4>
          <input type="number" className="form-control" id="withdrawlAmount" placeholder="Enter Amount for Withdrawl" value={withdrawalAmount} onChange={e => handleWithdrawalChange(e.currentTarget.value)}/>
          <br />
          {(show)?(<button type="submit" className="btn btn-light" onClick={handleWithdrawal}>Confirm</button>):(<></>)}
        </>
      ):(<h1>Please log in to Withdraw.</h1>)
    }
    />
  )
}
