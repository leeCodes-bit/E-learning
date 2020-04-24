import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import '../assets/css/Home.css'

function Home(){

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [url, setUrl] = useState("");


    const handleStudentSignIn = (response)=> {
        // setName(response.profileObj.name);
        // setEmail(response.profileObj.email);
        // setUrl(response.profileObj.imageUrl);
    console.log(response);
    
    };
    const handleTutorSignIn = (response)=> {
        // setName(response.profileObj.name);
        // setEmail(response.profileObj.email);
        // setUrl(response.profileObj.imageUrl);
    console.log(response)
    };
    return (
        <div className= "homepage">
        <div className= "container">
            {/* <h1>Login with google</h1>
        <h2>Welcome: {name}</h2>
        <h2>Email: {email}</h2>
        <img src={url} alt={name} /> */}

         <GoogleLogin
    clientId="766428043466-ifj8386gd3p01nlc3p7pc1t14uvvti2j.apps.googleusercontent.com"
    buttonText="Signup as a Student"
    onSuccess={handleStudentSignIn}
    onFailure={handleStudentSignIn}
    cookiePolicy={'single_host_origin'}
  />,
  <GoogleLogin
    clientId="766428043466-ifj8386gd3p01nlc3p7pc1t14uvvti2j.apps.googleusercontent.com"
    buttonText="Signup as an Instructor"
    onSuccess={handleTutorSignIn}
    onFailure={handleTutorSignIn}
    cookiePolicy={'single_host_origin'}
  />,
            {/* <button>Signup as a Student</button> */}
            {/* <button>Signup as an Instructor</button> */}
        </div>
        
        </div>
    )
}


export default Home;