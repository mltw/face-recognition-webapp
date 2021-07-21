import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
        return (
            <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link 
                        to = "/"
                        onClick = {()=>onRouteChange('signin')}
                        className='f3 link dim black underline pa3 pointer'>Sign Out</Link>
                </nav>
            </div>
        );
    }
    else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Link 
                    to="/"
                    onClick = {()=>onRouteChange('signin')}
                    className='f3 link dim black underline pa3 pointer'>Sign In</Link>
                <Link 
                    to="/signup"
                    onClick = {()=>onRouteChange('signup')}
                    className='f3 link dim black underline pa3 pointer'>Sign Up</Link>
            </nav>
        )
    }

}

export default Navigation;