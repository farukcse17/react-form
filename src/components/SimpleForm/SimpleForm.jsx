
const SimpleForm = () =>{
    const handelSubmit = e =>{
        e.preventDefault();
        console.log('form submited');
        console.log(e)
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }
    return(
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name="name" placeholder="your name"/><br />
                <input type="email" name="email" placeholder="your email"/><br />
                <input type="password" name="password" placeholder="your password"/><br />
                <input type="Submit" name="submit" value="Submit" />
            </form>
        </div>
    )
}
export default SimpleForm;