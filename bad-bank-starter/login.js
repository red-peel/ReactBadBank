function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [submitShow, setSubmitShow] = React.useState(false);
    const ctx = React.useContext(UserContext);
    /* if (ctx.current.password === ""){
        console.log("Current User has no password")
    } */
    /* Use valiadte to check wether input is a user */
    function validate(field, label) {
        let isUserAuthenticated = false;
        let isPasswordAuthenticated = false;
        let isEmailAuthenticated = false;
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            setSubmitShow(false);
            return false;
        }
        ctx.users.forEach(element => {
            if (element.email == email){
                isPasswordAuthenticated = true;
            }
        });
        ctx.users.forEach(element => {
            if (element.password == password){
                isEmailAuthenticated = true;
            } 
        });
        isUserAuthenticated = isEmailAuthenticated && isPasswordAuthenticated;
        if (!isUserAuthenticated){setStatus("Username or password incorrect")}
        console.log("login is "+ isUserAuthenticated)
        return isUserAuthenticated;
    }

    function handleLogin() {
        console.log("logged in " + email + " with password " + password);
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        setShow(false);
        ctx.current.username= email;
        ctx.current.password= password;
        ctx.users.forEach(element => {
            if (element.email == email){
                ctx.current.workingBalance = element.balance;
            }
        });
        ctx.current.isLoggedIn= true;
    }


    function handleLogout() {
        ctx.current.username = "Log In"
        ctx.current.password = ""
        setShow(true)
        ctx.current.isLoggedIn=false
    }

    function submitCheck(value) {
        if (value == undefined || value == null || value == "") {
            setSubmitShow(false);
        }
        else {
            setSubmitShow(true);
        }
    }

    function emailHandler(value) {
        setEmail(value);
        submitCheck(value);
    }
    function passwordHandler(value) {
        setPassword(value);
        submitCheck(value);
    }

    return (
        <Card
            bgcolor="dark primary"
            header="Log In"
            status={status}
            body={show && !(ctx.current.isLoggedIn)? (
                <>
                    Email address<br />
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => emailHandler(e.currentTarget.value)} /><br />
                    Password<br />
                    <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => passwordHandler(e.currentTarget.value)} /><br />
                    {submitShow ? <button type="submit" className="btn btn-light" onClick={handleLogin}>Log In</button> : <a></a>}
                </>
            ) : (
                <>
                    <h5>Logged in as {ctx.current.username}</h5>
                    
                    <button type="submit" className="btn btn-light" onClick={handleLogout}> Log Out </button>
                    <br></br>
                    <a> Once logout is clicked please change tabs and return to refresh logout.</a>
                </>
            )}
        />
    )
}
