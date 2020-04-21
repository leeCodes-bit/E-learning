import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
function Button(){

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [url, setUrl] = useState("");


    const responseGoogle = (response)=> {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);

    };
    return (
        <div>

        {/* <h1>Login with google</h1>
        <h2>Welcome: {name}</h2>
        <h2>Email: {email}</h2>
        <img src={url} alt={name} /> */}

         <GoogleLogin
    clientId="766428043466-ifj8386gd3p01nlc3p7pc1t14uvvti2j.apps.googleusercontent.com"
    buttonText="Signup as a Student"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  <GoogleLogin
    clientId="766428043466-ifj8386gd3p01nlc3p7pc1t14uvvti2j.apps.googleusercontent.com"
    buttonText="Signup as an Instructor"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
            {/* <button>Signup as a Student</button> */}
            {/* <button>Signup as an Instructor</button> */}
        </div>
    )
}


export default Button