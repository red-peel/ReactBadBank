function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [submitShow, setSubmitShow] = React.useState(false);
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  
  // TODO: Make submit check only true when all fields are valid
  // NOTE FOR TODO: use the nameOnChange, emailOnChange and passwordOnChange functions to complete TODO.
  function submitCheck(value, ){
    if (value == undefined || value == null || value == ""){
      setSubmitShow(false);
    }
    else{
      setSubmitShow(true);
    }
  }

  function nameHandler(value){
    setName(value);
    submitCheck(value);
  }
  function emailHandler(value){
    setEmail(value);
    submitCheck(value);
  }
  function passwordHandler(value){
    setPassword(value);
    submitCheck(value);
  }

  return (
    <Card
      bgcolor="dark primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => nameHandler(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => emailHandler(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => passwordHandler(e.currentTarget.value)}/><br/>
              {submitShow? <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>: <a></a>}
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}