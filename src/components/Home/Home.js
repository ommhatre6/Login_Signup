import React from 'react';
import  { Link } from 'react-router-dom';
function Home(props){
    return(
        <div>
            <div>
                <h1>
                    <Link to ='/login'>Login</Link>
                </h1>
                <hr />
                <h1>
                    <Link to= '/signup'>signup</Link>
                </h1>
            </div>

            <br />
            <br />
            <br />
            <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
            
        </div>
    )
}
export default Home;