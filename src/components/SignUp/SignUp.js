import React from 'react'

const SignUp = ({onRouteChange}) => {
    return (
    //    <div>
        <article className="br3 ba dark-gray bg-lightest-blue b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
           <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlfor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"></input>
                        </div>
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
                        <input 
                            onClick = { () => onRouteChange('home')} // use arrow functions here as we dw it to run immediately, rather only run during onClick
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign Up">
                        </input>
                    </div>
                </div>
            </main>
        </article>
    //    </div>
    );
}

export default SignUp;