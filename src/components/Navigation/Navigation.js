import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
        return (
            <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p 
                    onClick = {()=>onRouteChange('signin')}
                    className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                </nav>
                
                {/* <strong className='f3 w-10 link dim black underline pa3 pointer' 
                style={{position: 'relative', left:'-500px', display:'inline-block', minWidth:'300px'}}>hi</strong>
                
                
                <a href='www.google.com' className='f3 w-10 link dim black underline pa3 pointer' 
                    style={{position:'relative',display:'inline-block'}}>Sign Out</a> */}
            </div>
        );
    }
    else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p 
                onClick = {()=>onRouteChange('signin')}
                className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p 
                onClick = {()=>onRouteChange('signup')}
                className='f3 link dim black underline pa3 pointer'>Sign Up</p>
            </nav>
        )
    }

}

export default Navigation;