import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = ({onRouteChange}) => {
    return (
        <article className="br3 ba dark-gray bg-lightest-blue b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
           <main className="pa4 black-80">
           {/* ori is <form className="measure">, but if form will auto submit, here since we're creating our own servers, we'll just use div */}
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                        </div>
                    </fieldset>
                    <div className="">
                        {/* <input 
                            onClick = { () => onRouteChange('home')} // use arrow functions here as we dw it to run immediately, rather only run during onClick
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in">
                        </input> */}
                        <Link
                            onClick = { () => onRouteChange('home')}
                            className="b ph3 pv2 no-underline input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            to = "/main">
                                Sign in 
                        </Link>
                    </div>
                    <div className="lh-copy mt3">
                        {/* <p onClick = {()=>{onRouteChange('signup')}}href="#0" className="f6 link dim black db pointer">Sign up</p> */}
                        <Link 
                            className="f6 link dim black db pointer no-underline" 
                            onClick = {()=>{onRouteChange('signup')}} 
                            to="/signup">
                                Sign Up
                        </Link>
                        {console.log("signup")}
                    </div>
                </div>
            </main>
        </article>
    );
}

export default SignIn;