function Deposit() {
  const [show, setShow] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [depositAmount, setEmail] = React.useState('');
  const ctx = React.useContext(UserContext);


  function handleDeposit() {
    /* depositAmount is handled here. first verify that depositAmount is valid, 
    then add depositAmount to ctx.users.balance of ctx.current.username */
  }




  return (
    <Card
      bgcolor="dark primary"
      header="Deposit"
      status={status}
      body={(ctx.current.isLoggedIn)?(
        <>
          <h3>Account Total: 123456</h3>
          <br />
          <h4>Deposit Amount</h4>
          <input type="input" className="form-control" id="deposit" placeholder="Enter Amount for Deposit" value={depositAmount} />
          <br />
          <button type="submit" className="btn btn-light" onClick={handleDeposit}>Confirm</button>
        </>
      ):(<h1>Please log in to deposit.</h1>)
    }
    />
  )
}
