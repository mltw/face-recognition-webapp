import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Rank from './components/Rank/Rank';
import React, { Component } from 'react'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

// const particlesOptions2 = {
//   "particles": {
//     "number": {
//         "value": 70
//     },
//     "size": {
//         "value": 3
//     }
// },
// "interactivity": {
//     "events": {
//         "onhover": {
//             "enable": true,
//             "mode": "repulse"
//         }
//     }
// }
// }

const particlesOptions = {
  particles: {
    number: {
      value:100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      enable_auto : true
    }
  },
  interactivity: {
    detect_on: "window", // to get the bg interactivity working for whole page
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "push"
      }
    }
  }
}

const app = new Clarifai.App({

  apiKey: '80c651d49be14de7a377c3c6cb2be716'

});

class App extends Component {
  constructor(){
    super();
    this.state = {
      'input' : '',
      'imageURL' : '',
      'box' : [],
      'route':'signin',
      'isSignedIn': false
    }
  }

  calculateFaceLocation = (data) => {
    // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const clarifaiFace = data.region_info.bounding_box;
    const img = document.getElementById("inputimage");
    const width = Number(img.width);
    const height = Number(img.height);
    console.log( width, height);
    return {
      leftColn: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightColn: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (newbox) => {
    // this.setState({ myArray: [...this.state.myArray, 'new value'] })
    this.setState({box: [...this.state.box , newbox]});
    // console.log(this.state.box)
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
    this.setState({box:[]})
  }

  onSubmit = () => {
    console.log('submit');
    this.setState({imageURL:this.state.input});
    console.log(this.state.imageURL)
    app.models
        .predict(
          //https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js for more models
          // Clarifai.COLOR_MODEL,
          Clarifai.FACE_DETECT_MODEL,
          this.state.input) //here cannot this.state.imageURL, due to the way setState works (async stuff)
                           // https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8803520#content

        .then(response => {
          // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          console.log(response.outputs[0].data.regions);
          response.outputs[0].data.regions.forEach(element => {
            const box = this.calculateFaceLocation(element);
            this.displayFaceBox(box);
          });
          // const box = this.calculateFaceLocation(response);
          // this.displayFaceBox(box);
        },

        function(err){
          console.log(err);
        }

      );

    }

  onRouteChange = (route) => {
    if (route === 'signin'){
      this.setState({isSignedIn: false})
    }
    else if (route === 'home'){
      this.setState({isSignedIn : true})
    }
    this.setState({route: route})
  }

  render(){
  return (
    <div className="App">
      <Particles 
        className = 'particles'
        params = {particlesOptions}
        />
      <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange} />
      {this.state.route === 'home' ? 
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange = {this.onInputChange} 
                        onSubmit = {this.onSubmit}/>
          <FaceRecognition box = {this.state.box} imageURL = {this.state.imageURL}/>
        </div>
        : (
        (this.state.route === 'signup') ?
        <SignUp onRouteChange = {this.onRouteChange}> </SignUp> :
        <SignIn onRouteChange = {this.onRouteChange}/> 
        )
  }
    </div>
  );
  }
}

export default App;
