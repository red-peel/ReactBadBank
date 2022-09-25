function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [submitShow, setSubmitShow] = React.useState(false);
    const ctx = React.useContext(UserContext);
    if (ctx.current.password === ""){
        console.log("No password")
    }


    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            setSubmitShow(false);
            return false;
        }
        

        return true;
    }

    function handleLogin() {
        console.log(email, password);
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        setShow(false);
        ctx.current.username= email;
        ctx.current.password= password;
    }

    function handleLogout() {
        ctx.current.username = "Log In"
        ctx.current.password = ""
        setShow(true)
    }


    function submitCheck(value,) {
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
            body={show && (ctx.current.password == "")? (
                <>
                    Email address<br />
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => emailHandler(e.currentTarget.value)} /><br />
                    Password<br />
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => passwordHandler(e.currentTarget.value)} /><br />
                    {submitShow ? <button type="submit" className="btn btn-light" onClick={handleLogin}>Log In</button> : <a></a>}
                </>
            ) : (
                <>
                    <h5>Logged in as {ctx.current.username}</h5>
                    <button type="submit" className="btn btn-light" onClick={handleLogout}> Log Out</button>
                </>
            )}
        />
    )
}
