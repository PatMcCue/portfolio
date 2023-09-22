function SignUp(){
    const [values, handleChange] = useForm({year:'',name:'',email:'',password:'',checkbox:false});
    const [errors, setError] = React.useState({nameError:'', emailError:'', passwordError:''});
    
    function validate() {
        if (!values.name) {
            setError({...errors, nameError: 'Please enter your name'})
        } else {
            setError({...errors, nameError: ''})
        }
        if(!values.email) {
            setError({...errors, emailError: 'Please enter a valid email'})
        } else {
            setError({...errors, emailError: ''})
        }
    }   


    function handle(){
        validate();
    }
    console.log('hello');

    return (
        <>
        <div>Name</div>
        <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Enter name"/>
        <div style={{color:'red'}}>{errors.nameError}</div>
        <div>Email</div>
        <input type="text" name="email" value={values.email} onChange={handleChange} placeholder="Enter email"/>
        <div style={{color:'red'}}>{errors.emailError}</div>
        <div>Password</div>
        <input type="text" name="password" value={values.password} onChange={handleChange} placeholder="Enter password"/>  
        <div style={{color:'red'}}>{errors.passwordError}</div>
        <div><input type="checkbox" name="checkbox" value={values.checkbox} onChange={handleChange}/> 
            Remember me
        </div>
        <button onClick={handle}>Submit</button>    
        </>
    );
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)