import React, { useState, useEffect } from 'react';
import Student from './Student';
import GoogleLogin from 'react-google-login';
import '../assets/css/Home.css'
import { Redirect } from 'react-router-dom';

function Home(props) {

    const [userData, setData] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

    }, [userData, loggedIn])

    const handleStudentSignIn = (response) => {

        if (response && !response.error) {
            setData(response.profileObj);
            setLoggedIn(true);
           
        }

    };


    const handleStudentSignOut = (response) => {

       setLoggedIn(false);
       setData(null);
    }

    return (
        <div className="homepage">
            <div className="home-container">
            <div className="home-body"></div>
            <h3 style ={{color: "#fff", marginTop: "-20px"}}> Welcome to your VGG-Udemy-Clone profile page</h3>
            { !loggedIn ? 
                <GoogleLogin className="login"
                    clientId="766428043466-ifj8386gd3p01nlc3p7pc1t14uvvti2j.apps.googleusercontent.com"
                    buttonText="Signup as a Student"
                    onSuccess={handleStudentSignIn}
                    onFailure={handleStudentSignIn}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'} />
                    : null 
            }
            </div>

<Student 
loggedIn={loggedIn}
  logout={handleStudentSignOut}
    imageUrl={userData ? userData.imageUrl : null}
    name={userData ? userData.name : null}
    email={userData ? userData.email : null}
/>
        </div>
    )
}


export default Home;